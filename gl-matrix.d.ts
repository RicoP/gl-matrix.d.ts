
interface glMath {
	invsqrt(number : any) : Float32Array;
}
declare var glMath : glMath;


interface mat2 {
	create(src : any) : Float32Array;
	createFrom(m00 : any, m01 : any, m10 : any, m11 : any) : Float32Array;
	set(mat : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	identity(dest : any) : Float32Array;
	transpose(mat : any, dest : any) : Float32Array;
	determinant(mat : any) : Float32Array;
	inverse(mat : any, dest : any) : Float32Array;
	multiply(matA : any, matB : any, dest : any) : Float32Array;
	rotate(mat : any, angle : any, dest : any) : Float32Array;
	multiplyVec2(matrix : any, vec : any, dest : any) : Float32Array;
	scale(matrix : any, vec : any, dest : any) : Float32Array;
	str(mat : any) : Float32Array;
}
declare var mat2 : mat2;


interface mat3 {
	create(mat : any) : Float32Array;
	createFrom(m00 : any, m01 : any, m02 : any, m10 : any, m11 : any, m12 : any, m20 : any, m21 : any, m22 : any) : Float32Array;
	determinant(mat : any) : Float32Array;
	inverse(mat : any, dest : any) : Float32Array;
	multiply(mat : any, mat2 : any, dest : any) : Float32Array;
	multiplyVec2(matrix : any, vec : any, dest : any) : Float32Array;
	multiplyVec3(matrix : any, vec : any, dest : any) : Float32Array;
	set(mat : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	identity(dest : any) : Float32Array;
	transpose(mat : any, dest : any) : Float32Array;
	toMat4(mat : any, dest : any) : Float32Array;
	str(mat : any) : Float32Array;
	toQuat4(mat : any, dest : any) : Float32Array;
}
declare var mat3 : mat3;


interface mat4 {
	create(mat : any) : Float32Array;
	createFrom(m00 : any, m01 : any, m02 : any, m03 : any, m10 : any, m11 : any, m12 : any, m13 : any, m20 : any, m21 : any, m22 : any, m23 : any, m30 : any, m31 : any, m32 : any, m33 : any) : Float32Array;
	set(mat : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	identity(dest : any) : Float32Array;
	transpose(mat : any, dest : any) : Float32Array;
	determinant(mat : any) : Float32Array;
	inverse(mat : any, dest : any) : Float32Array;
	toRotationMat(mat : any, dest : any) : Float32Array;
	toMat3(mat : any, dest : any) : Float32Array;
	toInverseMat3(mat : any, dest : any) : Float32Array;
	multiply(mat : any, mat2 : any, dest : any) : Float32Array;
	multiplyVec3(mat : any, vec : any, dest : any) : Float32Array;
	multiplyVec4(mat : any, vec : any, dest : any) : Float32Array;
	translate(mat : any, vec : any, dest : any) : Float32Array;
	scale(mat : any, vec : any, dest : any) : Float32Array;
	rotate(mat : any, angle : any, axis : any, dest : any) : Float32Array;
	rotateX(mat : any, angle : any, dest : any) : Float32Array;
	rotateY(mat : any, angle : any, dest : any) : Float32Array;
	rotateZ(mat : any, angle : any, dest : any) : Float32Array;
	frustum(left : any, right : any, bottom : any, top : any, near : any, far : any, dest : any) : Float32Array;
	perspective(fovy : any, aspect : any, near : any, far : any, dest : any) : Float32Array;
	ortho(left : any, right : any, bottom : any, top : any, near : any, far : any, dest : any) : Float32Array;
	lookAt(eye : any, center : any, up : any, dest : any) : Float32Array;
	fromRotationTranslation(quat : any, vec : any, dest : any) : Float32Array;
	str(mat : any) : Float32Array;
}
declare var mat4 : mat4;


interface vec2 {
	create(vec : any) : Float32Array;
	createFrom(x : any, y : any) : Float32Array;
	add(vecA : any, vecB : any, dest : any) : Float32Array;
	subtract(vecA : any, vecB : any, dest : any) : Float32Array;
	multiply(vecA : any, vecB : any, dest : any) : Float32Array;
	divide(vecA : any, vecB : any, dest : any) : Float32Array;
	scale(vecA : any, scalar : any, dest : any) : Float32Array;
	dist(vecA : any, vecB : any) : Float32Array;
	set(vec : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	negate(vec : any, dest : any) : Float32Array;
	normalize(vec : any, dest : any) : Float32Array;
	cross(vecA : any, vecB : any, dest : any) : Float32Array;
	length(vec : any) : Float32Array;
	squaredLength(vec : any) : Float32Array;
	dot(vecA : any, vecB : any) : Float32Array;
	direction(vecA : any, vecB : any, dest : any) : Float32Array;
	lerp(vecA : any, vecB : any, lerp : any, dest : any) : Float32Array;
	str(vec : any) : Float32Array;
}
declare var vec2 : vec2;


interface vec3 {
	create(vec : any) : Float32Array;
	createFrom(x : any, y : any, z : any) : Float32Array;
	set(vec : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	add(vec : any, vec2 : any, dest : any) : Float32Array;
	subtract(vec : any, vec2 : any, dest : any) : Float32Array;
	multiply(vec : any, vec2 : any, dest : any) : Float32Array;
	negate(vec : any, dest : any) : Float32Array;
	scale(vec : any, val : any, dest : any) : Float32Array;
	normalize(vec : any, dest : any) : Float32Array;
	cross(vec : any, vec2 : any, dest : any) : Float32Array;
	length(vec : any) : Float32Array;
	squaredLength(vec : any) : Float32Array;
	dot(vec : any, vec2 : any) : Float32Array;
	direction(vec : any, vec2 : any, dest : any) : Float32Array;
	lerp(vec : any, vec2 : any, lerp : any, dest : any) : Float32Array;
	dist(vec : any, vec2 : any) : Float32Array;
	unproject(vec : any, view : any, proj : any, viewport : any, dest : any) : Float32Array;
	rotationTo(a : any, b : any, dest : any) : Float32Array;
	str(vec : any) : Float32Array;
}
declare var vec3 : vec3;


interface vec4 {
	create(vec : any) : Float32Array;
	createFrom(x : any, y : any, z : any, w : any) : Float32Array;
	add(vecA : any, vecB : any, dest : any) : Float32Array;
	subtract(vecA : any, vecB : any, dest : any) : Float32Array;
	multiply(vecA : any, vecB : any, dest : any) : Float32Array;
	divide(vecA : any, vecB : any, dest : any) : Float32Array;
	scale(vecA : any, scalar : any, dest : any) : Float32Array;
	set(vec : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	negate(vec : any, dest : any) : Float32Array;
	length(vec : any) : Float32Array;
	squaredLength(vec : any) : Float32Array;
	lerp(vecA : any, vecB : any, lerp : any, dest : any) : Float32Array;
	str(vec : any) : Float32Array;
}
declare var vec4 : vec4;


interface quat4 {
	create(quat : any) : Float32Array;
	createFrom(x : any, y : any, z : any, w : any) : Float32Array;
	set(quat : any, dest : any) : Float32Array;
	equal(a : any, b : any) : Float32Array;
	identity(dest : any) : Float32Array;
	calculateW(quat : any, dest : any) : Float32Array;
	dot(quat : any, quat2 : any) : Float32Array;
	inverse(quat : any, dest : any) : Float32Array;
	conjugate(quat : any, dest : any) : Float32Array;
	length(quat : any) : Float32Array;
	normalize(quat : any, dest : any) : Float32Array;
	add(quat : any, quat2 : any, dest : any) : Float32Array;
	multiply(quat : any, quat2 : any, dest : any) : Float32Array;
	multiplyVec3(quat : any, vec : any, dest : any) : Float32Array;
	scale(quat : any, val : any, dest : any) : Float32Array;
	toMat3(quat : any, dest : any) : Float32Array;
	toMat4(quat : any, dest : any) : Float32Array;
	slerp(quat : any, quat2 : any, slerp : any, dest : any) : Float32Array;
	fromRotationMatrix(mat : any, dest : any) : Float32Array;
	fromAxes(view : any, right : any, up : any, dest : any) : Float32Array;
	fromAngleAxis(angle : any, axis : any, dest : any) : Float32Array;
	toAngleAxis(src : any, dest : any) : Float32Array;
	str(quat : any) : Float32Array;
}
declare var quat4 : quat4;

