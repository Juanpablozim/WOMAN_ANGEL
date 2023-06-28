var denuncias = [];

function adicionarDenuncia(event) {
  event.preventDefault();

  var nome = document.getElementById('nome').value;
  var placa = document.getElementById('placa').value;
  var ocorrencia = document.getElementById('ocorrencia').value;

  var denuncia = {
    nome: nome,
    placa: placa,
    ocorrencia: ocorrencia
  };

  denuncias.push(denuncia);
  salvarDenuncias();
  exibirDenuncias();
  limparFormulario();
}

function exibirDenuncias() {
  var denunciasContainer = document.getElementById('denuncias');
  denunciasContainer.innerHTML = '';

  for (var i = 0; i < denuncias.length; i++) {
    var denuncia = denuncias[i];

    var denunciaElement = document.createElement('div');
    denunciaElement.classList.add('denuncia');
    denunciaElement.innerHTML = '<div class="info">Nome do Motorista: ' + denuncia.nome + '</div>' +
                                '<div class="info">Placa: ' + denuncia.placa + '</div>' +
                                '<div class="descricao">' + denuncia.ocorrencia + '</div>';

    denunciasContainer.appendChild(denunciaElement);
  }
}

function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('placa').value = '';
  document.getElementById('ocorrencia').value = '';
}

function limparDenuncias() {
  denuncias = [];
  localStorage.removeItem('denuncias');
  exibirDenuncias();
}

function salvarDenuncias() {
  localStorage.setItem('denuncias', JSON.stringify(denuncias));
}

var form = document.getElementById('denunciaForm');
form.addEventListener('submit', adicionarDenuncia);

// Carregar denúncias ao carregar a página
if (localStorage.getItem('denuncias')) {
  denuncias = JSON.parse(localStorage.getItem('denuncias'));
  exibirDenuncias();
}

function colocaPlaca(){
  let divPlaca = document.getElementById("divPlaca");
  let divLinha = document.getElementById("divLinha");

  divLinha.innerHTML = "";
  divPlaca.innerHTML = `<label for="placa">Placa:</label><input type="text" id="placa" required><label for="placa">`;
}

function colocaLinha(){
  let divPlaca = document.getElementById("divPlaca");
  let divLinha = document.getElementById("divLinha");

  divLinha.innerHTML = `
  <label for="Linha">Linha:</label>
  <input type="text" id="Linha" required>
  <label for="Linha">Data e horário (Clique no calendário):</label>
  <input type="datetime-local" id="Horario" name="data-hora" class="DateTime" required>`;
  divPlaca.innerHTML = "";
}