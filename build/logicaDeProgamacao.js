const somaMultiplos = (numero) => {
    if (numero === 0) {
        return 0;
    }
    else if (numero % 3 === 0 || numero % 5 === 0) {
        return numero + somaMultiplos(numero - 1);
    }
    else {
        return somaMultiplos(numero - 1);
    }
};
console.log(somaMultiplos(999));
//# sourceMappingURL=logicaDeProgamacao.js.map