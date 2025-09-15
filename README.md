<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Pousada Maks – Seu chalé rústico em meio à natureza</title>
<meta name="description" content="Pousada Maks: Seu refúgio de conforto e tranquilidade. Faça sua reserva." />
<link rel="canonical" href="https://seudominio.com.br/" />
<meta property="og:title" content="Pousada Maks – Conforto e Natureza" />
<meta property="og:description" content="Acomodações charmosas, lazer e tranquilidade." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://seudominio.com.br/" />
<meta property="og:image" content="https://seudominio.com.br/assets/og-image.jpg" />
<meta name="theme-color" content="#00c853" />

<!-- Favicon -->
<link rel="icon" href="/assets/favicon.png" />

<!-- CSS base e responsivo -->
<style>
:root{
  --bg:#00c853;
  --bg-2:#009624;
  --gold:#ccff90;
  --text:#1b1b1b;
  --muted:#6b7280;
  --card-bg:#f7f7fb; /* Ajustado para cinza claro */
  --max:1200px;
  --radius:18px;
  --shadow:0 10px 30px rgba(0,0,0,.12);
}
*{box-sizing:border-box}
html,body{margin:0;padding:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif;color:var(--text);background:#f7f7fb}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
.container{max-width:var(--max);margin:0 auto;padding:0 20px}

/* Header */
header{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(0,0,0,.95);
  backdrop-filter:saturate(1.2) blur(8px);
  border-bottom:1px solid rgba(255,255,255,.08);
}
.nav{display:flex;align-items:center;justify-content:space-between;height:68px}
.brand{display:flex;align-items:center;gap:12px;color:#fff}
.brand img{height:38px;width:auto;border-radius:8px}
.brand strong{font-size:18px;letter-spacing:.4px;color:#fff}
nav ul{display:flex;gap:18px;list-style:none;margin:0;padding:0}
nav a{color:#fff;font-weight:500;padding:10px 12px;border-radius:12px}
nav a:hover{background:rgba(255,255,255,.12)}
.cta{background:var(--gold);color:#000;padding:10px 16px;border-radius:14px;font-weight:700}

/* Hero */
.hero{
  position:relative;
  background:linear-gradient(180deg,rgba(0,200,83,.20),rgba(0,200,83,.10)),url('https://github.com/user-attachments/assets/f512c689-6dd0-4aaf-9b55-bf061a0cb3ef')center/cover no-repeat;
  color:#1b1b1b;
  width: 100%;
}
.hero .container{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:28px;
  align-items:center;
  min-height:72vh;
  padding:56px 20px;
}
.hero h1{font-size:clamp(24px,5vw,40px);line-height:1.2;margin:0 0 14px}
.hero p{font-size:clamp(14px,3vw,18px);opacity:.95;margin:0 0 22px}
.hero .badges{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}
.badge{background:rgba(255,255,255,.50);border:1px solid rgba(255,255,255,.50);padding:6px 10px;border-radius:999px;font-size:13px}
.hero .card{background:rgba(255,255,255,.50);border:1px solid rgba(255,255,255,.18);padding:18px;border-radius:var(--radius);margin-top:20px}

/* Seções */
section{padding:48px 0}
.section-title{font-size:clamp(22px,5vw,30px);margin:0 0 8px;text-align:center}
.section-sub{color:var(--muted);text-align:center;margin:0 0 28px}

/* Grid */
.grid{display:grid;gap:18px}
.grid-4{grid-template-columns:repeat(4,1fr)}
.grid-3{grid-template-columns:repeat(3,1fr)}
.grid-2{grid-template-columns:repeat(2,1fr)}

.feature{background:var(--card-bg);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow);display:flex;gap:10px;align-items:flex-start}
.feature .icon{font-size:22px}
.feature h3{margin:4px 0 6px;font-size:16px}
.feature p{margin:0;color:#4b5563;font-size:13px}

.card{background:var(--card-bg);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
.card .content{padding:12px}
.card h3{margin:0 0 8px;font-size:16px}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.chip{border:1px solid #e5e7eb;padding:5px 8px;border-radius:999px;font-size:11px;color:#374151}

.gallery{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}
.gallery img{border-radius:12px;height:120px;object-fit:cover}

.cta-strip{background:linear-gradient(90deg,var(--bg),var(--bg-2));color:#fff;padding:28px;border-radius:var(--radius);display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.cta-strip .btn{background:var(--gold);color:#1b1b1b;font-weight:700;padding:10px 16px;border-radius:12px}

.map{border:0;width:100%;height:300px;border-radius:14px;box-shadow:var(--shadow)}

footer{background:#000;color:#dfe6f7;margin-top:40px}
.foot{display:grid;grid-template-columns:2fr 1fr 1fr;gap:24px;padding:40px 20px}
.foot h4{margin:0 0 10px}
.foot a{color:#dfe6f7;opacity:.9}
.copyright{border-top:1px solid rgba(255,255,255,.1);padding:18px;text-align:center;color:#b9c3de}

/* Botões flutuantes */
.float-wrap{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:10px;z-index:60}
.float-btn{display:flex;align-items:center;gap:10px;background:#25D366;color:#fff;padding:12px 14px;border-radius:999px;box-shadow:var(--shadow);font-weight:700}
.float-btn.instagram{background:linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)}

/* RESPONSIVO */
@media (max-width: 1024px){
  .hero .container{grid-template-columns:1fr;gap:24px;padding:40px 20px}
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .grid-3{grid-template-columns:repeat(2,1fr)}
}
@media (max-width: 768px){
  .gallery{grid-template-columns:repeat(3,1fr)}
  .grid-2,.grid-3,.grid-4{grid-template-columns:1fr}
  nav ul{display:none}
  .hero h1{font-size:clamp(22px,6vw,32px)}
  .hero p{font-size:clamp(13px,4vw,16px)}
}
@media (max-width: 480px){
  .hero .card{padding:14px}
  .badge{padding:5px 8px;font-size:12px}
  .feature{padding:10px;gap:8px}
  .cta-strip{padding:20px;flex-direction:column;align-items:flex-start}
}
</style>
</head>

<body>
<header>
  <div class="container nav">
    <a class="brand" href="#inicio" aria-label="Página inicial">
      <img src="https://github.com/user-attachments/assets/a7d6cc3c-bb98-4544-8a82-6413b1c72137?auto=format&fit=crop&w=1600&q=60" alt="Logo da Pousada" width="350" />
      <strong>Pousada Maks</strong>
    </a>
    <nav aria-label="Principal">
      <ul>
        <li><a href="#acomodacoes">Acomodações</a></li>
        <li><a href="#lazer">Lazer</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#localizacao">Localização</a></li>
        <li><a class="cta" href="#reservas">Reservas</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- HERO -->
<section class="hero" id="inicio">
  <div class="container">
    <div>
      <h1>Seu refúgio de conforto e tranquilidade</h1>
      <p>Viva dias de sossego entre a natureza, a tranquilidade que você precisa. Piscina com hidromassagem e muito mais.</p>
      <div class="badges">
        <span class="badge">Recepção 24h</span>
        <span class="badge">Café da manhã grátis</span>
        <span class="badge">Wi-Fi gratuito</span>
        <span class="badge">Piscina com hidromassagem</span>
        <span class="badge">Estacionamento amplo</span>
        <span class="badge">Pescaria</span>
      </div>
      <a class="cta" href="#reservas">Reserve agora</a>
    </div>
    <div class="card">
      <h3 style="margin-top:0">Consulta rápida de tarifas</h3>
      <form id="cotacaoForm">
        <label>Data de entrada<br><input type="date" name="checkin" required></label><br><br>
        <label>Data de saída<br><input type="date" name="checkout" required></label><br><br>
        <label>Hóspedes<br><input type="number" name="hospedes" min="1" value="2"></label><br><br>
        <button class="cta" type="submit">Solicitar cotação</button>
      </form>
      <p style="font-size:12px;opacity:.9;margin-top:8px">* aguardamos você.</p>
    </div>
  </div>
</section>

<script>
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("cotacaoForm");
  const checkinInput = form.querySelector('input[name="checkin"]');
  const checkoutInput = form.querySelector('input[name="checkout"]');

  // Define mínimo das datas como hoje
  const hoje = new Date();
  const yyyy = hoje.getFullYear();
  const mm = String(hoje.getMonth() + 1).padStart(2, '0');
  const dd = String(hoje.getDate()).padStart(2, '0');
  const hojeStr = `${yyyy}-${mm}-${dd}`;
  checkinInput.min = hojeStr;
  checkoutInput.min = hojeStr;

  // Atualiza checkout mínimo quando checkin mudar
  checkinInput.addEventListener('change', () => {
    const checkinVal = new Date(checkinInput.value);
    const proximoDia = new Date(checkinVal);
    proximoDia.setDate(proximoDia.getDate() + 1);
    const yyyy = proximoDia.getFullYear();
    const mm = String(proximoDia.getMonth() + 1).padStart(2, '0');
    const dd = String(proximoDia.getDate()).padStart(2, '0');
    checkoutInput.min = `${yyyy}-${mm}-${dd}`;
    if (new Date(checkoutInput.value) <= checkinVal) {
      checkoutInput.value = '';
    }
  });

  // Submissão do formulário
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);
    const hospedes = parseInt(form.hospedes.value, 10);

    if (isNaN(checkin) || isNaN(checkout)) {
      alert("Por favor, selecione datas válidas.");
      return;
    }

    if (checkout <= checkin)
