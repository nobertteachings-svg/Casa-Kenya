# Casa Kenya — Setup Guide

Casa Kenya is a **separate codebase and deployment** from other country forks. GitHub, Expo, and Apple follow **Casa Rwanda**.

| | Casa Rwanda | Casa Kenya |
|--|--------------|------------|
| Directory | `Desktop/Casa Rwanda` | `Desktop/Casa Kenya` |
| GitHub | `nobertteachings-svg/Casa-Rwanda` | **`nobertteachings-svg/Casa-Kenya`** (same GitHub account / SSH as Rwanda) |
| Expo | `nobertteachingss-team` / `nobertteachings` | **Same Expo account + project** |
| iOS | `mutaleyinguhalain@gmail.com` / team `X59YSW73S8` | **Same Apple account** |
| Android | Play Console upload | **Manual AAB upload** (no EAS Submit) |
| Currency | RWF | **KES** |
| Phone country | +250 | **+254** |
| Locations | 30 districts | **47 counties** |
| WhatsApp | Rwanda WABA | **Separate Kenya WABA number** |
| Domain | casahomesrwanda.com | **casahomeskenya.com** |
| Mobile package | com.casahomesrwanda.app | **com.casahomeskenya.app** |

## Hard rules

1. **Never share** `DATABASE_URL`, `REDIS_URL`, WhatsApp tokens, or payment keys with Rwanda or any other country.
2. Create a **new Railway project** for Kenya (`Casa-Kenya`) — do not deploy Kenya onto the Rwanda Railway project.
3. Register a **new Meta WhatsApp Business** phone number for Kenya (+254).
4. Keep `PAYMENTS_ENABLED=false` until M-Pesa Daraja and/or Paystack Kenya is integrated and tested.
5. Reuse Rwanda’s **GitHub org, Expo account, and Apple team**. Keep Kenya’s bundle id (`com.casahomeskenya.app`) and do **not** overwrite Rwanda’s Play listing — upload the Kenya AAB as its own app.

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
- [ ] GitHub repo `nobertteachings-svg/Casa-Kenya` (same account as Casa-Rwanda; SSH host `github.com-casa-rwanda`)
- [ ] Expo: same account/project as Rwanda (`nobertteachingss-team` / `cd8a3e52-f3b4-49a3-95fa-8e9d3228ef20`)
- [ ] iOS submit: same Apple id as Rwanda (`mutaleyinguhalain@gmail.com`)
- [ ] Android: EAS build AAB, then **upload manually** in Play Console (`com.casahomeskenya.app`)
- [ ] App Review phones: `APP_REVIEW_PHONE` / `APP_REVIEW_OTP` (254…)

## Payments (future)

Do **not** reuse Campay, Notchpay, or Nigeria MoMo flows. Prefer:

- **M-Pesa Daraja** (STK Push) and/or
- **Paystack Kenya** (`PAYSTACK_SECRET_KEY`)

Until then unlocks stay free when `PAYMENTS_ENABLED=false`.

## Product defaults

- **English only** — WhatsApp, app, and website
- Landlord ID: **Kenyan National ID** or passport
- Electricity: prepaid/postpaid framing (KPLC-compatible meter types)

## Housing taxonomy (Kenya)

Residential types: single room, double room, bedsitter, studio, 1/2/3+ bedroom, maisonette, bungalow, servant quarter.
Facilities copy: gated/fenced, parking, backup power, borehole/water tank, reliable water, token meter (KPLC prepaid) or postpaid bill, furnished, security/askari.
Do not reuse Nigerian labels (parlour, self-contain, DISCO) in product UI.

