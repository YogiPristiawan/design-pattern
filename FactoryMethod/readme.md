# Factory Method

-   Sebuah _class_ yang bertugas untuk membuat instance / object yang diinginkan.
-   _class_ ini merupakan _childclass_ dari abstract class.
-   kelebihan jika ingin mengganti class atau menggunakan flow yang berbeda berdasarkan kondisi tertentu, kita hanya perlu mengganti instansiasi class yang ada di class factory (_childclass_ dari abstract).

### Algoritma

1. buatlah interface yang digunakan untuk menyeragamkan method dari _childclass_ nya. agar masing masing _childclass_ nya memiliki method yang konsisten.
2. buat class yang _implements_ dengan interface dari langkah no. 1, yang mana class ini merupakan lokasi business logic nya.
3. buat abstract class dengan sebuah _<u>blueprint function</u>_ yang _**return type**_ nya merupakan _interface_ dari langkah no. 1
4. buat class yang _extends_ dengan abstract class dari langkah no. 3 dimana body dari _blueprint function_ nya akan mereturn class yang memuat business logic (no. 2)
5. instansiasi function dari langkah no. 4
