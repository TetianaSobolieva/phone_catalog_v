# 📱 Phone Catalog — Full-Stack E-Commerce App
![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

Modern full-stack phone catalog with real payment processing, delivery integration, and multi-language support.
* **Payments** — Stripe checkout integration
* **Delivery** — NovaPoshta API for shipping
* **i18n** — Multi-language support across the full application
* **Search & Filter** — Advanced product catalog with search and filtering
* **Infra** — Deployed on GitHub Pages with Supabase backend
* **Stack**: React · TypeScript · Supabase · REST API · Contex API · Stripe API · NovaPoshta API · i18n · GitHub Pages
  
## 🔗 Demo
[View Live Demo](https://tetianasobolieva.github.io/phone_catalog_v/)
---
---
# 🚀 Tech Stack
## Frontend
* React
* Vite
* TypeScript
* SCSS Modules
* Framer Motion
* Swiper.js
* i18next
* Fuse.js
## Backend & Services
* Node.js
* Supabase (Database, Authentication, Storage)
* NovaPoshta API (Delivery integration)
* Stripe (Payment processing)
---
# ✨ Features
* Product catalog with detailed phone pages
* Fuzzy search using Fuse.js
* Multi-language support with i18next
* Smooth UI animations using Framer Motion
* Shopping cart functionality
* Secure Stripe checkout
* Delivery integration via NovaPoshta API
* Supabase authentication and database
* Responsive design for all devices
---
# 📁 Project Structure
```text
phone-catalog
│
├── public
│
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── services
│   ├── hooks
│   ├── utils
│   ├── styles
│   ├── App.tsx
│   └── main.tsx
│
├── server
│   └── index.js
│
├── .env
├── package.json
├── tsconfig.json
└── README.md
```
---
# ⚙️ Installation
## 1 Clone the repository
```text
git clone https://github.com/Team-Project-Phone-catalog/team-project-phone-catalog.github.io.git
cd team-project-phone-catalog.github.io
```
## 2 Install dependencies
```text
npm install
```
or
```text
yarn install
```
---
# 🔐 Environment Variables
Create a .env file in the root directory and add:
```text
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
NOVAPOSHTA_API_KEY=your_novaposhta_api_key
```
---
# ▶️ Run the Project
## Development
```text
npm run dev
```
## Build
```text
npm run build
```
## Preview production build
```text
npm run preview
```
---
# 🧪 Stripe Test Card
Use this card for testing payments:
```text
Card Number: 4242 4242 4242 4242
Expiration: Any future date
CVC: Any 3 digits
```
---
# 🌍 Internationalization
Translations are stored in:
```text
public/locales
```
To add a new language:
1. Create a new folder inside /locales
2. Add translation JSON files
3. Register the language in the i18next configuration
---
# 📦 API Integrations
## NovaPoshta API
Used for:
* City search
* Warehouse selection
* Delivery data
## Stripe
Used for:
* Checkout
* Payment processing
* rder confirmation
---
# 🛠 Supabase
Supabase is used for:
* Authentication
* Product database
* Storage
* Backend functionality
If running Supabase locally:
```text
supabase start
```
---
# 🤝 Contributing
1. Fork the repository
2. Create a feature branch
```text
git checkout -b feature/your-feature
```
3. Commit changes
4. Push to your branch
5. Open a Pull Request
---
# 📄 License
MIT License
---
# 👨‍💻 Authors
Team Project — Phone Catalog
---
⭐ If you like the project, please give it a star on GitHub.
