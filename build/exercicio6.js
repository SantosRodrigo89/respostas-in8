const clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];
const saldoAtualizado = (clientes) => {
    return clientes
        .map((cliente) => {
        const debitoSoma = cliente.debitos.length > 0
            ? cliente.debitos.reduce((acc, cur) => acc + cur, 0)
            : 0;
        const attSaldo = cliente.saldoTotal - debitoSoma;
        return Object.assign(Object.assign({}, cliente), { saldoTotal: attSaldo, debitos: [] });
    })
        .filter((clientMap) => {
        return clientMap.saldoTotal < 0;
    });
};
console.table(saldoAtualizado(clientes));
//# sourceMappingURL=exercicio6.js.map