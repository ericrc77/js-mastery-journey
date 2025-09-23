
  function atualizarRelogio() {
    const agora = new Date(); // Pega a data e hora atual
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona zero à esquerda se necessário
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    //atualiza o conteúdo do elemento h1 com o id "relogio"
    document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
    }
    setInterval(atualizarRelogio, 1000); // Atualiza o relógio a cada segundo
    atualizarRelogio(); // Chama a função imediatamente para evitar atraso de 1 segundo
