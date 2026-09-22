# Casa Kenya — Setup Guide

Casa Kenya is a **separate codebase and deployment** from Casa Nigeria and Casa Cameroon.

| | Casa Nigeria | Casa Kenya |
|--|--------------|------------|
| Directory | `Desktop/Casa Nigeria` | `Desktop/Casa Kenya` |
| Currency | NGN | **KES** |
| Phone country | +234 | **+254** |
| Locations | 36 states + FCT | **47 counties** |
| Payments | Paystack / Flutterwave (NG) | **M-Pesa (Daraja) / Paystack KE** (not wired yet) |
| WhatsApp | Nigeria WABA number | **Separate Kenya WABA number** |
| Domain | casahomesnigeria.com | **casahomeskenya.com** |
| Mobile package | com.casahomesnigeria.app | **com.casahomeskenya.app** |

## Hard rules

1. **Never share** `DATABASE_URL`, `REDIS_URL`, WhatsApp tokens, or payment keys with Nigeria or Cameroon.
2. Create a **new Railway project** for Kenya (`Casa-Kenya`).
3. Register a **new Meta WhatsApp Business** phone number for Kenya (+254).
4. Keep `PAYMENTS_ENABLED=false` until M-Pesa Daraja and/or Paystack Kenya is integrated and tested.
5. Do **not** reuse Nigeria Expo project, App Store app, or Play listing.

## Local development

```bash
cd "/Users/macbookpro2017/Desktop/Casa Kenya"
cp .env.example .env
# edit .env — use a local DB name like casa_kenya
npm --prefix backend install
npm --prefix admin install
npm --prefix marketing install
npm run dev:db
npm run db:migrate
npm run dev:backend
```

## Production checklist

- [ ] New Postgres + Redis on Railway project `Casa-Kenya`
- [ ] New WhatsApp number + webhook → `https://api.casahomeskenya.com/webhook`
- [ ] Domains / CORS: `ADMIN_ORIGIN`, `MARKETING_ORIGIN`, `PUBLIC_API_URL`
- [ ] DNS: `casahomeskenya.com`, `www`, `api`, `admin`
- [ ] `UNLOCK_FEE_KES` set (default 500 KES — adjust in market)
- [ ] Cloudinary cloud or folder prefix separate from NG/CM
- [ ] Marketing `VITE_WHATSAPP_PHONE` = Kenya digits with country code `254…`
- [ ] New Expo project (`casa-kenya`) + store apps `com.casahomeskenya.app`
- [ ] Replace `REPLACE_WITH_NEW_EXPO_PROJECT_ID` in `mobile/app.json`
- [ ] App Review phones: `APP_REVIEW_PHONE` / `APP_REVIEW_OTP` (254…)

## Payments (future)

Do **not** reuse Campay, Notchpay, or Nigeria MoMo flows. Prefer:

- **M-Pesa Daraja** (STK Push) and/or
- **Paystack Kenya** (`PAYSTACK_SECRET_KEY`)

Until then unlocks stay free when `PAYMENTS_ENABLED=false`.

## Product defaults

- **English-only** at launch (Swahili later)
- Landlord ID: **Kenyan National ID** or passport
- Electricity: prepaid/postpaid framing (KPLC-compatible meter types)

## Housing taxonomy (Kenya)

Residential types: single room, bedsitter, studio, 1/2/3+ bedroom, maisonette, bungalow.
Facilities copy: gated/fenced, parking, backup power, borehole/water tank, reliable water, token meter (KPLC prepaid) or postpaid bill, furnished, security/askari.
Do not reuse Nigerian labels (parlour, self-contain, DISCO) in product UI.

