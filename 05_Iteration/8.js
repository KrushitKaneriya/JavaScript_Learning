// reduce

const myarray = [1, 2, 3]

const sum = myarray.reduce((accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    
    return accumulator + currentValue
}, 0)

// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "cpp course",
        price: 1499
    },
]

const totalAmount = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(totalAmount);