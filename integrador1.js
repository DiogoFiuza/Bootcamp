let products = require('./products');

(function addId(){
    products.forEach((element, i) => {
        element.id = i + 1
    })
})()

//Imprimindo o nome dos produtos
const productsList = () => {
    for ( ele of products) {
        console.log(ele.name)
    }
}
// productsList()

//Imprimindo o terceiro elemento da lista
const removeProduct = (position) => {
    console.log(products[position]);
}
// removeProduct(3)

//Imprimindo produtos com a cor preta
const removeWithColor = (color) => {
    for (ele of products) {
        if(ele.colors.includes(color)){
            console.log(ele)
        }
    }
}
// removeWithColor('black')

//Imprimir produtos sem cores cadastradas
const noHaveColor = () => {
    for (ele of products) {
        if(ele.colors.length == 0 ){
            console.log(ele)
        }
    }
}
// noHaveColor()