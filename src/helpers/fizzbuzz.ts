function fizzbuzz(angka: string) {
    const int = parseInt(angka)
    const result = [];
    for (let i = 1; i <= int; i++) {
        let value = '';

        if (i % 3 === 0) {
            value += 'Fizz';
        }

        if (i % 5 === 0) {
            value += 'Buzz';
        }

        if (!value) {
            value = i.toString();
        }

        result.push(value);
    }
    return result
}

export default fizzbuzz