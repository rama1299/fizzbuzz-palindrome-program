function palindrome(kata: string) {
    for (let i = 0; i < kata.length / 2; i++) {
        let indexAwal = i
        let indexAkhir = kata.length - i - 1

        if (kata.charAt(indexAwal) !== kata.charAt(indexAkhir)) {
            return false
        }
    }
    return true
}

export default palindrome