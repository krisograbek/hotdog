# Description

Let's have some fun with Deep Learning. How about an app with a Deep Learning model to classify hot dogs?
The app is deployed on [Heroku](https://krisograbek-hotdog.herokuapp.com/). You can play with it yourself :)

## Sources

This repository is bootstraped from [this template](https://github.com/krisograbek/react-flask-template). The template itself is based on [this tutorial](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) by Miguel Grinberg and Create React App.

You can find see the training the model in the `api/VGG_training.ipynb` file. It was based on [this notebook](https://github.com/the-deep-learners/deep-learning-illustrated/blob/master/notebooks/transfer_learning_in_keras.ipynb) by Jon Krohn. If you want to explore this part further just [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/krisograbek/hotdog/blob/main/api/VGG_training.ipynb)

# Demo

![demo](https://user-images.githubusercontent.com/48050596/136319271-b41d9308-8aac-47fc-b348-55ccaed5cba1.gif)

# Run the project locally

## Prepare the model

### Create and run `virtualenv`

```
$ cd api
$ python3 -m venv venv
$ source venv/bin/activate
```
Note that the above is for Unix-based operating systems. If you are using Windows, then you will do this instead:

```
$ cd api
$ python3 -m venv venv
$ venv\Scripts\activate
```

### Install packages from `requirements.txt`

`(venv) $ pip install -r reqs_local.txt`

### Add the model

This repository does **not** contain the model. It's a bad practice to store big files on Github. The size of our model file (~80MB) is considered big.

If you open the `VGG_training.ipynb` using colab you'll be able to train the same model I used. You'll find the instruction how and where to download the model.
After the steps, your `model/` directory should include `hotdog_vgg.h5`.

We want to use a tflite model for the project. First, we have to convert. To do that, we use the code in `converter.py`:

`(venv) $ python converter.py`

Your `model/` directory should include both `hotdog_vgg.h5` and `hotdog_vgg.tflite` now

## Prepare a Flask API Backend

### Run Flask Backend

```
(venv) $ cd ..
(venv) $ npm run start-api
```

## Prepare Frontend

### Open a second terminal in the project directory

### `npm install`

Installs packages from `package.json`

### `npm start`

Runs the app in the development mode.
### Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Deploy Locally

First, navigate to the project directory. Then, run the following commands:
```
$ npm run build
$ cp -r build/* api/client/
$ source venv/bin/activate (linux)
or
$ venv\Scripts\activate (windows)
(venv)$ flask run
```
The app runs in the production mode.
### Open [http://localhost:5000](http://localhost:5000) in your browser


