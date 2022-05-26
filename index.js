  // adicionar evento-paste
  const input = document.querySelector("input[name='linha1']");

  input.addEventListener('paste', function () {
    const regex = new RegExp("^[0-9a-zA-Z\b]+$");
   const self = this;
  
  // precisa ser colocado
  setTimeout(function () {

    const text = self.value;

    if (!regex.test(text)) {
      self.value = "";
    }
  }, 10);
});

function mudando() {
  let LCD = document.getElementById('LCD')
  let linha1 = document.querySelector("input[name='linha1']").value /*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/
  let linha2 = document.querySelector("input[name='linha2']").value /*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/
  let linha3 = document.querySelector("input[name='linha3']").value /*RECEBENDO DADOS E COLOCANDO NA VARIAVEL*/
  LCD.innerText = linha1.toUpperCase() + '\n' + linha2.toUpperCase() + '\n' + linha3.toUpperCase()
}
