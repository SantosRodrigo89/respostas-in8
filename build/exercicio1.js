function nascimento(nome, data) {
    const array = data.split("/");
    return `Olá me chamo &{nome}, nasci no dia ${array[0]} do mês de ${array[1]} do ano de ${array[2]}`;
}
console.log(nascimento("Rodrigo", "26/09/1989"));
//# sourceMappingURL=exercicio1.js.map