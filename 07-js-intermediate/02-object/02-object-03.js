// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    let items2 = [];
    for (let a = 0; a < items.length; a++) {
        let arr = items[a];
        let arrTemp = {
            btc: 0,
            eth: 0,
            doge: 0
        }
        let valueBtc = Object.values(arr.btc).reduce((prev, curr) => curr - prev);
        let valueEth = Object.values(arr.eth).reduce((prev, curr) => curr - prev);
        let valueDoge = Object.values(arr.doge).reduce((prev, curr) => curr - prev);
        arrTemp['btc'] = valueBtc;
        arrTemp['eth'] = valueEth;
        arrTemp['doge'] = valueDoge;
        items2.push(arrTemp);
    }
    let sum = items2.reduce((prevValue, currValue) => {
        currValue.btc += prevValue.btc;
        currValue.eth += prevValue.eth;
        currValue.doge += prevValue.doge;
        return currValue;
    }, { btc: 0, eth: 0, doge: 0 });
    return sum;
}
console.log(calculateIncome(items));