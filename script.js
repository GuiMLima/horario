function carregar() {
    var msg = window.document.getElementById('horas')
    var msg2 = window.document.getElementById('semana')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 5) {
        img.setAttribute('src','imagens/lua.png')
        document.body.style.backgroundImage ='url(imagens/madrugada.png)'
    } else if (hora >= 5 && hora <= 12) {
        img.setAttribute('src','imagens/cafe.png')
        document.body.style.backgroundImage = 'url(imagens/manha.png)'
    } else if (hora >= 13 && hora < 18) {
        img.setAttribute('src','imagens/sol.png')
        document.body.style.backgroundImage = 'url(imagens/tarde.png)'
    } else {
        img.setAttribute('src','imagens/gato.png')
        document.body.style.backgroundImage = 'url(imagens/noite.png)'
    }
}
