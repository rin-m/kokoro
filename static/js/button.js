
var flag = new Array();
flag[0] = false;
flag[1] = false;

var target = new Array();


function OnButtonClick1() {
    target[0] = document.getElementById("button1");
    console.log(1)
    var flag = document.getElementById("waiwai")

    if (flag.hidden == false) {
        flag.hidden = true;

    }
    else {
        flag.hidden = false;
    }
    /*if (!flag[0]) {
        let second = document.createElement('div');
        second.setAttribute('id', 'second');
        second.innerHTML = '<p id="b1" class="insertedElement">話してくれ！</p>';
        target[0].insertAdjacentHTML("afterend", blank);

        //var str = target[0].insertAdjacentHTML("afterend",);
        
        


        flag[0] = true;
    } else {
        b1.remove();

        flag[0] = false;
    }*/


}





function OnButtonClick2() {
    console.log(2);
    /*
    target[1] = document.getElementById("button2");
    if (!flag[1]) {
        var str = target[1].insertAdjacentHTML("afterend", '<p id="b2" class="insertedElement">話したい！</p>');
        タグの生成
        var icon = document.createElement('img');

        //属性の追加
        icon.src = "figure/neko.jpg";
        icon.alt = "アイコン";
        icon.id = "fig1";

        //タグを表示
        document.body.appendChild(icon);
        
        flag[1] = true;
    } else {
        b2.remove();
        //fig1.remove();
        flag[1] = false;
    }*/
}


/*
'use strict'
 {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
      btn.textContent = '押されました';
 })
}
*/