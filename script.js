function nextInLine(arr, item) {
    // push retorna o número no qual foi removido com a própria função
    arr.push(item)
    // return arr.shift retorna o valor que foi removido no final do array
    return arr.shift()
}

const testArr = [1, 3, 2, 4, 5];

// Exibir o código
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));
