import keras
from flask import Flask, request

from image_helpers import image_to_numpy

app = Flask(__name__, static_folder='./client', static_url_path='/')
model = keras.models.load_model('./models/hotdog_vgg.h5')


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/predict', methods=['POST'])
def get_predict():
    req_data = request.get_json()
    img_data = req_data['results']
    assert len(img_data) > 0, "Why are you sending me an empty array?"
    image = image_to_numpy(img_data)
    probas = model.predict(image)
    # print("My prediction", probas[0])
    # get the probability if it is an image of a hot dog
    is_hotdog_proba = probas[0][0]

    return { 'proba': float(is_hotdog_proba) }

if __name__ == "__main__":
    app.run()
