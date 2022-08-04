var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function filmes(nome, ano, genero, pontuação) {
    return {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuação: pontuação ? pontuação : "Sem pontuação",
    };
}
console.table(filmes("Forest Gump", 1950, GENERO.DRAMA));
//# sourceMappingURL=exercicio3.js.map