let products = require('./products');

//Adicionando novo produto a lista
function newProduct(name, price, quantity, colors){
    products.push({name,price, quantity, colors })
    return products
}
newProduct('AirPods', 1500, 10, ['red', 'black'])
// console.log(products); 


//Removendo produtos fora do estoque
const cleanedList = () => {
    products = products.filter((e) => e.quantity != 0 )
    console.log(products); 
}
// cleanedList()


//Soma de todos os produtos do estoque
const sumOfProducts = () =>{
    let sum = products.reduce((acc, cur) => acc + cur.quantity ,0)
    console.log(sum);
} 
// sumOfProducts()



//Imprimindo produtos com valores acima de 500
const productsAboveValue = (value) => {
    products.forEach(e => {
        if (e.price > value){
            console.log(e);
        }
    })
}
// productsAboveValue(500)


//Imprimir todos os nomes com a letra 'o'
const wordWithLetter = (letter) => {
    for (prod of products){
        if ( prod.name.includes(letter) ){ console.log(prod);}
    }
}
// wordWithLetter("o")

