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

const cpfIsValid = (cpf) =>{
    return cpfFinal === cpf ? `${cpf} é um cpf valido` : `${cpf} é um cpf invalido`
}
const cpf1 = '116.168.040-33'//coloque o cpf aqui
const cpfLimpo = cpf1.replace(/\D+/g,'')//troca tudo que não é número para ''
const cpfNoveDigitos = selectAmountCpfDigits('', 9)
const cpfDezDigitos = selectAmountCpfDigits('', 10)
const firstDigit = getLastDigit([], 11,cpfNoveDigitos)
const secondDigit = getLastDigit([], 12,cpfDezDigitos)
const cpfFinal = cpfNoveDigitos.concat(firstDigit, secondDigit)

console.log(cpfIsValid(cpfLimpo))