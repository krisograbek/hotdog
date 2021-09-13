from flask import Flask


app = Flask(__name__)

@app.route('/api/value')
def get_val():
    return {'value': 'some value'}
