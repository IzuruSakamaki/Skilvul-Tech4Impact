function trianglePattern(a, b) {
    if (a == 0) {
        return
    }
    let space = ""
    for (let idx = 0; idx < b; idx++) {
        if (idx < a - 1) {
            space += " "
        } else {
            space += String.fromCharCode(64 + (b - a + (idx - a) + 2))
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
}

trianglePattern(5, 5);