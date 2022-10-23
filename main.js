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
