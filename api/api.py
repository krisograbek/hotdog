import keras
from flask import Flask, request

from image_helpers import print_image

app = Flask(__name__)

model = keras.models.load_model('./models/hotdog_vgg.h5')

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
    np_image = print_image(img_data)
    # print("My np image", np_image)
    prediction = None
    if np_image is not None:
        probas = model.predict(np_image)
        print("My prediction", probas[0])
        prediction = 1 if probas[0][0] > 0.5 else 0
    # description = req_data['description']
    # print(name, description)
    return {
        'prediction': prediction
        }

if __name__ == "__main__":
    app.run()
