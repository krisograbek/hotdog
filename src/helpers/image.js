export function convertImage(image, resultWidth, resultHeight) {
  const canvas = drawImageToCanvas(image, resultWidth, resultHeight);
  const ctx = canvas.getContext('2d');
  // console.log(ctx.getImageData(100, 100, 1, 1).data)
  console.log(canvas)

  let result_arr = [];
  for (let y = 0; y < canvas.height; y++) {
    result_arr.push([]);
    for (let x = 0; x < canvas.width; x++) {
      let data = ctx.getImageData(x, y, 1, 1).data;
      result_arr[y].push([data[0], data[1], data[2]]);
    }
  }

  return result_arr
  // console.log(result)
}

export function drawImageToCanvas(image, resultWidth, resultHeight) {
  const canvas = document.createElement('canvas');
  canvas.width = resultWidth;
  canvas.height = resultHeight
  // canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
  canvas.getContext('2d').drawImage(image, 0, 0, resultWidth, resultHeight);
  return canvas;
}
