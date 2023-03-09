let val = window.document.querySelector('input#valor')
let res = window.document.querySelector('select#txtsel')
let texto = window.document.querySelector('div#div2')
let valores = []


function adicionar (){
    let n = Number(val.value)
    if (n < 1  || n > 100){
        val.value = ''
        val.focus()
        return window.alert('Digite um número entre 1 e 100.')
    }if (valores.indexOf(n) > -1){
        val.value = ''
        val.focus()
            return window.alert('O número já foi adicionado.')
    } else {
        let item = document.createElement('option')
        res.appendChild(item)
        item.text = `Valor ${n} adicionado.`
        valores.push(n)        
    }
    val.value = ''
    val.focus()
}
function reset(){
    if (valores.length == 0){
        return window.alert('Não existem número adicionados.')
    }else {
        // let total = valores.length
        // let maior = valores[0]        
        // let menor = valores[0]      
        // let soma = 0
        // let media = 0
        
        // for (let i in valores){
        //     soma += valores[i]
        //     media = soma/total
        //    if (valores[i] > maior){
        //     maior = valores[i]
        //    }if (valores[i] < menor){
        //     menor = valores[i]
        //    }

        // }
        // texto.innerHTML = ''
        // texto.innerHTML += `<p> Foram adicionados ${total} valores.</p>`
        // texto.innerHTML += `<p>O maior número foi ${maior}</p>`
        // texto.innerHTML += `<p>O menor número foi ${menor}</p>`
        // texto.innerHTML += `<p>A soma foi ${soma}</p>`
        // texto.innerHTML += `<p>A média foi de ${media}</p>`
        
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce(function(soma2, i){
            return soma2 + i
        })
        let media = 0
        media = soma/total

        // for (let i in valores){
        //     soma += valores[i]
        //     media = soma/total
        // }

        texto.innerHTML = ''
        texto.innerHTML += `<p>Foram adicionados ${total} números</p>`
        texto.innerHTML += `<p>O maior número foi: ${maior}</p>`
        texto.innerHTML += `<p>O menor número foi: ${menor}</p>`
        texto.innerHTML += `<p>A Soma dos números foi de: ${soma}</p>`
        texto.innerHTML += `<p>A média dos números foi de: ${media}</p>`
    }
}