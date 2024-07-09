function saudar() {
    console.log("Olá mundo");
  }
  
  function perguntarNome() {
    let nome = prompt("Qual é o seu nome?");
    console.log(`Olá, ${nome}!`);
  }
  
  function dobrarNumero() {
    let numeroAdded = parseFloat(prompt("Insira um número entre 1 e 10"));
    console.log(numeroAdded * 2);
  }
  
  function calcularMedia() {
    let num1 = parseFloat(prompt("Insira um número"));
    let num2 = parseFloat(prompt("Insira mais um número"));
    let num3 = parseFloat(prompt("Insira o terceiro e último número"));
    let soma = num1 + num2 + num3;
    let media = soma / 3;
    console.log(media);
  }
  
  function numeroMaior(nu1, nu2) {
    if (nu1 > nu2) {
      return nu1;
    } else {
      return nu2;
    }
  }
  
  function compararNumeros() {
    let nu1 = parseFloat(prompt("Insira um número"));
    let nu2 = parseFloat(prompt("Insira um número"));
    console.log(numeroMaior(nu1, nu2));
  }
  
  function multiplicarPorEleMesmo() {
    let numeroEscolhido2 = parseFloat(prompt("Insira um número que será depois multiplicado por ele mesmo"));
    let numeroMulti = numeroEscolhido2 * numeroEscolhido2;
    console.log(numeroMulti);
  }
  
  // Chamando as funções
  saudar();
  perguntarNome();
  dobrarNumero();
  calcularMedia();
  compararNumeros();
  multiplicarPorEleMesmo();
  