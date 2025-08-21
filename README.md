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
  
  <!-- Favicon -->
  <link rel="icon" href="/assets/favicon.png" />

  <!-- CSS base -->
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

    /* Header (preto) */
    header{
      position:sticky;
      top:0;
      z-index:50;
      background:rgba(0,0,0,.95); /* preto */
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
    .hero{position:relative;background:linear-gradient(180deg,rgba(0,200,83,.70),rgba(0,200,83,.50)),url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=60') center/cover no-repeat;color:#1b1b1b}
    .hero .container{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center;min-height:72vh;padding:56px 20px}
    .hero h1{font-size:clamp(28px,5vw,50px);line-height:1.1;margin:0 0 14px}
    .hero p{font-size:clamp(15px,1.7vw,18px);opacity:.95;margin:0 0 22px}
    .hero .badges{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}
    .badge{background:rgba(255,255,255,.50);border:1px solid rgba(255,255,255,.50);padding:8px 12px;border-radius:999px;font-size:14px}
    .hero .card{background:rgba(255,255,255,.50);border:1px solid rgba(255,255,255,.18);padding:18px;border-radius:var(--radius)}

    /* Secões */
    section{padding:64px 0}
    .section-title{font-size:clamp(24px,3.5vw,34px);margin:0 0 8px;text-align:center}
    .section-sub{color:var(--muted);text-align:center;margin:0 0 28px}

    /* Vantagens */
    .grid{display:grid;gap:18px}
    .grid-4{grid-template-columns:repeat(4,1fr)}
    .grid-3{grid-template-columns:repeat(3,1fr)}
    .grid-2{grid-template-columns:repeat(2,1fr)}
    .feature{background:var(--card-bg);border-radius:var(--radius);padding:18px;box-shadow:var(--shadow);display:flex;gap:14px;align-items:flex-start}
    .feature .icon{font-size:26px}
    .feature h3{margin:4px 0 6px;font-size:18px}
    .feature p{margin:0;color:#4b5563;font-size:14px}

    /* Acomodações */
    .card{background:var(--card-bg);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
    .card .content{padding:16px}
    .card h3{margin:0 0 8px}
    .chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
    .chip{border:1px solid #e5e7eb;padding:6px 10px;border-radius:999px;font-size:12px;color:#374151}

    /* Galeria */
    .gallery{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
    .gallery img{border-radius:12px;height:150px;object-fit:cover}

    /* CTA Tarifas */
    .cta-strip{background:linear-gradient(90deg,var(--bg),var(--bg-2));color:#fff;padding:34px;border-radius:var(--radius);display:flex;align-items:center;justify-content:space-between;gap:18px}
    .cta-strip .btn{background:var(--gold);color:#1b1b1b;font-weight:700;padding:12px 18px;border-radius:12px}

    /* Localização */
    .map{border:0;width:100%;height:360px;border-radius:14px;box-shadow:var(--shadow)}

    /* Footer */
    footer{background:#000000;color:#dfe6f7;margin-top:40px}
    .foot{display:grid;grid-template-columns:2fr 1fr 1fr;gap:24px;padding:40px 20px}
    .foot h4{margin:0 0 10px}
    .foot a{color:#dfe6f7;opacity:.9}
    .copyright{border-top:1px solid rgba(255,255,255,.1);padding:18px;text-align:center;color:#b9c3de}

    /* Responsivo */
    @media (max-width: 960px){
      .hero .container{grid-template-columns:1fr}
      .grid-4{grid-template-columns:repeat(2,1fr)}
      .foot{grid-template-columns:1fr}
    }
    @media (max-width: 640px){
      nav ul{display:none}
      .gallery{grid-template-columns:repeat(3,1fr)}
      .grid-3,.grid-2,.grid-4{grid-template-columns:1fr}
    }

    /* Botões flutuantes (WhatsApp/Instagram) */
    .float-wrap{position:fixed;right:16px;bottom:16px;display:flex;flex-direction:column;gap:10px;z-index:60}
    .float-btn{display:flex;align-items:center;gap:10px;background:#25D366;color:#fff;padding:12px 14px;border-radius:999px;box-shadow:var(--shadow);font-weight:700}
    .float-btn.instagram{background:linear-gradient(45deg,#f58529,#dd2a7b,#8134af,#515bd4)}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <a class="brand" href="#inicio" aria-label="Página inicial">
        <img src="/assets/logo.png" alt="Logo da Pousada" />
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
        <h1>Seu refugio de conforto e tranquilidade</h1>
        <p>Viva dias de sossego entre a natureza, a tranquilidade que você precisa. Piscina com hidromassagem e muito mais.</p>
        <div class="badges">
          <span class="badge">Recepção 24h</span>
          <span class="badge">Café da manha gratis</span>
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

        <script>
        document.getElementById("cotacaoForm").addEventListener("submit", function(e) {
         e.preventDefault();
         let checkin = this.checkin.value;
         let checkout = this.checkout.value;
         let hospedes = this.hospedes.value;

         let msg = `Olá, gostaria de uma cotação:%0A- Check-in: ${checkin}%0A- Check-out: ${checkout}%0A- Hóspedes: ${hospedes}`;
         let phone = "5516997073816"; // coloque seu número aqui
         window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
        });
        </script>

        <p style="font-size:12px;opacity:.9;margin-top:8px">* aguardamos você.</p>
      </div>
    </div>
  </section>

  <!-- VANTAGENS -->
  <section>
    <div class="container">
      <h2 class="section-title">Algumas vantagens</h2>
      <p class="section-sub">Conforto, lazer e natureza para sua estadia.</p>
      <div class="grid grid-4">
        <div class="feature"><div class="icon">🕑</div><div><h3>Recepção 24h</h3><p>Equipe pronta para ajudar a qualquer hora.</p></div></div>
        <div class="feature"><div class="icon">☕</div><div><h3>Café da manhã</h3><p>Café da manhã tradicional.</p></div></div>
        <div class="feature"><div class="icon">📶</div><div><h3>Wi-Fi gratuito</h3><p>Conexão disponível nas áreas comuns.</p></div></div>
        <div class="feature"><div class="icon">🏊</div><div><h3>Piscina com hidromassagem</h3><p>Vista para natureza.</p></div></div>
        <div class="feature"><div class="icon">🚗</div><div><h3>Estacionamento</h3><p>Espaço amplo para seu veiculo.</p></div></div>
        <div class="feature"><div class="icon">🐟</div><div><h3>Pescaria</h3><p>Agende sua pescaria de dourado no rio pardo.</p></div></div>
        <div class="feature"><div class="icon">🛶</div><div><h3>Passerio de Caiaque</h3><p>Agende seu passeio com muita adrenalina.</p></div></div>
        <div class="feature"><div class="icon">🛏️</div><div><h3>Quartos confortaveis</h3><p>O seu descanso merecido.</p></div></div>
      </div>
    </div>
  </section>

  <!-- ACOMODAÇÕES -->
  <section id="acomodacoes">
    <div class="container">
      <h2 class="section-title">Acomodações</h2>
      <p class="section-sub">Opções para casais, famílias e grupos.</p>
      <div class="grid grid-3">
        <article class="card">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=60" alt="Suíte com sacada" loading="lazy" />
          <div class="content">
            <h3>Quarto familia</h3>
            <p>A tranquilidade de acordar com o som os passaros.</p>
            <div class="chips">
              <span class="chip">Wi-fi</span>
              <span class="chip">Ar-condicionado</span>
              <span class="chip">Café incluso</span>
            </div>
          </div>
        </article>
        <article class="card">
          <img src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8a?auto=format&fit=crop&w=1200&q=60" alt="Apartamento luxo" loading="lazy" />
          <div class="content">
            <h3>Piscina</h3>
            <p>Vista com por do sol.</p>
            <div class="chips">
              <span class="chip">Wi-fi</span>
              <span class="chip">Hidromassagem</span>
              <span class="chip">Vista jardim</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- LAZER EM RIBEIRAO PRETO/ RESERVA AMBIENTAL -->
  <section id="lazer" style="background:#f3f6fb">
    <div class="container">
      <h2 class="section-title">Lazer</h2>
      <p class="section-sub">Bares, restaurantes e locais publicos.</p>
      <div class="grid grid-2">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1499363536502-87642509e31b?auto=format&fit=crop&w=1300&q=60" alt="Área de lazer" loading="lazy" />
          <div class="content">
            <h3>Complexo de Lazer</h3>
            <p>Piscina climatizada com vista, saunas, sala de jogos e quadras poliesportivas.</p>
          </div>
        </div>
        <div class="card">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1300&q=60" alt="Reserva ambiental" loading="lazy" />
          <div class="content">
            <h3>Reserva Ambiental</h3>
            <p>Trilhas em área preservada para contemplação e observação de aves.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- GALERIA -->
  <section id="galeria">
    <div class="container">
      <h2 class="section-title">Galeria de Fotos</h2>
      <p class="section-sub">Conheça um pouco dos nossos ambientes.</p>
      <div class="gallery">
        <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=700&q=60" alt="Lobby" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=700&q=60" alt="Apartamento" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1542089363-5c07b3f3c88b?auto=format&fit=crop&w=700&q=60" alt="Gastronomia" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1551776235-dde6d4829808?auto=format&fit=crop&w=700&q=60" alt="Piscina" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=700&q=60" alt="Jardins" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=700&q=60" alt="Detalhes" loading="lazy" />
      </div>
    </div>
  </section>

  <!-- CTA TARIFAS / OFERTAS -->
  <section class="container" id="reservas">
    <div class="cta-strip">
      <div>
        <h3 style="margin:0">Tarifas e Ofertas</h3>
        <p style="margin:6px 0 0;opacity:.9">Consulte promoções sazonais por telefone, WhatsApp ou e-mail.</p>
      </div>
      <a class="btn" href="https://wa.me/16997073816" target="_blank" rel="noopener">Falar no WhatsApp</a>
    </div>
  </section>

  <!-- LOCALIZAÇÃO / CONTATO -->
  <section id="localizacao">
    <div class="container">
      <h2 class="section-title">Onde estamos</h2>
      <p class="section-sub">Endereço: Av. Thomaz Alberto Whately, 9315 - Parque Res. Candido Portinari, Ribeirão Preto - SP, 14078-560 • Estacionamento no local</p>
      <iframe class="map" src="https://www.google.com/maps?q=-21.15046, -47.75003&hl=pt-BR&z=12&output=embed" allowfullscreen loading="lazy" title="Mapa do Hotel"></iframe>

     <div class="grid grid-3" style="margin-top:24px">
        <div class="card"><div class="content"><h3>Reservas</h3><p><a href="tel:+5516997073816">(16) 99707-3816</a><br><a href="mailto:pousadamaks@gmail.com">pousadamaks@gmail.com</a></p></div></div>
        <div class="card"><div class="content"><h3>Horário</h3><p>Check-in a partir de 14h • Check-out até 12h</p></div></div>
        <div class="card"><div class="content"><h3>Redes sociais</h3><p><a href="#">Instagram</a> • <a href="#">Facebook</a></p></div></div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container foot">
      <div>
        <h4>Pousada Maks</h4>
        <p>Tradição em hospitalidade na natureza.</p>
      </div>
      <div>
        <h4>Links</h4>
        <p><a href="#acomodacoes">Acomodações</a><br><a href="#lazer">Lazer</a><br><a href="#reservas">Tarifas</a></p>
      </div>
      <div>
        <h4>Políticas</h4>
        <p><a href="/politica-de-privacidade.html">Política de Privacidade</a><br><a href="/politica-de-reservas.pdf">Política de Reservas</a></p>
      </div>
    </div>
    <div class="copyright">© <span id="year"></span> Pousada Maks. Todos os direitos reservados.</div>
  </footer>

  <!-- Botões flutuantes -->
  <div class="float-wrap" aria-label="Acesso rápido">
    <a class="float-btn" href="https://wa.me/16997073816" target="_blank" rel="noopener" aria-label="WhatsApp">
      <span>WhatsApp</span>
    </a>
    <a class="float-btn instagram" href="https://www.instagram.com/pousada_maks/" target="_blank" rel="noopener" aria-label="Instagram">
      <span>Instagram</span>
    </a>
  </div>

  <script>
    // Ano automático
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>

  <!-- Schema.org (Hotel) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel/Pousada",
    "url": "https://seudominio.com.br/",
    "image": "https://seudominio.com.br/assets/fachada.jpg",
    "telephone": "+55 27 99902-4417",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rodovia BR-000, Km 00",
      "addressLocality": "Sua Cidade",
      "addressRegion": "UF",
      "postalCode": "00000-000",
      "addressCountry": "BR"
    },
    "amenityFeature": [
      {"@type":"LocationFeatureSpecification","name":"Piscina climatizada","value":true},
      {"@type":"LocationFeatureSpecification","name":"Wi-Fi gratuito","value":true},
      {"@type":"LocationFeatureSpecification","name":"Restaurante","value":true},
      {"@type":"LocationFeatureSpecification","name":"Sauna","value":true}
    ],
    "checkinTime": "14:00",
    "checkoutTime": "12:00"
  }
  </script>
</body>
</html>
