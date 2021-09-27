import numpy as np


def image_to_numpy(image):
    # convert to np array and scale values to (0, 1)
    np_image = np.array(image) / 255.0
    # expect the image of shape (224, 224, 3)
    assert np_image.shape[0] == 224, "image height must be 224"
    assert np_image.shape[1] == 224, "image height must be 224"
    # model expects 4 dimensions: (batch_size, img_height, img_width, channels)
    # convert image to 4 dimentions with batch_size = 1
    # we make predictions always for a single image
    images = np.expand_dims(np_image, axis=0)
    return images
