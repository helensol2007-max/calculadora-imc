let peso = 65
let altura = 1.89
let imc = (peso/altura * altura)


if (imc <= 27.29){
    console.log ("bajo peso")
}else if(imc >= 27.30 && imc <= 30.10 ){
    console.log ("peso normal")
}else if(imc >= 30.11 && imc <= 40.20 ){
    console.log ("sobre peso")
}else if (imc > 40.20){
    console.log ("obesidad")
}
