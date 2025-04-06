# 🌍 Geo-Based Redirect with Edge Function

This project demonstrates how to use **Edge Functions** to **redirect users based on their country** — all before the request even reaches your backend.

---

## 🚀 What This Project Does

When a user visits the root path `/` of your site, the **Edge Function runs instantly on a CDN node close to them**, detects their **country from IP address**, and:

- 🌐 Redirects US visitors to `/us.html`
- 🇧🇩 Redirects users from Bangladesh to `/bd.html`
- 🇸🇪 Redirects users from Sweden to `/se.html`
- 🌎 All other countries are redirected to `/us.html` by default

⚡ Since the function runs at the edge (on the CDN), the redirect happens **blazingly fast**, with **minimal latency**, no backend calls, and full personalization.

---

## 📦 Tech Used

- **Vercel Edge Functions** (runs serverless logic on the edge)
- **Node.js / JavaScript**
- **Geo IP detection** using `Request.geo.country` provided by Vercel

---

## 📁 Project Structure

```bash
geo-edge-redirect/
├── api/
│   └── geo-redirect.js   # The Edge Function logic
├── public/
│   ├── us.html
│   ├── bd.html
│   └── se.html
├── vercel.json           # Vercel routing config
└── README.md
