var glm = require("./gl-matrix.js")
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
					//make shure we don't parse anything odd. 
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

function guessType(name) {
	return "any"; 
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

	var params = f[2];
	var paramTypes = params.map(guessType); 

	var paramsWithTypes = []; 
	for(var i = 0; i < params.length; i++) {
		paramsWithTypes[i] = params[i] + " : " + paramTypes[i]; 
	}

	return name + "(" + paramsWithTypes.join(", ") + ") : Float32Array;"; 
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
	tree.push( printModule("quat4", glm.quat4, 0) ); 
} catch(e) {
	console.error(JSON.stringify(e)); 
}

console.log(tree.join("\n")); 
