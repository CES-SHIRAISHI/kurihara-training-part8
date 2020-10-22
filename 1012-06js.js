window.onload = function() {
	// <img id="logo" src="http://www.wings.msn.to/image/wings.jpg" height="61" width="215" border="0" alt="wings"></img>
	var logo = document.getElementById('logo');

	/*
		以下の項目を取得する
		id="logo"
		src="http://www.wings.msn.to/image/wings.jpg"
		height="61"
		width="215"
		border="0"
		alt="wings"
	*/
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
