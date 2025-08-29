<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Pousada Maks – Seu chalé rústico em meio a natureza</title>
<meta name="description" content="Pousada Maks: Seu refugio de conforto e tranquilidade. Faça sua reserva." />
<link rel="canonical" href="https://seudominio.com.br/" />
<meta property="og:title" content="Pousada Maks – Conforto e Natureza" />
<meta property="og:description" content="Acomodações charmosas, lazer e tranquilidade." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://seudominio.com.br/" />
<meta property="og:image" content="https://seudominio.com.br/assets/og-image.jpg" />
<meta name="theme-color" content="#00c853" />

<link rel="icon" href="/assets/favicon.png" />

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<style>
:root{
  --bg:#00c853;
  --bg-2:#009624;
  --gold:#ccff90;
  --text:#1b1b1b;
  --muted:#6b7280;
  --card-bg:#ffffff;
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
.menu-toggle {
    display: none; /* Escondido por padrão */
    background: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
}
/* Estilo do menu mobile */
.nav-mobile {
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,.9);
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    z-index: 40;
    transform: translateY(-150%);
    transition: transform 0.3s ease-in-out;
    list-style: none; /* Adicionado para remover bolinhas da lista */
}
.nav-mobile.active {
    transform: translateY(0);
}
.nav-mobile li {
    margin-bottom: 15px;
}
.nav-mobile a {
    display: block;
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,.1);
}

/* Hero - Corrigido o background */
.hero{
  position:relative;
  color:#1b1b1b;
  min-height: 72vh;
  /* Garante que o conteúdo fique acima do fundo */
  z-index: 1;
}
.hero::before {
  /* Adiciona uma camada de fundo que cobre toda a seção */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 200, 83, .70), rgba(0, 200, 83, .50)), url('https://github.com/user-attachments/assets/62b02553-5f06-43a6-86f1-02e1da142cf7') center/cover no-repeat;
  z-index: -1; /* Manda o fundo para trás do conteúdo */
}
.hero .container{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:28px;
  align-items:center;
  padding:56px 20px;
  /* Garante que o conteúdo do container fique acima do fundo */
  position: relative;
  z-index: 2;
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
.gallery img{border-radius:12px;height:120px;object-fit:cover; width: 100%;}

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
  /* Esconde o menu normal e mostra o botão do menu hamburguer */
  nav ul{display:none}
  .menu-toggle {display: block;}
  
  .gallery{grid-template-columns:repeat(3,1fr)}
  .grid-2,.grid-3,.grid-4{grid-template-columns:1fr}
  .hero h1{font-size:clamp(22px,6vw,32px)}
  .hero p{font-size:clamp(13px,4vw,16px)}
  
  /* Ajuste do rodapé para uma coluna */
  .foot {grid-template-columns: 1fr; text-align: center; gap: 20px;}
}
@media (max-width: 480px){
  .hero .card{padding:14px}
  .badge{padding:5px 8px;font-size:12px}
  .feature{padding:10px;gap:8px}
  .cta-strip{padding:20px;flex-direction:column;align-items:flex-start}
  /* Ajuste da galeria para 2 colunas em telas pequenas */
  .gallery{grid-template-columns:repeat(2,1fr)}
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
    <nav role="navigation" aria-label="Principal">
      <ul>
        <li><a href="#acomodacoes">Acomodações</a></li>
        <li><a href="#lazer">Lazer</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#localizacao">Localização</a></li>
        <li><a class="cta" href="#reservas">Reservas</a></li>
      </ul>
    </nav>
    <button class="menu-toggle" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menu">
      <i class="fas fa-bars"></i>
    </button>
  </div>
  <ul id="mobile-menu" class="nav-mobile" aria-labelledby="mobile-menu-label">
    <li><a href="#acomodacoes">Acomodações</a></li>
    <li><a href="#lazer">Lazer</a></li>
    <li><a href="#galeria">Galeria</a></li>
    <li><a href="#localizacao">Localização</a></li>
    <li><a class="cta" href="#reservas">Reservas</a></li>
  </ul>
</header>

<section class="hero" id="inicio">
  <div class="container">
    <div>
      <h1>Seu refugio de conforto e tranquilidade</h1>
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
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Funcionalidade do menu hambúrguer
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

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

    if (checkout <= checkin) {
      alert("A data de saída deve ser depois da data de entrada.");
      return;
    }

    if (hospedes < 1) {
      alert("Informe pelo menos 1 hóspede.");
      return;
    }

    const msg = `Olá tudo bem, gostaria de fazer um reserva para esta data, tem disponibilidade?%0A- Check-in: ${checkinInput.value}%0A- Check-out: ${checkoutInput.value}%0A- Hóspedes: ${hospedes}`;
    const phone = "5516997073816";
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  });
});
</script>

---

<section>
  <div class="container">
    <h2 class="section-title">Algumas vantagens</h2>
    <p class="section-sub">Conforto, lazer e natureza para sua estadia.</p>
    <div class="grid grid-4">
      <div class="feature"><div class="icon">🕑</div><div><h3>Recepção 24h</h3><p>Equipe pronta para ajudar a qualquer hora.</p></div></div>
      <div class="feature"><div class="icon">☕</div><div><h3>Café da manhã</h3><p>Café da manhã tradicional.</p></div></div>
      <div class="feature"><div class="icon">📶</div><div><h3>Wi-Fi gratuito</h3><p>Conexão disponível nas áreas comuns.</p></div></div>
      <div class="feature"><div class="icon">🏊</div><div><h3>Piscina com hidromassagem</h3><p>Vista para natureza.</p></div></div>
      <div class="feature"><div class="icon">🚗</div><div><h3>Estacionamento</h3><p>Espaço amplo para seu veículo.</p></div></div>
      <div class="feature"><div class="icon">🐟</div><div><h3>Pescaria</h3><p>Agende sua pescaria de dourado no rio Pardo.</p></div></div>
      <div class="feature"><div class="icon">🛶</div><div><h3>Passeio de Caiaque</h3><p>Agende seu passeio com muita adrenalina.</p></div></div>
      <div class="feature"><div class="icon">🛏️</div><div><h3>Quartos confortáveis</h3><p>O seu descanso merecido.</p></div></div>
    </div>
  </div>
</section>

---

<section id="acomodacoes">
  <div class="container">
    <h2 class="section-title">Acomodações</h2>
    <p class="section-sub">Opções para casais, famílias e grupos.</p>
    <div class="grid grid-3">
      <article class="card">
        <img src="https://github.com/user-attachments/assets/afb57732-8b4e-4657-9d11-ced69b6d8f81" alt="Suíte com varanda" loading="lazy" />
        <div class="content">
          <h3>Quarto família</h3>
          <p>A tranquilidade de acordar com o som dos pássaros.</p>
          <div class="chips">
            <span class="chip">Wi-Fi</span>
            <span class="chip">Ar-condicionado</span>
            <span class="chip">Café incluso</span>
          </div>
        </div>
      </article>
      <article class="card">
        <img src="https://github.com/user-attachments/assets/5fc55ea6-4893-48ba-bf3e-3dece7705531" alt="Piscina com vista para o pôr do sol" loading="lazy" />
        <div class="content">
          <h3>Piscina</h3>
          <p>Vista com pôr do sol.</p>
          <div class="chips">
            <span class="chip">Wi-Fi</span>
            <span class="chip">Hidromassagem</span>
            <span class="chip">Vista jardim</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

---

<section id="galeria">
  <div class="container">
    <h2 class="section-title">Galeria de Fotos</h2>
    <p class="section-sub">Conheça um pouco dos nossos ambientes.</p>
    <div class="gallery">
      <img src="https://github.com/user-attachments/assets/8846ba84-26fc-4048-a126-0e49d21baf6d?auto=format&fit=crop&w=700&q=60" alt="Lobby da Pousada Maks" loading="lazy" />
      <img src="https://github.com/user-attachments/assets/0188e4ac-6529-46ef-b73c-889b2a0d023b?auto=format&fit=crop&w=700&q=60" alt="Apartamento com cama de casal" loading="lazy" />
      <img src="https://github.com/user-attachments/assets/849110c0-b2c6-4dec-9881-ef2b94b71831?auto=format&fit=crop&w=700&q=60" alt="Mesa de café da manhã com frutas e pães" loading="lazy" />
      <img src="https://github.com/user-attachments/assets/715ed7ba-d458-461a-a309-895f47568393?auto=format&fit=crop&w=700&q=60" alt="Piscina da pousada com espreguiçadeiras" loading="lazy" />
      <img src="https://github.com/user-attachments/assets/91f7f8ae-d2c0-49a1-ab25-1244f87d1c3c?auto=format&fit=crop&w=700&q=60" alt="Vista dos jardins da pousada" loading="lazy" />
    </div>
  </div>
</section>

---

<section class="container" id="reservas">
  <div class="cta-strip">
    <div>
      <h3 style="margin:0">Tarifas e Ofertas</h3>
      <p style="margin:6px 0 0;opacity:.9">Consulte promoções sazonais por telefone, WhatsApp ou e-mail.</p>
    </div>
    <a class="btn" href="https://wa.me/5516997073816?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20reservas%20na%20Pousada%20Maks." target="_blank" rel="noopener">
      Falar no WhatsApp
    </a>
  </div>
</section>

---

<section id="localizacao">
  <div class="container">
    <h2 class="section-title">Onde estamos</h2>
    <p class="section-sub">Endereço: Av. Thomaz Alberto Whately, 9315 - Parque Res. Candido Portinari, Ribeirão Preto - SP, 14078-560 • Estacionamento no local</p>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.312959664556!2d-47.78189678502394!3d-21.255959085871227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bbd0a793a52f%3A0x6a5d4002e21b06c6!2sAv.%20Thomaz%20Alberto%20Whately%2C%209315%20-%20Parque%20Res.%20Candido%20Portinari%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014078-560!5e0!3m2!1spt-BR!2sbr!4v1625698305608!5m2!1spt-BR!2sbr" allowfullscreen loading="lazy" title="Mapa da Pousada Maks"></iframe>

    <div class="grid grid-3" style="margin-top:24px">
      <div class="card"><div class="content"><h3>Reservas</h3><p><a href="tel:+5516997073816">(16) 99707-3816</a><br><a href="mailto:pousadamaks@gmail.com">pousadamaks@gmail.com</a></p></div></div>
      <div class="card"><div class="content"><h3>Horário</h3><p>Check-in a partir de 14h • Check-out até 12h</p></div></div>
      <div class="card"><div class="content"><h3>Redes sociais</h3><p><a href="https://www.instagram.com/pousada_maks/" target="_blank">Instagram</a> • <a href="#">Facebook</a></p></div></div>
    </div>
  </div>
</section>

<div class="float-wrap" aria-label="Acesso rápido">
  <a class="float-btn" href="https://wa.me/5516997073816?text=Olá,%20gostaria%20de%20fazer%20uma%20reserva,%20tem%20disponibilidade?" target="_blank" rel="noopener" aria-label="WhatsApp">
    <span>WhatsApp</span>
  </a>
  <a class="float-btn instagram" href="https://www.instagram.com/pousada_maks/" target="_blank" rel="noopener" aria-label="Instagram">
    <span>Instagram</span>
  </a>
</div>

<footer>
  <div class="foot container">
    <div>
      <h4>Pousada Maks</h4>
      <p>Seu chalé rústico em meio à natureza, perfeito para relaxar.</p>
    </div>
    <div>
      <h4>Links úteis</h4>
      <a href="#inicio">Início</a><br>
      <a href="#acomodacoes">Acomodações</a><br>
      <a href="#galeria">Galeria</a><br>
      <a href="#localizacao">Localização</a>
    </div>
    <div>
      <h4>Contato</h4>
      <p>Telefone: (16) 99707-3816</p>
      <p>Email: pousadamaks@gamil.com</p>
    </div>
  </div>
  <div class="copyright">
    <p>© 2024 Pousada Maks. Todos os direitos reservados.</p>
  </div>
</footer>

</body>
</html>



