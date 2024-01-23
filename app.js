function tituloDoSite() {
    let greeting = document.querySelector('h1');
    greeting.innerHTML = 'Decodificador de Texto';
    return greeting;
}

function rodape() {
    let rodape = document.querySelector('footer');
    rodape.innerText = 'Erick Rodrigues 2024';
}

tituloDoSite();
rodape();