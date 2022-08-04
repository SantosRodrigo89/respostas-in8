
//Crie uma função recursiva para descobrir o menor número inteiro divisível por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.


const menorInteiro = (a: number, b: number, c: number): number => {

    
    if (a % 2 === 0 && a % 3 === 0 && a % 10 === 0) {
        return a;
    } else if (b % 2 === 0 && b % 3 === 0 && b % 10 === 0) {
        return b;
    } else if (c % 2 === 0 && c % 3 === 0 && c % 10 === 0) {
        return c;
    } else {
        return menorInteiro(a + 1, b + 1, c + 1);
    }

}

console.log(menorInteiro(2, 3, 10));



