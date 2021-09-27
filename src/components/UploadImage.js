import { Button, Input, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { convertImage } from '../helpers/image';

const resultHeight = 224;
const resultWidth = 224;

const useStyles = makeStyles(() => ({
  button: {}
}))

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState([])
  const [proba, setProba] = useState(-1)
  const classes = useStyles();

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
      <label htmlFor="raised-button-file">
        <Input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(URL.createObjectURL(event.target.files[0]));
          }}
        />
        <Button variant="contained"
          size="large"
          component="span"
        // className={classes.button}
        >
          Upload Image
        </Button>
      </label>
      {selectedImage && (
        <div>
          <br />
          <Button
            variant="contained"
            onClick={() => {
              setSelectedImage(null);
              setResult([]);
              setProba(-1)
            }}>
            Remove
          </Button>
          <br />
          <img id="img" alt="not found" width={"450px"} src={selectedImage} />
          <br />
          {proba > -1 &&
            <div>{proba > 0.5 ?
              <div>
                <span style={{ color: 'green' }}>A Hot Dog</span>
                <p>I'm {((proba) * 100).toFixed(0)} % confident</p>
              </div>
              :
              <div>
                <span style={{ color: 'red' }}>NOT a Hot Dog</span>
                <p>I'm {((1 - proba) * 100).toFixed(0)} % confident</p>
              </div>
            }
            </div>
          }
          <Button
            variant="contained"
            style={{ fontSize: "24px" }}
            onClick={() => handleImg()}
          >
            Hot dog or not?
          </Button>

        </div>
      )}
    </div>
  )
}

export default UploadImage
