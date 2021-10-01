import tensorflow as tf
from tensorflow import keras


model = keras.models.load_model('./models/hotdog_vgg.h5')

converter = tf.lite.TFLiteConverter.from_keras_model(model)

tflite_model = converter.convert()

if __name__ == "__main__":
    with tf.io.gfile.GFile('./models/hotdog_vgg.tflite', 'wb') as f:
        f.write(tflite_model)