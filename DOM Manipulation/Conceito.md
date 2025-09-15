1. CONCEITO: O que é DOM e por que usar
O que:
O DOM é uma representação em árvore de todos os elementos HTML de uma página. Com JavaScript, você pode acessar, modificar, criar ou remover elementos dessa árvore, tornando a página dinâmica.

Por quê:
Usar o DOM permite criar experiências interativas, como formulários dinâmicos, listas que crescem, animações, etc. É a base de qualquer aplicação web moderna.

2. CÓDIGO PRÁTICO: Exemplo funcional
Vamos criar um botão que, ao ser clicado, adiciona um novo item a uma lista:
<!DOCTYPE html>
<html>
  <body>
    <ul id="lista">
      <li>Item 1</li>
    </ul>
    <button id="adicionar">Adicionar item</button>

    <script>
      const lista = document.getElementById('lista');
      const botao = document.getElementById('adicionar');
      let contador = 2;

      botao.addEventListener('click', function() {
        const novoItem = document.createElement('li');
        novoItem.textContent = `Item ${contador++}`;
        lista.appendChild(novoItem);
      });
    </script>
  </body>
</html>

Abra esse arquivo no navegador e teste!

3. VARIAÇÕES: Outras formas de implementar
Usando innerHTML:

botao.onclick = () => {
  lista.innerHTML += `<li>Item ${contador++}</li>`;
};

Com funções separadas:

function adicionarItem() {
  const novoItem = document.createElement('li');
  novoItem.textContent = `Item ${contador++}`;
  lista.appendChild(novoItem);
}
botao.addEventListener('click', adicionarItem);

Usando eventos inline (não recomendado):

<button onclick="adicionarItem()">Adicionar item</button>

4. PITFALLS: O que evitar
Usar innerHTML para tudo:
Pode causar problemas de segurança (XSS) e sobrescrever eventos.
Eventos inline:
Mistura HTML e JS, dificulta manutenção.
Não verificar se elementos existem:
Pode causar erros se IDs mudarem.
5. PRÓXIMO NÍVEL: Como evoluir
Adicione campos de input para criar itens personalizados.
Remova itens da lista ao clicar neles.
Use classes CSS para animar a adição/remoção de itens.
Explore frameworks como React ou Vue para manipulação mais avançada.
6. PERGUNTA REFLEXIVA
Quando você deve manipular o DOM diretamente e quando faz sentido usar um framework?