// ページ読み込み後に実行される
window.onload = function() {
	// [] は 配列リテラル で Array オブジェクト のこと。Array() と同じ
	var result = [];

	// A タグを全て取得する
	var list = document.getElementsByTagName('a');

	// 取得した A タグ全ての数だけ ループ する
	for(var i = 0; i < list.length; i++){
		// list は Aタグのエレメント の Collection が格納されている
		// https://developer.mozilla.org/ja/docs/Web/API/HTMLCollection
		// Collection から 1つ A タグ を取得する
		var a_tag_element = list.item(i);

		// A タグ の href 属性(リンク先情報) を取得して、 result 配列に入れる
		result.push( a_tag_element.href );
	}

	// result配列には リンク先の url が入っているので、 これを改行して画面にダイアログとして表示する
	window.alert( result.join('\n') );
}

