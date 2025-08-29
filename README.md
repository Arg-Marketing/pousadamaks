 <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pousada Maks – Seu refúgio de conforto e tranquilidade</title>
  <meta name="description" content="Pousada Maks: conforto, lazer e natureza. Piscina com hidromassagem, café da manhã e muito mais." />
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(rgba(0, 100, 0, 0.7), rgba(0, 100, 0, 0.7)),
                  url('https://picsum.photos/1600/900?blur=3') no-repeat center/cover;
      color: #fff;
    }
    header {
      background: #111;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 40px;
    }
    header .logo {
      font-weight: bold;
      font-size: 1.4em;
      color: #fff;
    }
    nav a {
      color: #fff;
      margin: 0 15px;
      text-decoration: none;
      font-weight: 500;
    }
    nav a.reservas {
      background: #cfff68;
      padding: 6px 12px;
      border-radius: 6px;
      color: #000;
      font-weight: bold;
    }
    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 50px;
    }
    .texto {
      max-width: 500px;
    }
    .texto h1 {
      font-size: 2em;
      margin-bottom: 10px;
      color: #fff;
    }
    .texto p {
      font-size: 1.1em;
      margin-bottom: 20px;
      color: #f1f1f1;
    }
    .tags span {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      padding: 6px 12px;
      margin: 4px;
      border-radius: 20px;
      font-size: 0.9em;
    }
    .texto .btn {
      display: inline-block;
      background: #cfff68;
      color: #000;
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 20px;
    }
    .formulario {
      background: rgba(255, 255, 255, 0.2);
      padding: 20px;
      border-radius: 12px;
      width: 300px;
      color: #000;
      background-color: #fff;
    }
    .formulario h2 {
      font-size: 1.2em;
      margin-bottom: 15px;
      color: #111;
    }
    .formulario label {
      display: block;
      margin-bottom: 5px;
      font-size: 0.9em;
      color: #333;
    }
    .formulario input, .formulario select {
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    .formulario button {
      width: 100%;
      background: #cfff68;
      border: none;
      padding: 10px;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
    }
    .social {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .social a {
      background: #25d366;
      color: #fff;
      padding: 12px;
      border-radius: 50%;
      text-align: center;
      text-decoration: none;
      font-weight: bold;
    }
    .social a.instagram {
      background: #e4405f;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">Pousada Maks</div>
    <nav>
      <a href="#">Acomodações</a>
      <a href="#">Lazer</a>
      <a href="#">Galeria</a>
      <a href="#">Localização</a>
      <a href="#" class="reservas">Reservas</a>
    </nav>
  </header>

  <main>
    <div class="texto">
      <h1>Seu refúgio de conforto e tranquilidade</h1>
      <p>Viva dias de sossego entre a natureza, com a tranquilidade que você merece. Piscina com hidromassagem, café da manhã e muito mais.</p>
      <div class="tags">
        <span>Wi-Fi gratuito</span>
        <span>Café da manhã</span>
        <span>Piscina com hidromassagem</span>
        <span>Estacionamento amplo</span>
      </div>
      <a href="#" class="btn">Reserve agora</a>
    </div>

    <div class="formulario">
      <h2>Consulta rápida de tarifas</h2>
      <form>
        <label>Data de entrada</label>
        <input type="date" required />
        <label>Data de saída</label>
        <input type="date" required />
        <label>Espécies</label>
        <select>
          <option>1 pessoa</option>
          <option>2 pessoas</option>
          <option>3 pessoas</option>
          <option>4 pessoas</option>
        </select>
        <button type="submit">Solicitar cotação</button>
      </form>
    </div>
  </main>

  <div class="social">
    <a href="https://wa.me/seunumerowhatsapp" target="_blank">W</a>
    <a href="https://instagram.com/seupousada" target="_blank" class="instagram">I</a>
  </div>
</body>
</html>

