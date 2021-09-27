import React, { useEffect, useState } from 'react';
import { convertImage } from '../helpers/image';


function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState([])
  const [proba, setProba] = useState(-1)

  const resultHeight = 224;
  const resultWidth = 224;

  useEffect(() => {
    console.log("Result: ", result)
    // fetch only if an uploaded image present
    if (result.length !== 0) {
      const body = {
        results: result
      }
      fetch(`/api/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          setProba(data.proba);
        })
        .catch(error => console.log(error))
    }
  }, [result])

  // re-render when proba changes
  // without this call, we always see the previous proba
  useEffect(() => { console.log("Proba =", proba) }, [proba])

  const handleImg = () => {
    // get canvas with the image
    const img = document.getElementById("img");
    const result_array = convertImage(img, resultWidth, resultHeight);
    setResult(result_array)
  }

  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
          // setResult([]);
        }}
      />
      {selectedImage && (
        <div>
          <br />
          <button onClick={() => {
            setSelectedImage(null);
            setResult([]);
            setProba(-1)
          }}>Remove</button>
          <br />
          <img id="img" alt="not found" width={"450px"} src={selectedImage} />
          <br />
          {proba > -1 &&
            <div>{proba > 0.5 ?
              <div>
                <span style={{ color: 'green' }}>A Hot Dog</span>
                <p>I'm {((proba) * 100).toFixed(1)} % confident</p>
              </div>
              :
              <div>
                <span style={{ color: 'red' }}>NOT a Hot Dog</span>
                <p>I'm {((1 - proba) * 100).toFixed(1)} % confident</p>
              </div>
            }
            </div>
          }
          <button style={{ fontSize: "24px" }} onClick={() => handleImg()}>Hot dog or not?</button>
        </div>
      )}
    </div>
  )
}

export default UploadImage
