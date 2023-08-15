function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`图片加载失败 ${src}`));
    };
    img.src = src;
  })
}


const src = "https://pica.zhimg.com/v2-dd7b4844c68328277dbf69d181e0ca58_l.jpg"
const src2 =
  "https://img1.sycdn.imooc.com/5a9fc8070001a82402060220-160-160.jpg"
// !分隔代码，防止分号问题
!(async function() {
  const img = await loadImg(src);
  console.log(img.width);
  console.log(img.height);

  const img2 = await loadImg(src2);
  console.log(img2.width);
  console.log(img2.height);
})()
