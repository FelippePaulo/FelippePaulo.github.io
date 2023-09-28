from flask import Flask, render_template
import json

app = Flask(__name__)
# Ler o arquivo JSON
with open('teste.json', 'r') as json_file:
    data = json.load(json_file)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()