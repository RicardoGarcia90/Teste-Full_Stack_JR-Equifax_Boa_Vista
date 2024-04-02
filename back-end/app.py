from flask import Flask, jsonify, request, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

favorites = []

@app.route('/')
def index():
  return redirect('/favorites')

@app.route('/favorites', methods=['GET'])
def get_favorites():
  page = int(request.args.get('page', 1))
  per_page = int(request.args.get('per_page', 10))

  total_items = len(favorites)
  start_index = (page - 1) * per_page
  end_index = start_index + per_page

  paginated_favorites = favorites[start_index:end_index]

  

  response = {
      'page': page,
      'per_page': per_page,
      'total_items': total_items,
      'favorites': paginated_favorites
    }

  return jsonify(response), 200

@app.route('/favorites', methods=['POST'])
def add_favorites():
  new_favorite = request.json
  favorites.append(new_favorite)
  return jsonify({'message': 'Favorito adicionado com sucesso!'})

@app.route('/favorites/<string:id>', methods=['DELETE'])
def delete_favorites(id):
    for indice, favorite in enumerate(favorites):
       if favorite.get('id') == id:
          del favorites[indice]
    return jsonify({'message': 'Favorito excluido com sucesso!'}, favorites)

if __name__ == '__main__':
    app.run(port=5000, host='localhost', debug=True)