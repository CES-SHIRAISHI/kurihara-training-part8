document.addEventListener('DOMContentLoaded',function() {

  // ID が btn となる エレメントの click イベントを定義する
  document.getElementById('btn').addEventListener('click',function() {

    //テキストボックスを取得
    var name = document.getElementById('name');
    var url  = document.getElementById('url');

    // <a> 要素を生成
    var anchor=document.createElement('a');

    // <a> 要素のhref属性を設定
    // <a href="{ここを設定}"></a>
    anchor.href = url.value;

    //　テキストノードを生成し、<a>要素の直下に追加
    //  <a href="{url.value の値}">{ここを設定}</a>
    var text=document.createTextNode(name.value);
    anchor.appendChild(text);

    // <br> 要素を生成
    var br=document.createElement('br');

    // <div id=“list”>を取得
    var list=document.getElementById('list');

    // <div>要素の直下に<a>/<br>要素の順番で追加
    // 
    // 画面上にある id="list" の div 要素に対して、 以下の ★ の箇所 の様に追加される
    // <div id="list">
    // ★<a href="{url.value の値}">{name.value の値}</a>
    // ★<br />
    // </div>
    list.appendChild(anchor);
    list.appendChild(br);
  },false);

},false);
