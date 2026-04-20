# DGA Landing Page Guide — NeoThai Glow Theme

> **Theme Name:** NeoThai Glow  
> **Target Audience:** Thai users (TrueMoney / DCA wallet)  
> **Style:** Vibrant · Futuristic · Thai-tech · Fintech-friendly

---

## Table of Contents

1. [Theme Overview](#1-theme-overview)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Design Elements & Components](#4-design-elements--components)
5. [Page Sections](#5-page-sections)
   - 5.1 [Meta / SEO](#51-meta--seo)
   - 5.2 [Hero Section](#52-hero-section)
   - 5.3 [Features Section](#53-features-section)
   - 5.4 [How It Works](#54-how-it-works)
   - 5.5 [Promotion Banner](#55-promotion-banner)
   - 5.6 [Footer](#56-footer)
   - 5.7 [Optional Sections](#57-optional-sections)
6. [Project Structure](#6-project-structure)

---

## 1. Theme Overview

| Property | Value |
|---|---|
| Theme name | NeoThai Glow |
| Core feel | Cute · Modern · Trustworthy · Playful-yet-professional |
| Mascot | Orange AI robot (winking, one hand raised) |
| Inspiration | Image 1 — Hero (mascot, glowing "ดีเด่น Ask AI", logos) |
| | Image 2 — KYC promo, phone mockup, green promotion banner |

---

## 2. Color Palette

### Primary Colors

| Role | Color Name | Hex |
|---|---|---|
| Primary green | Bright glowing green | `#00C853` / `#00D96F` |
| Accent orange | Robot helmet color | `#FF6A00` / `#FF7A1F` |
| Background (dark) | Dark teal | `#003D2B` |
| Background (light end) | Deep green | `#0A2F24` |

### Supporting Colors

| Role | Color Name | Hex |
|---|---|---|
| Glow highlight | Light blue neon | `#00E5FF` |
| Text primary | White | `#FFFFFF` |
| Text secondary | Off-white | `#F8F9FA` |
| Card / surface | Soft gray | `#E0E0E0` |

### Gradients

| Usage | Direction / Values |
|---|---|
| Page background | Dark teal → Bright green (`#003D2B` → `#00D96F`) |
| Primary buttons | Orange → Bright green (`#FF6A00` → `#00C853`) |
| Glow effects | Light blue + white sparkles (`#00E5FF` + `#FFFFFF`) |

---

## 3. Typography

### Font Stack

| Role | Font (Latin) | Font (Thai) |
|---|---|---|
| Headings | Poppins, Inter, or Google Sans | Kanit (medium weight) |
| Body text | Inter | Prompt or Sukhumvit |
| Logo / display | Bold + neon shadow style | — |

### Loading via Google Fonts

```html
<!-- Recommended imports -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter&family=Kanit:wght@400;600&family=Prompt&display=swap" rel="stylesheet">
```

---

## 4. Design Elements & Components

### Mascot
- Use the **orange AI robot** as the main hero character (winking, friendly pose).
- Appears primarily in the **Hero section**.

### Glow & Neon Effects
- Apply **soft outer glows** (blue + green) to buttons, cards, and mascot.
- Use CSS `box-shadow` / `text-shadow` for neon appearance.

### UI Components

| Component | Spec |
|---|---|
| Border radius | `16px` – `24px` |
| Cards | Glassmorphism — semi-transparent + `backdrop-filter: blur()` |
| Background animation | Subtle particle / sparkle effect (CSS or Lottie) |
| Icons | Line icons with green / orange accents |

### Button Styles

| Button type | Style |
|---|---|
| Primary | Bright green background + green glow |
| Secondary | Orange background + orange glow |
| Hover state | Scale up slightly (`transform: scale(1.05)`) + stronger glow |

---

## 5. Page Sections

### 5.1 Meta / SEO

```html
<title>ดีเด่น Ask AI | TrueMoney Digital Wallet Thailand</title>
<meta name="description" content="AI สมาร์ทตัวแรกในกระเป๋าเงินดิจิทัล TrueMoney ทำ KYC ง่าย รับสิทธิ 10,000 บาท ใช้งาน AI คุยไทย-อังกฤษได้ทันที">
<meta name="keywords" content="Ask AI, TrueMoney, Digital Wallet Thailand, KYC Thailand, PromptPay, Thai fintech, AI chatbot Thailand">
<!-- Open Graph -->
<meta property="og:image" content="[mascot image with glowing green background]">
```

---

### 5.2 Hero Section

**Visual layout:**
- Background: Dark teal → bright green gradient with white sparkles + light-blue neon glow
- Left: Large 3D orange AI robot mascot (speech bubble "AI" with sparkles)
- Right: Thai headline + glowing "Ask AI"

**Headline (H1):**
```html
<h1 class="glow-text">ดีเด่น <span class="neon-green">Ask AI</span> ✨</h1>
```

**Sub-headline:**
> Your Friendly AI in TrueMoney Digital Wallet

**Body copy (Thai):**
> ในประเทศไทยที่ทุกอย่างเร็วและสะดวก กระเป๋าเงินดิจิทัล TrueMoney เปิดตัว Ask AI – AI สมาร์ทตัวแรกที่เข้าใจภาษาไทยและวัฒนธรรมไทย 100%
> ไม่ว่าจะอยู่กรุงเทพฯ ภูเก็ต หรือเชียงใหม่ — ถามอะไรก็ตอบได้ทันใจ

**Thailand context note (for copywriters):**
- Population: 71 million, near 100% mobile penetration
- PromptPay (launched 2017, Bank of Thailand): instant QR/phone transfers, free
- 7-Eleven: 14,000+ branches — all accept QR payments
- TrueMoney: founded 2003, one of Thailand's most-used e-wallets, linked to TrueMove H

**Call-to-Action buttons:**

| Button | Label | Style |
|---|---|---|
| Primary | เริ่มคุยกับ Ask AI ตอนนี้ | Bright green glow |
| Secondary | ดาวน์โหลด TrueMoney App | Orange glow |

**Trust badges (below CTA):**
- DCA logo + TrueMoney logo (reference Image 1)
- Label: `ปลอดภัย ตามกฎหมาย BOT`

---

### 5.3 Features Section

**Section title:** สิ่งที่คุณจะได้รับจาก Ask AI + TrueMoney

**Layout:** 3-column glassmorphism cards (`border-radius: 24px`, soft green/orange glow)

#### Card 1 — KYC ง่าย ๆ รับสิทธิทันที
- Visual: Phone mockup doing KYC (reference Image 2)
- ทำ KYC ด้วยบัตรประชาชนไทย หรือพาสปอร์ต (สำหรับชาวต่างชาติ)
- ใช้เวลาไม่ถึง 5 นาทีในแอป TrueMoney
- พิเศษ! ลูกค้าใหม่ที่ทำ KYC สำเร็จ รับสิทธิ **10,000 บาท** ใน Digital Wallet

#### Card 2 — AI ที่เข้าใจไทยลึก ๆ
- ถามเป็นภาษาไทยธรรมชาติ เช่น "ยอดเงินฉันเหลือเท่าไหร่?" / "ช่วยโอนเงินให้แม่หน่อย"
- AI ตอบด้วยน้ำเสียงเป็นมิตร เหมือนเพื่อนไทย
- รองรับ: PromptPay · บิลค่าน้ำ-ค่าไฟ · เติมเงินมือถือ · โอนเงินข้ามประเทศ

#### Card 3 — ปลอดภัย + วัฒนธรรมไทย
- ได้รับการรับรองจาก DCA และ TrueMoney
- AI ออกแบบให้เคารพ "วัฒนธรรมไทย" — สุภาพ อ่อนโยน "ไม่เป็นไร" (mai pen rai)
- ประเทศไทยเป็นประเทศแรกในอาเซียนที่นำ AI มาใช้ใน e-wallet แบบนี้

**Info card (below cards):**

> **ทำไมคนไทยถึงรัก Digital Wallet?**
> - ไทยติด Top 5 ประเทศที่ใช้ QR Code มากที่สุดในโลก
> - 7-Eleven ทุกสาขาเติมเงิน TrueMoney ได้ด้วยเงินสด
> - ส่งเงินกลับบ้านผ่าน TrueMoney > 10 ล้านครั้ง/เดือน
> - วัฒนธรรม "สบายๆ" (sabai sabai) เข้ากับ AI แบบ Ask AI ได้อย่างลงตัว

---

### 5.4 How It Works

**Section title:** ทำยังไงให้ Ask AI เป็นเพื่อนคุณ

**Layout:** 4 steps with phone frame mockups (reference Image 2)

| Step | Title | Detail |
|---|---|---|
| 1 | ดาวน์โหลด TrueMoney App | App Store / Play Store · Country code: +66 |
| 2 | ทำ KYC ง่าย ๆ | อัพโหลดบัตรประชาชน หรือพาสปอร์ต · ยืนยันด้วย OTP (+66) |
| 3 | เปิด Ask AI | กดไอคอนหุ่นยนต์สีส้ม · พิมพ์หรือพูดได้เลย |
| 4 | สนุกกับสิทธิพิเศษ | รับ 10,000 บาท · ใช้ได้ทุกที่ที่รับ PromptPay / TrueMoney |

**Culture note (below steps):**
> ประเทศไทย = "Land of Smiles" — หุ่นยนต์ Ask AI จึงถูกออกแบบให้ "ยิ้ม" และ "ขยิบตา" สะท้อนการต้อนรับแบบไทยแท้

---

### 5.5 Promotion Banner

**Layout:** Full-width green banner (match Image 2 green)

```
1 มี.ค. - 15 เม.ย. 2567
รับสิทธิ 10,000 บาท ผ่าน Digital Wallet*
สำหรับลูกค้าใหม่ที่ทำ KYC สำเร็จ
*เงื่อนไขเป็นไปตามที่บริษัทกำหนด
```

> **English reference:** 1 March – 15 April 2024 (B.E. 2567) — Get 10,000 THB in Digital Wallet for new KYC customers

**CTA:** `ทำ KYC เดี๋ยวนี้`

---

### 5.6 Footer

**Background:** Dark teal + neon glow lines

| Column | Content |
|---|---|
| Left | TrueMoney logo · DCA logo · Ask AI mascot (small) |
| Center | **ติดต่อเรา** · Hotline: 02-114-1111 · Email: support@truemoney.co.th · Line: @TrueMoneyTH · Country: Thailand (+66) |
| Right | **Quick Links** · เกี่ยวกับ TrueMoney · นโยบายความเป็นส่วนตัว · เงื่อนไขการใช้บริการ · Thailand Fintech (PromptPay, BOT) |

**Bottom bar:**
```
© 2026 TrueMoney Digital Wallet Thailand | All rights reserved
Made with ❤️ for the Land of Smiles
ประเทศไทย | กรุงเทพฯ | สกุลเงินบาทไทย (฿ THB)
```

---

### 5.7 Optional Sections

| Section | Description |
|---|---|
| Testimonials | Quotes from Thai users, e.g. "Ask AI ช่วยโอนเงินให้คุณแม่ที่ต่างจังหวัดได้เร็วมาก" |
| Blog Teaser | "PromptPay คืออะไร? ทำไมคนไทยใช้กันทุกวัน" |
| App Download QR | TrueMoney app QR code with +66 country code note |

---

## 6. Project Structure

```
dga-landing-page/
├── public/
│   ├── images/                # Mascot, Phone mockups, Logos
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css       # Tailwind directives & Custom Neon Glows
│   │   └── fonts/             # (Optional) Local fonts if not using Google Fonts
│   ├── components/            # Reusable UI elements
│   │   ├── common/
│   │   │   ├── BaseButton.vue # Glow effect buttons
│   │   │   └── GlassCard.vue  # Glassmorphism wrapper
│   │   ├── layout/
│   │   │   ├── Navbar.vue     # Lang switcher & Login button
│   │   │   └── Footer.vue     # Contact & Social links
│   │   └── sections/          # Page specific sections
│   │       ├── Hero.vue       # Mascot & Headline
│   │       ├── Features.vue   # KYC & AI features
│   │       ├── HowItWorks.vue # 4-step guide
│   │       └── PromoBanner.vue# 10,000 THB offer
│   ├── locales/               # Language translations
│   │   ├── en.json
│   │   └── th.json
│   ├── plugins/
│   │   └── i18n.js            # Vue-i18n configuration
│   ├── App.vue                # Main entry component
│   └── main.js                # App initialization
├── tailwind.config.js         # Custom colors (NeoThai Palette)
├── vite.config.js
└── package.json
```

