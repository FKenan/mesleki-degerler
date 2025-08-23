# Mesleki Değerler Egzersizi ve Kariyer Rehberi

Bu web uygulaması, kullanıcıların mesleki değerlerini keşfederek kariyer hedeflerine en uygun üniversite bölümlerini bulmalarına yardımcı olmak amacıyla geliştirilmiş bir bitirme projesidir. İnteraktif bir egzersizle kullanıcılar, kendileri için önemli olan değerleri belirler ve bu doğrultuda kişiselleştirilmiş bölüm önerileri alırlar. Proje, kariyer yolculuğunun başındaki bireylere rehberlik etmeyi amaçlamaktadır.

## ✨ Özellikler

- **İnteraktif Değer Egzersizi:** Kullanıcılar, masaüstünde sürükle-bırak, mobilde ise butonlar aracılığıyla değer kartlarını "Önemli" ve "Önemsiz" olarak iki gruba ayırır.
- **Değerleri Önceliklendirme:** "Önemli" olarak gruplanan değerler arasından en önemli 5 tanesini seçerek kişisel önceliklerini belirler.
- **Kişiselleştirilmiş Bölüm Önerileri:** Belirlenen öncelikli değerlere göre kullanıcıya en uygun üniversite bölümleri listelenir.
- **Duyarlı (Responsive) Tasarım:** Hem masaüstü hem de mobil cihazlarda sorunsuz bir kullanıcı deneyimi sunar.
- **Modern ve Kullanıcı Dostu Arayüz:** [Material-UI](https://mui.com/) kullanılarak oluşturulmuş temiz ve sezgisel bir arayüz.
- **Merkezi Durum Yönetimi:** [Redux Toolkit](https://redux-toolkit.js.org/) ile tüm uygulama durumu verimli bir şekilde yönetilir.

---

## 🚀 Kullanılan Teknolojiler

| Teknoloji                                                    | Açıklama                                                              |
| ------------------------------------------------------------ | --------------------------------------------------------------------- |
| **[React](https://reactjs.org/)**                            | Kullanıcı arayüzü oluşturmak için kullanılan JavaScript kütüphanesi.  |
| **[Redux Toolkit](https://redux-toolkit.js.org/)**           | Uygulama genelinde state yönetimi için.                               |
| **[React Router](https://reactrouter.com/)**                 | Sayfalar arası geçiş ve yönlendirme (routing) için.                   |
| **[Material-UI (MUI)](https://mui.com/)**                    | Hızlı ve şık bir tasarım için hazır UI component'leri.                |
| **[React-DND](https://react-dnd.github.io/react-dnd/about)** | Masaüstü görünümünde sürükle-bırak (drag-and-drop) işlevselliği için. |
| **[Vite](https://vitejs.dev/)**                              | Hızlı ve modern bir geliştirme ortamı ve build aracı.                 |

---

## 🛠️ Kurulum ve Başlatma

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
├── pages/          # Her bir sayfa için ana component'ler ve alt component'leri
│   ├── home/       # Ana sayfa
│   └── ValuesExercise/ # Değer egzersizinin yapıldığı sayfa ve adımları
│       ├── mobile/ # Egzersizin mobil görünümleri
│       ├── step1/  # 1. Adım component'leri
│       ├── step2/  # 2. Adım component'leri
│       ├── step3/  # 3. Adım component'leri
│       └── result/ # Sonuç sayfası
├── store/          # Redux store konfigürasyonu
├── theme/          # Material-UI tema ayarları
└── App.jsx         # Ana uygulama component'i ve yönlendirme (routing) mantığı
```

---
