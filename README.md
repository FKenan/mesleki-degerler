# 🚀 Mesleki Değerler Egzersizi ve Kariyer Rehberi

Bu web uygulaması, kullanıcıların mesleki değerlerini keşfederek kariyer hedeflerine en uygun üniversite bölümlerini bulmalarına yardımcı olmak amacıyla geliştirilmiş bir bitirme projesidir. İnteraktif bir egzersizle kullanıcılar, kendileri için önemli olan değerleri belirler ve bu doğrultuda kişiselleştirilmiş bölüm önerileri alırlar. Proje, kariyer yolculuğunun başındaki bireylere rehberlik etmeyi amaçlamaktadır.

## ✨ Özellikler

- **İnteraktif Değer Egzersizi:** Kullanıcılar, masaüstünde sürükle-bırak, mobilde ise butonlar aracılığıyla değer kartlarını "Önemli" ve "Önemsiz" olarak iki gruba ayırır.
- **Değerleri Önceliklendirme:** "Önemli" olarak gruplanan değerler arasından en önemli 5 tanesini seçerek kişisel önceliklerini belirler.
- **Kişiselleştirilmiş Bölüm Önerileri:** Belirlenen öncelikli değerlere göre kullanıcıya en uygun üniversite bölümleri listelenir.
- **Duyarlı (Responsive) Tasarım:** Hem masaüstü hem de mobil cihazlarda sorunsuz bir kullanıcı deneyimi sunar.
- **Modern ve Kullanıcı Dostu Arayüz:** [Material-UI](https://mui.com/) kullanılarak oluşturulmuş temiz ve sezgisel bir arayüz.
- **Akıcı Animasyonlar:** `Framer Motion` ile zenginleştirilmiş, kullanıcı deneyimini artıran akıcı geçişler ve animasyonlar.
- **Merkezi Durum Yönetimi:** [Redux Toolkit](https://redux-toolkit.js.org/) ile tüm uygulama durumu verimli bir şekilde yönetilir.

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji                                                    | Açıklama                                                                                                      |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **[React](https://react.dev/)**                              | Kullanıcı arayüzleri oluşturmak için kullanılan deklaratif JavaScript kütüphanesi.                            |
| **[Redux Toolkit](https://redux-toolkit.js.org/)**           | Uygulama genelinde state yönetimi için önerilen standart yaklaşım.                                            |
| **[React Router](https://reactrouter.com/)**                 | Tek sayfa uygulamalarında (SPA) dinamik yönlendirme ve navigasyon sağlar.                                     |
| **[Material-UI (MUI)](https://mui.com/)**                    | Google'ın Material Design prensiplerine dayalı, hazır ve özelleştirilebilir React UI bileşenleri kütüphanesi. |
| **[React-DND](https://react-dnd.github.io/react-dnd/about)** | Masaüstü görünümünde sürükle-bırak (drag-and-drop) işlevselliği için.                                         |
| **[Framer Motion](https://www.framer.com/motion/)**          | React uygulamalarında akıcı ve performanslı animasyonlar oluşturmak için güçlü bir kütüphane.                 |
| **[Vite](https://vitejs.dev/)**                              | Hızlı ve modern bir geliştirme ortamı ve build aracı.                                                         |

---

## 🚀 Kurulum ve Başlatma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu klonlayın:**

    ```bash
    git clone https://github.com/FKenan/mesleki-degerler.git
    ```

2.  **Proje dizinine gidin:**

    ```bash
    cd mesleki-degerler
    ```

3.  **Gerekli paketleri yükleyin:**

    ```bash
    npm install
    ```

4.  **Geliştirme sunucusunu başlatın:**

    ```bash
    npm run dev
    ```

5.  Uygulamayı tarayıcıda görüntülemek için `http://localhost:5173` (veya terminalde belirtilen port) adresini ziyaret edin.

---

## 📂 Proje Yapısı

Projenin temel klasör yapısı, kodun modüler ve anlaşılır olmasını sağlamak amacıyla aşağıdaki gibi düzenlenmiştir:

```
src/
├── context/        # React Context API'si için kullanılan dosyalar
├── components/     # Proje genelinde kullanılan ortak component'ler (Navbar, Footer vb.)
├── layouts/        # Uygulama genelinde kullanılan layout component'leri
├── pages/          # Her bir sayfa için ana component'ler ve alt component'leri
│   ├── home/       # Ana sayfa
│   ├── notFound/   # 404 Hata sayfası
│   └── ValuesExercise/ # Değer egzersizinin yapıldığı sayfa ve adımları
│       ├── mobile/ # Egzersizin mobil görünümleri
│       ├── step1/  # 1. Adım component'leri
│       ├── step2/  # 2. Adım component'leri
│       └── result/ # Sonuç sayfası
├── store/          # Redux store konfigürasyonu
├── theme/          # Material-UI tema ayarları (Eğer varsa)
└── App.jsx         # Ana uygulama component'i ve yönlendirme (routing) mantığı
```

---

## 🌐 Canlı Demo

Projenin canlı demosuna buradan ulaşabilirsiniz: [https://mesleki-degerler.vercel.app/](https://mesleki-degerler.vercel.app/)

---
