  var allcontent = null
  function pergunta() {
    let LCD = document.getElementById('LCD')
    let linha1 = document.querySelector("input[name='linha1']") /*Recebendo apeas o Imput, sem o valor*/
    let linha2 = document.querySelector("input[name='linha2']") /*Recebendo apeas o Imput, sem o valor*/
    let linha3 = document.querySelector("input[name='linha3']") /*Recebendo apeas o Imput, sem o valor*/
    linha1.value = linha1.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); /*TRATANDO IMPUT PARA PROIBIR CARACTERES ESPECIAIS.*/
    linha2.value = linha2.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); /*TRATANDO IMPUT PARA PROIBIR CARACTERES ESPECIAIS.*/
    linha3.value = linha3.value.replace(/[^0-9A-Za-z!%()_\-.,?\/ ]/g, "").toUpperCase(); /*TRATANDO IMPUT PARA PROIBIR CARACTERES ESPECIAIS.*/
    allcontent = LCD.innerHTML = linha1.value + '<br>' + linha2.value + '<br>' + linha3.value
  }

  function carregar() {
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
        var opt = document.createElement('option');
        opt.value = input.value;
        opt.innerHTML = input.value;
        combo.appendChild(opt);
        input.value = "";
      }
    });
  }
  function adicionarpergunta() {
    if (allcontent == null) {
      alert("Pergunta em Branco")
    } else {
      let divChecklist = document.getElementById('checklist')
    let miniaturaPO = document.createElement("div")
    miniaturaPO.setAttribute("class", "miniPO")
     let miniaturaLCD = document.createElement("div")
     miniaturaLCD.setAttribute("class", "LCD")
    miniaturaLCD.innerHTML = allcontent
    miniaturaPO.appendChild(miniaturaLCD)
    divChecklist.appendChild(miniaturaPO)

    let LCD = document.getElementById('LCD')
    LCD.innerHTML =""
    let linha = document.querySelector("input")
    linha1.value = ""
    }
  }
