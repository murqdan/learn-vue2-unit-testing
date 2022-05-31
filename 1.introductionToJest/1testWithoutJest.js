const getTotalPrice = (price, disc) => {
    if(typeof(price) !== 'number' || typeof(disc) !== 'number') {
        return 'Error, invalid arguments'
    }

    const DEFAULT_TAX = 10
    const discount = price * disc / 100
    const tax = price * DEFAULT_TAX / 100
    const totalPrice = price - discount - tax

    return `Rp. ${totalPrice.toLocaleString('id', 'ID')}`
}

const price = getTotalPrice(100000, 20)
// console.log(price)

if (price === "Rp. 70,000") {
    console.log('function correct!')
} else {
    console.log('function wrong!')
}