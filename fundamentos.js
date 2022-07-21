
function calcularPreco(name, price){
    let shipping_price;
    if (price <= 2000) {
        shipping_price = 300
    } else if (price <= 4000){
        shipping_price = 450
    } else if (price > 4000){
        shipping_price = 700
    } else {
        console.log('Incorrect price')
    }

    console.log(`O produto ${name} custa R$${price}. Seu custo de envio é R$${shipping_price}. Portanto, o preço final é R$${price + shipping_price} `)
}

calcularPreco('Macbook', 20000)
calcularPreco('Iphone', 4000)
calcularPreco('AirPods', 1000)

