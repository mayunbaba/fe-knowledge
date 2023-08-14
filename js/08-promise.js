const src =
  "https://pica.zhimg.com/v2-dd7b4844c68328277dbf69d181e0ca58_l.jpg";

function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`图片加载失败 ${src}`));
    };
    img.src = src;
  })
}

loadImg(src).then(img => {
  console.log(img.width);
  return img;
}).then(img => {
  console.log(img.height);
}).catch(err => {
  console.log(err);
})