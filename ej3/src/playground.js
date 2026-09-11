function clone(source) { return ({ ...source }) };
const clon = clone({ nombre: "Miguel", apellido: "Lopez" })
console.log(clon)


const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
function merge(source, target) {
    return { ...target, ...source }
}
console.log(merge(a, b));