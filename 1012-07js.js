// DOM の構築が完了した後のイベントで、window.onload より前 に実行される
document.addEventListener('DOMContentLoaded',function() {
  // 文字列として解釈されるようにセットする
  document.getElementById('result_text').textContent = '<a href="http://www.wings/msn.to/">WINGSプロジェクト</a>';
  // HTML として解釈させるようにセットする
  document.getElementById('result_html').innerHTML   = '<a href="http://www.wings/msn.to/">WINGSプロジェクト</a>';
},false);
