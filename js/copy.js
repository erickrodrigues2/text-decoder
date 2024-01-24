var copy = document.querySelector('.btn-copiar');

copy.onclick = function() {
    resultado.select();
    document.execCommand("copy");
    imputTexto.value = "";
    imputTexto.focus();
    resultado.textContent = "";
    copy.classList.add("invisivel");
}