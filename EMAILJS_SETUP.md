# Setup EmailJS untuk Form Contact

## Langkah-langkah Setup:

### 1. Daftar EmailJS
- Kunjungi [https://www.emailjs.com/](https://www.emailjs.com/)
- Buat akun baru atau login

### 2. Buat Email Service
- Di dashboard, klik "Email Services"
- Pilih provider email (Gmail, Outlook, dll)
- Ikuti langkah autentikasi
- Copy **Service ID** yang diberikan

### 3. Buat Email Template
- Klik "Email Templates"
- Buat template baru
- Gunakan variabel berikut:
  - `{{from_name}}` - Nama pengirim
  - `{{from_email}}` - Email pengirim  
  - `{{message}}` - Pesan dari pengirim
  - `{{to_email}}` - Email tujuan (naimplung28@gmail.com)
- Copy **Template ID** yang diberikan

### 4. Dapatkan Public Key
- Di dashboard, klik "Account" → "API Keys"
- Copy **Public Key**

### 5. Update Konfigurasi
- Buka file `src/config/emailjs.js`
- Ganti placeholder dengan credentials yang sudah didapat:
```javascript
export const emailjsConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID',  
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',
  toEmail: 'naimplung28@gmail.com'
};
```

### 6. Test Form
- Jalankan aplikasi
- Coba kirim pesan dari form contact
- Cek email naimplung28@gmail.com

## Fitur yang Sudah Diimplementasi:
✅ Form validation  
✅ Loading state saat submit  
✅ Success/error notifications  
✅ Auto-reset form setelah berhasil  
✅ Responsive design  
✅ Email langsung ke naimplung28@gmail.com  

## Troubleshooting:
- Pastikan semua credentials sudah benar
- Cek console browser untuk error messages
- Pastikan EmailJS service sudah aktif
- Cek spam folder jika email tidak masuk 