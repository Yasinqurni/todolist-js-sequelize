cara menjalankan server menggunakan docker:

- pastikan sudah menginstall docker
- jalankan perintah `docker-compose up` di terminal
- tunggu proses pembuatan kontainer selesai
- selamat menggunakan

list endpoint(swagger belum siap):
- cek server aktif: `GET localhost:9182/healt`
- create todolist: `POST localhost:9182/todolist` - {body}
- get list: `GET localhost:9182/todolist`
- get by id: `GET localhost:9182/todolist/id`
- update: `PUT localhost:9182/todolist/id` - {body}
- delete: `DELETE localhost:9182/todolist/id`

{body}
```
{
    "tags": "lorem",
    "body": "ipsum"
}
```