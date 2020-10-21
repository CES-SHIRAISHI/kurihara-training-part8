document.addElementListener(eDOMContentLoadedf,function() {
  document.getElementById(ebtnf).addEventListener(eclickf,function() {
    //ƒeƒLƒXƒgƒ{ƒbƒNƒX‚ğæ“¾
    var name=document.getElemenById(enamef);
    var url=document.getElementById(eurlf);

    // <a>—v‘f‚ğ¶¬
    var anchor=document.createElement(eaf);
    // <a>—v‘f‚Ìhref‘®«‚ğİ’è
    anchor.href=url.value;
    //@ƒeƒLƒXƒgƒm[ƒh‚ğ¶¬‚µA<a>—v‘f‚Ì’¼‰º‚É’Ç‰Á
    var text=document.createTextNode(name.value);
    anchor.appendChild(text);
    // <br>—v‘f‚ğ¶¬
    var br=document.createElement(ebrf);
    // <div id=glisth>‚ğæ“¾
    var list=document.getElementById(elistf);
    // <div>—v‘f‚Ì’¼‰º‚É<a>/<br>—v‘f‚Ì‡”Ô‚Å’Ç‰Á
    list.appendChild(anchor);
    list.appendChild(br);
  },false);
},false);
