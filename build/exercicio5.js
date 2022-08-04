const array = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" },
];
function admin(array) {
    return array
        .filter((email) => {
        return email.role === "admin";
    })
        .map((email) => {
        return email.email;
    });
}
console.table(admin(array));
//# sourceMappingURL=exercicio5.js.map