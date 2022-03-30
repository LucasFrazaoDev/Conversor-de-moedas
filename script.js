// conversor de dolar e real
function Dolar_Real() {
  var valorDolar = document.getElementById("dolar").value;
  var valorReal = document.getElementById("real").value;

  // Verificando se os dois campos estão vazios
  if (valorDolar == "" && valorReal == "") {
    alert('Digite um valor nos campos desejados!')
  // convertendo
  } else if (valorReal == "") {
    valorReal = parseFloat(valorDolar) * 5.07
  } else {
    valorDolar = parseFloat(valorReal) / 5.07
  }

  document.getElementById("real").value = parseFloat(valorReal).toFixed(1);
  document.getElementById("dolar").value = parseFloat(valorDolar).toFixed(1);
}

/* Botão de limpar */
function Clear_first() {
  document.getElementById("dolar").value = "";
  document.getElementById("real").value = "";
}

// conversor de euro e real
function Euro_Real() {
  var valorEuro = document.getElementById("euro").value;
  var valorReal = document.getElementById("real1").value;

  // Verificando se os dois campos estão vazios
  if (valorEuro == "" && valorReal == "") {
    alert('Digite um valor nos campos desejados!')
    // convertendo
  } else if (valorReal == "") {
    valorReal = parseFloat(valorEuro) * 5.62
  } else {
    valorEuro = parseFloat(valorReal) / 5.62
  }

  document.getElementById("euro").value = parseFloat(valorEuro).toFixed(1);
  document.getElementById("real1").value = parseFloat(valorReal).toFixed(1);
}

/* Botão de limpar */
function Clear_second() {
  document.getElementById("euro").value = "";
  document.getElementById("real1").value = "";
}

// conversor de dolar e euro
function Dolar_Euro() {
  var valorDolar = document.getElementById("dolar1").value;
  var valorEuro = document.getElementById("euro1").value;

  // Verificando se os dois campos estão vazios
  if (valorEuro == "" && valorDolar == "") {
    alert('Digite um valor nos campos desejados!')
    // convertendo
  } else if (valorEuro == "") {
    valorEuro = parseFloat(valorDolar) * 1.1
  } else {
    valorDolar = parseFloat(valorEuro) / 1.1
  }

  document.getElementById("euro1").value = parseFloat(valorEuro).toFixed(1);
  document.getElementById("dolar1").value = parseFloat(valorDolar).toFixed(1);
}

/* Botão de limpar */
function Clear_third() {
  document.getElementById("euro1").value = "";
  document.getElementById("dolar1").value = "";
}

// conversor de bitcoins para moedas físicas
let elementoHTMLBC = document.getElementById('retornoDoBitCoin')

function Conversor_BitCoin() {
  let moeda = document.getElementById('moedas').value
  let valorMoeda = document.getElementById('valor_moeda').value

  // Treinando a estrutura condicional Switch
  switch (valorMoeda) {
    case "":
      alert('Digite um valor!')
      break;
    default:
      switch (moeda) {
        case "real2":
          valorMoeda = valorMoeda * 196620.9
          elementoHTMLBC.innerHTML = `O valor correspondente em reais é R$${valorMoeda.toFixed(2)}`
          break;
        case "dolar2":
          valorMoeda = valorMoeda * 39140.9
          elementoHTMLBC.innerHTML = `O valor correspondente em dolares é U$${valorMoeda.toFixed(2)}`
          break;
        case "euro2":
          valorMoeda = valorMoeda * 35699.6
          elementoHTMLBC.innerHTML = `O valor correspondente em euros é €${valorMoeda.toFixed(2)}`
          break;
      }
      break;
  }
}

function Clear_forth() {
  document.getElementById("valor_moeda").value = "";
  elementoHTMLBC.innerHTML = "";
}