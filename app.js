const getLastDigit = (array=[], beginValue,amountDigit=0) =>{
    let i = beginValue
    array = Array.from(amountDigit).map((digit) =>{
        i--
        return digit * i
    }).reduce((total, value) =>{
        return total += Number(value)
    })
    array = 11 - (array % 11)
    return array
}

const selectAmountCpfDigits = (value='', amount) =>{
    for(let j = 0; j < amount; j++){
        value += cpfLimpo.charAt(j)
    }
    return value
}

const isSequence = () =>{
    const sequence = cpfLimpo[0].repeat(cpfLimpo.length)
    return sequence === cpfLimpo
}

const cpfIsValid = (cpf) =>{
    if(isSequence()) return `${userCpf} é um cpf invalido`
    return cpfFinal === cpf ? `${userCpf} é um cpf valido` : `${userCpf} é um cpf invalido`
}

const userCpf = '111.111.111-11'//coloque o cpf aqui
const cpfLimpo = userCpf.replace(/\D+/g,'')//troca tudo que não é número para ''
const cpfNoveDigitos = selectAmountCpfDigits('', 9)
const cpfDezDigitos = selectAmountCpfDigits('', 10)
const firstDigit = getLastDigit([], 11,cpfNoveDigitos)
const secondDigit = getLastDigit([], 12,cpfDezDigitos)
const cpfFinal = cpfNoveDigitos.concat(firstDigit, secondDigit)

console.log(cpfIsValid(cpfLimpo))