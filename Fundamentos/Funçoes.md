#Funções

##O que é?
conjunto de instruções que executa uma tarefa ou calcula um valor.

##Como declarar?
.Nome da Função.
.Lista de argumentos para a função, entre parênteses e separados por vírgulas.
.Declarações JavaScript que definem a função, entre chaves { }.

// 🎯 EXEMPLO SUPER SIMPLES - Como funções modificam objetos

// 1. Criando um objeto simples (como uma caixa com etiquetas)

var minhaCaixa = {
  cor: "azul",
  tamanho: "pequeno"
};

console.log("ANTES da função:");
console.log("Cor da caixa:", minhaCaixa.cor); // "azul"

// 2. Função que muda a cor da caixa
function mudarCor(caixa) {
  caixa.cor = "vermelho"; // Mudando a etiqueta da cor
  console.log("Dentro da função, cor agora é:", caixa.cor);
}

// 3. Chamando a função
mudarCor(minhaCaixa);

console.log("DEPOIS da função:");
console.log("Cor da caixa:", minhaCaixa.cor); // "vermelho" - mudou!

// 🤔 POR QUE ISSO ACONTECE?
// Quando você passa um objeto para uma função, você está passando
// a "localização" da caixa, não uma cópia dela.
// É como dar o endereço da sua casa para alguém - eles vão
// na sua casa real e mudam as coisas lá!

console.log("\n" + "=".repeat(50));
console.log("EXEMPLO COM PESSOA:");

// Exemplo mais real com pessoa
var pessoa = {
  nome: "João",
  idade: 25
};

function fazerAniversario(alguem) {
  alguem.idade = alguem.idade + 1; // +1 ano
  console.log(alguem.nome + " agora tem " + alguem.idade + " anos!");
}

console.log("Idade antes:", pessoa.idade); // 25
fazerAniversario(pessoa);
console.log("Idade depois:", pessoa.idade); // 26 - mudou!