import matplotlib.pyplot as plt
import numpy as np


def print_image(image):
    # image = Image.open('images/boundaries.png')
    print(type(image))
    # print("Size: ", image.size)
    # print("mode: ", image.mode)
    np_image = np.array(image)
    print(type(np_image))
    print("image shape", np_image.shape)
    if len(image) > 0:
        plt.imshow(np_image)
        plt.show()
    # print(np_image[:, 0, :])
    # print(np_image)
