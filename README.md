# Description

Let's have some fun with Deep Learning. How about an app with a Deep Learning model to classify hot dogs?
The app is deployed on [Heroku](https://krisograbek-hotdog.herokuapp.com/). You can play with it yourself :)

## Sources

This repository is bootstraped from [this template](https://github.com/krisograbek/react-flask-template). The template itself is based on [this tutorial](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project) by Miguel Grinberg and Create React App.

You can find see the training the model in the `api/VGG_training.ipynb` file. It was based on [this notebook](https://github.com/the-deep-learners/deep-learning-illustrated/blob/master/notebooks/transfer_learning_in_keras.ipynb) by Jon Krohn. If you want to explore this part further just [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/krisograbek/hotdog/blob/main/api/VGG_training.ipynb)


## Preparing a Flask API Backend

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

### Run Flask Backend

```
(venv) $ cd ..
(venv) $ npm run start-api
```

## Run Frontend

### Open a second terminal in the project directory

### `npm install`

Installs packages from `package.json`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Local Deployment

### 
```
$ npm run build
$ rm -r <project directory>/api/client/*
$ cp -r <project directory>/build/* <project directory>/api/client/
$ venv\Scripts\activate
(venv)$ flask run
```
### And open `localhost:5000` in your browser

![demo](https://user-images.githubusercontent.com/48050596/136319271-b41d9308-8aac-47fc-b348-55ccaed5cba1.gif)
