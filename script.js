function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(' [ERROR] Check the input and try again.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
           if (fsex[0].checked) {
            gênero = 'man'
            if (idade >= 0 && idade <= 10) {
                //kid
                img.setAttribute('src', './assets/foto-bebe-m.png')
             } else if (idade < 21) {
                //young
                img.setAttribute('src', './assets/foto-jovem-m.png')
              } else if (idade <50) {
                //adult
                img.setAttribute('src', './assets/foto-adulto-m.png')
               } else {
                //elderly
                img.setAttribute('src', './assets/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'woman'
            if (idade >= 0 && idade <= 10) {
                //kid
                img.setAttribute('src', './assets/foto-bebe-f.png')
             } else if (idade < 21) {
                //young
                img.setAttribute('src', './assets/foto-jovem-f.png')
              } else if (idade <50) {
                //adult
                img.setAttribute('src', './assets/foto-adulto-f.png')
               } else {
                //elderly
                img.setAttribute('src', './assets/foto-idoso-f.png')
            }
        }
        res.innerHTML = `You are a ${gênero} with ${idade} years old`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
