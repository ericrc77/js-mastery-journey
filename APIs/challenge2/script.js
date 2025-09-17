// Exemplo de consumo de API: Buscar usuários do GitHub e exibir nome e avatar

const input = document.createElement('input');
input.placeholder = 'Digite um nome de usuário do GitHub';
const button = document.createElement('button');
button.textContent = 'Buscar Usuário';
const result = document.createElement('div');

document.body.appendChild(input);
document.body.appendChild(button);
document.body.appendChild(result);

button.addEventListener('click', async () => {
    const username = input.value.trim();
    if (!username) {
        result.textContent = 'Digite um nome de usuário válido.';
        return;
    }
    result.textContent = 'Buscando...';
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Usuário não encontrado');
        const data = await response.json();
        result.innerHTML = `
            <h2>${data.name || data.login}</h2>
            <img src="${data.avatar_url}" width="100" />
            <p>Repositórios públicos: ${data.public_repos}</p>
        `;
    } catch (e) {
        result.textContent = 'Usuário não encontrado ou erro na requisição.';
    }
});
