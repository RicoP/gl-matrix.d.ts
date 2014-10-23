
interface glMath {
	
}
declare var glMath : glMath;


interface mat2 {
	create() : Float32Array;
	clone(a : Float32Array) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	identity(out : any) : Float32Array;
	transpose(out : any, a : Float32Array) : Float32Array;
	invert(out : any, a : Float32Array) : Float32Array;
	adjoint(out : any, a : Float32Array) : Float32Array;
	determinant(a : Float32Array) : number;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	rotate(out : any, a : Float32Array, rad : any) : Float32Array;
	scale(out : any, a : Float32Array, v : any) : Float32Array;
	str(a : Float32Array) : string;
	frob(a : Float32Array) : Float32Array;
	LDU(L : any, D : any, U : any, a : Float32Array) : Float32Array;
}
declare var mat2 : mat2;


interface mat3 {
	create() : Float32Array;
	fromMat4(out : any, a : Float32Array) : Float32Array;
	clone(a : Float32Array) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	identity(out : any) : Float32Array;
	transpose(out : any, a : Float32Array) : Float32Array;
	invert(out : any, a : Float32Array) : Float32Array;
	adjoint(out : any, a : Float32Array) : Float32Array;
	determinant(a : Float32Array) : number;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	translate(out : any, a : Float32Array, v : any) : Float32Array;
	rotate(out : any, a : Float32Array, rad : any) : Float32Array;
	scale(out : any, a : Float32Array, v : any) : Float32Array;
	fromMat2d(out : any, a : Float32Array) : Float32Array;
	fromQuat(out : any, q : any) : Float32Array;
	normalFromMat4(out : any, a : Float32Array) : Float32Array;
	str(a : Float32Array) : string;
	frob(a : Float32Array) : Float32Array;
}
declare var mat3 : mat3;


interface mat4 {
	create() : Float32Array;
	clone(a : Float32Array) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	identity(out : any) : Float32Array;
	transpose(out : any, a : Float32Array) : Float32Array;
	invert(out : any, a : Float32Array) : Float32Array;
	adjoint(out : any, a : Float32Array) : Float32Array;
	determinant(a : Float32Array) : number;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	translate(out : any, a : Float32Array, v : any) : Float32Array;
	scale(out : any, a : Float32Array, v : any) : Float32Array;
	rotate(out : any, a : Float32Array, rad : any, axis : Float32Array) : Float32Array;
	rotateX(out : any, a : Float32Array, rad : any) : Float32Array;
	rotateY(out : any, a : Float32Array, rad : any) : Float32Array;
	rotateZ(out : any, a : Float32Array, rad : any) : Float32Array;
	fromRotationTranslation(out : any, q : any, v : any) : Float32Array;
	fromQuat(out : any, q : any) : Float32Array;
	frustum(out : any, left : number, right : number, bottom : number, top : number, near : number, far : number) : Float32Array;
	perspective(out : any, fovy : number, aspect : number, near : number, far : number) : Float32Array;
	ortho(out : any, left : number, right : number, bottom : number, top : number, near : number, far : number) : Float32Array;
	lookAt(out : any, eye : Float32Array, center : Float32Array, up : Float32Array) : Float32Array;
	str(a : Float32Array) : string;
	frob(a : Float32Array) : Float32Array;
}
declare var mat4 : mat4;


interface vec2 {
	create() : Float32Array;
	clone(a : Float32Array) : Float32Array;
	fromValues(x : number, y : number) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	set(out : any, x : number, y : number) : Float32Array;
	add(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	subtract(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	sub(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	divide(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	div(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	min(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	max(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scale(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scaleAndAdd(out : any, a : Float32Array, b : Float32Array, scale : any) : Float32Array;
	distance(a : Float32Array, b : Float32Array) : Float32Array;
	dist(a : Float32Array, b : Float32Array) : number;
	squaredDistance(a : Float32Array, b : Float32Array) : Float32Array;
	sqrDist(a : Float32Array, b : Float32Array) : Float32Array;
	length(a : Float32Array) : number;
	len(a : Float32Array) : Float32Array;
	squaredLength(a : Float32Array) : number;
	sqrLen(a : Float32Array) : Float32Array;
	negate(out : any, a : Float32Array) : Float32Array;
	inverse(out : any, a : Float32Array) : Float32Array;
	normalize(out : any, a : Float32Array) : Float32Array;
	dot(a : Float32Array, b : Float32Array) : number;
	cross(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	lerp(out : any, a : Float32Array, b : Float32Array, t : any) : Float32Array;
	random(out : any, scale : any) : Float32Array;
	transformMat2(out : any, a : Float32Array, m : any) : Float32Array;
	transformMat2d(out : any, a : Float32Array, m : any) : Float32Array;
	transformMat3(out : any, a : Float32Array, m : any) : Float32Array;
	transformMat4(out : any, a : Float32Array, m : any) : Float32Array;
	forEach(a : Float32Array, stride : any, offset : any, count : any, fn : any, arg : any) : Float32Array;
	str(a : Float32Array) : string;
}
declare var vec2 : vec2;


interface vec3 {
	create() : Float32Array;
	clone(a : Float32Array) : Float32Array;
	fromValues(x : number, y : number, z : number) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	set(out : any, x : number, y : number, z : number) : Float32Array;
	add(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	subtract(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	sub(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	divide(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	div(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	min(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	max(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scale(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scaleAndAdd(out : any, a : Float32Array, b : Float32Array, scale : any) : Float32Array;
	distance(a : Float32Array, b : Float32Array) : Float32Array;
	dist(a : Float32Array, b : Float32Array) : number;
	squaredDistance(a : Float32Array, b : Float32Array) : Float32Array;
	sqrDist(a : Float32Array, b : Float32Array) : Float32Array;
	length(a : Float32Array) : number;
	len(a : Float32Array) : Float32Array;
	squaredLength(a : Float32Array) : number;
	sqrLen(a : Float32Array) : Float32Array;
	negate(out : any, a : Float32Array) : Float32Array;
	inverse(out : any, a : Float32Array) : Float32Array;
	normalize(out : any, a : Float32Array) : Float32Array;
	dot(a : Float32Array, b : Float32Array) : number;
	cross(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	lerp(out : any, a : Float32Array, b : Float32Array, t : any) : Float32Array;
	random(out : any, scale : any) : Float32Array;
	transformMat4(out : any, a : Float32Array, m : any) : Float32Array;
	transformMat3(out : any, a : Float32Array, m : any) : Float32Array;
	transformQuat(out : any, a : Float32Array, q : any) : Float32Array;
	rotateX(out : any, a : Float32Array, b : Float32Array, c : any) : Float32Array;
	rotateY(out : any, a : Float32Array, b : Float32Array, c : any) : Float32Array;
	rotateZ(out : any, a : Float32Array, b : Float32Array, c : any) : Float32Array;
	forEach(a : Float32Array, stride : any, offset : any, count : any, fn : any, arg : any) : Float32Array;
	str(a : Float32Array) : string;
}
declare var vec3 : vec3;


interface vec4 {
	create() : Float32Array;
	clone(a : Float32Array) : Float32Array;
	fromValues(x : number, y : number, z : number, w : number) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	set(out : any, x : number, y : number, z : number, w : number) : Float32Array;
	add(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	subtract(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	sub(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	divide(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	div(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	min(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	max(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scale(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scaleAndAdd(out : any, a : Float32Array, b : Float32Array, scale : any) : Float32Array;
	distance(a : Float32Array, b : Float32Array) : Float32Array;
	dist(a : Float32Array, b : Float32Array) : number;
	squaredDistance(a : Float32Array, b : Float32Array) : Float32Array;
	sqrDist(a : Float32Array, b : Float32Array) : Float32Array;
	length(a : Float32Array) : number;
	len(a : Float32Array) : Float32Array;
	squaredLength(a : Float32Array) : number;
	sqrLen(a : Float32Array) : Float32Array;
	negate(out : any, a : Float32Array) : Float32Array;
	inverse(out : any, a : Float32Array) : Float32Array;
	normalize(out : any, a : Float32Array) : Float32Array;
	dot(a : Float32Array, b : Float32Array) : number;
	lerp(out : any, a : Float32Array, b : Float32Array, t : any) : Float32Array;
	random(out : any, scale : any) : Float32Array;
	transformMat4(out : any, a : Float32Array, m : any) : Float32Array;
	transformQuat(out : any, a : Float32Array, q : any) : Float32Array;
	forEach(a : Float32Array, stride : any, offset : any, count : any, fn : any, arg : any) : Float32Array;
	str(a : Float32Array) : string;
}
declare var vec4 : vec4;


interface quat {
	create() : Float32Array;
	rotationTo(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	setAxes(out : any, view : Float32Array, right : number, up : Float32Array) : Float32Array;
	clone(a : Float32Array) : Float32Array;
	fromValues(x : number, y : number, z : number, w : number) : Float32Array;
	copy(out : any, a : Float32Array) : Float32Array;
	set(out : any, x : number, y : number, z : number, w : number) : Float32Array;
	identity(out : any) : Float32Array;
	setAxisAngle(out : any, axis : Float32Array, rad : any) : Float32Array;
	add(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	multiply(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	mul(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	scale(out : any, a : Float32Array, b : Float32Array) : Float32Array;
	rotateX(out : any, a : Float32Array, rad : any) : Float32Array;
	rotateY(out : any, a : Float32Array, rad : any) : Float32Array;
	rotateZ(out : any, a : Float32Array, rad : any) : Float32Array;
	calculateW(out : any, a : Float32Array) : Float32Array;
	dot(a : Float32Array, b : Float32Array) : number;
	lerp(out : any, a : Float32Array, b : Float32Array, t : any) : Float32Array;
	slerp(out : any, a : Float32Array, b : Float32Array, t : any) : Float32Array;
	invert(out : any, a : Float32Array) : Float32Array;
	conjugate(out : any, a : Float32Array) : Float32Array;
	length(a : Float32Array) : number;
	len(a : Float32Array) : Float32Array;
	squaredLength(a : Float32Array) : number;
	sqrLen(a : Float32Array) : Float32Array;
	normalize(out : any, a : Float32Array) : Float32Array;
	fromMat3(out : any, m : any) : Float32Array;
	str(a : Float32Array) : string;
}
declare var quat : quat;

