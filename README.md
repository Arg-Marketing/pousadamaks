<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pousada Maks</title>

  <meta name="description" content="Pousada Maks - Um refúgio em Ribeirão Preto">
  <link rel="canonical" href="https://arg-marketing.github.io/pousadamaks/">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Feather Icons -->
  <script src="https://unpkg.com/feather-icons"></script>

  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: #f9f9f9; color: #333; text-align: center; }

    header {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #fff;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      flex-wrap: wrap;
    }

    .logo {
      width: 60px;
      height: auto;
    }

    header h1 { font-size: 36px; color: #111; text-align: left; }
    header h2 {
      font-size: 16px; font-weight: normal;
      color: #666; text-align: left; margin-bottom: 10px;
    }
    header p { font-size: 18px; color: #555; margin-top: 10px; text-align: left; }

    .button-group {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }

    .map-button {
      display: inline-block;
      padding: 14px 32px;
      font-weight: bold;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.3s;
      cursor: pointer;
      background: #ababab;
      color: white;
    }
    .map-button:hover { background: #999999; }

    .cards, .depoimentos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 50px 20px; gap: 20px;
    }

    .card, .depoimento {
      background: white;
      padding: 30px 20px;
      width: 300px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s;
    }

    .card:hover, .depoimento:hover { transform: translateY(-4px); }

    .card h2, .depoimento h3 {
      font-size: 22px; margin-bottom: 10px;
    }

    .card.reserva {
      background: #f44336;
      color: white;
    }

    .info-icon {
      margin-right: 6px;
      vertical-align: middle;
    }

    footer {
      background: #222; color: #fff;
      padding: 30px 20px; font-size: 14px;
      margin-top: 60px;
    }

    @media (max-width: 768px) {
      header { justify-content: center; text-align: center; }
      header h1, header h2, header p { text-align: center; }
      .cards, .depoimentos {
        flex-direction: column;
        align-items: center;
      }
    }

    /* Botão flutuante WhatsApp */
    #whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #25D366;
      color: white;
      padding: 18px 36px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 50px;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      z-index: 999;
      transition: transform 0.3s ease, background 0.3s ease;
    }

    #whatsapp-float:hover {
      background: #1ebe57;
      transform: scale(1.05);
    }

    #whatsapp-float .info-icon {
      width: 24px;
      height: 24px;
    }
  </style>
</head>

<body>
  <header>
    <img src="https://github.com/user-attachments/assets/34c62a0d-271d-43e4-a543-c380e51fd98d" alt="Logo Pousada Maks" class="logo">
    <div>
      <h1>Pousada Maks</h1>
      
      <h2>Venha se hospedar e transforme seu descanso em momentos especiais.</h2>
      <p><i data-feather="map-pin" class="info-icon"></i>Ribeirão Preto - SP</p>
    </div>
  </header>

  <section class="cards">
    <div class="card reserva">
      <h2>Faça sua RESERVA</h2>
      <p><i data-feather="phone" class="info-icon"></i> (16) 99707-3816</p>
      <p><i data-feather="user" class="info-icon"></i> Host: Raquel</p>
    </div>
  </section>

  <div class="button-group" style="margin-top: -30px;">
    <a class="map-button" href="https://maps.app.goo.gl/kLAstWSYVMQY6zYv6" target="_blank">
      Ver endereço no mapa
    </a>
  </div>

  <section class="cards">
    <div class="card">
      <h2><i data-feather="sun" class="info-icon"></i>Diária</h2>
      <p>Consulte nossos valores</p>
      <p>Check-in: 14:00 | Check-out: 12:00</p>
      <p><i data-feather="coffee" class="info-icon"></i> Café da manhã incluso</p>
    </div>

    <div class="card">
      <h2><i data-feather="moon" class="info-icon"></i>Pernoite</h2>
      <p>Consulte nossos valores</p>
      <p>Check-in: 19:00 | Check-out: 10:00</p>
      <p><i data-feather="coffee" class="info-icon"></i> Café da manhã incluso</p>
    </div>
  </section>

  <section class="depoimentos">
    <div class="depoimento">
      <h3>Juliana F.</h3>
      <p>"Fomos muito bem acolhidos para descansar e seguir viagem. Quarto muito confortável e limpo. Café da manhã muito gostoso. Recomendadíssimo 👏👏👏"</p>
    </div>
    <div class="depoimento">
      <h3>Ricardo M.</h3>
      <p>"Fui muito bem tratado, cada detalhe na limpeza no cuidado com as roupas de cama e banho, até os talheres ali arrumados e certinho. 😌"</p>
    </div>
    <div class="depoimento">
      <h3>Camila R.</h3>
      <p>"Lugar lindo onde fui atendida como parte da família. Podemos ter contato direto com a natureza, ótimo lugar para relaxar e curtir com a família.☘️"</p>
    </div>
  </section>

  <!-- Seção Galeria de Fotos -->
  <section style="text-align:center; margin: 50px 0;">
    <h2 style="font-size: 24px; margin-bottom: 15px;">Veja nossa galeria de fotos</h2>
    <a href="https://www.instagram.com/seu_usuario_aqui" target="_blank" 
       style="display: inline-flex; align-items: center; gap: 10px; background: #E1306C; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.3s ease;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.3 2.2-.4 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 0 5.6 0 4.6.1 3.8.3 3 .6 2.3.9 1.6 1.6.9 2.3.6 3 0 3.8.1 4.6 0 5.6 0 7c0 1.3 0 1.7-.1 5s0 3.6.1 5c.1 1.3.2 1.8.4 2.2.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.2.4 1.3.1 1.7.1 5 .1s3.6 0 5-.1c1.2-.1 1.8-.2 2.2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.2.1-1.3.1-1.7.1-5s0-3.6-.1-5c-.1-1.2-.2-1.8-.4-2.2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.2-.4-1.3-.1-1.7-.1-5-.1z"/>
        <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2a4 4 0 1 1 0-8.1 4 4 0 1 1 0 8.1zM18.4 4.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z"/>
      </svg>
      Ver no Instagram
    </a>
  </section>

  <footer>
    Av. Thomaz Alberto Whately, 9315 – Faz da Barra, Ribeirão Preto - SP, 14078-560
  </footer>

  <a class="reserva-button" id="whatsapp-float" href="https://wa.me/5516997073816" target="_blank">
    <i data-feather="message-circle" class="info-icon"></i> Fale conosco
  </a>

  <script>feather.replace()</script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11426807866"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11426807866');

    document.addEventListener('DOMContentLoaded', function () {
      const btn = document.querySelector('#whatsapp-float');
      btn.addEventListener('click', function () {
        gtag('event', 'conversion', {
          'send_to': 'AW-11426807866/0ly3CNKVxu4aELqA3cgq'
        });
      });
    });
  </script>
</body>
</html>
