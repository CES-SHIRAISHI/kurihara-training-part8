window.onload = function() {
	var result = [];

	// <select id="food"> を 取得
	var s = document.getElementById('food');

	/*
		s (select) の childNodes は <option> 3つ(下記★の箇所) が取得できる

		<select  id="food">
			★<option value="ラーメン">ラーメン</option>
			★<option value="餃子">餃子</option>
			★<option value="焼肉">焼肉</option>
		</select>
	*/
	var opts = s.childNodes;

	// ループ
	for(var i = 0; i < opts.length; i++) {
		var opt = opts.item(i);

		if(opt.nodeType == 1) {
			result.push( opts.item(i).value );
		}

	}
	
	window.alert(result.join(','));
}
