from flask import Flask, request

from image_helpers import print_image

app = Flask(__name__)

@app.route('/api/value')
def get_val():
    req_data = request.get_json()
    print(req_data)
    return {'value': 'some value'}

@app.route('/api/name', methods=['POST'])
def get_name():
    req_data = request.get_json()
    name = req_data['name']
    return {'value': name}

@app.route('/api/add', methods=['POST'])
def get_add():
    req_data = request.get_json()
    img_data = req_data['results']
    # print(img_data)
    printed = print_image(img_data)
    # description = req_data['description']
    # print(name, description)
    status = "Succes" if printed else "Error"
    return {'value': status}
