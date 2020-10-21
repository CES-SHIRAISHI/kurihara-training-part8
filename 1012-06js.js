window.onload = function() {
	var logo = document.getElementById('logo');
	var attrs = logo.attributes;
	var result = [];
	for (var i = 0; i < attrs.length; i++) {
		var attr = attrs.item(i);
		if (attr.nodeValue) {
			result.push(attr.nodeName + ':' + attr.nodeValue);
		}
	}
	window.alert(result.join('\r\n'));
}
