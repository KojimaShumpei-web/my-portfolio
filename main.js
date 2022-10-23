/*document.getElementById(“img_file”).src = img_src[num];
var img_src = new Array("ピチュウ.png", "ピカチュウ.png", "ライチュウ.png");
var num=0;
function henkou() {
    if (num == 2) {
      num = 0;
    } else {
      num ++;
    }
}
*/

var img1 = new Array("ピチュウ.png", "ピカチュウ.png", "ライチュウ.png");
img1[0] = new Image();
img1[0].src = "ピチュウ.png";
img1[1] = new Image();
img1[1].src = "ピカチュウ.png";
img1[2] = new Image();
img1[2].src = "ライチュウ.png";

var num = 0;

function slideshow() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("img1").src = img1[num].src;
}
var img2 = new Array("ピッピ.png", "ピクシー.png");
img2[0] = new Image();
img2[0].src = "ピッピ.png";
img2[1] = new Image();
img2[1].src = "ピクシー.png";

var nu = 0;

function henkou() {
  if (nu == 1) {
    nu = 0;
  } else {
    nu++;
  }
  document.getElementById("img2").src = img2[nu].src;
}

var img3 = new Array("モンスターボール.png", "デデンネ.png");
img3[0] = new Image();
img3[0].src = "モンスターボール.png";
img3[1] = new Image();
img3[1].src = "デデンネ.png";

var nn = 0;
function henkou3() {
  if (nn == 1) {
    nn = 0;
  } else {
    nn++;
  }
  document.getElementById("img3").src = img3[nn].src;
}

var img4 = new Array(
  "ゴース.png",
  "ゴースト.png",
  "ゲンガー.png",
  "メガゲンガー.png",
  "ゲンガーキョダイマックス.png"
);
img4[0] = new Image();
img4[0].src = "ゴース.png";
img4[1] = new Image();
img4[1].src = "ゴースト.png";
img4[2] = new Image();
img4[2].src = "ゲンガー.png";
img4[3] = new Image();
img4[3].src = "メガゲンガー.png";
img4[4] = new Image();
img4[4].src = "ゲンガーキョダイマックス.png";

var n = 0;

function henkou2() {
  if (n == 4) {
    n = 0;
  } else {
    n++;
  }
  document.getElementById("img4").src = img4[n].src;
}
