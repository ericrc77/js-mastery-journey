let array = [];
function adicionar(numero) {
    array.push(numero);
}

adicionar(1);
adicionar(2);
adicionar(3);

function dobrado() {
    return array.map(x => x * 2);
}

console.log(dobrado());

// versão simples
let arr = [1, 2, 3];
let dobrador = arr.map(x => x * 2);
console.log(dobrador);