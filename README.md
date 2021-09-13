## Create directory for text files

`$ mkdir -p data/transcripts`

Then, add text files into this directory

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

`(venv) $ pip install -r requirements.txt`

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

## Other Frontend Scripts

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
