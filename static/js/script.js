const button = document.getElementById("buscar");
button.addEventListener("click", buscarElogio);

async function buscarElogio() {
  const id = document.getElementById("searchInput").value;
  const resultDiv = document.getElementById("result");
  if (!id) {
    resultDiv.textContent = "Digite um ID válido";
    return;
  }

  resultDiv.textContent = "Buscando elogio... ⏳";
  button.disabled = true;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const resposta = await fetch(`/elogios/${id}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const dados = await resposta.json();
    if (resposta.ok) {
      resultDiv.textContent = dados.mensagem;
    } else {
      resultDiv.textContent =
        dados.erro || dados.message || "Elogio não encontrado";
    }
  } catch (erro) {
    clearTimeout(timeoutId);
    if (erro.name === "AbortError") {
      resultDiv.textContent =
        "O servidor demorou demais pra responder. Tenta de novo?";
    } else {
      resultDiv.textContent =
        "Erro ao conectar com o servidor. O Flask tá rodando?";
    }
  } finally {
    button.disabled = false;
  }
}
