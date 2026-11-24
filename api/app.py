import os
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from dados import elogios

# Flask já procura templates em 'templates' e assets em 'static' por padrão
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/elogios', methods=['GET'])
def get_elogios():
    return jsonify(elogios)

@app.route('/elogios/<int:id>', methods=['GET'])
def get_elogio(id):
    for elogio in elogios:
        if elogio['id'] == id:
            return jsonify(elogio)
    return jsonify({'erro': 'Elogio não encontrado'}), 404

@app.route('/elogios', methods=['POST'])
def create_elogio():
    data = request.get_json()
    if not data or 'mensagem' not in data:
        return jsonify({'erro': 'Mensagem é obrigatória'}), 400

    new_id = len(elogios) + 1
    new_elogio = {'id': new_id, 'mensagem': data['mensagem']}
    elogios.append(new_elogio)
    return jsonify(new_elogio), 201

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
