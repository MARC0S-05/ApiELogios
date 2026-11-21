# 💌 BomplimentsAPI
 
Um elogio do fundo do coração para alegrar seu dia.
 
Interface web simples que busca elogios em uma API própria: o usuário digita um número de 1 a 40 e recebe o elogio correspondente.
 
## ✨ Funcionalidades
 
- Busca de elogio por ID (de 1 a 40)
- Feedback visual enquanto a requisição está em andamento
- Botão desabilitado durante a busca, evitando requisições duplicadas
- Timeout de 30 segundos com mensagem amigável
- Tratamento de erros da API e de falhas de conexão
## 🛠️ Tecnologias
 
- HTML5
- CSS3
- JavaScript (vanilla), usando `fetch` e `AbortController`
- Backend em Flask, hospedado no [Render](https://render.com)
## 📁 Estrutura
 
```
.
├── index.html   # Página e lógica de consumo da API
├── style.css    # Estilos
└── README.md
```
 
## 🚀 Como rodar localmente
 
1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
```
 
2. Sirva a pasta com um servidor local. Com Python:
```bash
python -m http.server 8000
```
 
3. Abra `http://localhost:8000` no navegador.
> Também dá para abrir o `index.html` direto no navegador, mas usar um servidor local é mais próximo do ambiente de produção.
 
## 🔌 API
 
A página consome o seguinte endpoint:
 
```
GET https://back-2182.onrender.com/elogios/{id}
```
 
| Parâmetro | Tipo    | Descrição                  |
|-----------|---------|----------------------------|
| `id`      | inteiro | Número do elogio (1 a 40)  |
 
**Resposta de sucesso (`200`)**
 
```json
{
  "mensagem": "Texto do elogio"
}
```
 
**Resposta de erro**
 
```json
{
  "erro": "Descrição do erro"
}
```
 
### ⏳ Sobre a demora na primeira requisição
 
O backend roda no plano gratuito do Render, que **hiberna após um período sem uso**. A primeira requisição depois disso pode levar até ~30 segundos enquanto o servidor acorda. Por isso a interface mostra uma mensagem de espera e define um timeout de 30s.
 
## 🔄 Fluxo da interface
 
1. O usuário digita um número no campo de busca
2. Ao clicar em **Buscar**, a página valida se o campo foi preenchido
3. A requisição é enviada para a API e o botão fica desabilitado
4. O resultado (ou a mensagem de erro) aparece no card
5. O botão é reabilitado ao final, com sucesso ou erro
## 🧩 Possíveis melhorias
 
- Botão para buscar um elogio aleatório
- Validação do intervalo (1 a 40) no front-end
- Botão de copiar ou compartilhar o elogio
- Animação de carregamento no lugar do texto
## 📄 Licença
 
Defina aqui a licença do projeto (ex.: MIT).
 
