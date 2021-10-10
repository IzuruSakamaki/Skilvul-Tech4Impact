function getObjectValue(obj, path) {
    let arrPath = path.split('.');
    let value = obj;
    for (let a = 0; a < arrPath.length; a++) {
        let keys = arrPath[a];
        if (value.hasOwnProperty(keys)) {
        value = value[keys];
        } else {
        return null;
        }
    }
    return value;
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
        },
        milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)