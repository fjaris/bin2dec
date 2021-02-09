const bin = [1, 0, 1, 0, 1, 1]
let calc = 0
let soma = 0
bin.reverse()
for(i = 0; i < bin.length; i++) { 
    calc = (2 ** i) * bin[i]
    soma += calc
}

if(soma >= 256) {
    console.log('O valor excedeu 8 bits')
}else {
    console.log(soma)
}


