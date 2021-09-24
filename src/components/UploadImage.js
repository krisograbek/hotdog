import React, { useEffect, useState } from 'react';
import { convertImage } from '../helpers/image';


function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState([])
  const [prediction, setPrediction] = useState("")

  const resultHeight = 224;
  const resultWidth = 224;

  useEffect(() => {
    const body = {
      results: result
    }
    console.log(result)
    fetch(`/api/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        setPrediction(data.prediction);
        console.log(prediction)
      })
      .catch(error => console.log(error))
  }, [result])

  const handleImg = () => {
    // get canvas with the image
    const img = document.getElementById("img");
    const result_array = convertImage(img, resultWidth, resultHeight);
    setResult(result_array)
  }

  return (
    <div>
      <h5>Upload and Display Image usign React Hook's</h5>
      {selectedImage && (
        <div>
          <img id="img" alt="not found" width={"450px"} src={selectedImage} />
          <br />
          <h5>{prediction === 0 ? "No hot dog" : "Yes, hot dog"}</h5>
          <p>I'm 80% sure</p>
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
