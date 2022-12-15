# SAHİBİNDEN FRONTEND CODE CASE

## KURALLAR
- Framework olarak Angular kullanılmalı.
- Herhangi bir CSS Pre-processor kullanılmalı.
- Projede istenilen tüm özellikler çalışır halde teslim edilmeli.
- Readme dosyası içerisinde projenin nasıl çalıştırılacağınadair bilgi yazılmalı.

## TASARIM
Size aşağıda verdiğimiz mock sayfaları tasarım konusunda size yol gösterecektir. Sizden
istenilen sayfaları istediğiniz gibi tasarlayabilir, isterseniz hazır UI kütüphanesi kullanabilirsiniz.

## BAŞLARKEN
Public OMDb API’yi kullanabilmek için öncelikle http://www.omdbapi.com/apikey.aspx
adresinden Free plan seçerek kayıt olmalısınız. Mail adresinize API KEY iletilecektir. Mailin en
altındaki linkten API KEY’inizi aktif etmelisiniz. Artık
http://omdbapi.com/?apikey=[key]&s=matrix şeklinde arama yapabilirsiniz.

## PROJE YAPISI
- Bu Proje toplamda 4 sayfadan oluşmaktadır.
- Tüm sayfalarda Header olmalı. Bu header içerisinde istediğiniz bir logo ve “Film Ekle” butonu olmalı.
Logoya tıklandığında Film Listeleme Sayfasına yönlenmeli.


## LOGIN SAYFASI
- Kullanıcı adı “admin” şifre “123456” bilgileri ile giriş yapılabilecek bir ekran olmalı.
- Login olmamış kullanıcı hiçbir sayfaya gidememeli.
- Kullanıcı login olduğunda, header’a “Çıkış Yap” butonu gelmeli.

## FİLM LİSTELEME SAYFASI
- Sayfa açıldığında ilk filmlerin görsellerinin gösterildiği listeleme sayfası açılmalı.
- Listelenecek bir sonuç olmadığında "Henüz içerik girilmedi" yazılmalı.
- Film görselleri lazy-load yüklenmeli. Skeleton yapısı kurulmalı. (Görsel optimizasyonu için
API’den gelen görselin sonundaki x300 değeri değiştirilebilir). *-Bonus-*
- Filmler ilk yüklemede en fazla 10 adet gösterilmeli. Daha fazla film varsa listenin altına
“Daha Fazla Yükle” butonu eklenmeli, tıklandığında 10 film daha yüklenmeli.
- “Daha Fazla Yükle” butonu kullanılmadan sayfanın en altına scroll yapıldığında 10 film
daha yüklenmeli. *-Bonus-*
- En son eklenen film en üstte olmalı.
- Sıralama özelliği olmalı. Puana göre en düşük - en yüksek olarak sıralanabilmeli. (Puanları
aynı ise en son eklenen üstte olmalı)
- Arama kutusu olmalı. Inputa yazmaya başladığında eş zamanlı arama yapabilmeli. *-Bonus-*
- Film görselinin üzerine geldiğinde, görsel kararıp üzerine ortalı bir şekilde filmin adı, puanı
ve sağ üst köşede sil butonu olmalı.
- Filme tıklandığında Film güncelleme sayfasına gitmeli.
- Sil butonuna basıldığında “Silmek istediğinize emin misiniz?” modal'ı açılmalı.
- Film silindiğinde bir notification ile “... filmi silinmiştir.” yazmalı.

## FİLM EKLEME SAYFASI
- Bir arama kutusu olmalı. Inputa yazmaya başladığında OMDb API ile search yaparak
filmleri Adı ve Görseli ile listelemeli.
- Form alanında Film adı (disabled), Film görseli (disabled) ve Film puanı olmalı. Arama
alanından seçilen filmin adı ve görseli otomatik bu forma dolmalı.
- Puan text input olmalı. 0-10 arası ve sadece sayı girilebilmeli.
- Kaydet butonuna basıldığında bir notification ile “... filmi eklenmiştir.” uyarısı gösterilmeli.

## FİLM GÜNCELLEME SAYFASI
- Filmin sadece puanı güncellenebilmeli.

## VERİ TABANI
- Bilgiler localStorage’da tutulabilir.
- localStorage yerine fake REST API Backend oluşturabilirsiniz. *-Bonus-*


## MOCK SAYFALAR

*Film Listeleme*
![Film Listeleme](https://user-images.githubusercontent.com/2634568/127293094-c88645c1-1878-4b75-a889-00ea876c63eb.png)

*Film Ekleme*
![Film Ekleme](https://user-images.githubusercontent.com/2634568/127293603-9bfb2d3e-81e4-4ae0-af16-cc3b6faa9147.png)

*Film Güncelleme*
![Film Güncelleme](https://user-images.githubusercontent.com/2634568/127293634-34620ed6-a8c1-4922-a572-50917db9af9a.png)