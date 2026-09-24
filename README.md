# Casa Kenya

WhatsApp-first housing marketplace for **Kenya** (separate from Casa Nigeria and Casa Cameroon).

> Sibling projects: `../Casa Rwanda`, `../Casa Nigeria`, `../Casa Cameroon` — do not mix env secrets or databases. GitHub / Expo / Apple follow Casa Rwanda.

See [Docs/CASA_KENYA_SETUP.md](Docs/CASA_KENYA_SETUP.md).

---

<p align="center">
  <img src="casa_logo_lockup_horizontal.png" alt="Casa Kenya — Find your home on WhatsApp" width="420">
</p>

<h1 align="center">Casa Kenya — AI-Powered Housing on WhatsApp</h1>

<p align="center">Find your home. From any phone. In any neighbourhood in Kenya.</p>

<p align="center">
  Casa Kenya is a housing platform for Kenya. Landlords list and tenants search on the iOS/Android app or WhatsApp, then unlock landlord contacts.
</p>

---

## Country defaults

| | Value |
|--|--|
| Currency | **KES** |
| Phone | **+254** |
| Locations | **47 counties** |
| Language | English |
| Domain | casahomeskenya.com |
| Mobile | com.casahomeskenya.app (Expo + Apple = Casa Rwanda; Android AAB uploaded manually) |
| Payments | Off until M-Pesa / Paystack Kenya |

## Quick Start

### 1. Start databases

```bash
docker compose up -d
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env — DATABASE_URL should use casa_kenya
```

### 3. Install & migrate

```bash
cd backend
npm install
npm run db:migrate
```

### 4. Run tests

```bash
# from repo root
npm test

# or
cd backend && npm test
```

### 5. Run the server

```bash
npm run dev
```

## Deploy checklist

See [Docs/CASA_KENYA_SETUP.md](Docs/CASA_KENYA_SETUP.md) and [Docs/DOMAIN_SETUP.md](Docs/DOMAIN_SETUP.md).

Required before production:

1. New Railway project (Postgres + Redis + Backend + Admin + Marketing)
2. New Meta WhatsApp Business number (+254)
3. Domains pointing at Railway
4. New Expo EAS project ID in `mobile/app.json`
5. Keep `PAYMENTS_ENABLED=false` until M-Pesa is wired
