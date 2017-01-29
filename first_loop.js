
var treeHeight = 5;

function christmasTree (treeHeight) {
    for (var index = 1; index <= treeHeight; index++) {
		var level = '';
		for (var smallIndex = 1; smallIndex <= index * 2 - 1; smallIndex++) {
		level += '*';
		} console.log(level);
	}
}

christmasTree(treeHeight);