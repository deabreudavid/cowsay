const { name, campus } = require("./informations");
const { say } = require("cowsay");
const cowsay = say({
    text: `Hello I'm ${name} from ${campus} Campus! `,
    T: "U",
    e: "oO",
})
console.log(cowsay);