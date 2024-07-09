console.log("Olá mundo");
let nome = prompt("Qual é o seu nome?");
console.log(`Olá, ${nome}!`);
let numeroAdded = prompt("insira um número entre 1 e 10");
console.log(numeroAdded * 2);
let num1 = parseFloat(prompt("Insira um número"));
let num2 = parseFloat(prompt("Insira mais um número"));
let num3 = parseFloat(prompt("Insira o terceiro e último número"));
let soma = num1 +  num2 + num3;
let media = soma / 3;
console.log(media);
let nu1 = parseFloat(prompt("Insira um número"));
let nu2 = parseFloat(prompt("Insira um número"));
function numeroMaior(nu1, nu2) {
  if (nu1 > nu2){
    return nu1;
  } else  {
    return nu2;
  }
}
console.log(numeroMaior(nu1, nu2));
let numeroEscolhido2 = parseFloat(prompt("Insira um número que será depois multiplicado por ele mesmo"));
let numeroMulti = numeroEscolhido2 * numeroEscolhido2;
console.log(numeroMulti);
