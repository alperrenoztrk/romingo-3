

## Plan: Web sitesi arayüzünü kaldır, sadece uygulama kalsın

### Yapılacaklar

1. **App.tsx routing değişiklikleri:**
   - `/` rotasını `WebsitePage` yerine `HomePage`'e yönlendir (giriş yapılmışsa) veya `LoginPage`'e (giriş yapılmamışsa)
   - `/blog`, `/gizlilik-politikasi`, `/teslimat-ve-iade-sartlari`, `/kullanim-sartlari`, `/mesafeli-satis-sozlesmesi` rotalarını kaldır
   - `WebsitePage`, `BlogPage`, `PrivacyPolicyPage`, `DeliveryReturnPolicyPage`, `TermsOfUsePage`, `DistanceSalesContractPage` importlarını kaldır
   - `isWebsite` kontrolünü kaldır, BottomNav her zaman gösterilsin (lesson hariç)
   - Tüm `/app` prefix'lerini `/` altına taşı (örn: `/app/learn` → `/learn`, `/app/profile` → `/profile`)

2. **BottomNav.tsx güncelle:**
   - Tab path'lerini `/app/...` yerine `/...` olarak güncelle

3. **Diğer dosyalarda `/app` referanslarını güncelle** (navigasyon linkleri, redirect'ler vb.)

4. **Kullanılmayan sayfa dosyalarını temizle:**
   - `WebsitePage.tsx`, `BlogPage.tsx`, `PrivacyPolicyPage.tsx`, `DeliveryReturnPolicyPage.tsx`, `TermsOfUsePage.tsx`, `DistanceSalesContractPage.tsx` silinecek

### Sonuç
Uygulama `/` üzerinden doğrudan açılacak, giriş yapılmamışsa login sayfası gösterilecek. Web sitesi sayfaları tamamen kaldırılacak.

