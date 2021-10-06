from flask import Flask, request
import tensorflow as tf
import numpy as np

from image_helpers import image_to_numpy

app = Flask(__name__, static_folder='./client', static_url_path='/')
# model = keras.models.load_model('./models/hotdog_vgg.h5')

interpreter = tf.lite.Interpreter('./models/hotdog_vgg.tflite')
interpreter.allocate_tensors()


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/predict', methods=['POST'])
def get_predict():
    req_data = request.get_json()
    img_data = req_data['results']
    assert len(img_data) > 0, "Why are you sending me an empty array?"
    image = image_to_numpy(img_data)
    assert image.dtype == "float32", "Did you convert the image to float32?"
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    interpreter.set_tensor(input_details[0]["index"], image)
    interpreter.invoke()
    output = interpreter.get_tensor(output_details[0]["index"])
    probabilities = np.array(output[0])
    # probas = model.predict(image)
    # print("My prediction", probas[0])
    # get the probability if it is an image of a hot dog
    # is_hotdog_proba = probas[0][0]
    is_hotdog_proba = probabilities[0]
    image = None
    return { 'proba': float(is_hotdog_proba) }

if __name__ == "__main__":
    app.run()
