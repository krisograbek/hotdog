from flask import Flask


app = Flask(__name__)

@app.route('/val')
def get_val():
    return {'val': 'current value'}
