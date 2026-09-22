# Deploy Casa Kenya

**Primary production stack (Railway + casahomeskenya.com):**

| Piece | Where |
|-------|--------|
| Backend API / WhatsApp webhook | Railway → `https://api.casahomeskenya.com` |
| Marketing site | Railway → `https://casahomeskenya.com` |
| Admin dashboard | Railway → `https://admin.casahomeskenya.com` |
| Postgres + Redis | Railway plugins |

**Custom domain walkthrough (clicks + DNS):** [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)  
**Backend first-time Railway setup:** [RAILWAY_DEPLOY.md](./RAILWAY_DEPLOY.md)  
**Marketing service:** [MARKETING_RAILWAY.md](./MARKETING_RAILWAY.md)

> Older notes below still mention Supabase / Upstash / Vercel as alternatives. Prefer Railway + the custom domain doc for the current setup.

---

## 1. Deploy the backend (Railway)

See [RAILWAY_DEPLOY.md](./RAILWAY_DEPLOY.md). Summary:

1. Deploy from GitHub with `railway.toml` / `backend/Dockerfile`
2. Link Postgres + Redis
3. Set env vars from `railway.env.example`
4. Generate Railway domain, then add **`api.casahomeskenya.com`** ([DOMAIN_SETUP.md](./DOMAIN_SETUP.md))

### Verify backend

```bash
curl https://api.casahomeskenya.com/health
```

Expected: `{"status":"ok",...}`

### Set WhatsApp webhook

| Field | Value |
|-------|--------|
| **Callback URL** | `https://api.casahomeskenya.com/webhook` |
| **Verify token** | Same as `WHATSAPP_VERIFY_TOKEN` |

---

## 2. Deploy admin + marketing

- Admin: Railway service with root `admin/`; custom domain `admin.casahomeskenya.com`
- Marketing: [MARKETING_RAILWAY.md](./MARKETING_RAILWAY.md); domains `casahomeskenya.com` + `www`

### Env vars after domains are live

**Backend**

```env
ADMIN_ORIGIN=https://admin.casahomeskenya.com
MARKETING_ORIGIN=https://casahomeskenya.com,https://www.casahomeskenya.com
```

**Admin / Marketing (build-time)**

```env
VITE_API_URL=https://api.casahomeskenya.com
VITE_CONTACT_EMAIL=hello@casahomeskenya.com
```

---

## 3. Post-deploy checklist

- [ ] `GET https://api.casahomeskenya.com/health` returns `ok`
- [ ] WhatsApp webhook verified at `https://api.casahomeskenya.com/webhook`
- [ ] Marketing loads at https://casahomeskenya.com
- [ ] Admin login works at https://admin.casahomeskenya.com
- [ ] CORS origins match custom domains exactly (no trailing slash)
- [ ] Full checklist in [DOMAIN_SETUP.md](./DOMAIN_SETUP.md)

---

## 4. Local vs production

| Service | Local | Production |
|---------|-------|------------|
| Backend | `http://localhost:3000` | `https://api.casahomeskenya.com` |
| Admin | `http://localhost:5173` | `https://admin.casahomeskenya.com` |
| Marketing | `http://localhost:5174` | `https://casahomeskenya.com` |
| Database | Docker Postgres | Railway Postgres |
| Redis | Docker Redis | Railway Redis |

---

## 5. Troubleshooting

See [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) and [RAILWAY_DEPLOY.md](./RAILWAY_DEPLOY.md).

**Webhook verify fails** — backend public + healthy; token matches Meta; use `api.casahomeskenya.com`.

**Admin / marketing CORS errors** — `ADMIN_ORIGIN` / `MARKETING_ORIGIN` must match the browser origin exactly.
