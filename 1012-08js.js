document.addElementListener(�eDOMContentLoaded�f,function() {
  document.getElementById(�ebtn�f).addEventListener(�eclick�f,function() {
    //�e�L�X�g�{�b�N�X���擾
    var name=document.getElemenById(�ename�f);
    var url=document.getElementById(�eurl�f);

    // <a>�v�f�𐶐�
    var anchor=document.createElement(�ea�f);
    // <a>�v�f��href������ݒ�
    anchor.href=url.value;
    //�@�e�L�X�g�m�[�h�𐶐����A<a>�v�f�̒����ɒǉ�
    var text=document.createTextNode(name.value);
    anchor.appendChild(text);
    // <br>�v�f�𐶐�
    var br=document.createElement(�ebr�f);
    // <div id=�glist�h>���擾
    var list=document.getElementById(�elist�f);
    // <div>�v�f�̒�����<a>/<br>�v�f�̏��ԂŒǉ�
    list.appendChild(anchor);
    list.appendChild(br);
  },false);
},false);
