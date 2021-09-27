// converts an image to a 3D array and returns the array
export function convertImage(image, resultWidth, resultHeight) {
  const canvas = drawImageToCanvas(image, resultWidth, resultHeight);
  const ctx = canvas.getContext('2d');
  // convert image to a 3D array
  let result_arr = [];
  for (let y = 0; y < canvas.height; y++) {
    result_arr.push([]);
    for (let x = 0; x < canvas.width; x++) {
      let data = ctx.getImageData(x, y, 1, 1).data;
      result_arr[y].push([data[0], data[1], data[2]]);
    }
  }
  return result_arr
}

// draws and returns an image of shape (resultWidth, resultHeight, 3)
export function drawImageToCanvas(image, resultWidth, resultHeight) {
  const canvas = document.createElement('canvas');
  canvas.width = resultWidth;
  canvas.height = resultHeight
  // draw and reshape image
  canvas.getContext('2d').drawImage(image, 0, 0, resultWidth, resultHeight);
  return canvas;
}
