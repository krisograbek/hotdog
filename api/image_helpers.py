from keras import activations
import matplotlib.pyplot as plt
import numpy as np
# import tensorflow as tf
from keras.applications.vgg19 import VGG19
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten

vgg = VGG19(include_top=False, input_shape=(224, 224, 3))

model = Sequential()
model.add(vgg)
model.add(Flatten())
# model.add(Dropout(0.2))
model.add(Dense(2, activation='softmax', name='predictions'))

def predict_image(image):
    print("Starting prediction")
    y_pred = model.predict([image])
    print(y_pred)

def print_image(image):
    # image = Image.open('images/boundaries.png')
    print(type(image))
    # print("Size: ", image.size)
    # print("mode: ", image.mode)
    np_image = np.array(image)
    print(type(np_image))
    print("image shape", np_image.shape)
    if len(image) > 0:
        # predict_image(image)
        # plt.imshow(np_image)
        # plt.show()
        return True
    return False
    # print(np_image[:, 0, :])
    # print(np_image)
