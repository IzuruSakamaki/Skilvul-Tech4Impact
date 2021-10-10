const isR18Plus = (age) => {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve("Anda sudah dewasa")
        } else {
            reject("Anda masih dibawah umur")
        }
    })
}

const printR18Plus = async () => {
    try {
        const underAge = await isR18Plus(10);
        const properAge = await isR18Plus(19);

        console.log(underAge);
        console.log(properAge);
    } catch (error) {
        console.log(error);
    }
}

printR18Plus();