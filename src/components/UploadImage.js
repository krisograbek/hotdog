import { Button, Grid, Input, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { convertImage } from '../helpers/image';
import { get_result_sentence } from '../helpers/sentences';

const resultHeight = 224;
const resultWidth = 224;

const useStyles = makeStyles((theme) => ({
  positive: {
    color: theme.palette.success.main
  },
  negative: {
    color: theme.palette.error.main
  },
  button: {
    fontWeight: 'bolder'
  }
}))

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState([])
  const [proba, setProba] = useState(-1)
  const classes = useStyles();

  useEffect(() => {
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
  useEffect(() => {
    // console.log("Proba =", proba) 
  }, [proba])

  const handleImg = () => {
    // get canvas with the image
    const img = document.getElementById("img");
    const result_array = convertImage(img, resultWidth, resultHeight);
    setResult(result_array)
  }

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        Welcome to the HOT DOG Challenge! Can you fool me?
      </Grid>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <label htmlFor="raised-button-file">
              <Input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                onChange={(event) => {
                  // console.log(event.target.files[0]);
                  setSelectedImage(URL.createObjectURL(event.target.files[0]));
                  setResult([]);
                  setProba(-1)
                }}
              />
              <Button variant="contained"
                size="large"
                component="span"
                className={classes.button}
              >
                Upload Image
              </Button>
            </label>
          </Grid>
          {/* <Grid item>
            {selectedImage && (
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => {
                  setSelectedImage(null);
                  setResult([]);
                  setProba(-1)
                }}>
                Remove
              </Button>
            )}
          </Grid> */}
        </Grid>
      </Grid>
      {
        selectedImage && (
          <Grid container
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img id="img" alt="not found" height={"550px"} src={selectedImage} />
            </Grid>
            {proba > -1 &&
              <Grid item>
                {/* {proba > 0.5 ?
                  <div>
                    <span className={classes.positive}>A Hot Dog</span>
                    <p>I'm {((proba) * 100).toFixed(0)} % confident</p>
                  </div>
                  :
                  <div>
                    <span className={classes.negative}>NOT a Hot Dog</span>
                    <p>I'm {((1 - proba) * 100).toFixed(0)} % confident</p>
                  </div>
                } */}
                <p
                  className={`${(proba > 0.5) ? classes.positive : classes.negative}`}
                >
                  {get_result_sentence(proba)}
                </p>
                {/* </Grid> */}
              </Grid>
            }
            <Button
              className={classes.button}
              variant="contained"
              style={{ fontSize: "24px" }}
              onClick={() => handleImg()}
            >
              Hot dog or not?
            </Button>

          </Grid>
        )
      }
    </Grid >
  )
}

export default UploadImage
