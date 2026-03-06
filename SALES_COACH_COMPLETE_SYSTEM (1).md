# ╔══════════════════════════════════════════════════════════════════╗
# ║                  SALES COACH — COMPLETE BUILD SYSTEM            ║
# ║           Branding · Spec · Architecture · Claude Code          ║
# ╚══════════════════════════════════════════════════════════════════╝
#
#  "Close more. Earn more. Every single day."
#
#  Version: 1.0 — March 2026
#  Stack: Expo + Supabase + RevenueCat + Claude AI
#  Target: App Store + Google Play
#  Idioma: Español — LATAM primero (mercado virgen, cero competencia directa)

---

# ═══════════════════════════════════════════════════════════
# PARTE 1 — BRAND IDENTITY
# La marca antes de escribir una línea de código
# ═══════════════════════════════════════════════════════════

# BRANDING.md — SALES COACH

## 1. BRAND SOUL

**Idea central (5 palabras):** Las repeticiones ganan, no el talento.

**Personalidad de marca:**
- Implacable — sin excusas, solo sistemas
- Directa — dice lo que otros no se atreven
- Ganada — la autoridad viene de las repeticiones, no del título
- Afilada — cada palabra tiene un propósito
- Adictiva — practicar se siente como un juego que quieres ganar

**Si esta marca fuera una persona:**
El amigo que pasó de perder cada propuesta a cerrar consistentemente —
no por suerte, sino porque practicó obsesivamente cuando todos
los demás estaban viendo Netflix.
No es un gurú. Es un practicante que construyó un sistema.

**La UNA verdad que esta marca cree:**
*"Los grandes vendedores no nacen. Se forjan con repetición."*

**Lo que esta marca se niega a ser:**
- Motivación vacía ("¡Tú puedes! ¡Cree en ti mismo!")
- Capacitación corporativa ("Optimicemos las sinergias de conversión")
- Condescendiente ("Déjame enseñarte lo básico, chico")

**Voz de marca en 3 palabras:** Directo. Real. Implacable.

---

## 2. BRAND VOICE & TONE

**Cómo habla:**
Oraciones cortas. Verbos activos. Cero jerga corporativa.
Le habla al usuario como un sparring partner de confianza — honesto,
a veces incómodo, siempre de su lado.
Nunca dice lo que quieren escuchar. Dice lo que necesitan escuchar.

**Reglas de lenguaje:**

SIEMPRE dice:
- "Repetición" (no "sesión de entrenamiento")
- "Cerrar" (no "convertir" o "finalizar")
- "Objeción" (no "preocupación" o "duda")
- "Score" (puede quedarse en inglés — es universal en el contexto de apps)
- "Vamos" (no "empecemos" o "iniciemos")
- Números específicos: "Cerraste 3 de 5 objeciones hoy." (siempre concreto)

NUNCA dice:
- "Sinergia" / "Paradigma" / "Apalancar"
- "¡Excelente!" / "¡Fantástico!" / "¡Buen trabajo!" (elogio vacío)
- "Conforme a tu solicitud"
- "No dudes en contactarnos"
- "Esperamos que disfrutes"
- Voz pasiva

Longitud de oraciones: Cortas a medias. Máximo 15 palabras por oración en UI.
Nunca un párrafo donde funciona una oración.

¿Usa humor? Sí — seco, ganado, nunca forzado.
Ejemplo en estado vacío (sin sesiones): "Tu competencia está practicando ahorita. Solo diciéndote."

**Persona de IA — "REX" (el sparring partner):**

Nombre: Rex (corto, contundente, memorable — como el apodo de un coach)

Personalidad:
Rex es un closer experimentado que ha escuchado cada objeción 10,000 veces.
No es malo, pero no da palmaditas en la espalda. Juega el papel del
cliente más difícil que encontrarás — para que los clientes reales se sientan fáciles.
Después de cada sesión suelta el personaje completamente y se convierte en
tu coach más honesto.

Cómo Rex abre sesiones:
- "Bueno. Soy [nombre del cliente]. No me hagas perder el tiempo."
- "Tienes 60 segundos. Impresióname."
- "Ya me han dado este pitch antes. ¿Qué tiene el tuyo de diferente?"

Cómo Rex da feedback:
Específico, numerado, sin relleno.
"3 cosas: (1) Te disculpaste dos veces — para. (2) No anclaste el precio
antes de revelarlo. (3) Tu cierre fue débil — hiciste una pregunta de sí/no.
Aquí está lo que decir en cambio: [ejemplo]"

Lo que Rex NUNCA dice:
- "¡Buen intento!"
- "¡Casi lo tenías!"
- "No te preocupes, la próxima vez te va mejor."

Respuesta MALA de Rex: "¡Fue un intento muy bueno! Me gustó cómo manejaste
la objeción de precio. ¡Sigue así y lo lograrás!"

Respuesta BUENA de Rex: "Score: 58/100. Perdiste el frame cuando dijeron
'muy caro' — inmediatamente defendiste el precio en lugar de redirigir.
Aquí está la línea exacta que cierra esto: [línea]"

---

## 3. COPY STYLE

**Fórmula de headlines:** [Resultado específico] + [Tiempo/Método]
Ejemplos:
- "Cierra 40% más propuestas. 5 minutos al día."
- "Practica contra el cliente más difícil que jamás encontrarás."
- "Las repeticiones que omites son los deals que pierdes."

**Fórmula del paywall:** Lo que pierden sin actualizar
(aversión a la pérdida convierte mejor que lo que ganan)
- "Los usuarios gratis tienen 3 reps al día. Los Pro no tienen límite."
- "Deja de perder deals que deberías estar cerrando."

**Fórmula de notificaciones push:** Urgencia + Especificidad
- "Tu racha lleva 7 días. No la rompas esta noche."
- "Carlos acaba de sacar 85/100 en Objeción de Precio. Tú vas en 61."
- "Tienes una propuesta el viernes. Practica el cierre esta noche."

**Tono del onboarding:**
Confiado y desafiante. Como un coach que ya cree en ti más de lo
que tú crees — pero todavía no te lo dice. Te hace querer demostrar algo.

**Tono de mensajes de error:**
Directo y orientado a soluciones. Sin disculpas.
- API caída: "Rex no está disponible ahora mismo. Vuelve en unos minutos."
- Sin internet: "Sin conexión. Practica tu apertura en tu cabeza — aquí estaremos cuando vuelvas."
- Sesión expirada: "Tu sesión terminó. Vuelve a iniciar sesión."

---

## 4. COLOR SYSTEM

| Token           | HEX       | Role              | Psychological justification                        |
|-----------------|-----------|-------------------|---------------------------------------------------|
| Primary         | #E8FF47   | Action / Energy   | Electric yellow-green. Not safe. Not corporate.   |
|                 |           |                   | The color of a highlight marker on the key line.  |
|                 |           |                   | Triggers urgency + focus. Used for primary CTAs.  |
| Secondary       | #0A0A0A   | Foundation        | Near-black. Serious. Premium. The color of a      |
|                 |           |                   | leather-bound playbook. Commands respect.          |
| Surface         | #141414   | Cards / Panels    | Slightly lifted from background. Depth without    |
|                 |           |                   | distraction. The arena where practice happens.    |
| Surface High    | #1E1E1E   | Inputs / Bubbles  | Chat bubbles, input fields, hover states.         |
| Accent          | #FF4D4D   | Danger / Stakes   | Used sparingly: objection labels, "you lost this" |
|                 |           |                   | moments. High stakes feel. Not used for errors.   |
| Text Primary    | #FFFFFF   | Headlines / Main  | Full contrast on dark. No compromise on clarity.  |
| Text Secondary  | #888888   | Supporting copy   | Timestamps, labels, metadata.                     |
| Text Muted      | #444444   | Disabled states   | Not important enough to demand attention.         |
| Success         | #22C55E   | Win moments       | Score above 70, streak milestone, deal closed.    |
| Error           | #EF4444   | System errors     | Not used for "you lost" — that's Accent.          |
| Warning         | #F59E0B   | Caution states    | Near limit, streak at risk.                       |

**Default mode: DARK.** Always dark.
Why: Salespeople practice late at night, in the car, between calls.
Dark mode = focus, premium, serious. This isn't a wellness app.

---

## 5. TYPOGRAPHY

**Heading font:** [Syne](https://fonts.google.com/specimen/Syne) — Bold 700/800
Why: Geometric, confident, slightly aggressive. Used by premium
performance brands. Not the same font as every fintech app.
Makes headlines feel like a challenge, not an invitation.

**Body font:** [Inter](https://fonts.google.com/specimen/Inter) — Regular 400, Medium 500
Why: Maximum readability. Used by professionals. Clean enough
to disappear — the copy should do the work, not the font.

**Scale:**
- Display:  40px / Syne 800 / tracking -0.02em
- H1:       32px / Syne 700 / tracking -0.01em
- H2:       24px / Syne 700
- H3:       18px / Syne 600
- Body:     16px / Inter 400 / line-height 1.6
- Small:    14px / Inter 400
- Micro:    12px / Inter 500 / tracking 0.04em / UPPERCASE for labels

---

## 6. MICRO-COPY DICTIONARY

### Onboarding
- Pantalla 1 headline: "Deja de perder propuestas que deberías ganar."
- Pantalla 1 subheadline: "Practica con IA. Recibe un score. Cierra más."
- Pantalla 1 CTA: "Vamos →"
- Pantalla 2 headline: "¿Qué vendes?"
- Pantalla 2 opciones: "Servicios / freelance" / "Software / SaaS" / "Productos físicos" / "Bienes raíces" / "Seguros" / "Otro"
- Pantalla 3 headline: "¿Cuál es tu mayor reto ahorita?"
- Pantalla 3 opciones: "Manejar objeciones de precio" / "Cerrar el trato" / "Pasar al tomador de decisiones" / "Seguimientos que no se ignoran"
- Pre-paywall headline: "Estás a 2 minutos de tu primera repetición."
- Pre-paywall subheadline: "Más de 7,000 vendedores practican aquí diario."

### Pantallas de auth
- Register headline: "Construye tu ventaja."
- Login headline: "De vuelta al trabajo."
- Forgot password: "Te regresamos al juego."
- Email verification: "Revisa tu bandeja. Un clic y estás adentro."

### Estados del core de la app
- Estado vacío (sin sesiones): "Tu competencia está practicando ahorita. Solo diciéndote."
- Estado de carga: "Rex está calentando..."
- Primera sesión completa: "Primera rep hecha. Una más que ayer."
- Racha Día 1: "Día 1. Lo más difícil es empezar. Ya lo hiciste."
- Racha Día 7: "7 días. Estás construyendo algo real."
- Racha Día 30: "30 días de racha. Estás en el top 3% de usuarios."
- Racha rota: "Racha perdida. El reset empieza hoy. Sin excusas."

### Paywall
- Headline: "Los usuarios gratis tienen 3 reps al día. Los Pro no tienen límite."
- Subheadline: "Los closers del top no limitan su práctica."
- Beneficio 1: "Sesiones de práctica ilimitadas con Rex cada día"
- Beneficio 2: "Escenarios personalizados para tu industria y producto"
- Beneficio 3: "Análisis completo con tu tasa de cierre personal"
- CTA: "Comenzar Prueba Gratis de 7 Días"
- Bajo el CTA: "Cancela cuando quieras. Sin preguntas."
- Dismiss: "Continuar con 3 reps al día"

### Notificaciones push
- Recordatorio diario: "Hora de sacar tus reps."
- Racha en riesgo: "Tu racha de {{racha}} días termina a medianoche."
- Milestone: "Acabas de sacar {{score}}/100. Nuevo récord personal."
- Insight semanal: "Esta semana: {{sesiones}} sesiones. Tu tasa de cierre: {{tasa}}%."
- Regreso: "Han pasado {{días}} días. Rex ha estado esperando."

### Mensajes de error
- Sin internet: "Sin conexión. Rex estará aquí cuando vuelvas."
- IA no disponible: "Rex no está disponible ahorita. Intenta en unos minutos."
- Sesión expirada: "Sesión terminada. Vuelve a iniciar sesión."
- Error genérico: "Algo salió mal. Intenta de nuevo."
- Límite gratis: "Usaste tus 3 reps gratis hoy. Actualiza para ilimitado."

### Soporte y ajustes
- Feedback prompt: "¿Cómo está Rex?"
- Rate app prompt: "¿Cerraste un deal recientemente? Califica la app — nos ayuda."
- Delete account warning: "Esto borra todo tu progreso, rachas e historial. No se puede deshacer."

---

## 7. LOGO CONCEPT

**Símbolo:** Una diagonal ascendente — como la firma al cerrar un contrato,
o la trayectoria hacia arriba de tu tasa de cierre.
Gruesa, peso único, perfectamente geométrica. Sin serifs. Sin gradientes.

**Por qué encaja:** Simple suficiente para funcionar a 16px. Agresiva suficiente
para ser distintiva. La diagonal implica movimiento — hacia adelante, arriba, hecho.

**Lo que NO puede parecer:** Un micrófono, un apretón de manos, una gráfica,
una persona, una estrella, o cualquier ícono genérico de "ventas".

**Prompt para Midjourney:**
"Minimal geometric logo mark, single bold diagonal ascending slash,
electric yellow-green #E8FF47 on pure black background,
vector style, no gradients, no shadows, no text, ultra clean,
could work as app icon, inspired by Nike swoosh simplicity
but more aggressive, 1024x1024"

---

## 8. MOTION & FEEL

**Estilo de animación:** Rápido y preciso. Transiciones de 150-200ms.
Nada se demora. Como un closer que no desperdicia palabras.
Reveal del score: animación de conteo (0 → score final en 1.2 segundos).
Milestones de racha: un haptic agudo + pulso breve de escala.

**Momentos de feedback háptico:**
- Mensaje enviado → impacto ligero
- Score revelado → impacto medio
- Milestone de racha → impacto fuerte (se lo ganó)
- Paywall abierto → ninguno (sin recompensa en esta acción)
- Compra completada → impacto fuerte + haptic de éxito

---

## 9. TAGLINES

**Racional:** "Práctica de ventas con IA. Recibe un score. Cierra más."
**Emocional:** "Deja de perder propuestas que deberías ganar."
**Provocador:** "Tu competencia está practicando ahorita."
**Corto (3 palabras):** "Practica. Puntúa. Cierra."

---

# ═══════════════════════════════════════════════════════════
# PARTE 2 — APP IDENTITY & STRATEGY
# ═══════════════════════════════════════════════════════════

```
╔═══════════════════════════════════════════════════════════╗
║              APP IDENTITY CARD — SALES COACH              ║
╠═══════════════════════════════════════════════════════════╣
║ Name:          Sales Coach — Roleplay con IA               ║
║ Tagline:       "Cierra más. Gana más. Cada día."           ║
║ Market:        WEALTH → Ganar más dinero                   ║
║ Submarket:     Freelancers, emprendedores, consultores      ║
║                y vendedores de servicios de alto ticket     ║
║                ($2K–$20K por deal) en LATAM                 ║
║                                                             ║
║ Core Desire:   Cerrar más propuestas y ganar               ║
║                significativamente más sin años de           ║
║                prueba y error costoso                       ║
║                                                             ║
║ The Pain:      Pierden deals que deberían ganar porque      ║
║                se congelan con objeciones, se sub-precian   ║
║                o no saben cuándo/cómo cerrar. Cada deal     ║
║                perdido = ingreso perdido real.              ║
║                                                             ║
║ The Solution:  Un sparring partner de IA (Rex) que hace     ║
║                el papel del cliente más difícil que         ║
║                encontrarán — para que los reales sean       ║
║                fáciles. Sesiones con score + feedback       ║
║                específico y accionable.                     ║
║                                                             ║
║ Avatar:        Carlos, 29, desarrollador web / consultor    ║
║                de marketing freelance en LATAM.             ║
║                Gana $3K–5K/mes pero pierde el 60% de        ║
║                propuestas. No porque su trabajo sea malo — ║
║                sino porque se congela con "está muy caro"   ║
║                y se auto-descuenta hacia la pobreza.        ║
║                Tiene el libro de Hormozi. No ha cerrado     ║
║                la brecha entre saber y hacer.               ║
║                                                             ║
║ Core Feature:  Roleplay con IA — Rex hace de cliente        ║
║                difícil, el usuario practica en vivo,        ║
║                recibe score 0-100 con feedback específico.  ║
║                                                             ║
║ Idioma:        Español — LATAM primero                      ║
║ Mercado:       México, Colombia, Argentina, España, Perú    ║
║                                                             ║
║ Diferenciadores vs CloserCoach ($29/mes, solo inglés):      ║
║   → Primer app de ventas seria en español                  ║
║   → Mitad del precio ($9.99 vs $29)                        ║
║   → Sin timer (práctica sin límite de tiempo)              ║
║   → Escenarios custom (tu industria + tu producto)         ║
║   → Nunca crashea (confiabilidad primero, siempre)         ║
║                                                             ║
║ Precio:        Gratis: 3 sesiones/día                      ║
║                Pro: $9.99/mes | $79.99/año (7 días gratis) ║
║                                                           ║
║ AI Models:                                                ║
║   Roleplay:    claude-haiku-4-5-20251001 (streaming)     ║
║   Feedback:    claude-sonnet-4-6 (analysis)              ║
║   All via:     Supabase Edge Functions (never client)    ║
╚═══════════════════════════════════════════════════════════╝
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 3 — SPEC DRIVEN DEVELOPMENT
# Los 4 documentos que Claude Code lee en cada sesión
# ═══════════════════════════════════════════════════════════

---

# DOCUMENTO 1: REQUIREMENTS.md

```markdown
# Requirements — Sales Coach v1.0
Last updated: March 2026

## Overview
Sales Coach is an iOS and Android app that helps freelancers,
entrepreneurs, and sales professionals improve their closing rate
through AI-powered roleplay practice. The AI (Rex) plays the role
of a difficult customer while the user practices their sales
responses. Sessions are scored 0–100 with specific, actionable
feedback. Users build a daily practice habit through streaks,
progress tracking, and personalized insights.

## User Types
- **Free User:** 3 AI practice sessions/day, 5 library lessons,
  7-day session history, no custom scenarios
- **Pro User ($9.99/mo or $79.99/yr):** Unlimited sessions,
  all lessons, full history, custom scenarios, personal analytics
- **New User (first session):** Sees onboarding flow →
  personalization → paywall → core app

---

## REQ-001: Authentication — Register with Email
**Priority:** CRITICAL
**User Story:** As a new user, I want to create an account with
email and password so that my progress is saved across devices.

### Acceptance Criteria
GIVEN the user is on the Register screen
WHEN they enter a valid email, password (min 8 chars), and tap "Create Account"
THEN their account is created in Supabase Auth
AND a profile row is created in the profiles table
AND a verification email is sent
AND the user is navigated to verify-email.tsx screen

### Edge Cases
- WHEN email already exists THEN show inline: "An account with this email already exists. Sign in?"
- WHEN password < 8 chars THEN inline: "Password must be at least 8 characters"
- WHEN no internet THEN inline: "No connection. Check your internet and try again."
- WHEN Supabase is down THEN inline: "Unable to create account right now. Try again in a moment."
- WHEN user submits twice (double tap) THEN button disabled after first tap

### Out of Scope (v1)
- Username/display name during registration (collected in onboarding)
- Phone number verification
- Social registration beyond Google/Apple

---

## REQ-002: Authentication — Login with Email
**Priority:** CRITICAL
**User Story:** As an existing user, I want to sign in with my
email and password so I can access my progress.

### Acceptance Criteria
GIVEN the user is on the Login screen
WHEN they enter correct email and password and tap "Sign In"
THEN they are authenticated via Supabase
AND session token stored in expo-secure-store
AND navigated to app/(main)/home.tsx

### Edge Cases
- WHEN wrong password THEN inline: "Incorrect email or password."
  (never specify which is wrong — security)
- WHEN unverified email THEN inline: "Check your inbox — verify
  your email to continue." + "Resend email" button
- WHEN account doesn't exist THEN same message as wrong password
- WHEN 5 failed attempts THEN show: "Too many attempts. Wait 15 minutes."
- WHEN "Forgot password?" tapped THEN navigate to forgot-password.tsx

### Out of Scope (v1)
- Biometric login (v2)
- Remember me toggle (v2)

---

## REQ-003: Authentication — Google OAuth
**Priority:** HIGH
**User Story:** As a user, I want to sign in with Google so I don't
have to manage another password.

### Acceptance Criteria
GIVEN the user taps "Continue with Google"
WHEN they complete the Google OAuth flow
THEN account is created or retrieved via Supabase Auth
AND session stored in expo-secure-store
AND IF new user → onboarding flow
AND IF existing user → home.tsx

### Edge Cases
- WHEN user cancels Google prompt THEN return to login screen (no error)
- WHEN Google services unavailable THEN inline: "Google sign-in unavailable. Use email instead."

---

## REQ-004: Authentication — Apple Sign In
**Priority:** CRITICAL (App Store rejection if missing)
**User Story:** As an iOS user, I want to sign in with Apple ID
so I can use the app without sharing my email.

### Acceptance Criteria
GIVEN the user taps "Continue with Apple"
WHEN they complete Apple Sign In
THEN account created or retrieved via Supabase
AND session stored in expo-secure-store
AND IF new user → onboarding
AND IF existing user → home.tsx
NOTE: Apple hides email by default — store Apple's relay email,
never assume real email is available.

### Edge Cases
- WHEN user cancels → return to login silently
- WHEN Apple services down → inline error + suggest email login

---

## REQ-005: Authentication — Forgot Password
**Priority:** HIGH
**User Story:** As a user who forgot their password, I want to
reset it via email so I can regain access.

### Acceptance Criteria
GIVEN the user is on forgot-password.tsx
WHEN they enter their email and tap "Send Reset Link"
THEN Supabase sends a password reset email
AND user sees: "Check your inbox. Link expires in 1 hour."

### Edge Cases
- WHEN email not registered THEN show same success message
  (don't reveal if email exists — security)
- WHEN no internet THEN inline error

---

## REQ-006: Authentication — Session Persistence
**Priority:** CRITICAL
**User Story:** As a returning user, I want to stay logged in
between app sessions so I don't have to sign in every time.

### Acceptance Criteria
GIVEN a user has previously authenticated
WHEN they close and reopen the app
THEN they are automatically signed in
AND navigated directly to home.tsx (skipping auth screens)
AND session is refreshed silently in the background

### Edge Cases
- WHEN token expired THEN refresh automatically via Supabase autoRefreshToken
- WHEN refresh fails (>30 days inactive) THEN navigate to login with:
  "Your session expired. Sign in again."
- WHEN device storage cleared THEN treat as new session → login screen

---

## REQ-007: Authentication — Logout
**Priority:** HIGH

### Acceptance Criteria
GIVEN user taps "Sign Out" in Profile screen
WHEN they confirm the action
THEN Supabase session is invalidated
AND expo-secure-store token is deleted
AND Zustand auth store is cleared
AND navigated to app/(auth)/index.tsx
AND back button does NOT return them to authenticated screens

### Edge Cases
- WHEN logout fails (no internet) THEN clear local session anyway
  and navigate to login (offline logout is acceptable)

---

## REQ-008: Onboarding — First Launch Flow
**Priority:** CRITICAL
**User Story:** As a new user, I want to understand what the app
does and feel excited before I'm asked to pay.

### Acceptance Criteria
GIVEN the user opens the app for the first time
WHEN the splash screen finishes
THEN they see a 4-screen onboarding flow
AND screen 1: bold promise + what the app does
AND screen 2-3: personalization questions (stored in profiles.onboarding_data)
AND screen 4: pre-paywall page + PaywallSheet

Screen 1: "Stop Losing Deals You Should Be Winning."
  Subheadline: "Practice against AI. Get scored. Close more."
  CTA: "Let's Go →"

Screen 2: "What do you sell?"
  Options: Services / Software/SaaS / Physical Products /
           Real Estate / Insurance / Other
  (stored as onboarding_data.sells)

Screen 3: "What's your biggest challenge?"
  Options: Handling price objections / Closing the deal /
           Getting past gatekeepers / Follow-ups that convert
  (stored as onboarding_data.challenge)

Screen 4: "You're 2 minutes from your first practice rep."
  Subheadline: "7,000+ closers practice here daily."
  → triggers PaywallSheet

### Edge Cases
- WHEN user skips paywall THEN they enter app as free user
- WHEN user has already completed onboarding (returning user)
  THEN skip directly to home.tsx
- WHEN app crashes during onboarding THEN restart from beginning
  (onboarding_complete flag only set on finish)

---

## REQ-009: Onboarding — Paywall Introduction
**Priority:** CRITICAL

### Acceptance Criteria
GIVEN the user has completed screen 3 of onboarding
WHEN screen 4 appears
THEN PaywallSheet opens automatically (not as modal the user triggers)
AND annual plan is shown first with "Best Value" badge
AND monthly plan is shown second
AND "Continue with 3 reps/day" dismiss option is visible (bottom, small)
AND CTA is "Start My Free 7-Day Trial"

---

## REQ-010: Practice — Scenario Selection
**Priority:** CRITICAL
**User Story:** As a user, I want to choose a practice scenario
that matches my sales situation so the practice is relevant.

### Acceptance Criteria
GIVEN the user is on app/(main)/practice/index.tsx
WHEN the screen loads
THEN they see scenarios organized by category
AND each scenario shows: title, difficulty (Beginner/Intermediate/Advanced),
    estimated time, and a lock icon if Pro-only
AND free users see first 8 scenarios unlocked + rest locked with Pro badge
AND tapping a locked scenario → opens PaywallSheet
AND tapping an unlocked scenario → navigates to practice/[id].tsx

**Escenarios predeterminados v1 (mínimo 10):**
CATEGORÍA: Precio y Presupuesto
- "Está muy caro" (Principiante)
- "No tenemos presupuesto ahorita" (Intermedio)
- "Tu competencia es más barata" (Avanzado)

CATEGORÍA: Evasivas
- "Lo tengo que pensar" (Principiante)
- "Mándame información" (Intermedio)
- "Necesito hablarlo con mi socio/jefe" (Avanzado)

CATEGORÍA: Gatekeepers
- "No está disponible" (Principiante)
- "Ya tenemos un proveedor" (Intermedio)

CATEGORÍA: Técnicas de Cierre
- "El Cierre Asuntivo" (Principiante)
- "El Cierre de Retirada" (Intermedio)
- "El Cierre de Urgencia" (Avanzado)

CATEGORÍA: Personalizado (Solo Pro)
- "Crear mi propio escenario" → constructor de escenario custom

### Edge Cases
- WHEN no internet THEN show cached scenario list (titles/descriptions)
  but disable starting new session

---

## REQ-011: Practice — AI Roleplay Session
**Priority:** CRITICAL
**User Story:** As a user, I want to practice handling objections
in a realistic back-and-forth with Rex so I build real skills.

### Acceptance Criteria
GIVEN the user selects a scenario and taps "Start Session"
WHEN the session screen loads
THEN Rex opens with the objection specific to the scenario
AND a text input appears for the user's response
AND a "Send" button (active only when input is not empty)
AND a progress indicator showing exchange count (1/5, 2/5...)
AND an "End Session" button (visible but labeled "Skip to Feedback" — available anytime)

WHEN the user sends a message
THEN it appears immediately as a chat bubble (right-aligned, Primary color background)
AND a TypingIndicator appears (Rex is thinking)
AND Rex responds within 8 seconds as a realistic difficult customer
AND Rex's response appears streaming (character by character)

WHEN 5 exchanges are complete (5 user messages sent)
THEN "End Session" button changes to "Get My Score" with highlighted styling
AND tapping it ends the session and navigates to result.tsx

### Edge Cases
- WHEN AI response takes >8s THEN TypingIndicator text changes to "Rex is thinking..."
- WHEN AI response takes >15s THEN show: "Taking longer than usual." + Retry button
- WHEN AI API completely unavailable THEN: "Rex is unavailable right now.
  Your session has been saved — try again later." + navigate home
- WHEN free user has used 3 sessions today AND taps "Start Session"
  THEN show PaywallSheet BEFORE entering session (never interrupt mid-session)
- WHEN user types in empty field and taps Send THEN: "Write your response to continue"
- WHEN user backgrounds app mid-session THEN save session state to AsyncStorage
  (messages array + scenarioId + timestamp)
- WHEN user returns to app with saved session THEN show:
  "Resume your session with Rex?" [Resume] [Start Over]
- WHEN user navigates back mid-session THEN confirmation:
  "Leave session? Your progress will be lost." [Leave] [Keep Practicing]
- WHEN network drops mid-session THEN show offline banner + queue messages
  to send when connection returns

### Out of Scope (v1)
- Voice input (v2)
- Session sharing with human coach (v2)
- Real-time multiplayer practice (v2)

---

## REQ-012: Practice — Session Result & Feedback
**Priority:** CRITICAL
**User Story:** As a user, I want to receive specific, actionable
feedback after each session so I know exactly what to improve.

### Acceptance Criteria
GIVEN a session has ended
WHEN result.tsx loads
THEN it shows:
  - Overall score (0–100) with animated count-up (1.2 seconds)
  - Score label: 0-40="Keep practicing", 41-70="Getting there",
    71-85="Strong close", 86-100="Elite closer"
  - 3 STRENGTHS: specific things they did well with exact quote
    from their messages
  - 3 IMPROVEMENTS: specific changes with example better response
  - BEST LINE: the single best thing they said in the session
  - REX'S VERDICT: one-sentence brutal honest assessment
  - Two CTAs: "Practice Again" (same scenario) + "Try Another" (scenario selector)
  - Streak update: "+1 day" if applicable

AND the session is saved to practice_sessions table with:
  messages JSONB, score INTEGER, ai_feedback JSONB, completed=true

### Edge Cases
- WHEN feedback generation fails (Sonnet API down)
  THEN show basic score only + "Full feedback unavailable — Rex will catch you next time"
- WHEN user has no internet when session ends
  THEN save locally, sync to Supabase when connection returns
  AND show result from local data

---

## REQ-013: Learning — Lesson Library
**Priority:** HIGH
**User Story:** As a user, I want to study proven sales frameworks
so I know what to practice in the roleplay.

### Acceptance Criteria
GIVEN user taps "Learn" tab
THEN they see lessons organized by category
AND each lesson shows: title, duration, difficulty, completion checkmark
AND free users see first 5 lessons unlocked
AND Pro badge on locked lessons
AND completed lessons show checkmark + date completed
AND tapping lesson → navigates to learn/[id].tsx

**Categorías de lecciones v1 (mínimo 15 lecciones):**

FRAMEWORKS
- El Framework de Oferta de Hormozi (Cómo hacer que sea obvio decir sí)
- SPIN Selling en 5 minutos
- El método Challenger Sale
- Cómo estructura Grant Cardone un cierre

MANEJO DE OBJECIONES
- "Está muy caro" — 5 cierres que funcionan
- "Lo tengo que pensar" — la razón real y cómo manejarlo
- "Necesito hablarlo con mi socio" — cómo no perder aquí
- "Tu competencia es más barata" — cómo ganar en valor, no en precio
- "No es buen momento" — cómo crear urgencia sin presionar

TÉCNICAS DE CIERRE
- El Cierre Asuntivo
- El Cierre de Retirada
- El Cierre de Urgencia (ético)
- El Cierre de Resumen
- El Cierre del Silencio (el más subutilizado)

MENTALIDAD
- Por qué la mayoría de vendedores se auto-sabotean antes del cierre
- El único cambio de creencia que transformó la tasa de cierre de Jordan Belfort

---

## REQ-014: Learning — Individual Lesson
**Priority:** HIGH

### Acceptance Criteria
GIVEN user taps a lesson
WHEN lesson/[id].tsx loads
THEN content displays in readable blocks:
  text blocks, quote blocks (highlighted), example scripts,
  "Practice this" CTA that opens the relevant scenario
AND a "Mark as Complete" button at the bottom
AND progress: "Lesson 3 of 15" indicator
AND "Next Lesson" button

### Edge Cases
- WHEN lesson is premium and user is free
  THEN first 30% of content visible + PaywallSheet blur overlay

---

## REQ-015: Progress — Streak Tracking
**Priority:** HIGH
**User Story:** As a user, I want a daily streak so I'm motivated
to practice every single day.

### Acceptance Criteria
GIVEN a user completes at least 1 practice session in a day
THEN their streak_count in profiles increments by 1
AND last_practice_date is updated to today
AND a streak milestone notification is sent at:
  Day 3, 7, 14, 30, 60, 100

GIVEN a user does NOT practice today
WHEN midnight passes in their timezone
THEN streak resets to 0
AND a "Your streak ended" notification is sent (if notifications enabled)

GIVEN a user opens the app
WHEN home.tsx loads
THEN current streak is prominently displayed

### Edge Cases
- WHEN user practices twice in one day → streak only increments once
- WHEN device timezone changes → use server timestamp, not device time
- WHEN user completes session at 11:59 PM → counts for that day

---

## REQ-016: Progress — Analytics Dashboard
**Priority:** HIGH

### Acceptance Criteria
GIVEN user taps "Progress" tab
THEN they see:
  - Current streak + longest streak ever
  - Total sessions completed
  - Average score (last 30 days)
  - Score trend chart (last 14 sessions)
  - Sessions per day (last 7 days) bar chart
  - Best score ever + which scenario
  - Most practiced scenario
  - Completion rate (sessions started vs completed)

Free users: See last 7 days of data
Pro users: Full history, exportable

---

## REQ-017: Subscription — Free Tier Enforcement
**Priority:** CRITICAL

### Acceptance Criteria
GIVEN a free user has completed 3 sessions today
WHEN they attempt to start a 4th session
THEN PaywallSheet opens BEFORE the session starts
AND their selected scenario is preserved (not lost)
AND if they upgrade, they immediately start the session

### Free tier limits:
- 3 AI practice sessions per day (resets at midnight UTC)
- 5 lessons accessible
- 7 days of session history
- No custom scenarios

### Edge Cases
- WHEN free user limit check fails (Supabase down)
  THEN allow the session (fail open, not closed — better UX)
- WHEN user upgrades mid-day THEN immediately unlock unlimited
  (don't require app restart)

---

## REQ-018: Subscription — Paywall
**Priority:** CRITICAL

### Acceptance Criteria
GIVEN PaywallSheet is triggered
THEN it opens as a bottom sheet (80% screen height)
AND annual plan shown FIRST: "$79.99/year — $6.67/month" with "Best Value" badge
AND monthly plan shown: "$9.99/month"
AND 3 benefit rows with icons:
  "Unlimited daily practice sessions with Rex"
  "Custom scenarios for your industry & product"
  "Full session analysis with personal close rate"
AND social proof: "Join 7,000+ closers who practice daily"
AND primary CTA: "Start My Free 7-Day Trial"
AND under CTA: "Cancel anytime. No questions asked."
AND bottom small text: "Restore Purchases"
AND X button (top right) dismisses sheet
AND dismissing shows free tier limit (no guilt copy)

### RevenueCat Product IDs
- iOS Monthly: sales_coach_monthly_999
- iOS Annual: sales_coach_annual_7999
- Android Monthly: sales_coach_monthly_999
- Android Annual: sales_coach_annual_7999
- Entitlement: "pro" (exact, lowercase, always)

---

## REQ-019: Subscription — Purchase Flow
**Priority:** CRITICAL

### Acceptance Criteria
GIVEN user taps "Start My Free 7-Day Trial"
WHEN RevenueCat purchase flow completes successfully
THEN isPro = true immediately (no app restart)
AND PaywallSheet closes
AND user continues where they were
AND subscription synced to Supabase via webhook

### Edge Cases
- WHEN purchase is cancelled THEN return to PaywallSheet (no error)
- WHEN purchase fails (payment declined) THEN show RevenueCat error message
- WHEN already subscribed THEN skip purchase, just activate

---

## REQ-020: Subscription — Restore Purchases
**Priority:** HIGH (App Store requirement)

### Acceptance Criteria
GIVEN user taps "Restore Purchases"
THEN RevenueCat.restorePurchases() is called
AND if active subscription found → isPro = true + success toast
AND if no subscription found → "No active subscription found."

---

## REQ-021: Custom Scenarios (Pro Only)
**Priority:** HIGH
**User Story:** As a Pro user, I want to create custom scenarios
with my actual product/service so practice feels real.

### Acceptance Criteria
GIVEN Pro user taps "Create Scenario" in practice/index.tsx
THEN they see a form:
  - Scenario name (your label)
  - "What are you selling?" (product/service description)
  - "What objection will Rex use?" (the opening line)
  - "What industry/context?" (optional)
  - Difficulty: Beginner / Intermediate / Advanced
WHEN they save it
THEN it appears in their scenarios list under "Custom"
AND Rex uses their exact product/objection in the session

### Edge Cases
- WHEN free user somehow accesses this → redirect to PaywallSheet
- WHEN scenario description is empty → inline validation

### Out of Scope (v1)
- Sharing custom scenarios with other users (v2)
- AI-generated scenario suggestions (v2)

---

## REQ-022: AI — Rate Limiting & Cost Control
**Priority:** CRITICAL

### Acceptance Criteria
GIVEN any AI call is made
THEN it goes through Supabase Edge Function (NEVER direct from client)
AND the Edge Function checks ai_usage table for daily count
AND free users: max 3 sessions/day
AND Pro users: max 50 sessions/day (cost control — effectively unlimited)
AND usage is logged to ai_usage table after each call

### Edge Cases
- WHEN rate limit check fails → allow the call (fail open)
- WHEN AI API key is invalid → return 500, show generic error
- WHEN usage logging fails → don't block the AI call

---

## REQ-023: AI — Timeout & Error Handling
**Priority:** CRITICAL

### Acceptance Criteria
GIVEN an AI call is made
WHEN response takes >8 seconds
THEN TypingIndicator text changes to "Rex is thinking hard on this one..."
WHEN response takes >15 seconds
THEN show: "Taking longer than usual." with Retry button
WHEN response takes >30 seconds OR times out
THEN: "Rex is unavailable right now." + option to save session and try later

### Edge Cases
- WHEN streaming is interrupted mid-response
  THEN show what was received + "Response cut short. Try again."
- WHEN invalid JSON returned by AI
  THEN log error silently + show generic "Rex had trouble with that one. Try again."

---

## REQ-024: Notifications — Setup
**Priority:** HIGH

### Acceptance Criteria
GIVEN a new user completes their FIRST session
WHEN result.tsx appears
THEN after a 3-second delay, show notification permission prompt
AND framing: "Get reminded to practice daily — don't lose your streak."
(NOT on first launch — earns permission after demonstrating value)

---

## REQ-025: Notifications — Content
**Priority:** HIGH

Notification schedule (only if user has enabled):
- Daily habit: 7:00 PM local time if no session that day
  "Time to get your reps in."
- Streak at risk: 10:00 PM if no session + streak > 3
  "Your {{n}}-day streak ends at midnight."
- Weekly insight: Monday 9:00 AM
  "Last week: {{n}} sessions. Avg score: {{n}}/100."
- Comeback (inactive 3+ days): once
  "It's been {{n}} days. Rex has been waiting."

---

## REQ-026: Feedback — In-App Feedback Button
**Priority:** HIGH

### Acceptance Criteria
GIVEN user is on any main tab screen
THEN a small feedback button is visible (bottom-right, 44×44pt touch target)
WHEN tapped → BottomSheet opens:
  Emoji rating: 😞 😐 🙂 😊 🤩
  Optional text field: "Tell Rex what you think"
  Submit button
WHEN submitted → saved to feedback table
AND show thank-you animation: "Thanks. Rex reads every message."

---

## REQ-027: Feedback — App Review Prompt
**Priority:** MEDIUM

### Acceptance Criteria
GIVEN a user has completed a session with score > 75
AND it is not their first 3 sessions
AND it has been > 30 days since last prompt (or never prompted)
THEN trigger expo-store-review
AND store prompt date in AsyncStorage

---

## REQ-028: Settings — Profile Screen
**Priority:** HIGH

### Acceptance Criteria
Profile.tsx contains:
- Display name (editable)
- Subscription status: "Free" or "Pro — renews [date]"
- Upgrade CTA (if free): opens PaywallSheet
- Notifications toggle
- Privacy Policy → expo-web-browser
- Terms of Service → expo-web-browser
- Contact Support → mailto:support@salescoach.app
- App version (expo-constants)
- Delete Account button
- Sign Out button (bottom, Secondary color, NOT red)

---

## REQ-029: Settings — Delete Account
**Priority:** CRITICAL (Apple requirement)

### Acceptance Criteria
GIVEN user taps "Delete Account"
THEN confirmation alert: "This deletes all your progress,
  streaks, and history. This cannot be undone."
  [Cancel] [Delete Account]
WHEN confirmed
THEN all user data deleted from Supabase (cascade delete)
AND RevenueCat customer data cleared
AND local storage cleared
AND navigated to auth screen

---

## REQ-030: Performance Standards
**Priority:** HIGH

### Acceptance Criteria
- App launch (cold start): < 3 seconds on 2022 Android mid-range
- Screen transitions: < 300ms
- Paywall opens: < 200ms
- AI first token (streaming starts): < 3 seconds
- All lists > 20 items: use FlashList
- All images: use Expo Image (not RN Image)
- No jank during chat scroll (60fps minimum)
- Bundle size: < 50MB

---

## REQ-031: Offline Behavior
**Priority:** HIGH

### Acceptance Criteria
GIVEN user has no internet connection
THEN home screen shows offline banner (top, non-blocking)
AND scenario list loads from cache (last known state)
AND attempting to start session: "Rex needs internet. Connect and try again."
AND progress screen shows cached data with "Last synced [time]" label
AND previously completed sessions are viewable offline

---

# DOCUMENTO 2: DESIGN.md

```markdown
# Design & Architecture — Sales Coach v1.0

## 1. System Architecture

┌─────────────────────────────────────────────────────────────────┐
│                    MOBILE APP (Expo + React Native)             │
│          Expo Router · NativeWind · Zustand · TanStack Query    │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTPS / WSS only
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SUPABASE BACKEND                           │
│  ┌─────────────┐   ┌──────────────────┐   ┌──────────────────┐  │
│  │  Auth (JWT) │   │ PostgreSQL + RLS  │   │ Edge Functions   │  │
│  │             │   │                  │   │ (Deno runtime)   │  │
│  │ autoRefresh │   │ Row Level Sec.   │   │                  │  │
│  │ SecureStore │   │ on every table   │   │ ai-roleplay      │  │
│  └─────────────┘   └──────────────────┘   │ ai-feedback      │  │
│                                           │ rc-webhook       │  │
│                                           └──────────────────┘  │
└──────────────────────────┬──────────────────────────────────────┘
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
      ┌──────────────┐          ┌──────────────────┐
      │  RevenueCat  │          │   Anthropic API  │
      │  (payments)  │          │                  │
      │              │          │ Haiku: roleplay  │
      │  Webhooks →  │          │ Sonnet: feedback │
      │  Supabase    │          └──────────────────┘
      └──────────────┘

CRITICAL RULE: Mobile app NEVER calls Anthropic API directly.
All AI calls go through Supabase Edge Functions.
API keys live ONLY in Supabase secrets.

## 2. Database Schema

-- ══════════════════════════════════════════
-- EXTENSIONS
-- ══════════════════════════════════════════
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ══════════════════════════════════════════
-- PROFILES (extended user data)
-- ══════════════════════════════════════════
CREATE TABLE profiles (
  id                UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name      TEXT,
  avatar_url        TEXT,
  skill_level       TEXT DEFAULT 'beginner'
                    CHECK (skill_level IN ('beginner','intermediate','advanced')),
  onboarding_data   JSONB DEFAULT '{}',
  -- e.g. {"sells": "services", "challenge": "price_objections"}
  onboarding_complete BOOLEAN DEFAULT FALSE,
  streak_count      INTEGER DEFAULT 0,
  longest_streak    INTEGER DEFAULT 0,
  last_practice_date DATE,
  total_sessions    INTEGER DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- SCENARIOS (practice scenarios)
-- ══════════════════════════════════════════
CREATE TABLE scenarios (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title             TEXT NOT NULL,
  category          TEXT NOT NULL,
  -- 'price_budget' | 'stalling' | 'gatekeepers' | 'closing' | 'custom'
  difficulty        TEXT NOT NULL CHECK (difficulty IN ('beginner','intermediate','advanced')),
  opening_objection TEXT NOT NULL, -- Rex's first line
  system_prompt     TEXT NOT NULL, -- Full system prompt for Rex
  is_premium        BOOLEAN DEFAULT FALSE,
  is_active         BOOLEAN DEFAULT TRUE,
  order_index       INTEGER DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- CUSTOM SCENARIOS (Pro user-created)
-- ══════════════════════════════════════════
CREATE TABLE custom_scenarios (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title             TEXT NOT NULL,
  product_description TEXT NOT NULL,
  opening_objection TEXT NOT NULL,
  industry          TEXT,
  difficulty        TEXT DEFAULT 'intermediate'
                    CHECK (difficulty IN ('beginner','intermediate','advanced')),
  times_practiced   INTEGER DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- PRACTICE SESSIONS
-- ══════════════════════════════════════════
CREATE TABLE practice_sessions (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  scenario_id       UUID REFERENCES scenarios(id),
  custom_scenario_id UUID REFERENCES custom_scenarios(id),
  -- one of scenario_id or custom_scenario_id must be set
  messages          JSONB DEFAULT '[]',
  -- [{"role": "assistant"|"user", "content": "...", "timestamp": "ISO"}]
  score             INTEGER CHECK (score >= 0 AND score <= 100),
  ai_feedback       JSONB,
  -- {"strengths": ["...","...","..."],
  --  "improvements": ["...","...","..."],
  --  "best_line": "...",
  --  "rex_verdict": "...",
  --  "score_label": "..."}
  exchange_count    INTEGER DEFAULT 0,
  duration_seconds  INTEGER,
  completed         BOOLEAN DEFAULT FALSE,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- LESSONS
-- ══════════════════════════════════════════
CREATE TABLE lessons (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title             TEXT NOT NULL,
  category          TEXT NOT NULL,
  -- 'frameworks' | 'objections' | 'closing' | 'mindset'
  content           JSONB NOT NULL,
  -- {"blocks": [{"type": "text"|"quote"|"script"|"cta", "content": "..."}]}
  difficulty        TEXT CHECK (difficulty IN ('beginner','intermediate','advanced')),
  duration_minutes  INTEGER,
  related_scenario_id UUID REFERENCES scenarios(id),
  is_premium        BOOLEAN DEFAULT FALSE,
  order_index       INTEGER DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- USER LESSON PROGRESS
-- ══════════════════════════════════════════
CREATE TABLE user_lesson_progress (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  lesson_id         UUID NOT NULL REFERENCES lessons(id),
  completed_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- ══════════════════════════════════════════
-- SUBSCRIPTIONS (synced from RevenueCat)
-- ══════════════════════════════════════════
CREATE TABLE subscriptions (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
  status            TEXT NOT NULL DEFAULT 'free',
  -- 'free' | 'trial' | 'active' | 'cancelled' | 'expired' | 'billing_issue'
  product_id        TEXT,
  -- 'sales_coach_monthly_999' | 'sales_coach_annual_7999'
  period_type       TEXT,
  -- 'monthly' | 'annual'
  expires_at        TIMESTAMPTZ,
  trial_ends_at     TIMESTAMPTZ,
  revenuecat_id     TEXT UNIQUE,
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- AI USAGE (rate limiting + cost tracking)
-- ══════════════════════════════════════════
CREATE TABLE ai_usage (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  feature           TEXT NOT NULL,
  -- 'roleplay' | 'feedback' | 'analysis'
  model             TEXT NOT NULL,
  input_tokens      INTEGER,
  output_tokens     INTEGER,
  session_id        UUID REFERENCES practice_sessions(id),
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- FEEDBACK
-- ══════════════════════════════════════════
CREATE TABLE feedback (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID REFERENCES profiles(id) ON DELETE SET NULL,
  rating            INTEGER CHECK (rating >= 1 AND rating <= 5),
  text              TEXT,
  screen            TEXT,
  app_version       TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);

-- ══════════════════════════════════════════
-- ROW LEVEL SECURITY
-- ══════════════════════════════════════════
-- Enable RLS on every table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE practice_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_lesson_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
-- scenarios and lessons: public read
ALTER TABLE scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

-- Profiles: own row only
-- Performant pattern: wrap auth.uid() in SELECT
CREATE POLICY "profiles_own" ON profiles FOR ALL
  USING ((SELECT auth.uid()) = id)
  WITH CHECK ((SELECT auth.uid()) = id);

-- Custom scenarios: own rows only
CREATE POLICY "custom_scenarios_own" ON custom_scenarios FOR ALL
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Practice sessions: own rows only
CREATE POLICY "sessions_own" ON practice_sessions FOR ALL
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Lesson progress: own rows only
CREATE POLICY "lesson_progress_own" ON user_lesson_progress FOR ALL
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Subscriptions: own row only
CREATE POLICY "subscriptions_own" ON subscriptions FOR ALL
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- AI usage: own rows only
CREATE POLICY "ai_usage_own" ON ai_usage FOR ALL
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Feedback: own rows
CREATE POLICY "feedback_own" ON feedback FOR ALL
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

-- Scenarios: all authenticated users can read
CREATE POLICY "scenarios_authenticated_read" ON scenarios
  FOR SELECT USING (auth.role() = 'authenticated');

-- Lessons: all authenticated users can read
CREATE POLICY "lessons_authenticated_read" ON lessons
  FOR SELECT USING (auth.role() = 'authenticated');

-- ══════════════════════════════════════════
-- INDEXES
-- ══════════════════════════════════════════
CREATE INDEX idx_practice_sessions_user_id ON practice_sessions (user_id);
CREATE INDEX idx_practice_sessions_user_created ON practice_sessions (user_id, created_at DESC);
CREATE INDEX idx_practice_sessions_user_date ON practice_sessions (user_id, created_at::date);
CREATE INDEX idx_ai_usage_user_date ON ai_usage (user_id, created_at::date);
CREATE INDEX idx_lessons_category ON lessons (category, order_index);
CREATE INDEX idx_scenarios_category ON scenarios (category, order_index);
CREATE INDEX idx_custom_scenarios_user ON custom_scenarios (user_id, created_at DESC);

-- ══════════════════════════════════════════
-- TRIGGERS
-- ══════════════════════════════════════════

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, SPLIT_PART(NEW.email, '@', 1));
  
  INSERT INTO public.subscriptions (user_id, status)
  VALUES (NEW.id, 'free');
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

-- is_pro() helper function for Edge Functions
CREATE OR REPLACE FUNCTION is_pro(p_user_id UUID)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM subscriptions
    WHERE user_id = p_user_id
    AND status IN ('trial', 'active')
    AND (expires_at IS NULL OR expires_at > NOW())
  );
$$ LANGUAGE sql SECURITY DEFINER;

## 3. Navigation Tree

Root (_layout.tsx)
├── NOT authenticated → app/(auth)/
│   ├── index.tsx         ← Onboarding (4 screens → paywall)
│   ├── login.tsx
│   ├── register.tsx
│   ├── forgot-password.tsx
│   └── verify-email.tsx
└── authenticated → app/(main)/
    ├── _layout.tsx        ← Tab bar: Home | Practice | Learn | Progress | Profile
    ├── home.tsx           ← Streak, today's recommendation, quick stats, recent session
    ├── practice/
    │   ├── index.tsx      ← Scenario selector (categories + list)
    │   ├── [id].tsx       ← Active AI session (streaming chat)
    │   └── result.tsx     ← Score + feedback + CTAs
    ├── learn/
    │   ├── index.tsx      ← Lesson library (categories)
    │   └── [id].tsx       ← Individual lesson viewer
    ├── progress.tsx       ← Full analytics dashboard
    └── profile.tsx        ← Settings + subscription + legal

## 4. AI Model Selection

| Feature           | Model                    | String exact               | Cost est.   | Why              |
|-------------------|--------------------------|----------------------------|-------------|------------------|
| Roleplay (stream) | Claude Haiku 4.5         | claude-haiku-4-5-20251001  | ~$0.001/msg | Speed + cost     |
| Session feedback  | Claude Sonnet 4.6        | claude-sonnet-4-6          | ~$0.01/sess | Quality analysis |

## 5. Edge Functions

| Function             | Input                          | Output              | Auth Required | Rate Limit              |
|----------------------|-------------------------------|---------------------|---------------|-------------------------|
| ai-roleplay          | scenarioId, messages[], userId | streaming text      | YES           | 3/day free, 50/day pro  |
| ai-feedback          | sessionId, messages[], userId  | JSON feedback obj   | YES           | 1/session (auto-called) |
| revenuecat-webhook   | RevenueCat event payload       | 200 OK              | Signature     | None                    |

## 6. RevenueCat Configuration
- Entitlement: "pro" (exact, lowercase)
- iOS Monthly: sales_coach_monthly_999 → $9.99/month
- iOS Annual: sales_coach_annual_7999 → $79.99/year
- Android: same product IDs
- Trial: 7 days on both plans

## 7. Free Tier Limits
| Feature                | Free        | Pro          |
|------------------------|-------------|--------------|
| AI sessions/day        | 3           | 50 (unlimited UX) |
| Lessons                | 5           | All          |
| Session history        | 7 days      | Forever      |
| Custom scenarios       | 0           | Unlimited    |
| Progress analytics     | 7 days      | Full history |
```

---

# DOCUMENTO 3: PLAN.md

```markdown
# Project Plan — Sales Coach v1.0

## Goal
Launch a fully functional iOS + Android sales roleplay app
in 13 days, from M0 to App Store + Google Play submission.

## Milestones

### M0 — FOUNDATION (Day 1)
**Goal:** Perfect scaffold. Nothing works yet. Everything is in place.
Done when:
- [ ] GitHub repo live: github.com/[username]/sales-coach
- [ ] Auto-commit hooks active (.claude/settings.json)
- [ ] Supabase project created + all migrations run
- [ ] Expo runs on iOS simulator AND Android emulator
- [ ] All 4 spec docs reviewed and approved
- [ ] CLAUDE.md complete
- [ ] All 5 slash commands ready in .claude/commands/
- [ ] TypeScript compiles clean: npx tsc --noEmit
- [ ] CI/CD: both GitHub Actions workflows created

### M1 — AUTH + ONBOARDING (Days 2–3)
**Goal:** Full auth loop + onboarding + paywall functional.
Done when:
- [ ] Register → email verify → login → close app → reopen = logged in
- [ ] Google OAuth works on both platforms
- [ ] Apple Sign In works on iOS
- [ ] Onboarding 4 screens → paywall complete
- [ ] PaywallSheet renders correctly (annual first, 7-day trial)
- [ ] RevenueCat sandbox: purchase completes, isPro = true
- [ ] Tested on physical iPhone + physical Android device

### M2 — CORE ROLEPLAY (Days 4–8)
**Goal:** Full practice loop works end-to-end with real AI.
Done when:
- [ ] Edge Function ai-roleplay deployed + health check passes
- [ ] All 10 default scenarios seeded in database
- [ ] Scenario selector screen complete
- [ ] Active session: streaming works in real time
- [ ] TypingIndicator shows while waiting
- [ ] Timeout handling: >8s indicator, >15s retry button
- [ ] result.tsx: score + all feedback fields displayed
- [ ] Animated score count-up works
- [ ] Session saves to Supabase with full messages JSONB
- [ ] Free limit: 4th session attempt opens PaywallSheet
- [ ] Background save + resume on reopen works
- [ ] Tested: free user flow + pro user flow both work

### M3 — LEARNING + PROGRESS (Days 9–10)
**Goal:** Lessons, progress tracking, streaks, notifications.
Done when:
- [ ] 15 lessons seeded in database with full content JSONB
- [ ] Lesson library: categories + list + locked state
- [ ] Individual lesson viewer with all block types
- [ ] Mark as complete works + saves to user_lesson_progress
- [ ] Progress screen: all 6 metrics display correctly
- [ ] Streak increments correctly + resets at midnight
- [ ] Streak notifications fire correctly (Day 3, 7, etc.)
- [ ] Push permission prompt fires after first completed session

### M4 — POLISH + PAYMENTS + LEGAL (Days 11–12)
**Goal:** App is ready for real users to pay and use daily.
Done when:
- [ ] RevenueCat LIVE (not sandbox) configured
- [ ] revenuecat-webhook Edge Function deployed
- [ ] Restore Purchases works
- [ ] Custom scenario builder (Pro) works end-to-end
- [ ] FeedbackButton on all 5 main screens
- [ ] In-app review prompt fires at correct moment
- [ ] Profile screen: all settings functional
- [ ] Delete Account: full cascade delete works
- [ ] Privacy Policy + Terms live at salescoach.app/privacy + /terms
- [ ] Both linked in register screen + profile screen
- [ ] Landing page live on Vercel
- [ ] Home screen: streak, recommendation, recent session all display

### M5 — LAUNCH PREP (Day 13)
Done when:
- [ ] /project:audit passes with zero CRITICAL issues
- [ ] npx tsc --noEmit clean
- [ ] TestFlight build uploaded + 5 external testers confirmed
- [ ] Google Play Internal Testing build uploaded + 5 testers
- [ ] Screenshots: 6.7" iPhone + 6.1" iPhone + 12.9" iPad (3 each)
- [ ] App Store metadata complete (title, subtitle, keywords, description)
- [ ] App Store Connect: support URL, privacy URL, age rating done
- [ ] Submitted to App Store review
- [ ] Submitted to Google Play review

## Total: 13 days from M0 to submission
```

---

# DOCUMENTO 4: TASKS.md

```markdown
# Tasks — Sales Coach

## 🔥 ACTIVE
- [ ] Run Genesis Prompt in Claude Code — M0 complete

## ⏳ NEXT
- [ ] Review and approve all 4 spec docs generated by Claude Code
- [ ] Create Supabase project + set secrets
- [ ] Run migrations in Supabase dashboard

## 📋 BACKLOG

### M1 — Auth + Onboarding
- [ ] src/services/auth.service.ts
- [ ] src/store/auth.store.ts
- [ ] src/hooks/useAuth.ts
- [ ] app/_layout.tsx (auth routing logic)
- [ ] app/(auth)/index.tsx (4-screen onboarding)
- [ ] app/(auth)/register.tsx
- [ ] app/(auth)/login.tsx
- [ ] app/(auth)/forgot-password.tsx
- [ ] app/(auth)/verify-email.tsx
- [ ] Google OAuth (Supabase provider config + deep link)
- [ ] Apple Sign In (Supabase provider config)
- [ ] src/components/paywall/PaywallSheet.tsx
- [ ] src/hooks/useSubscription.ts
- [ ] RevenueCat sandbox test (purchase + isPro = true)

### M2 — Core Roleplay
- [ ] supabase/functions/ai-roleplay/index.ts
- [ ] supabase/functions/ai-feedback/index.ts
- [ ] Seed 10 default scenarios to database
- [ ] src/services/ai.service.ts
- [ ] src/hooks/usePracticeSession.ts
- [ ] app/(main)/practice/index.tsx
- [ ] app/(main)/practice/[id].tsx
- [ ] app/(main)/practice/result.tsx
- [ ] src/components/practice/ChatBubble.tsx
- [ ] src/components/practice/TypingIndicator.tsx
- [ ] src/components/practice/ScoreCard.tsx
- [ ] src/components/practice/FeedbackCard.tsx
- [ ] Session background save + resume logic
- [ ] Free tier enforcement (3/day)

### M3 — Learning + Progress
- [ ] Seed 15 lessons to database
- [ ] src/services/lesson.service.ts
- [ ] src/services/progress.service.ts
- [ ] src/hooks/useProgress.ts
- [ ] app/(main)/learn/index.tsx
- [ ] app/(main)/learn/[id].tsx
- [ ] app/(main)/progress.tsx
- [ ] Streak calculation + reset logic
- [ ] Push notification setup
- [ ] Streak milestone notifications

### M4 — Polish + Legal
- [ ] supabase/functions/revenuecat-webhook/index.ts
- [ ] RevenueCat LIVE configuration
- [ ] Custom scenario builder (Pro)
- [ ] src/components/ui/FeedbackButton.tsx
- [ ] In-app review prompt
- [ ] app/(main)/home.tsx (complete)
- [ ] app/(main)/profile.tsx (complete)
- [ ] Delete account cascade
- [ ] Legal pages live
- [ ] Landing page (Vercel)

### M5 — Launch Prep
- [ ] /project:audit
- [ ] App icon 1024×1024
- [ ] Screenshots (all sizes)
- [ ] App Store metadata
- [ ] TestFlight build
- [ ] Google Play beta build
- [ ] Submit

## ✅ DONE
[Claude Code updates this each session]
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 4 — CLAUDE.md
# El archivo que Claude Code lee al inicio de cada sesión
# ═══════════════════════════════════════════════════════════

```markdown
# Sales Coach — Claude Code Context

## What this app does
Sales Coach is an iOS + Android app where users practice handling
sales objections in real-time AI roleplay. An AI named Rex plays
a difficult customer. Users get scored 0–100 with specific feedback.
Goal: close more deals through daily practice reps.

App type: skill-learning-app

## Tech Stack
- **Framework:** Expo SDK 52 + Expo Router 4 (file-based navigation)
- **Language:** TypeScript 5 — STRICT MODE — ZERO `any` types ever
- **Styling:** NativeWind v4 (Tailwind classes for React Native)
- **Backend:** Supabase (Auth + PostgreSQL + Edge Functions)
- **Global State:** Zustand
- **Server State:** TanStack Query (stale time: 5 min default)
- **Payments:** RevenueCat (entitlement: "pro" — exact, lowercase)
- **Analytics:** PostHog
- **Forms:** React Hook Form + Zod validation
- **Lists:** @shopify/flash-list (NEVER FlatList — ever)
- **Images:** expo-image (NEVER Image from react-native)
- **AI:** Claude Haiku (roleplay) + Claude Sonnet (feedback)
         ALL AI calls via Supabase Edge Functions ONLY
         NEVER call Anthropic API from client code

## Folder Structure
```
app/
  (auth)/          ← Unauthenticated: onboarding, login, register
  (main)/          ← Authenticated tabs: home, practice, learn, progress, profile
src/
  components/
    ui/            ← Button, Input, Card, Text, Badge, Skeleton, Divider
    forms/         ← FormInput, FormSelect (React Hook Form wrappers)
    layout/        ← Screen, Header, SafeArea
    paywall/       ← PaywallSheet, PlanCard, FeatureRow
    practice/      ← ChatBubble, TypingIndicator, ScoreCard, FeedbackCard
    learn/         ← LessonCard, ContentBlock, ProgressBar
    progress/      ← StreakCalendar, ScoreChart, StatCard
  hooks/           ← useAuth, useSubscription, useTheme, usePracticeSession, useProgress
  services/        ← supabase.ts (SINGLETON), auth, practice, lesson, progress, revenuecat, analytics, ai
  store/           ← auth.store.ts, app.store.ts (Zustand)
  types/           ← app.types.ts, database.types.ts
  utils/           ← constants.ts, helpers.ts, validation.ts
  theme/           ← brand.ts
supabase/
  migrations/      ← SQL migration files
  functions/       ← Edge Functions (Deno)
docs/              ← REQUIREMENTS.md, DESIGN.md, PLAN.md, TASKS.md, BRANDING.md
.claude/commands/  ← Slash commands
```

## ⛔ NON-NEGOTIABLE RULES — NEVER VIOLATE THESE

1. **TypeScript strict.** Zero `any`. Zero `as unknown`. Use proper types.
   Run `npx tsc --noEmit` — must pass clean before every commit.

2. **Zero secrets in code.** API keys in `.env` only.
   Anthropic/OpenAI keys in Supabase secrets ONLY — never in client.
   `grep -r "sk-ant\|anthropic" src/` must return zero results.

3. **RLS on every Supabase table.** No exceptions.
   Use performant pattern: `USING ((SELECT auth.uid()) = user_id)`

4. **Tokens in expo-secure-store.** Never AsyncStorage for auth tokens.

5. **Every async UI = 3 states.** Loading (Skeleton, not spinner),
   Error (with retry button), Empty (with action CTA).

6. **FlashList for all lists > 20 items.** Never FlatList.

7. **All AI calls through Edge Functions.**
   `grep -r "@anthropic-ai" src/` = zero results always.

8. **Commit after every working implementation.**
   `git add -A && git commit -m "type(scope): description" && git push`

9. **Security checks before every commit:**
   - No API keys in code
   - No console.log with user data in production paths
   - Input sanitized before sending to AI

10. **Test on both platforms.** iOS simulator + Android emulator minimum.
    Physical device before M1, M2, M5 milestones.

## Brand Colors (from BRANDING.md)
```typescript
PRIMARY:      "#E8FF47"  // Electric yellow-green — CTAs, key actions
SECONDARY:    "#0A0A0A"  // Near-black — background
SURFACE:      "#141414"  // Cards, panels
SURFACE_HIGH: "#1E1E1E"  // Inputs, chat bubbles, hover
ACCENT:       "#FF4D4D"  // Objection labels, high stakes moments
TEXT_PRIMARY: "#FFFFFF"
TEXT_SECONDARY:"#888888"
TEXT_MUTED:   "#444444"
SUCCESS:      "#22C55E"
ERROR:        "#EF4444"
WARNING:      "#F59E0B"
```
Default mode: DARK. Always dark.
Fonts: Syne (headings) + Inter (body) — Google Fonts

## Commands
```bash
npx expo start                          # Dev server
npx expo start --ios                    # iOS simulator
npx expo start --android                # Android emulator
npx tsc --noEmit                        # TypeScript check (must be clean)
npx expo lint                           # Lint
supabase start                          # Local Supabase instance
supabase functions serve [fn-name] --env-file .env.local  # Test Edge Function
supabase db push                        # Apply migrations
```

## AI Models (exact strings — wrong string = silent API failure)
```
Roleplay streaming: claude-haiku-4-5-20251001
Session feedback:   claude-sonnet-4-6
```

## RevenueCat
```
Entitlement:   "pro"  (exact, lowercase, no spaces)
iOS Monthly:   sales_coach_monthly_999
iOS Annual:    sales_coach_annual_7999
Android:       same strings as iOS
```

## Key References
@docs/REQUIREMENTS.md  ← Source of truth for behavior
@docs/DESIGN.md        ← Architecture, schema, navigation
@docs/PLAN.md          ← Milestone plan
@docs/TASKS.md         ← Current task board
@docs/BRANDING.md      ← Voice, copy, colors (full)

## Slash Commands
/project:daily-start       ← Start every session here — read context first
/project:implement [task]  ← One task at a time — plan first, wait for approval
/project:new-screen [name] ← Create complete screen with all 3 states
/project:end-session       ← Update TASKS.md + commit + push
/project:audit             ← Full security + quality audit
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 5 — REX KNOWLEDGE BASE
# El cerebro de Rex — todo de fuentes públicas, 100% legal
# Esto va en supabase/migrations/002_seed_scenarios.sql
# ═══════════════════════════════════════════════════════════

## Los frameworks que Rex conoce

```
FRAMEWORK            FUENTE PÚBLICA              LO QUE ENSEÑA
────────────────────────────────────────────────────────────────────
C.L.O.S.E.R          Hormozi / Acquisition.com   Proceso completo de venta
                     (publicado para repost)
Ecuación de Valor    $100M Offers (Amazon)        Nunca bajas precio, subes valor
                     Resultado × Probabilidad
                     ÷ Tiempo × Esfuerzo
Línea Recta          Way of the Wolf (Amazon)     Tonalidad + certeza en 3 niveles
                     Jordan Belfort
5 Tipos Objeción     Principio universal público  Precio, Tiempo, Decisor,
                     (enseñado por todos)         Preferencia, Stall
Looping 3 A's        Principio público adaptado   Acknowledge, Address, Ask
                     (no es exclusivo de nadie)
Construye Valor      Cardone / Sell or Be Sold    Siempre sube valor, nunca cedas
Hunt & Kill Mode     Principio público adaptado   Maximiza oportunidades ×
                     (no usamos scripts)          conversiones = ventas
```

---

## La estructura de la app — 6 módulos basados en C.L.O.S.E.R

```
C — CLARIFICA EL PROPÓSITO
    Lección: "Antes de hablar de tu servicio, entiende por qué están aquí"
    Principio: Un prospecto que no tiene claro su objetivo no puede comprar.
    Tu trabajo es clarificarlo antes que ellos mismos.
    Práctica con Rex: Escenario donde Rex es un prospecto con objetivo vago.
    Rex evalúa: ¿Hizo las preguntas correctas ANTES de hablar del servicio?

L — ETIQUETA EL PROBLEMA
    Lección: "Nombra su problema mejor que ellos mismos"
    Principio: Cuando alguien siente que lo entiendes mejor que nadie,
    la resistencia desaparece. La etiqueta correcta = confianza instantánea.
    Práctica con Rex: Rex describe problema vagamente. Carlos lo etiqueta.
    Rex evalúa: ¿Logró que Rex dijera "eso es exactamente lo que pasa"?

O — DOLOR PASADO
    Lección: "El costo de no actuar debe superar el costo de actuar"
    Principio: El dolor presente no es suficiente. El patrón de dolor
    — los intentos fallidos del pasado — crea urgencia real sin presión.
    Práctica con Rex: Rex tuvo malas experiencias previas con proveedores.
    Rex evalúa: ¿Exploró el historial antes de presentar la solución?

S — VENDE LA VACACIÓN
    Lección: "No vendas el proceso. Vende el resultado."
    Principio: A nadie le importa cuántas horas trabajas ni tu metodología.
    Les importa su vida DESPUÉS de comprarte. Vende eso.
    Práctica con Rex: Rex interrumpe cuando escucha "entregables" o "proceso".
    Rex evalúa: ¿Vendió la transformación o las características?

E — EXPLICA LAS OBJECIONES
    Lección: "Cada objeción es una pregunta disfrazada de resistencia"
    Principio: Las 5 objeciones universales:
    → PRECIO: "Está muy caro" (razón real: no ve el ROI)
    → TIEMPO: "Necesito pensarlo" (razón real: miedo a equivocarse)
    → DECISOR: "Necesito consultarlo" (razón real: evita responsabilidad)
    → PREFERENCIA: "Ya tengo a alguien" (razón real: no ve diferencia)
    → STALL: "Ahorita no" (razón real: no hay urgencia real)
    Técnica: Looping — Acknowledge → Address → Ask
    Práctica con Rex: Un escenario por cada tipo de objeción (5 escenarios)
    Rex evalúa: ¿Reconoció, dirigió y preguntó por la venta de nuevo?

R — REFUERZA LA DECISIÓN
    Lección: "El cierre no es convencer — es confirmar lo que ya saben"
    Principio: Un prospecto que ya quiere comprar solo necesita
    sentirse seguro de su decisión. Tu trabajo es dársela, no presionar.
    Práctica con Rex: Rex está casi convencido — busca señal de seguridad.
    Rex evalúa: ¿Cerró confirmando la decisión o presionando a alguien
    que no estaba listo?
```

---

## Los 11 system prompts de Rex — listos para la base de datos

### MÓDULO 1 — Clarifica el Propósito

```sql
-- Escenario: "El prospecto con objetivo vago"
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'El prospecto con objetivo vago',
  'clarifica',
  'beginner',
  'Bueno, básicamente quiero más clientes. Ya sabes, que el negocio crezca.',
  'Eres Rex. Llevas semanas buscando ayuda para tu negocio pero no has
definido exactamente qué quieres. Dices que quieres "más clientes" y
"crecer" pero no tienes números concretos en mente.

COMPORTAMIENTO:
- Si Carlos pregunta cuántos clientes, en qué tiempo, qué significa
  "crecer" para ti → empieza a abrirte y confiar
- Si Carlos salta directo a presentar su servicio → di "sí sí, suena bien"
  pero sin compromiso real, sigues vago
- Si Carlos clarifica TU objetivo antes del suyo → baja tu guardia

SEÑAL DE ÉXITO: Carlos logra que digas un número concreto y una fecha.
Ejemplo: "Pues... unos 5 clientes nuevos en los próximos 2 meses."
SEÑAL DE FALLA: Carlos habla de su servicio sin haber entendido el tuyo.

Después del 5to intercambio rompe el personaje. Evalúa en español:
Score (0-100), Fortalezas (3), Mejoras (3 con ejemplos), Mejor línea,
Veredicto de Rex (1 oración honesta).',
  false, 1
);
```

### MÓDULO 2 — Etiqueta el Problema

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'Etiqueta su problema exacto',
  'etiqueta',
  'beginner',
  'Es que las ventas están lentas y el marketing no está funcionando, no sé qué está pasando.',
  'Eres Rex. Describes tu problema de forma vaga — "ventas lentas",
"marketing no funciona". La razón real: no estás llegando a las
personas correctas con el mensaje correcto.

COMPORTAMIENTO:
- Si Carlos etiqueta exactamente: "Lo que describes es un problema
  de audiencia — estás llegando a personas que no pueden comprarte."
  → Respondes: "Sí, eso es exactamente. Nunca lo había visto así."
- Si Carlos etiqueta mal → Di: "Sí pero no es exactamente eso..."
- Si Carlos pregunta detalles para entender mejor → dale información real
- Si Carlos asume sin preguntar → sé vago y no conectes con él

SEÑAL DE ÉXITO: Haces que Rex diga "eso es exactamente lo que pasa."
SEÑAL DE FALLA: Rex nunca se sintió completamente entendido.

Feedback al final: Score + evaluación del proceso de diagnóstico.',
  false, 2
);
```

### MÓDULO 3 — Dolor Pasado

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'El cliente quemado por malas experiencias',
  'dolor_pasado',
  'intermediate',
  'Ya contraté a dos personas antes y ninguna funcionó. No sé si quiero intentarlo de nuevo.',
  'Eres Rex. Contrataste 2 freelancers antes:
1. Desapareció después de cobrar el 50% por adelantado.
2. Entregó trabajo mediocre que no funcionó.
Tienes miedo real de volver a perder tiempo y dinero.

COMPORTAMIENTO:
- Si Carlos NO pregunta sobre tus experiencias pasadas → tu resistencia
  permanece alta. No confías. Dices "sí, claro" pero sin convicción.
- Si Carlos pregunta qué pasó exactamente → te abres poco a poco.
- Si Carlos valida tu experiencia SIN minimizarla → tu guardia baja.
- Si Carlos dice "conmigo será diferente" sin preguntar primero → cierras.

OBJECIÓN SECRETA: No es el precio. Es el miedo a repetir el patrón.
La única forma de superarla es explorar el pasado antes de vender el futuro.

Feedback al final: ¿Exploró el historial antes de presentar su solución?',
  false, 3
);
```

### MÓDULO 4 — Vende la Vacación

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'El cliente que quiere resultados, no proceso',
  'venta_vacacion',
  'intermediate',
  'Cuéntame, ¿qué haces exactamente?',
  'Eres Rex. Cuando te hablan de "entregables", "metodología", "horas de
trabajo" o "proceso" → interrumpes con: "¿Pero qué resultado concreto
voy a ver YO en mi negocio?"

COMPORTAMIENTO:
- Si Carlos habla de características/proceso → "¿Y eso qué significa para mí?"
- Si Carlos habla de tu vida después de comprar (más clientes, más tiempo
  libre, más ingresos) → escuchas con interés real, haces preguntas
- Si Carlos conecta su servicio con TU dolor específico del módulo anterior
  → empiezas a visualizar el resultado y tu resistencia baja

PREGUNTA QUE DEBES HACER si Carlos no la responde solo:
"¿Pero cómo se ve mi negocio específicamente 90 días después de trabajar contigo?"

SEÑAL DE ÉXITO: Carlos describe TU resultado específico sin que lo pidas.
SEÑAL DE FALLA: Carlos habla de lo que hace, no de lo que tú obtienes.

Evalúa: ¿Vendió la transformación o las características?',
  false, 4
);
```

### MÓDULO 5A — Objeción de Precio

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'Objeción de precio: "Está muy caro"',
  'objeciones',
  'beginner',
  'Mira, me interesa lo que propones pero honestamente está muy caro para lo que es.',
  'Eres Rex. Tu objeción de precio tiene una razón secreta:
NO es que no tengas el dinero. Es que no estás convencido de que
el resultado valdrá lo que te piden.

COMPORTAMIENTO según la respuesta de Carlos:
- Si baja el precio inmediatamente → pierdes respeto: "¿Por qué bajaste
  tan rápido? Ahora me pregunto si el precio original era inventado."
- Si defiende el precio sin agregar valor → te mantienes firme: "Sí
  pero sigue siendo mucho."
- Si hace las 3 A: Acknowledges ("entiendo"), Addresses (sube el valor
  con el ROI específico), Asks ("¿si esto te genera X, valdría la pena?")
  → cedes: "Bueno, viéndolo así..."
- Si pregunta primero cuál es tu preocupación real → te abres sobre el ROI

REGLA DE ORO que Rex conoce pero Carlos debe demostrar:
Nunca bajar el precio. Siempre subir el valor percibido.
Ecuación: si el resultado vale 10x el precio, el precio es irrelevante.

Feedback: ¿Subió valor o bajó precio?',
  false, 5
);
```

### MÓDULO 5B — Objeción de Tiempo

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'Objeción de tiempo: "Lo tengo que pensar"',
  'objeciones',
  'intermediate',
  'Me parece bien todo, pero necesito pensarlo un poco más antes de decidir.',
  'Eres Rex. Tu razón real: tienes miedo de tomar la decisión equivocada.
No es que necesites más información — tienes suficiente. Es que el peso
de la decisión te paraliza.

COMPORTAMIENTO:
- Si Carlos acepta y dice "claro, tómate tu tiempo" → nunca más contestas.
  Fin de la venta.
- Si Carlos pregunta "¿qué necesitas pensar específicamente?" → te abres:
  "Pues... no sé si es el momento correcto."
- Si Carlos usa el looping: acknowledges el pensamiento, identifica la
  preocupación real, y pregunta por la venta de nuevo → cedes poco a poco
- Si Carlos crea urgencia FALSA ("la oferta vence hoy") → te molesta:
  "No me gustan las presiones."
- Si Carlos crea urgencia REAL (el costo de esperar) → lo consideras.

SEÑAL DE ÉXITO: Carlos identifica que el "pensarlo" es miedo, no proceso.
SEÑAL DE FALLA: Carlos acepta el "lo pienso" y no sigue.

Evalúa: ¿Usó Acknowledge → Address → Ask correctamente?',
  false, 6
);
```

### MÓDULO 5C — Objeción del Decisor

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'Objeción del decisor: "Necesito consultarlo"',
  'objeciones',
  'intermediate',
  'Todo suena bien, pero necesito hablarlo con mi socio antes de comprometer algo.',
  'Eres Rex. La verdad: tú SÍ puedes decidir solo. Pero citar al socio
te da una salida si algo sale mal — reduces tu responsabilidad personal.

COMPORTAMIENTO:
- Si Carlos acepta y dice "claro, habla con él y me cuentas" → perdido.
- Si Carlos pregunta "¿qué parte necesita aprobar tu socio específicamente?"
  → admites que en realidad tú tomas las decisiones del día a día.
- Si Carlos ofrece incluir al socio en el proceso (llamada de onboarding,
  presentación conjunta) → esto te parece razonable y lo consideras.
- Si Carlos presiona diciéndote que no necesitas a tu socio → te ofendes.

SEÑAL DE ÉXITO: Carlos ofrece una solución que involucra al socio
sin hacer que te sientas cuestionado.
SEÑAL DE FALLA: Carlos presiona o simplemente acepta la objeción.',
  true, 7
);
```

### MÓDULO 5D — Objeción de Preferencia

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'Objeción de preferencia: "Ya tengo a alguien"',
  'objeciones',
  'advanced',
  'La verdad ya trabajo con otra agencia, y aunque no estoy 100% contento, ya los conozco.',
  'Eres Rex. Trabajas con un proveedor actual. No estás feliz pero el
cambio implica riesgo y esfuerzo. El statu quo se siente más seguro.

COMPORTAMIENTO:
- Si Carlos habla mal del proveedor actual → te pones defensivo:
  "Tampoco es tan malo."
- Si Carlos pregunta qué te gustaría que fuera diferente → te abres
  sobre las frustraciones reales.
- Si Carlos muestra una diferencia ESPECÍFICA y tangible (no genérica)
  que resuelve exactamente tu frustración → lo consideras seriamente.
- Si Carlos dice "somos mejores" sin demostrar por qué → no te convence.

SEÑAL DE ÉXITO: Carlos hace que describas tu frustración y la conecta
con algo específico que él hace diferente.
SEÑAL DE FALLA: Carlos ataca al competidor o hace comparaciones genéricas.',
  true, 8
);
```

### MÓDULO 5E — Objeción Stall

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'Objeción stall: "Ahorita no es buen momento"',
  'objeciones',
  'advanced',
  'Me interesa mucho pero ahorita no es el momento, tal vez en unos meses.',
  'Eres Rex. La verdad: no hay urgencia real. No tienes una razón
concreta para actuar ahora. "En unos meses" es una forma de decir no
sin decir no.

COMPORTAMIENTO:
- Si Carlos acepta: "claro, cuando estés listo me avisas" → nunca lo haces.
- Si Carlos pregunta "¿qué tendría que pasar para que sea buen momento?"
  → piensas y admites que no hay un evento específico esperando.
- Si Carlos calcula el costo de esperar en términos de tu negocio
  (cuánto pierdes cada mes sin resolver esto) → crea urgencia real.
- Si Carlos inventa urgencia falsa → te molesta y cierras.

SEÑAL DE ÉXITO: Carlos hace que identifiques el costo real de esperar.
SEÑAL DE FALLA: Carlos acepta la espera o usa urgencia artificial.',
  true, 9
);
```

### MÓDULO 6 — Refuerza la Decisión

```sql
INSERT INTO scenarios (title, category, difficulty, opening_objection, system_prompt, is_premium, order_index)
VALUES (
  'El cierre: refuerza su decisión',
  'cierre',
  'advanced',
  'Pues... todo suena bien, me convence, pero no sé, es una decisión importante.',
  'Eres Rex. Ya estás convencido del 80%. Solo necesitas sentirte
seguro de que estás tomando la decisión correcta. No necesitas más
información — necesitas confianza.

COMPORTAMIENTO:
- Si Carlos presiona: "Entonces cerramos hoy ¿sí o no?" → te echas
  para atrás: "Espera, no me presiones."
- Si Carlos pregunta: "¿Qué necesitas para sentirte seguro de avanzar?"
  → te abres sobre tu preocupación real.
- Si Carlos resume los puntos que TÚ mencionaste como importantes y
  confirma que los cubre → dices sí.
- Si Carlos da garantía o reduce el riesgo de alguna forma → cedes.
- Si Carlos cierra con silencio después del precio → la tensión te
  hace hablar primero.

SEÑAL DE ÉXITO: Carlos hace que TÚ llegues a la decisión, no te convence.
SEÑAL DE FALLA: Carlos presiona, repite beneficios sin pedirte que decidas,
o habla después de dar el precio.

Evalúa el proceso completo C.L.O.S.E.R:
¿Clarificó? ¿Etiquetó? ¿Exploró el dolor? ¿Vendió resultado?
¿Manejó objeciones con las 3 A''s? ¿Reforzó la decisión?',
  true, 10
);
```

---

## Las 15 lecciones — estructura completa para seed

```
MÓDULO C — CLARIFICA (2 lecciones)
  Lección 1: "La pregunta que cambia toda venta" (Gratis)
  → Por qué clarificar el objetivo del prospecto vale más
    que cualquier técnica de cierre.
  → Ejercicio: Escribe 5 preguntas que usarías para clarificar.

  Lección 2: "Cómo hacer que el cliente defina su éxito" (Gratis)
  → Las preguntas exactas que llevan al prospecto a definir
    números concretos.

MÓDULO L — ETIQUETA (2 lecciones)
  Lección 3: "Nombra su problema mejor que ellos" (Gratis)
  → La psicología detrás de etiquetar: cuando alguien se siente
    profundamente entendido, la resistencia desaparece.

  Lección 4: "Diagnóstico antes de prescripción" (Gratis)
  → Por qué los médicos nunca recetan sin diagnosticar —
    y los vendedores que sí lo hacen siempre pierden.

MÓDULO O — DOLOR PASADO (2 lecciones)
  Lección 5: "El poder del dolor pasado" (Gratis)
  → Cómo explorar experiencias previas crea urgencia real
    sin ningún tipo de presión.

  Lección 6: "Cómo hablar de intentos fallidos sin atacar" (Pro)
  → El lenguaje exacto para explorar el historial sin
    sonar como que atacas a sus proveedores anteriores.

MÓDULO S — VENDE LA VACACIÓN (2 lecciones)
  Lección 7: "Vende el resultado, no el proceso" (Gratis)
  → La Ecuación de Valor de Hormozi aplicada:
    Resultado × Probabilidad ÷ Tiempo × Esfuerzo = Valor percibido.
    Cómo subir cada variable.

  Lección 8: "La diferencia entre características y transformación" (Pro)
  → Ejercicio práctico: toma tu servicio y reescríbelo como
    transformación.

MÓDULO E — OBJECIONES (5 lecciones — una por tipo)
  Lección 9:  "Objeción de precio — nunca bajes el precio" (Gratis)
  Lección 10: "Objeción de tiempo — el costo real de esperar" (Pro)
  Lección 11: "Objeción del decisor — incluye, no ignores" (Pro)
  Lección 12: "Objeción de preferencia — diferénciate sin atacar" (Pro)
  Lección 13: "Objeción stall — crea urgencia real, nunca falsa" (Pro)

MÓDULO R — REFUERZA (2 lecciones)
  Lección 14: "El silencio es tu mejor arma de cierre" (Pro)
  → Por qué el que habla primero después del precio, pierde.
    Cómo sostener el silencio sin que se sienta incómodo.

  Lección 15: "Haz que el cliente llegue a la decisión solo" (Pro)
  → La diferencia entre convencer y confirmar.
    Cómo hacer preguntas que llevan al sí sin presionar.
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 6 — GENESIS PROMPT
# Pega esto completo en Claude Code para empezar
# ═══════════════════════════════════════════════════════════

```
╔══════════════════════════════════════════════════════════════════╗
║   SALES COACH — GENESIS PROMPT v1.0                             ║
║   READ EVERY LINE BEFORE WRITING A SINGLE LINE OF CODE          ║
╚══════════════════════════════════════════════════════════════════╝

ROLE: You are the lead software architect and senior engineer for
Sales Coach. Your output quality must match what a $500K/year
engineering team would produce. Not approximately — exactly.

THIS SESSION: Foundation only.
You will scaffold the project, create all spec documents, set up
infrastructure. You will NOT write any feature code.
When all 10 tasks are done, you stop and wait for my explicit
approval before touching any features.

═══════════════════════════════
PROJECT DATA
═══════════════════════════════
App Name: Sales Coach
GitHub Username: [TU_USERNAME]
Tagline: "Cierra más. Gana más. Cada día."
Idioma: Español — toda la UI, Rex, micro-copy, errores, onboarding
Core problem: Freelancers, emprendedores y consultores en LATAM
pierden propuestas no porque su trabajo sea malo — sino porque
se congelan con objeciones, se auto-descuentan, o no saben
cuándo ni cómo cerrar. Cada deal perdido es ingreso perdido.
Avatar: Carlos, 29, desarrollador/consultor freelance en LATAM,
gana $3-5K/mes, pierde el 60% de propuestas con "está muy caro."
Core feature: AI Roleplay — Rex (the AI) plays a difficult
customer. User practices live. Gets scored 0-100 with
specific, actionable feedback.
AI features: streaming roleplay + post-session analysis
AI models:
  Roleplay: claude-haiku-4-5-20251001 (streaming, via Edge Fn)
  Feedback: claude-sonnet-4-6 (JSON analysis, via Edge Fn)
Free tier: 3 AI sessions/day | 5 lessons | 7-day history
Price: $9.99/mo | $79.99/yr (7-day free trial)
RevenueCat entitlement: "pro"
Product IDs:
  iOS/Android monthly: sales_coach_monthly_999
  iOS/Android annual:  sales_coach_annual_7999

═══════════════════════════════
TASK 1 — GIT + GITHUB SETUP
═══════════════════════════════
Execute in exact order:
1. git init && git branch -M main
2. Create comprehensive .gitignore:
   node_modules/ .env .env.local .expo/ dist/ .cache/
   ios/build/ ios/.xcode.env.local android/build/ android/app/build/
   *.jks *.p8 *.p12 *.key *.mobileprovision .DS_Store Thumbs.db
   .claude/worktrees/ coverage/ *.log .idea/ .vscode/settings.json
   *.orig .npmrc (if contains tokens)
3. Create .env.example (comments explain each, NO real values):
   # Supabase — get from supabase.com dashboard
   EXPO_PUBLIC_SUPABASE_URL=
   EXPO_PUBLIC_SUPABASE_ANON_KEY=
   # RevenueCat — get from app.revenuecat.com
   EXPO_PUBLIC_REVENUECAT_IOS=
   EXPO_PUBLIC_REVENUECAT_ANDROID=
   # PostHog — get from posthog.com
   EXPO_PUBLIC_POSTHOG_KEY=
   # Environment
   EXPO_PUBLIC_APP_ENV=development
   # AI keys — DO NOT put here. Add to Supabase secrets only:
   # ANTHROPIC_API_KEY → supabase secrets set ANTHROPIC_API_KEY=...
4. gh repo create sales-coach --public \
   --description "AI sales roleplay app. Practice objections. Close more." \
   --source=. --remote=origin
5. git add -A && git commit -m "chore(init): project genesis" \
   && git push -u origin main

═══════════════════════════════
TASK 2 — AUTO-COMMIT PROTECTION
═══════════════════════════════
Create .claude/settings.json:
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit|MultiEdit",
      "hooks": [{
        "type": "command",
        "async": true,
        "timeout": 30,
        "command": "cd \"$CLAUDE_PROJECT_DIR\" && git add -A && git diff-index --quiet HEAD || git commit -m \"wip: $(date +'%H:%M')\" 2>/dev/null || true"
      }]
    }],
    "Stop": [{"hooks": [{
      "type": "command",
      "timeout": 60,
      "command": "cd \"$CLAUDE_PROJECT_DIR\" && git add -A && git diff-index --quiet HEAD || git commit -m \"session: $(date +'%Y-%m-%d %H:%M')\" && git push origin $(git branch --show-current) 2>/dev/null || true"
    }]}]
  }
}

═══════════════════════════════
TASK 3 — EXPO PROJECT + FULL STACK
═══════════════════════════════
npx create-expo-app@latest . --template blank-typescript

Install ALL dependencies at once:
npx expo install expo-router expo-secure-store expo-font expo-image \
  expo-notifications expo-linking expo-constants expo-device \
  expo-store-review expo-web-browser expo-haptics \
  react-native-safe-area-context react-native-screens \
  react-native-gesture-handler react-native-reanimated

npm install nativewind@^4 tailwindcss
npm install @supabase/supabase-js react-native-url-polyfill
npm install zustand @tanstack/react-query
npm install react-hook-form @hookform/resolvers zod
npm install react-native-purchases
npm install posthog-react-native
npm install @shopify/flash-list

Configure:
- tailwind.config.js with NativeWind content paths
- babel.config.js with reanimated plugin (must be last)
- metro.config.js with NativeWind preset
- app.json: name "Sales Coach", scheme "salescoach",
  bundleIdentifier "com.salescoach.app",
  package "com.salescoach.app"

═══════════════════════════════
TASK 4 — CLAUDE.md
═══════════════════════════════
Create CLAUDE.md in project root using EXACTLY the template
from the complete build system document.
Max 150 lines. Use @references for detailed docs.
All 10 non-negotiable rules verbatim.
Brand colors from BRANDING.md included.

═══════════════════════════════
TASK 5 — SPEC DOCUMENTS
═══════════════════════════════
Create /docs/ with these files from the build system document:
- REQUIREMENTS.md (all 31 requirements, complete)
- DESIGN.md (schema, architecture, navigation, AI table)
- PLAN.md (M0–M5 with done-when checklists)
- TASKS.md (formatted with 🔥 ⏳ 📋 ✅)
- BRANDING.md (complete from Part 1 of build system)

═══════════════════════════════
TASK 6 — FOLDER STRUCTURE
═══════════════════════════════
Create exact structure with .gitkeep in empty dirs:

app/
  (auth)/
    _layout.tsx
    index.tsx
    login.tsx
    register.tsx
    forgot-password.tsx
    verify-email.tsx
  (main)/
    _layout.tsx
    home.tsx
    practice/
      index.tsx
      [id].tsx
      result.tsx
    learn/
      index.tsx
      [id].tsx
    progress.tsx
    profile.tsx
  _layout.tsx
  +not-found.tsx

src/
  components/
    ui/           (Button, Input, Card, Text, Badge, Skeleton, Divider, Icon, BottomSheet)
    forms/        (FormInput, FormSelect)
    layout/       (Screen, Header)
    paywall/      (PaywallSheet, PlanCard, FeatureRow)
    practice/     (ChatBubble, TypingIndicator, ScoreCard, FeedbackCard)
    learn/        (LessonCard, ContentBlock)
    progress/     (StatCard, ScoreChart, StreakDisplay)
  hooks/          (useAuth, useSubscription, useTheme, usePracticeSession, useProgress)
  services/       (supabase, auth, practice, lesson, progress, revenuecat, analytics, ai)
  store/          (auth.store, app.store)
  types/          (app.types, database.types)
  utils/          (constants, helpers, validation)
  theme/          (brand.ts)

assets/fonts/
assets/images/
assets/icons/
docs/
supabase/
  migrations/
    001_initial_schema.sql
    002_seed_scenarios.sql
    003_seed_lessons.sql
  functions/
    ai-roleplay/index.ts
    ai-feedback/index.ts
    revenuecat-webhook/index.ts

═══════════════════════════════
TASK 7 — SCAFFOLD FILES
═══════════════════════════════
Create with FULL production-ready implementation:

A) src/services/supabase.ts
   - expo-secure-store storage adapter
   - { autoRefreshToken: true, persistSession: true, detectSessionInUrl: false }
   - Typed with Database generic
   - Export single `supabase` const — this is the ONLY file that imports supabase-js

B) src/theme/brand.ts
   - All color tokens from BRANDING.md as const TypeScript
   - Spacing: xs=4, sm=8, md=16, lg=24, xl=32, xxl=48
   - Radius: sm=4, md=8, lg=16, xl=24, full=9999
   - Typography scale (sizes from BRANDING.md)
   - useTheme() hook

C) src/utils/constants.ts
   - ROUTES: all screen paths as const
   - FREE_LIMITS: { aiSessionsPerDay: 3, lessons: 5, historyDays: 7 }
   - PRODUCT_IDS: { monthly: 'sales_coach_monthly_999', annual: 'sales_coach_annual_7999' }
   - REVENUECAT_ENTITLEMENT: 'pro'
   - ERROR_MESSAGES: network, auth, aiTimeout, aiUnavailable, server, unknown
   - SCORE_LABELS: { 0: 'Sigue practicando', 41: 'Vas bien', 71: 'Cierre sólido', 86: 'Closer élite' }

D) src/types/app.types.ts
   All interfaces:
   - User: { id, email, displayName, avatarUrl }
   - Profile: all columns from profiles table
   - PracticeSession: all columns + computed fields
   - AIMessage: { role: 'user'|'assistant', content: string, timestamp: Date }
   - SessionFeedback: { score, strengths, improvements, bestLine, rexVerdict, scoreLabel }
   - Scenario: all columns from scenarios table
   - Lesson: all columns from lessons table
   - Subscription: all columns from subscriptions table
   - Navigation param types for all screens (typed routes)

E) src/components/ui/Button.tsx
   - Variants: primary (bg PRIMARY, text SECONDARY), secondary (border PRIMARY),
     ghost (transparent), destructive (bg ERROR)
   - Sizes: sm (h=36, text=14), md (h=48, text=16), lg (h=56, text=18)
   - Loading: ActivityIndicator inside button, button disabled, opacity 0.7
   - Haptic: Light impact on press (expo-haptics)
   - Full props interface with JSDoc
   - Prevents double-tap (isLoading disables)

F) src/components/ui/Skeleton.tsx
   - Shimmer animation using Reanimated
   - Props: width, height, borderRadius, style
   - Color: interpolate between SURFACE and SURFACE_HIGH

G) src/components/practice/ChatBubble.tsx
   - user variant: right-aligned, PRIMARY background, SECONDARY text
   - ai variant: left-aligned, SURFACE_HIGH background, TEXT_PRIMARY
   - Timestamp below each bubble in TEXT_MUTED
   - Supports partial text (streaming) with cursor blink

H) src/components/practice/TypingIndicator.tsx
   - 3 animated dots with stagger
   - Text: "Rex is thinking..." → "Rex is thinking hard on this one..." at 8s
   - Colors from brand.ts

═══════════════════════════════
TASK 8 — DATABASE MIGRATIONS + EDGE FUNCTIONS
═══════════════════════════════
Create supabase/migrations/001_initial_schema.sql
Use the EXACT schema from DESIGN.md:
- All tables with all columns, types, constraints
- All RLS policies (SELECT-wrapping pattern)
- All indexes
- Profile auto-create trigger
- updated_at trigger
- is_pro() function
- Helpful SQL comments on every policy

Create supabase/migrations/002_seed_scenarios.sql
Insert all 10 default scenarios with:
- Proper system prompts for Rex (specific per scenario)
- opening_objection text
- Correct category + difficulty
- is_premium: false for first 8, true for last 2

Example system prompt for "Está muy caro":
  "Eres Rex, un cliente B2B realista que acaba de decir que
   el precio no cabe en su presupuesto. No eres hostil pero
   sí firme. Eres el tomador de decisiones. Tienes el presupuesto
   pero no lo revelarás fácilmente. Responde en español de forma
   natural y realista a las respuestas del vendedor. Después del
   5to mensaje del usuario, ROMPE EL PERSONAJE y provee feedback
   estructurado en español:
   Score: [0-100]
   Fortalezas: [3 cosas específicas que hizo bien con citas textuales]
   Mejoras: [3 cosas específicas con ejemplos de mejores respuestas]
   Mejor línea: [su mejor línea, entrecomillada]
   Veredicto de Rex: [una oración honesta]"

Create supabase/migrations/003_seed_lessons.sql
Insert first 5 lessons (free tier) with full content JSONB

Create supabase/functions/ai-roleplay/index.ts:
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Anthropic from "npm:@anthropic-ai/sdk";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const anthropic = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY")! });

serve(async (req) => {
  // 1. CORS headers
  if (req.method === "OPTIONS") return new Response(null, {
    headers: { "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Headers": "authorization, content-type" }
  });

  // 2. Auth validation
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return new Response("Unauthorized", { status: 401 });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
  const { data: { user }, error: authError } = await supabase.auth.getUser(
    authHeader.replace("Bearer ", "")
  );
  if (authError || !user) return new Response("Unauthorized", { status: 401 });

  // 3. Parse request
  const { scenarioId, messages, customScenario } = await req.json();

  // 4. Rate limiting
  const today = new Date().toISOString().split("T")[0];
  const { count } = await supabase
    .from("ai_usage")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id)
    .eq("feature", "roleplay")
    .gte("created_at", today);

  const isPro = await supabase.rpc("is_pro", { p_user_id: user.id })
    .then(r => r.data);
  const limit = isPro ? 50 : 3;
  if ((count || 0) >= limit) {
    return new Response(
      JSON.stringify({ error: "LIMIT_REACHED" }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    );
  }

  // 5. Get scenario system prompt
  let systemPrompt: string;
  if (customScenario) {
    systemPrompt = buildCustomPrompt(customScenario);
  } else {
    const { data: scenario } = await supabase
      .from("scenarios")
      .select("system_prompt")
      .eq("id", scenarioId)
      .single();
    systemPrompt = scenario?.system_prompt ?? "";
  }

  // 6. Stream from Claude
  const stream = await anthropic.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    system: systemPrompt,
    messages: messages,
  });

  // 7. Log usage (non-blocking)
  supabase.from("ai_usage").insert({
    user_id: user.id,
    feature: "roleplay",
    model: "claude-haiku-4-5-20251001",
  }).then(() => {});

  // 8. Return streaming response
  return new Response(stream.toReadableStream(), {
    headers: {
      "Content-Type": "text/event-stream",
      "Access-Control-Allow-Origin": "*",
    },
  });
});

function buildCustomPrompt(custom: any): string {
  return `You are Rex, a realistic customer considering buying: ${custom.productDescription}.
Your opening concern: "${custom.openingObjection}".
Industry context: ${custom.industry || "general business"}.
Difficulty: ${custom.difficulty}.
Be realistic — firm but not impossible. React authentically to their sales technique.
After the 5th user message, break character and provide:
Score: [0-100], Strengths: [3], Improvements: [3 with examples], Best line: [quoted], Rex's verdict: [one sentence]`;
}

Create supabase/functions/revenuecat-webhook/index.ts:
Full implementation handling:
INITIAL_PURCHASE, RENEWAL, CANCELLATION, EXPIRATION, BILLING_ISSUE
Updates subscriptions table on each event.
Returns 200 always (RevenueCat retries on non-200).
Validates RevenueCat-Signature header.

═══════════════════════════════
TASK 9 — GITHUB ACTIONS CI/CD
═══════════════════════════════
Create .github/workflows/ci.yml:
name: CI
on: push
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx tsc --noEmit
      - run: npx expo lint
      - run: npm test --passWithNoTests

Create .github/workflows/preview.yml:
name: EAS Preview
on: pull_request
jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: expo/expo-github-action@v8
        with: { expo-version: latest, token: ${{ secrets.EXPO_TOKEN }} }
      - run: npm ci
      - run: eas update --branch=pr-${{ github.event.number }} --message="Preview"

═══════════════════════════════
TASK 10 — SLASH COMMANDS + FINAL COMMIT
═══════════════════════════════
Create .claude/commands/daily-start.md:
Read CLAUDE.md, docs/PLAN.md, and docs/TASKS.md completely.
Report:
1. ✅ What's done (from TASKS.md ✅ section)
2. 🔥 What's in progress
3. ⚠️ Any blockers or issues
4. Recommended top 3 tasks for today based on current milestone
Do NOT write any code until I explicitly approve the plan.

Create .claude/commands/implement.md:
Task: $ARGUMENTS
Process:
1. Read the relevant REQ(s) in docs/REQUIREMENTS.md
2. Read the relevant section of docs/DESIGN.md
3. Write a 5–10 line implementation plan: what files, what order, what pattern
4. STOP. Show me the plan. Wait for "approved" or corrections.
5. After approval: implement → check TypeScript → verify 3 UI states → commit.
Rules: one task. No scope creep. All 10 CLAUDE.md rules apply.

Create .claude/commands/new-screen.md:
Create screen: $ARGUMENTS
Requirements:
- Loading state: Skeleton components (NOT ActivityIndicator)
- Error state: message + retry button
- Empty state: contextual message + action CTA
- TypeScript: all props and navigation params typed
- PostHog: screen tracking on mount
- Register in _layout.tsx navigation
- FeedbackButton if it's a main tab screen
- Update docs/TASKS.md
- Commit when complete

Create .claude/commands/end-session.md:
1. Update docs/TASKS.md: move completed → ✅, update 🔥 and ⏳
2. git add -A
3. git commit -m "[conventional commit summarizing work]"
4. git push origin [current branch]
5. Report: what got done, what's next, any blockers

Create .claude/commands/audit.md:
Full audit. Check in exact order. Report all issues. Fix nothing yet.
1. SECURITY
   - grep -r "sk-ant\|anthropic\|openai" src/ → must be 0 results
   - grep -r "SUPABASE_SERVICE_ROLE" src/ → must be 0 results
   - Every Supabase table has RLS in DESIGN.md schema
   - Tokens only in expo-secure-store (grep AsyncStorage usage)
2. TYPESCRIPT
   - npx tsc --noEmit → must pass clean
   - grep -r ": any" src/ → list all occurrences
3. AI ARCHITECTURE
   - grep -r "@anthropic-ai/sdk\|Anthropic(" src/ → must be 0
   - All AI calls go through ai.service.ts → Edge Functions only
4. PERFORMANCE
   - grep -r "FlatList" src/ → must be 0 (use FlashList)
   - grep -r "from 'react-native'" src/ | grep "Image" → must be 0
   - Every list component uses FlashList
5. ERROR HANDLING
   - Every screen has loading/error/empty states
   - Every AI call handles timeout (8s indicator, 15s retry)
   - Offline behavior tested
6. CONSISTENCY
   - Colors from brand.ts only (no hardcoded hex values)
   - All spacing from brand.ts SPACING constants
Output: numbered issues by priority (CRITICAL/HIGH/MEDIUM)
Do NOT fix anything. Wait for instructions.

FINAL COMMIT:
git add -A
git commit -m "feat(foundation): M0 complete — spec, scaffold, schema, CI/CD, commands"
git push origin main

═══════════════════════════════
WHEN ALL 10 TASKS ARE DONE, SHOW ME:
═══════════════════════════════
1. GitHub repo URL
2. Complete file tree (run: find . -not -path '*/node_modules/*' -not -path '*/.git/*' | head -100)
3. Database summary: tables created, RLS policies count, triggers
4. Edge Functions: list each with purpose
5. CI/CD: confirm both workflow files exist
6. M0 checklist — what YOU need to do manually:
   a. Create Supabase project at supabase.com
   b. Set environment variables in .env (copy from .env.example)
   c. Run: supabase link --project-ref [your-ref]
   d. Run: supabase db push (apply all migrations)
   e. Add Supabase secrets: supabase secrets set ANTHROPIC_API_KEY=...
   f. Deploy Edge Functions: supabase functions deploy
   g. Configure RevenueCat: products + entitlement + webhook URL
   h. Add EXPO_TOKEN to GitHub repo secrets
7. Decisions made that you should review or override

STOP. DO NOT BUILD ANY FEATURES.
Wait for me to say "M0 approved — start M1."
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 7 — CONTENT STRATEGY
# 30 días de scripts para TikTok, Instagram, YouTube Shorts
# ═══════════════════════════════════════════════════════════

## El sistema de publicación

```
CUENTAS:
TikTok:    @salescoachai
Instagram: @salescoachai
YouTube:   Sales Coach AI

FRECUENCIA: 3 videos/día (1 por plataforma)
→ Todos son el mismo script, formateado por plataforma

IDIOMA PARA DISTRIBUCIÓN: Español
→ La app es en inglés, el contenido es en español
→ Llega al mercado LATAM (menos competencia) y genera
  descargas de usuarios que pagan en USD con App Store MX

BATCHING:
Lunes: genera 21 scripts con el prompt de abajo
Martes: grábalos todos en 3-4 horas
Miércoles: edita y programa con Buffer
Jueves-domingo: solo engagement (30 min/día)
```

## Content Generation Prompt (pega en Claude.ai)

```
Eres el estratega de contenido para Sales Coach — una app de iOS
y Android donde practicas ventas con IA. Rex, la IA, hace de
cliente difícil. Recibes un score 0-100 con feedback específico.

VOZ DE LA MARCA:
- Directa. Real. Sin motivación vacía.
- Habla como el amigo que fue de perder deals a cerrar bien.
- Jamás dice: "¡Tú puedes!" "¡Inténtalo!" o jerga corporativa.
- Siempre dice: números específicos, resultados reales, verdades incómodas.

AVATAR: Carlos, 29 años, freelancer/consultor en LATAM.
Gana bien pero pierde el 60% de sus propuestas.
No porque su trabajo sea malo — sino porque se congela cuando
el cliente dice "está muy caro" y empieza a bajar el precio.
Consume contenido de Hormozi, Cardone, Jordan Belfort.
Quiere cerrar más, sin venderse barato.

META: 30 scripts. Semanas 1-2 hablan del PROBLEMA (cero mención
de la app). Semana 3 tease la solución. Semana 4 lanzamiento.

ESTRUCTURA DE CADA SCRIPT:
[0:00-0:03] HOOK — sin saludo, sin intro
[0:03-0:10] AGITATE — el dolor específico y real
[0:10-0:25] CORE — enseña, revela, o muestra
[0:25-0:30] CTA — una sola acción

6 TIPOS DE HOOK (rota entre los 30 scripts):
A. NÚMERO: "[# específico] pesos/dólares perdidos en [tiempo] por [error]."
B. CREENCIA FALSA: "Todos dicen [X]. La realidad es:"
C. CONFESIÓN: "Yo [cosa específica] por [tiempo] hasta que entendí [verdad]."
D. CONTRASTE: "Antes: [dolor en 5 palabras]. Ahora: [resultado en 5 palabras]."
E. RETO: "Haz [cosa específica] en tu próxima propuesta. Te reto."
F. DESCUBRIMIENTO: "Encontré la forma de nunca más perder un deal por precio."

DISPARADORES DE VIRALIDAD (uno por script):
→ Enseña algo que no sabían
→ Valida una frustración que nunca oyeron articulada
→ Muestra un resultado que no creían posible
→ Les hace reír reconociendo su propio error
→ Crea FOMO de no tener la solución

POR CADA SCRIPT ENTREGA:
1. Semana + Día (ej: Semana 1, Día 3)
2. Tipo: Problema / Tease / Lanzamiento / Tutorial / Prueba / BTS
3. Hook tipo (A-F)
4. Script completo con timestamps [0:00-0:03]
5. Texto en pantalla (overlay visual)
6. Caption completo + 5 hashtags de nicho
7. Mejor hora de publicar

Suena como Carlos hablando a otros Carlos.
No como marca. No como anuncio. No como IA.
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 8 — SECURITY & TESTING CHECKLIST
# Lo que hace la app profesional y sin vergüenza
# ═══════════════════════════════════════════════════════════

## Security Checklist (corre antes de cada submit)

```
CRÍTICO — Ship-blocking si falla:
□ grep -r "sk-ant\|ANTHROPIC_API_KEY\|sk-" src/ → 0 resultados
□ grep -r "service_role" src/ → 0 resultados
□ Todo token de auth en expo-secure-store
   grep -r "AsyncStorage" src/services/ → 0 resultados
□ RLS habilitado en todas las tablas
   (verifica en Supabase dashboard → Table Editor → cada tabla)
□ JWT validado en CADA Edge Function antes de cualquier lógica
□ Input del usuario sanitizado antes de enviar a IA
   (no concatenar raw user input directamente al system prompt)
□ Rate limiting activo en Edge Functions
□ HTTPS only — no HTTP calls en ningún lado

ALTO:
□ console.log sin datos de usuario en paths de producción
   grep -r "console.log" src/ → revisar cada uno
□ Error messages no exponen stack traces al usuario
□ No IDs predecibles (UUID siempre, nunca autoincrement en URLs)
□ RevenueCat signature validada en webhook
□ Supabase anon key es pública por diseño — verificar que
   ninguna tabla sea accesible sin autenticación
```

## Testing Manual Checklist (antes de cada submit)

```
FLUJO COMPLETO (happy path):
□ Registro con email nuevo → email de verificación llega
□ Click en link de verificación → navega correctamente
□ Login → llega a home
□ Cerrar app completamente → reabrir → sigue loggeado
□ Google OAuth completo en iOS
□ Google OAuth completo en Android
□ Apple Sign In en iOS

ONBOARDING:
□ Primera apertura ve las 4 pantallas
□ Respuestas de personalización se guardan en profiles.onboarding_data
□ PaywallSheet abre automáticamente en pantalla 4
□ "Continue with 3 reps/day" lleva al home
□ Usuario que ya completó onboarding → va directo a home

CORE FEATURE:
□ Todos los escenarios aparecen en la lista
□ Tapping escenario locked → PaywallSheet
□ Iniciar sesión → Rex abre con la objeción correcta
□ Respuesta del usuario → aparece inmediatamente
□ Streaming de Rex funciona en tiempo real
□ TypingIndicator visible mientras espera respuesta
□ Después de 5 intercambios → botón "Get My Score" activa
□ result.tsx: score animado, todos los campos de feedback visibles
□ "Practice Again" → vuelve a misma sesión
□ Sesión guardada en Supabase (verificar en dashboard)

FREE TIER:
□ 3 sesiones → 4to intento → PaywallSheet
□ Escenario seleccionado NO se pierde cuando aparece paywall
□ Al día siguiente (o resetear en dev) → contador vuelve a 0

PAGOS:
□ PaywallSheet: annual primero con "Best Value"
□ "Start My Free 7-Day Trial" → flujo de Apple/Google
□ Sandbox purchase completado → isPro = true inmediatamente
□ Sin restart necesario
□ "Restore Purchases" funciona
□ Webhook recibe evento en Supabase Edge Function logs

OFFLINE:
□ Sin internet → banner visible en home
□ Intentar sesión → mensaje apropiado, sin crash
□ Pantallas de contenido muestran datos cacheados

EDGE CASES:
□ AI tarda >8s → texto del TypingIndicator cambia
□ AI tarda >15s → botón de retry aparece
□ Cerrar app a mitad de sesión → reabrir → prompt de "resume?"
□ Navegar atrás en sesión → confirmation alert

SETTINGS:
□ Editar display name → se guarda
□ Delete Account → confirmación → todos los datos borrados → logout
□ Privacy Policy → abre en browser
□ Terms → abre en browser
□ Sign Out → no puede navegar back a app autenticada

PERFORMANCE:
□ Cold start en Android físico < 3 segundos
□ Transiciones < 300ms
□ Chat scroll fluido (no jank)
□ npx tsc --noEmit pasa limpio
□ Sin warnings en Metro bundler
```

---

# ═══════════════════════════════════════════════════════════
# PARTE 9 — LAUNCH CHECKLIST FINAL
# No submittes sin marcar todo esto
# ═══════════════════════════════════════════════════════════

```
PRODUCTO
□ Core feature funciona end-to-end sin crashes en físico
□ Auth loop completo (register → verify → login → persist)
□ 100% de usuarios ven paywall en onboarding
□ RevenueCat LIVE (no sandbox) procesando
□ Free tier enforcement en services (no en UI)
□ FeedbackButton en home, practice index, learn index, progress, profile
□ In-app review: score >75 + no first 3 sessions + no recent prompt
□ Delete Account funciona con cascade
□ Offline: sin crashes, mensajes apropiados

TECH
□ grep -r "sk-ant\|anthropic" src/ = 0
□ grep -r "FlatList" src/ = 0
□ npx tsc --noEmit clean
□ CI pasa en GitHub Actions
□ Todas las tablas tienen RLS (verificado en dashboard)
□ Edge Functions deployed + health checks pasan

LEGAL
□ Privacy Policy en URL pública: salescoach.app/privacy
□ Terms of Service en URL pública: salescoach.app/terms
□ Ambos linkeados en pantalla de registro
□ Ambos linkeados en Profile → Settings
□ Age rating: 4+ (no violence, no adult content)

STORE ASSETS
□ App icon: 1024×1024 PNG, sin transparencia, sin esquinas
□ Screenshots 6.7" iPhone (3 mínimo): onboarding, session, result
□ Screenshots 6.1" iPhone (3 mínimo): mismos
□ Screenshots 12.9" iPad (2 mínimo)
□ App preview video: 30s, los primeros 3s son el hook
□ Title (30 chars max): "Sales Coach — Roleplay con IA"
□ Subtitle (30 chars max): "Practica. Puntúa. Cierra Más."
□ Keywords (100 chars): ventas,cierre,objeciones,roleplay,propuestas,
  freelancer,coaching,ia,practica,negociacion,closer,emprendedor
□ Description: hook → problema → cómo funciona → beneficios → CTA (todo en español)

DISTRIBUCIÓN PRE-LAUNCH
□ 10+ videos publicados (semanas 1-2 del calendar)
□ 200+ seguidores en al menos una cuenta
□ Landing page live: salescoach.app
□ 5+ testers externos en TestFlight + Google Play beta
□ Launch week scripts escritos y programados en Buffer
```

---
# SALES COACH — COMPLETE BUILD SYSTEM v1.0
# March 2026
# Stack: Expo + Supabase + RevenueCat + Claude AI
# Target: App Store + Google Play
# Estimated build time: 13 days to submission
