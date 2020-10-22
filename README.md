# 「Webシステム開発について」勉強会第8回 ハンズオン資料 の補足

栗原さんの利用した資料などを補足するサイトです


## 補足すること

### DOM について

詳しくは[このサイト](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model)を見るのが良いが、
JavaScript の 一部ではなく、 業務上 XML などを操作することは少なくないので、覚えておいたほうが良い概念である


### 事前に学習しておいたほうが良いこと

[ドットインストール](https://dotinstall.com/lessons)の以下の内容を見て事前学習しておくと良い (有料ものは会社に交渉して下さい)

* 最低限
  * HTML/CSSの学習環境を整えよう Windows版
  * はじめてのHTML
  * はじめてのCSS
  * はじめてのJavaScript
* 見ておいたほうがいい
  * ウェブサイトを作れるようになるよう の 全て
  * JavaScriptではじめるお手軽プログラミング の 全て

### 参考サイト

* [MDN](https://developer.mozilla.org/ja/docs/Web)
* [とほほのWWW入門](http://www.tohoho-web.com/www.htm)


### 最低限覚えたい要素(とその属性)について

* (<A>)[http://www.tohoho-web.com/html/a.htm]
* (<!DOCTYPE>)[http://www.tohoho-web.com/html/doctype.htm]
* (<!-- -->)[http://www.tohoho-web.com/html/comments.htm]
* (文字参照)[http://www.tohoho-web.com/html/char.htm]
* (<html>)[http://www.tohoho-web.com/html/html.htm]
* (<head>)[http://www.tohoho-web.com/html/head.htm]
* (<body>)[http://www.tohoho-web.com/html/body.htm]
* (<style>)[http://www.tohoho-web.com/html/style.htm]
* (<script>)[http://www.tohoho-web.com/html/script.htm]
* (<div>)[http://www.tohoho-web.com/html/div.htm]
* (<span>)[http://www.tohoho-web.com/html/span.htm]
* (<section>)[http://www.tohoho-web.com/html/section.htm]
* (<br>)[http://www.tohoho-web.com/html/br.htm]
* (<hr>)[http://www.tohoho-web.com/html/hr.htm]
* (<p>)[http://www.tohoho-web.com/html/p.htm]
* (<pre>)[http://www.tohoho-web.com/html/pre.htm]
* (<iframe>)[http://www.tohoho-web.com/html/iframe.htm]
* (<img>)[http://www.tohoho-web.com/html/img.htm]
* (<form>)[http://www.tohoho-web.com/html/form.htm]
* (<input>)[http://www.tohoho-web.com/html/input.htm]
* (<button>)[http://www.tohoho-web.com/html/button.htm]
* (<select>)[http://www.tohoho-web.com/html/select.htm]
* (<option>)[http://www.tohoho-web.com/html/option.htm]
* (<textarea>)[http://www.tohoho-web.com/html/textarea.htm]
* (<label>)[http://www.tohoho-web.com/html/label.htm]
* (<table>)[http://www.tohoho-web.com/html/table.htm]
* (<thead>)[http://www.tohoho-web.com/html/thead.htm]
* (<tbody>)[http://www.tohoho-web.com/html/tbody.htm]
* (<td>)[http://www.tohoho-web.com/html/td.htm]
* (<th>)[http://www.tohoho-web.com/html/th.htm]
* (<tr>)[http://www.tohoho-web.com/html/tr.htm]
* (<dd>)[http://www.tohoho-web.com/html/dd.htm]
* (<dl>)[http://www.tohoho-web.com/html/dl.htm]
* (<dt>)[http://www.tohoho-web.com/html/dt.htm]
* (<ul>)[http://www.tohoho-web.com/html/ul.htm]
* (<li>)[http://www.tohoho-web.com/html/li.htm]
* (<ol>)[http://www.tohoho-web.com/html/ol.htm]



## Page.6 : ハンズオン1 (1012-01.html) / ハンズオン2 (1012-02.html)

[ハンズオン1 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-01.html)
[ハンズオン2 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-02.html)


### 補足

1. http://code.jquery.com/jquery-3.5.1.js は CDN から読み込みをしている
1. 詳細は `CDN JavaScript` で調べるとよい
1. 商用で利用する場合は注意


## Page.12 : ハンズオン3 (1012-03.html)

[ハンズオン3 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-03.html)



## Page.15 : ハンズオン4 (1012-04.html)

[ハンズオン4 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-04.html)




## Page.18 : ハンズオン5 (1012-05.html)

[ハンズオン5 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-05.html)


### 補足

1. nodeType で 比較しているのは、 <option> と <option> 要素の間 に改行やら空白文字があるが、これがテキストノード として存在しているので、これを除外するため。( else で検知するとわかる)

```javascript
if(opt.nodeType == 1) {
    result.push( opts.item(i).value );
}else{
    console.log( opt.nodeType, opts.item(i).value );
}
```



## Page.21 : ハンズオン6 (1012-06.html)

[ハンズオン6 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-06.html)



## Page.22 : ハンズオン7 (1012-07.html)

[ハンズオン7 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-07.html)


## Page.25 : ハンズオン8 (1012-08.html)

[ハンズオン8 : オンラインデモ](https://ces-shiraishi.github.io/kurihara-training-part8/1012-08.html)




## デモ改訂履歴

### 2020.10.21 - 2020.10.22

 - html には文字コード UTF-8 と記載されてるが、 ドキュメントの文字コードが SHIFT-JIS となっているので、ドキュメントの文字コードを UTF-8 に変更
 - インデントやコード位置など、体裁を少々修正
 - コメントの追加
 - 一部コードを変えた

