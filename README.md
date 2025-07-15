<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title></title>
  
  <meta name="description" content="Pousada Maks - Um refúgio em Ribeirão Preto">
  <link rel="canonical" href="https://arg-marketing.github.io/pousadamaks/">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Icons -->
  <script src="https://unpkg.com/feather-icons"></script>

  <!-- CSS -->
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Inter', sans-serif; background: #f9f9f9; color: #333; text-align: center; }

    header {
      background: #fff; padding: 60px 20px 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    header h1 { font-size: 36px; color: #111; }
    header p { font-size: 18px; color: #555; margin-top: 10px; }

    .reserva-button {
      display: inline-block; margin-top: 30px;
      background: #25D366; color: white;
      padding: 14px 32px; font-weight: bold;
      text-decoration: none; border-radius: 8px;
      font-size: 16px; transition: background 0.3s;
    }

    .reserva-button:hover { background: #1ebe57; }

    .cards, .depoimentos {
      display: flex; flex-wrap: wrap;
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
      .cards, .depoimentos {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>

<body>
  <header>
    <h1 style="text-align: center; margin-bottom: 5px;">Pousada Maks</h1>

<!-- Subtítulo menor, sem linha -->
<h2 style="font-size: 16px; font-weight: normal; color: #666; text-align: center; margin-top: 0;">
  Venha se hospedar e transforme seu descanso em momentos especiais.
</h2>
    <p><i data-feather="map-pin" class="info-icon"></i>Ribeirão Preto - SP</p>
  
</a>
    <a class="reserva-button" href="https://wa.me/5516997073816" target="_blank">
      <i data-feather="message-circle" class="info-icon"></i>Fale conosco no WhatsApp
  </header>
  
  <section class="cards">

    <div class="card reserva">
      <h2>Faça sua RESERVA</h2>
      <p><i data-feather="phone" class="info-icon"></i> (16) 99707-3816</p>
      <p><i data-feather="user" class="info-icon"></i> Host: Raquel</p>
    </div>
  </header>  
  
<a href="https://maps.app.goo.gl/kLAstWSYVMQY6zYv6" target="_blank">
  <button style="background-color: #ababab; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
    Ver endereço no mapa
  </button>
    </header>
    
  <section class="cards">
    
    <div class="card">
      <h2><i data-feather="sun" class="info-icon"></i>Diária</h2>
      <p>R$ 112,00 por pessoa</p>
      <p>Check-in: 14:00 | Check-out: 12:00</p>
      <p><i data-feather="coffee" class="info-icon"></i> Café da manhã incluso</p>
    </div>

    <div class="card">
      <h2><i data-feather="moon" class="info-icon"></i>Pernoite</h2>
      <p>R$ 90,00 por pessoa</p>
      <p>Check-in: 19:00 | Check-out: 10:00</p>
      <p><i data-feather="coffee" class="info-icon"></i> Café da manhã incluso</p>
    </div>

  </section>

  <section class="depoimentos">
    <div class="depoimento">
      <h3>Juliana F.</h3>
      <p>"Fomos muito bem acolhidos para descansar e seguir viagem. Quarto muito confortável e limpo. Café da manhã muito gostoso.
Recomendadíssimo 👏👏👏"</p>
    </div>
    <div class="depoimento">
      <h3>Ricardo M.</h3>
      <p>"Fui muito bem tratado, cada detalhe na limpeza no cuidado com as roupas de cama e banho, até os talheres ali arrumados e certinho. 😌"</p>
    </div>
    <div class="depoimento">
      <h3>Camila R.</h3>
      <p>"Lugar lindo onde fui atendida como parte da família. Podemos ter contato direto com a natureza, otimo lugar para relaxar e curtir com a família.☘️"</p>
    </div>
  </section>

  <footer>
    Av. Thomaz Alberto Whately, 9315 – Faz da Barra, Ribeirão Preto - SP, 14078-560
  </footer>

  <!-- Feather Icons -->
  <script>feather.replace()</script>

  <!-- Google Ads Conversão -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11426807866"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11426807866');

    document.addEventListener('DOMContentLoaded', function () {
      const btn = document.querySelector('.reserva-button');
      btn.addEventListener('click', function () {
        gtag('event', 'conversion', {
          'send_to': 'AW-11426807866/0ly3CNKVxu4aELqA3cgq'
        });
      });
    });
  </script>


