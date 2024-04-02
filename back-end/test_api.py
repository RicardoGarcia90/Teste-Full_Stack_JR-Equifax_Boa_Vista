import unittest
import json
from flask import Flask
from app import app

class TestFavoritesAPI(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        self.app = app.test_client()
        self.favorites = []

    def test_get_favorites(self):
        response = self.app.get('/favorites')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        self.assertIn('page', data)
        self.assertIn('per_page', data)
        self.assertIn('total_items', data)
        self.assertIn('favorites', data)

    def test_add_favorites(self):
        new_favorite = {'id': '1', 'name': 'Favorite 1'}
        response = self.app.post('/favorites', json=new_favorite)
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        self.assertEqual(data['message'], 'Favorito adicionado com sucesso!')

    def test_delete_favorites(self):
        self.favorites.append({'id': '1', 'name': 'Favorite 1'})
        response = self.app.delete('/favorites/1')
        self.assertEqual(response.status_code, 200)
        data = json.loads(response.data.decode('utf-8'))
        self.assertEqual(data['message'], 'Favorito excluido com sucesso!')

if __name__ == '__main__':
    unittest.main()
