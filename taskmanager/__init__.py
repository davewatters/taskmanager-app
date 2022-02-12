import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
if os.path.exists("env.py"):
    import env  # noqa


app = Flask(__name__)
if os.environ.get("DEVELOPMENT") == "True":
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
else:
    app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = os.environ.get("SQLALCHEMY_TRACK_MODIFICATIONS")

db = SQLAlchemy(app)

from taskmanager import routes  # noqa
