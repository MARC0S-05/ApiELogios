# 💌 BomplimentsAPI

Uma aplicação web full-stack construída com **Python (Flask)** que une uma API RESTful de elogios e uma interface web interativa em um único repositório.

---

## 🏗️ Arquitetura do Projeto

O projeto utiliza a estrutura padrão do **Flask**, onde o servidor atua tanto entregando páginas HTML quanto fornecendo dados em formato JSON para o navegador:

```text
api/
├── app.py               # Núcleo do servidor, rotas da página e endpoints da API
├── dados.py             # Camada de dados contendo o catálogo de elogios
├── requirements.txt     # Dependências necessárias para rodar o projeto
├── README.md            # Documentação geral da arquitetura
│
├── templates/           # Páginas HTML renderizadas pelo servidor
│   ├── README.md        # Documentação da camada de templates
│   └── index.html
│
└── static/              # Recursos estáticos (estilos e scripts do navegador)
    ├── README.md        # Documentação dos arquivos estáticos
    ├── css/
    │   └── style.css
    └── js/
        └── script.js
```

---

## 🔄 Como Tudo Funciona

1. **Acesso Inicial (`GET /`):** Quando o usuário acessa o endereço principal, o `app.py` renderiza e entrega o arquivo `templates/index.html`.
2. **Carregamento Visual:** O navegador carrega automaticamente o estilo (`static/css/style.css`) e a lógica do cliente (`static/js/script.js`).
3. **Requisição Assíncrona:** Ao digitar um número e clicar em **Buscar**, o JavaScript faz uma chamada `fetch()` para `/elogios/<id>` sem recarregar a página.
4. **Resposta da API:** O `app.py` consulta a lista importada de `dados.py`, encontra o elogio correspondente ao ID e devolve um JSON (`{"id": 1, "mensagem": "..."}`), que é exibido na tela.

---

## 📡 Endpoints da API

| Método | Rota | Descrição | Retorno |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Renderiza a interface web principal. | `HTML` |
| `GET` | `/elogios` | Lista todos os 40 elogios cadastrados. | `JSON (200)` |
| `GET` | `/elogios/<id>` | Busca um elogio específico pelo seu número identificador. | `JSON (200 / 404)` |
| `POST` | `/elogios` | Adiciona um novo elogio em memória (`{"mensagem": "..."}`). | `JSON (201 / 400)` |