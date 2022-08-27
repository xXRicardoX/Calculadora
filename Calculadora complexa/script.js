// Função para adicionar os numeros no visor quando presionado os botões
function calNum(num) {
    if (typeof gvisor == 'undefined') {
        document.calcform.visor.value = ''
    }

    document.calcform.visor.value = document.calcform.visor.value + num
    gvisor = 1
}

//Função ára limpar a calculadora e todas as variáveis existentes
function calcLimpar() {
    document.calcform.visor.value = ``
    delete gvalor
    delete goper
    delete gvisor
}

// Função que executa as operações básica da calculadora
function calcOper(oper, valor1, valor2) {
    if (oper == 'somar') {
        valor =parseFloat(valor1) + parseFloat(valor2)
    }else{
        if (oper == 'subtrair') {
            valor =valor1 - valor2
        }else{
            if (oper == 'multiplicar') {
                 valor = valor1 * valor2
            }else{
                 valor = valor1 / valor2
            }
        }
    }

    
    return valor
    
}

// Função do algorítimo de "passagem" das ações do usuário

function calcParse(oper) {

    let valor = document.calcform.visor.value
    delete gvisor

    if (typeof goper != 'undefined' && oper == 'resultado') {
        gvalor = calcOper(goper, gvalor, valor)
        document.calcform.visor.value = gvalor

        delete oper
        delete gvalor
        return (0)
        
    }

    if (typeof gvalor != 'undefined') {
        gvalor = calcOper(goper, gvalor, valor)
        goper = oper

        document.calcform.visor.value = gvalor
    }else{
        gvalor = valor
        goper = oper
    }    
}
