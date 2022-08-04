//Pensando em todos os números naturais inferiores a 10 que são múltiplos de 3 ou 5, temos 3, 5, 6 e 9. 
//Somando esses múltiplos obtemos o valor 23. 
//Utilize um algorítimo para calcular a soma de todos os múltiplos de 3 ou 5 abaixo de 1000

const somaMultiplos = (numero: number): number => {
    if (numero === 0) {
        return 0;
    } else if (numero % 3 === 0 || numero % 5 === 0) {
        return numero + somaMultiplos(numero - 1);
    } else {
        return somaMultiplos(numero - 1);
    }
}

console.log(somaMultiplos(999));