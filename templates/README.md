# 🖼️ Templates (Camada de Apresentação)

Esta pasta armazena os arquivos HTML que o **Flask** processa e envia ao navegador através da função `render_template()`.

## 📄 Arquivos

* **`index.html`**: Estrutura principal da página da **BomplimentsAPI**. 
  * Contém o formulário de busca (input numérico e botão de ação) e o contêiner onde o resultado é injetado dinamicamente.
  * Utiliza a sintaxe Jinja2 (`{{ url_for('static', filename='...') }}`) para vincular o CSS e o JavaScript de forma dinâmica, garantindo que os caminhos funcionem em qualquer ambiente de hospedagem.