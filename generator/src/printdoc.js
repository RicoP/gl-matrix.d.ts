var glm = require("./gl-matrix/dist/gl-matrix.js")
var parser = require("./parse-js.js")

function white(n) {
	return Array(n+1).join("\t")
}

function stringify(obj, indent) {
	var strings = [];

	for(var k in obj) {
		if(obj.hasOwnProperty(k)) {
			var o = obj[k];
			if(typeof o === "function") {
				if(o.toString().indexOf("[native code]") !== -1) {
					//make sure we don't parse anything odd.
					continue;
				}
				else {
					strings.push(
						printFunctionBody(k, o)
					);
				}
			}
			else {
				strings.push(
					printModule(k, o, indent+1)
				);
			}
		}
	}

	var w = white(indent);

	return w + strings.join("\n" + w) + "\n";
}

function guessParamType(name, funcname) {
	switch(name) {
		case "m00": case "m01": case "m02": case "m03":
		case "m10": case "m11": case "m12": case "m13":
		case "m20": case "m21": case "m22": case "m23":
		case "m30": case "m31": case "m32": case "m33":
		case "top": case "bottom": case "left":
		case "near": case "far": case "znear":
		case "angle": case "fovy":
		case "aspect": case "number":
		case "x": case "y": case "z": case "w":
		case "scalar": case "lerp": case "slerp":
		case "val":
		return "number";

		case "mat": case "mat1": case "mat2":
		case "matrix": case "matA": case "matB":
		case "dest" : case "src":
		case "a": case "b":
		case "vec": case "vector":
		case "vec1": case "vec2":
		case "vecA": case "vecB":
		case "up": case "center": case "eye":
		case "axis": case "quat":
		case "view": case "proj":
		case "viewport":
		return "Float32Array";

		case "right":
		return funcname === 'fromAxes' ? 'Float32Array' : 'number';

		default:
		return "any";
	}
}

function guessParamIsOptional(name) {
	switch(name) {
		case "dest":
		case "src":
		return true;

		default:
		return false;
	}
}

function guessFuncReturnType(name) {
	switch(name) {
		case "str":
		return "string";

		case "equal":
		return "boolean";

		case "length":
		case "squaredLength":
		case "dot":
		case "dist":
		case "determinant":
		return "number";

		default:
		return "Float32Array";
	}
}

function printFunctionBody(name, func) {
	var source = func.toString();

	if(func.name === "") {
		//single toplevel functions without a name are not allowed in JS
		//https://github.com/mishoo/UglifyJS/issues/468
		source = source.replace(/function/, "function x");
	}

	var f = parser.parse(source)[1][0];

	if(f[0] !== "defun") {
		throw new Error("func is not a function");
	}

	var params     = f[2];
	var paramTypes = params.map(function(paramname) { return guessParamType(paramname, name) });
	var optionals  = params.map(guessParamIsOptional);
	var funcReturn = guessFuncReturnType(name);

	var paramsWithTypes = [];
	for(var i = 0; i < params.length; i++) {
		var optional = optionals[i] ? " ?: " : " : ";
		paramsWithTypes[i] = params[i] + optional + paramTypes[i];
	}

	return name + "(" + paramsWithTypes.join(", ") + ") : "+ funcReturn +";";
}

function printModule(name, obj, indent) {
	var w = white(indent);

	return "\n" + w +
	       "interface " + name + " {\n" +
	       stringify(obj, indent+1) +
		   w + "}"
		   + "\n" +
		   w + "declare var " + name + " : " + name + ";\n";
}

var tree = [];
try {
	tree.push( printModule("glMath", glm.glMath, 0) );
	tree.push( printModule("mat2", glm.mat2, 0) );
	tree.push( printModule("mat3", glm.mat3, 0) );
	tree.push( printModule("mat4", glm.mat4, 0) );
	tree.push( printModule("vec2", glm.vec2, 0) );
	tree.push( printModule("vec3", glm.vec3, 0) );
	tree.push( printModule("vec4", glm.vec4, 0) );
	tree.push( printModule("quat", glm.quat, 0) );
} catch(e) {
	console.error(JSON.stringify(e));
	throw e;
}

console.log(tree.join("\n"));
