window.onload = function() {
	var result = [];
	var s = document.getElementById('food');
	var opts = s.childNodes;
	for(var i = 0; i < opts.length; i++) {
		var opt = opts.item(i);
		if(opt.nodeType == 1) {
			result.push(opts.item(i).value);
		}
	}
	window.alert(result.join(','));
}
