### Jawablah pertanyaan di bawah ini:
1. Jelaskan apa yang dimaksud dengan **container** pada docker !
2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
3. Apa yang dimaksud dengan **docker file** ?
4. Apa yang dimaksud dengan **docker registery** ?
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

### Jawab
1. Container merupakan sebuah wadah atau container yang membungkus aplikasi atau berisi library dan dependency pada tumpukan layer image. Container mempermudah developing di OS atau komputer yang berbeda tanpa harus menginstall aplikasi atau set konfigurasi tertentu.
2. VM banyak menggunakan resource untuk virtualisasi OS yang secara langsung menargetkan hardwarenya dan menyebabkan booting yang lama, sedangkan Container hanya memakan sedikit resource virtualisasi karena Container melakukan virtualisasi langsung pada Host OS di mana ia berjalan.
3. Dockerfile merupakan code file yang berisi perintah yang dapat di run untuk membuat image docker.
4. Docker registry merupakan repository untuk menyimpan image pada docker hub yang bisa melakukan push dan pull.
5. Untuk membuat image multi-container kita dapat menggunakan docker compose dengan format file docker-compose.yml yang menggabungkan beberapa dockerfile. dengan ini kita dapat menjalankan image hanya dengan satu localhost.