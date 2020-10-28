from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/question_01")
def question_01():
    return render_template("question_01.html")


@app.route("/question_02")
def question_02():
    return render_template("question_02.html")


@app.route("/question_03")
def question_03():
    return render_template("question_03.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
