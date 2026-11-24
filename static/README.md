# 🎨 Static (Recursos do Front-end)

Esta pasta reúne os arquivos estáticos servidos diretamente ao navegador do cliente sem processamento no back-end.

## 📂 Organização

* **`css/style.css`**: Define toda a identidade visual, layout centralizado em card, tipografia, cores e responsividade da interface.
* **`js/script.js`**: Controla a interatividade da página:
  * Captura o evento de clique no botão **Buscar**.
  * Valida se o campo foi preenchido antes de enviar a requisição.
  * Executa a chamada `fetch()` para a rota relativa `/elogios/<id>` com controle de *timeout* (`AbortController` de 30 segundos) e feedback visual de carregamento.
  * Trata respostas de sucesso e mensagens de erro da API, exibindo o texto final na tela.