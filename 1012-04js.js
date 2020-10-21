window.onload = function() {
	var result = [];
	var list = document.getElementsByTagName('a');
	for(var i = 0; i < list.length; i++){
		result.push(list.item(i).href);
	}
	window.alert(result.join('\n'));
}

