import React, { useEffect, useState } from 'react'

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState([])


  useEffect(() => {
    const body = {
      results: result
    }
    console.log("Im in use effect")
    console.log(result)
    fetch(`/api/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  }, [result])

  const handleImg = () => {
    // get canvas with the image
    const img = document.getElementById("img");
    convertImage(img)
  }

  function convertImage(image) {
    const canvas = drawImageToCanvas(image);
    const ctx = canvas.getContext('2d');
    // console.log(ctx.getImageData(100, 100, 1, 1).data)
    console.log(canvas)

    let result_arr = [];
    for (let y = 0; y < canvas.height; y++) {
      result_arr.push([]);
      for (let x = 0; x < canvas.width; x++) {
        let data = ctx.getImageData(x, y, 1, 1).data;
        result_arr[y].push([data[0], data[1], data[2]]);
        // result_arr[y][1].push(data[1]);
        // result_arr[y][2].push(data[2]);
      }
    }
    setResult(result_arr)
    console.log(result_arr)
    // console.log(result)
  }

  function drawImageToCanvas(image) {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
    // canvas.getContext('2d').drawImage(image, 0, 0, 224, 224);
    return canvas;
  }

  return (
    <div>
      <h5>Upload and Display Image usign React Hook's</h5>
      {selectedImage && (
        <div>
          <img id="img" alt="not found" width={"450px"} src={selectedImage} />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button onClick={() => handleImg()}>Convert</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </div>
  )
}

export default UploadImage
