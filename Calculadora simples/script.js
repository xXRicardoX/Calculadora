let valor1 = document.getElementById('txnumber1')
let valor2 = document.getElementById('txnumber2')

let res = document.getElementById('res')


function somar(){


    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)

    let s = n1+n2

    res.innerHTML = `<p> ${s}</p>`

}
function menos(){


    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)

    let s = n1 - n2

    res.innerHTML = `<p> ${s}</p>`

}
function mult(){


    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)

    let s = n1 * n2

    res.innerHTML = `<p> ${s}</p>`

}
function div(){


    let n1 = Number(valor1.value)
    let n2 = Number(valor2.value)

    let s = n1+n2

    res.innerHTML = `<p> ${s}</p>`

}
function limpar(){
      
    
    res.innerHTML = ``

}