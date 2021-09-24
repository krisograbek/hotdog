from keras import activations
import matplotlib.pyplot as plt
import numpy as np
# import tensorflow as tf
from keras.applications.vgg19 import VGG19
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten


def print_image(image):
    # image = Image.open('images/boundaries.png')
    print(type(image))
    # print("Size: ", image.size)
    # print("mode: ", image.mode)
    np_image = np.array(image) / 255.0
    print("image shape", np_image.shape)
    images = np.expand_dims(np_image, axis=0)
    print("image shape after expand", images.shape)
    if len(image) > 0:
        # predict_image(image)
        # plt.imshow(images)
        # plt.show()
        return images
    return None
    # print(np_image[:, 0, :])
    # print(np_image)
