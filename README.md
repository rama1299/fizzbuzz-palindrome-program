
# FizzBuzz Palindrome program

Fizzbuzz Palindrome Program adalah program sederhana yang dapat menghasilkan deret bilangan "FizzBuzz" sebanyak jumlah angka yang diinputkan oleh pengguna. Program ini juga dapat memeriksa apakah kata atau angka yang di input merupakan "Palindrome" atau tidak.

## Instalasi
    `git clone https://github.com/rama1299/fizzbuzz-palindrome-program.git`
    `cd fizzbuzz-palindrome-program`
    `npm install`
    `npm run start`
## API Documentation

Berikut adalah dokumentasi API untuk proyek ini.

### Endpoint: POST `/fizzbuzz`

Menghasilkan deret "FizzBuzz" sebanyak `angka` yang diinputkan.

**Metode HTTP:** `POST`

**URL:** `/fizzbuzz`

#### Permintaan

- **Body (JSON):**
  - `angka` (string, wajib): Jumlah angka yang ingin dihasilkan dalam deret FizzBuzz.

#### Contoh Permintaan

```http
POST /fizzbuzz
Content-Type: application/json

{
  "angka": "10"
}

```

### Endpoint: POST `/palindrome`

Mengecek kata atau angka merupakan "Palindrome" atau tidak.

**Metode HTTP:** `POST`

**URL:** `/palindrome`

#### Permintaan

- **Body (JSON):**
  - `kata` (string, wajib): Kata atau angka yang akan di cek.

#### Contoh Permintaan

```http
POST /palindrome
Content-Type: application/json

{
  "kata": "kodok"
}

```
