/*PRIMEIRA PARTE, RECEBER DADOS--------------------------------------------------------------------------------------------------*/
var allcontent = null
var linha1 = ""
var linha2 = ""
var linha3 = ""
var LCD = ""
function pergunta() {
  LCD = document.getElementById('LCD')
  linha1 = document.querySelector("input[name='linha1']")
  linha2 = document.querySelector("input[name='linha2']")
  linha3 = document.querySelector("input[name='linha3']")
  linha1.value = linha1.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase();
  linha2.value = linha2.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase();
  linha3.value = linha3.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); 
  allcontent = LCD.innerHTML = linha1.value + '<br>' + linha2.value + '<br>' + linha3.value
}
/*PRIMEIRA PARTE, RECEBER DADOS--------------------------------------------------------------------------------------------------*/


function carregar() {
  var input = document.querySelector('input[name=novoModelo]');
  var btn = document.querySelector('input[name=btnAddModelo]');
  combo = document.querySelector('select[name=modelo]');
  btn.addEventListener('click', function (e) {
    if (input.value == "") {
      alert("Informe um modelo.");
      return false;
    }
    var retorno = true;
    Array.from(combo.options).forEach(function (option_element) {
      let option_value = option_element.value;
      if (option_value == input.value) {
        alert("Modelo já adicionado.");
        input.value = "";
        retorno = false;
        return false;
      }
    });
    if (retorno) {
      opcao = [
        opton = document.createElement('option'),
        optoff = document.createElement('option')
      ]
      opcao[1].value = 'Perguntas Checklist ' + input.value.toUpperCase() + ' MODO ON';
      opcao[0].value = 'Perguntas Checklist ' + input.value.toUpperCase() + ' MODO OFF';
      opcao[1].innerHTML = input.value.toUpperCase() + ' - On';
      opcao[0].innerHTML = input.value.toUpperCase() + ' - Off';
      combo.appendChild(opcao[0]);
      combo.appendChild(opcao[1]);
      input.value = "";
    }
  });
}

function adicionarpergunta() {
  if (allcontent == null || linha1.value == "") {
    alert("Digite uma pergunta começando da 1ª linha.")
    return false
  } else if (combo.value == "0") {
    alert('Selecione um Modelo.')
  } else {
    divChecklist = document.getElementById('checklist')
    if (document.getElementById(combo.value) == null) {
      novadiv = document.createElement('div')
      novadiv.setAttribute('id', combo.value)
      divChecklist.appendChild(novadiv)
      tipomaquina = document.createElement('h1')
      tipomaquina.setAttribute('id', 'maquina')
      tipomaquina.innerHTML = combo.value
      divChecklist.insertBefore(tipomaquina, novadiv)
    }
    novadiv = document.getElementById(combo.value)
    let miniaturaPO = document.createElement("div")
    let miniaturaLCD = document.createElement("div")
    var critica = document.createElement("span")
    var bloqueia = document.getElementById('bloqueia')
    let contador = document.createElement("p")
    contador.setAttribute("id", "contador")
    let posicaopergunta = novadiv.children.length + 1
    miniaturaPO.setAttribute("class", "miniPO")
    miniaturaLCD.setAttribute("class", "LCD")
    miniaturaLCD.innerHTML = allcontent + '<br>' + 'APERTE 1 PARA OK'
    contador.innerText = "Pergunta " + posicaopergunta
    miniaturaPO.appendChild(miniaturaLCD)
    novadiv.appendChild(miniaturaPO)
    critica.setAttribute("id", "critica")
    miniaturaPO.appendChild(contador)

      if (bloqueia.checked) {
      critica.innerHTML = "ATENÇÃO Pergunta CRÍTICA"
      miniaturaPO.appendChild(critica)
    }
    let botaoremover = document.createElement("button")
    botaoremover.type = "button"
    botaoremover.innerText = "Remover Pergunta"
    botaoremover.setAttribute("onclick", "remover(this)")

    miniaturaPO.appendChild(botaoremover)
  }
  LCD.innerHTML = ""
  linha1.value = ""
  linha2.value = ""
  linha3.value = ""
  allcontent = null
}

function remover(button) {
  let miniaturaPOremover = button.parentNode
  miniaturaPOremover.parentNode.removeChild(miniaturaPOremover)
}