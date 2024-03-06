function inverterString(str) {
  let caracteres = str.split("");

  let invertido = caracteres.reverse();

  let resultado = invertido.join("");

  return resultado;
}

const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);
