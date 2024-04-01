from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

favorites = []

@app.route('/favorites', methods=['GET'])
def get_favorites():
  return jsonify(favorites)

@app.route('/favorites', methods=['POST'])
def add_favorites():
  new_favorite = request.json
  favorites.append(new_favorite)
  return jsonify({'message': 'Favorito adicionado com sucesso!'})

app.run(port=5000, host='localhost', debug=True)