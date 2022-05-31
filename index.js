  var allcontent = null
  var linha1 = ""
  var linha2 = ""
  var linha3 = ""
  var LCD = ""

  function pergunta() {
    LCD = document.getElementById('LCD')
    linha1 = document.querySelector("input[name='linha1']") /*Recebendo apeas o Imput, sem o valor*/
    linha2 = document.querySelector("input[name='linha2']") /*Recebendo apeas o Imput, sem o valor*/
    linha3 = document.querySelector("input[name='linha3']") /*Recebendo apeas o Imput, sem o valor*/
    linha1.value = linha1.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); /*TRATANDO IMPUT PARA PROIBIR CARACTERES ESPECIAIS.*/
    linha2.value = linha2.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); /*TRATANDO IMPUT PARA PROIBIR CARACTERES ESPECIAIS.*/
    linha3.value = linha3.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); /*TRATANDO IMPUT PARA PROIBIR CARACTERES ESPECIAIS.*/
    allcontent = LCD.innerHTML = linha1.value + '<br>' + linha2.value + '<br>' + linha3.value
  }

  function carregar() {
    var combo = ""
    var input = document.querySelector('input[name=novoModelo]');
    var btn = document.querySelector('input[name=btnAddModelo]');
    var combo = document.querySelector('select[name=modelo]');
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
        var opton = document.createElement('option');
        var optoff = document.createElement('option');
        optoff.value = input.value;
        opton.value = input.value;
        opton.innerHTML = input.value + ' - On';
        optoff.innerHTML = input.value + ' - Off';
        combo.appendChild(opton);
        combo.appendChild(optoff);
        input.value = "";
      }
    });
  }

  function adicionarpergunta() {
    if (allcontent == null || linha1.value == "") {
      alert("Digite uma pergunta começando da 1ª linha.")
      return false
    } else {
      let divChecklist = document.getElementById('checklist')
      let miniaturaPO = document.createElement("div")
      let miniaturaLCD = document.createElement("div")
      var critica = document.createElement("span")
      var bloqueia = document.getElementById('bloqueia')
      let contador = document.createElement("p")
      contador.setAttribute("id", "contador")
      let posicaopergunta = divChecklist.children.length + 1

      miniaturaPO.setAttribute("class", "miniPO")
      miniaturaLCD.setAttribute("class", "LCD")
      miniaturaLCD.innerHTML = allcontent + '<br>' + 'APERTE 1 PARA OK'
      contador.innerText = "Pergunta " + posicaopergunta
      miniaturaPO.appendChild(miniaturaLCD)
      divChecklist.appendChild(miniaturaPO)
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
    let checklistremover = button.parentNode
    document.getElementById("checklist").removeChild(checklistremover)
  }
  /*var maquina = document.querySelector('input')*/
  