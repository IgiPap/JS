getTriangleArea(10, 15);
getTriangleArea(0, 15);
getTriangleArea(2, -15);

function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
		console.log(a * h / 2);
		return;
	}
	console.log('Nieprawidłowe dane');
}