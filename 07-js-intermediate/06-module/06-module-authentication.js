export default function validateLoginData(email, password) {
    const emailPattern = new RegExp(/^\S+@\S+\.\S+$/)
    const passPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[/!@#$%^&*.])(?=.{8,})")

    if (emailPattern.test(email)) {
        if (passPattern.test(password)) {
            return `Welcome to the Jungle`
        } else {
            return `Tolong masukkan password sesuai ketentuan`
        }
    }
    return `Tolong masukkan email yang valid`
}