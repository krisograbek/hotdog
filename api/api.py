from flask import Flask, request


app = Flask(__name__)

@app.route('/api/value')
def get_val():
    req_data = request.get_json()
    print(req_data)
    return {'value': 'some value'}

@app.route('/api/add', methods=['POST'])
def get_add():
    req_data = request.get_json()
    name = req_data['name']
    description = req_data['description']
    print(name, description)
    return {'value': name}
