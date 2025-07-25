<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/feather-icons"></script>

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #fff; color: #111; }

    .top-bar {
      background: #f1f1f1;
      padding: 10px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      word-wrap: break-word;
    }

    .hero {
      position: relative;
      text-align: center;
    }

    .hero img {
      width: 100%;
      height: auto;
      max-height: 400px;
      object-fit: cover;
      display: block;
    }

    .hero-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      text-shadow: 0 0 10px black;
      text-align: center;
      padding: 0 20px;
      width: 100%;
    }

    .hero-text h1 {
      font-size: 36px;
      margin-bottom: 10px;
    }

    .hero-text p {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .reserva-button {
      background: #25D366;
      color: white;
      padding: 12px 28px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      text-decoration: none;
      display: inline-block;
      transition: background 0.3s;
    }

    .reserva-button:hover {
      background: #1ebe57;
    }

    .hero img {
      width: 100%;
      height: auto;
      max-height: 400px;
      object-fit: cover;
      display: block;
    }

    .cards, .depoimentos {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 50px 20px;
      gap: 20px;
    }

    .card, .depoimento {
      background: white;
      padding: 30px 20px;
      width: 300px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: transform 0.2s;
    }

    .card:hover, .depoimento:hover {
      transform: translateY(-4px);
    }

    .card h2, .depoimento h3 {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .card.reserva {
  background: #f44336;
  color: white;
  text-align: center; /* <-- centraliza tudo dentro */
}

    .info-icon {
      margin-right: 6px;
      vertical-align: middle;
    }

    .phone-link {
      color: inherit;
      text-decoration: none;
    }

    footer {
      background: #f1f1f1;
      color: #000;
      padding: 30px 20px;
      font-size: 14px;
      text-align: center;
      border-top: 1px solid #ddd;
    }

    @media (max-width: 768px) {
      .cards, .depoimentos {
        flex-direction: column;
        align-items: center;
      }

      .card, .depoimento {
        width: 90%;
      }

      .hero-text h1 {
        font-size: 26px;
      }

      .hero-text p {
        font-size: 16px;
      }

      .reserva-button {
        padding: 10px 20px;
        font-size: 14px;
      }
    }
  </style>
</head>

<body>
  <div class="top-bar" style="color: black;">
    Faça sua reserva com o telefone:
    <a href="tel:+5516997073816" class="phone-link" style="color: black;">
      <i data-feather="phone" class="info-icon"></i> (16) 99707-3816 - Raquel
    </a>
  </div>

  <div class="hero">
    <img src="https://github.com/user-attachments/assets/dfc7b9a9-eea9-4b19-a8b0-635dd6b72ae1" alt="Imagem da pousada">
    <div class="hero-text">
      <h1></h1>
      <p></p>
      <a href="https://wa.me/5516997073816" target="_blank" class="reserva-button">
        Fale conosco no WhatsApp
      </a>
    </div>
  </div>

  <section class="cards">
    <div class="card reserva">
      <h2>FAÇA SUA RESEVA</h2>
      <p>
        <a href="tel:+5516997073816" class="phone-link">
          <i data-feather="phone" class="info-icon"></i> (16) 99707-3816
        </a>
      </p>
      <p><i data-feather="user" class="info-icon"></i> Host: Raquel</p>
    </div>
  </section>

<section class="cards">
  
</section>

<!-- AQUI ENTRA A IMAGEM CORRETA -->
<img src="https://github.com/user-attachments/assets/6019738c-bad5-4da6-bd1d-cf4e58d53995" alt="Foto da pousada" style="width: 100%; max-width: 900px; margin: 40px auto; display: block; border-radius: 12px;">

<section class="depoimentos">
  
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

  <footer>
    Av. Thomaz Alberto Whately, 9315 – Faz da Barra, Ribeirão Preto - SP, 14078-560
  </footer>

  <script>feather.replace()</script>
</body>
</html>

