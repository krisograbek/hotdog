FROM python:3.8
WORKDIR /hotdog-app

COPY ./requirements.txt ./

RUN pip install -r ./requirements.txt
RUN pip install --index-url https://google-coral.github.io/py-repo/ tflite_runtime

COPY ./api.py ./wsgi.py ./image_helpers.py ./
COPY ./client ./client
COPY ./models ./models

ENV FLASK_ENV production

# COPY ./api.py ./api.py
# COPY ./wsgi.py ./wsgi.py
# COPY ./image_helpers.py ./image_helpers.py

# CMD [ "gunicorn", "wsgi:app" ]

CMD gunicorn --bind 0.0.0.0:$PORT wsgi:app

# CMD [ "python", "./api.py"]
# CMD [ "python", "-m", "flask", "run"]