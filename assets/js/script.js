function handleFormSubmit(e) {
  e.preventDefault();

  // Limpa as mensagens
  _clearMessages();

  // Pega os valores do input
  let [_gasolina, _etanol] = e.target;
  // Muda o ponto pela vírgula
  gasolina = _gasolina.value.replace(',','.');
  etanol = _etanol.value.replace(',','.');

  // Verifica qual é mais vantajoso
  if (etanol/gasolina > 0.7) {
    document.querySelector('.gasolina').classList.add('winner');
    _setWinner('GASOLINA');
  } else {
    document.querySelector('.etanol').classList.add('winner');
    _setWinner('ETANOL');
  }

  // Pisca por 2 segundos a div do mais vatajoso
  setTimeout(()=>{
    document.querySelectorAll('.winner').forEach(el => el.classList.remove('winner'));
  },2000);
} 

// Função limpar mensagens
function _clearMessages() {
  document.querySelector("#message-area").innerHTML = "";
  document.querySelectorAll('.winner').forEach(el => el.classList.remove('winner'));
};

// Função pra mostrar mensagem do mais vantajoso
function _setWinner(winner) {
  let result_li = document.createElement('li');
  result_li.style.color = '#FFFFFF';
  result_li.innerHTML = `É mais vantajoso abastecer com: ${winner}`;
  document.querySelector('#message-area').append(result_li);
}