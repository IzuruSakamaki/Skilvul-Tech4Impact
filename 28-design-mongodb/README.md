1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi _Skiljek_ dan relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:

- **Full Name**
- **Email**
- **Phone Number**

> **Relasi: One to One**

> **Skema:**

```js

{
    "_id": "ObjectId('AAA')",
    "fullName": "Dio",
    "email": "dio@mail.com",
    "phoneNumber": "08999999998"
}

```

2. Buatlah skema untuk kebutuhan data alamat pengguna _SkilShop_ dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang dibutuhkan adalah:

- **Full Name**
- **Phone Number**
- **Address (Max 2)**

> **Relasi: One to Few/Many**

> **Skema:**

```js

{
    "_id": "ObjectId('AAB')",
    "fullName": "Dio",
    "phoneNumber": "08999999998",
    "address": ["Bandung", "Bogor"]
}

```

3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi _SkilShop_. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Contoh data yang dibutuhkan adalah:

- **Product**

  - Product Name: Kaos Polos
  - Brand Name: SkilShirt

- **Varian Pertama**

  - Varian Name 1: Kaos Polos Hitam
  - Color: Hitam
  - Quantity: 12
  - Price: Rp 99.000

- **Varian Kedua**
  - Varian Name 2: Kaos Polos Navy
  - Color: Navy
  - Quantity: 10
  - Price: Rp 99.000

> **Relasi: One to Many**

> **Skema:**

```js

// products

{
    "_id": "ObjectId('AAC')",
    "productName": "Kaos Polos",
    "brandName": "SkilShirt",
    "variants": ["ObjectId('AA1')", "ObjectId('AA2')"]
}

```

```js

// variants

{
    "_id": "ObjectId('AA1')",
    "nameVariant": "kaos Polos Hitam",
    "color": "Hitam",
    "qty": 12,
    "price": 99000
}

{
    "_id": "ObjectId('AA2')",
    "nameVariant": "kaos Polos Navy",
    "color": "Navy",
    "qty": 10,
    "price": 99000
}

```

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama _SkilFlix_. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Contoh Data yang dibutuhkan:

- **Cinemas**

  - _First Cinema_

    - Cinema Name: CGF
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Pondok Indah Mall

  - _Second Cinema_

    - Cinema Name: Cinema31
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Mall Kelapa Gading

> **Relasi: Many to Many**

> **Skema:**

```js

// cinemas

{
    "_id": "ObjectId('BBB')",
    "cinemaName": "Cinema31",
    "films": ["ObjectId('BB1')", "ObjectId('BB2')"],
    "location": "Pondok Indah Mall"
}

{
    "_id": "ObjectId('BBC')",
    "cinemaName": "CGF",
    "films": ["ObjectId('BB1')", "ObjectId('BB2')"],
    "location": "Mall Kelapa Gading"
}

```

```js

// films

{
    "_id": "ObjectId('BB1')",
    "name": "Venom 2",
    "cinemaName": ["ObjectId('BBB')", "ObjectId('BBC')"]
}

{
    "_id": "ObjectId('BB2')",
    "name": "Spiderman No Way Home",
    "cinemaName": ["ObjectId('BBB')", "ObjectId('BBC')"]
}

```
