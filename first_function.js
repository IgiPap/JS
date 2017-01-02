
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(0, 15);
var triangle3Area = getTriangleArea(2, -15);

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		var result = a*h/2;
		console.log(result);
	} else if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
	}
	return result;
}




