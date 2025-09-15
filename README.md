<html lang="pt-BR">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RJ75CGY3PG"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-RJ75CGY3PG');
    </script>
    <!-- Event snippet for Botão de contato - WhatsApp - Pousada MAKS conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
    <script>
        function gtag_report_conversion(url) {
            var callback = function () {
                if (typeof (url) != 'undefined') {
                    window.location = url;
                }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17076601497/0FMvCOCl748bEJmF4c4_',
                'value': 0.0,
                'currency': 'BRL',
                'event_callback': callback
            });
            return false;
        }
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pousada MAKS</title>
    <script src="index/mains.js"></script>
    <link rel="stylesheet" href="index/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="icon" href="logo.png" type="image/png">


</head>

<body>



    <div class="menu-icon" id="menuIcon" onclick="toggleMenu()">&#9776;</div>
    <div id="sidebar" class="sidebar">

        <div class="tituloinfovision">
            <img class="logo-ifv" src="logo.png" alt="logo da nossa empresa infovision">
            <h1>Pousada MAKS</h1>
        </div>
        <div class="links">
            <a href="javascript:void(0)" class="closebtn" onclick="closeMenu()">&times;</a>
            <a href="index.html">
                <li>Início</li>
            </a>
            <a href="revenda.html">
                <li>Reservas Automáticas</li>
            </a>
            <a
                href="https://wa.me/5516988532041?text=Ol%C3%A1!%20Gostaria%20de%20verificar%20a%20disponibilidade%20de%20alguns%20quartos!">
                <li>Contato</li>
            </a>
        </div>
    </div>
    <style>
        @media (min-width:736px) {

            .img_top {
                background-image: url(img1.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                height: 600px;
                margin-top: 70px;
                display: flex;
                padding-bottom: 3rem;
            }

        }



        @media (max-width:735px) {

            .img_top {
                background-image: url(img1.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                height: 600px;

                display: flex;
                padding-bottom: 0px;
            }


            .btn-whatsapp {
                display: inline-block;
                margin-top: 10px;
                padding: 10px 16px;
                background-color: #2e7d32;
                color: white;
                text-decoration: none;
                border-radius: 6px;
                transition: background-color 0.3s ease;
                margin-top: 20px;
            }

            .btn-whatsapp:hover {
                background-color: #000000;
            }


            @media (min-width:735px) {

                .menu-icon {
                    display: none;
                }

            }


        }
    </style>
    <div class="img_top">
        <br>
        <div class="container">
            <h1>🌿 Pousada MAKS!</h1>
            <p class="subtitulo">Faça sua reserva rapidamente</p>
            <form id="reservaForm">
                <label for="datas">Período da Reserva:</label>
                <input calss="inputdatas" type="text" id="datas" placeholder="Escolha o período" required>

                <label for="hospedes">Número de Hóspedes:</label>
                <select id="hospedes" required>
                    <option value="" disabled selected>Selecione</option>
                    <option value="1">1 pessoa</option>
                    <option value="2">2 pessoas</option>
                    <option value="3">3 pessoas</option>
                    <option value="4">4 pessoas</option>
                    <option value="5">5 pessoas</option>
                    <option value="6">6 pessoas</option>
                    <option value="7">7 pessoas</option>
                    <option value="8">8 pessoas</option>
                    <option value="9">9 pessoas</option>
                    <option value="10">10 pessoas</option>
                    <option value="11">11 pessoas</option>
                    <option value="12">12 pessoas</option>
                    <option value="13">13 pessoas</option>
                    <option value="14">14 pessoas</option>
                    <option value="15">15 pessoas</option>
                </select>

                <button type="submit">Enviar</button>
            </form>
            <div id="resposta" class="resposta-box"></div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
        <script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/pt.js"></script>
        <script>

            let datasSelecionadas = [];

            flatpickr("#datas", {
                mode: "range",
                locale: "pt",
                dateFormat: "d/m/Y",
                onChange: function (selectedDates) {
                    datasSelecionadas = selectedDates;
                    mostrarBotaoDisponibilidade();
                }
            });

            function formatarData(data) {
                const dia = String(data.getDate()).padStart(2, '0');
                const mes = String(data.getMonth() + 1).padStart(2, '0');
                const ano = data.getFullYear();
                return `${dia}/${mes}/${ano}`;
            }

            function formatarMoeda(valor) {
                return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }

            function mostrarResposta(mensagem) {
                const box = document.getElementById('resposta');
                box.classList.remove('fade-in');
                void box.offsetWidth;
                box.innerHTML = mensagem;
                box.classList.add('fade-in');
            }

            function mostrarBotaoDisponibilidade() {
                const botaoDisponibilidade = document.querySelector('#reservaForm button[type="submit"]');
                botaoDisponibilidade.style.display = 'inline-block';

                // Remove o botão do WhatsApp se ele estiver visível
                const respostaBox = document.getElementById('resposta');
                respostaBox.innerHTML = '';
            }

            document.getElementById('hospedes').addEventListener('change', mostrarBotaoDisponibilidade);

            document.getElementById('reservaForm').addEventListener('submit', function (e) {
                e.preventDefault();



                if (datasSelecionadas.length < 2) {
                    mostrarResposta('Selecione o período da reserva.');
                    return;
                }

                const checkin = datasSelecionadas[0];
                const checkout = datasSelecionadas[1];
                const hospedes = parseInt(document.getElementById('hospedes').value);

                if (isNaN(hospedes) || hospedes < 1 || hospedes > 15) {
                    mostrarResposta('Selecione um número de hóspedes válido.');
                    return;
                }

                const diariaSemana = 112;
                const diariaFds = 130;
                const dias = (checkout - checkin) / (1000 * 60 * 60 * 24);

                if (dias <= 0) {
                    mostrarResposta('Datas inválidas.');
                    return;
                }

                let total = 0;
                for (let i = 0; i < dias; i++) {
                    const dia = new Date(checkin);
                    dia.setDate(dia.getDate() + i);
                    const diaSemana = dia.getDay();
                    total += (diaSemana === 0 || diaSemana === 6) ? diariaFds : diariaSemana;
                }

                const valorFinal = total * hospedes;
                const valorFormatado = formatarMoeda(valorFinal);
                const checkinStr = formatarData(checkin);
                const checkoutStr = formatarData(checkout);

                const mensagem = `Olá! Gostaria de verificar a disponibilidade de uma data! \n\nCheck-in: ${checkinStr} \n Check-out: ${checkoutStr}.\n\nHóspedes: ${hospedes} pessoa(s).`;
                const encodedMensagem = encodeURIComponent(mensagem);
                const linkWhatsApp = `https://api.whatsapp.com/send?phone=5516988532041&text=${encodedMensagem}`;

                mostrarResposta(`
      <a class="btn-whatsapp" href="${linkWhatsApp}" onclick="gtag_report_conversion('${linkWhatsApp}'); return false;" target="_blank">Verificar Disponibilidade</a>`);
      

                // Oculta o botão "Ver Disponibilidade"
                document.querySelector('#reservaForm button[type="submit"]').style.display = 'none';
            });
        </script>
    </div>

    <br>
    <br>
    <br>
    <br>
    <div class="divnocha">
        <t class="nocha">Nossos chalés:</t>
    </div>
    <div class="banner-container">

        <div class="banner-slide" id="slide">

            <img class="img_index" src="imagem1.jpg" alt="Imagem 1">
            <img class="img_index" src="imagem2.jpg" alt="Imagem 1">
            <img class="img_index" src="imagem3.jpg" alt="Imagem 1">
            <img class="img_index" src="imagem4.jpg" alt="Imagem 1">
            <img class="img_index" src="imagem5.jpg" alt="Imagem 1">
            <img class="img_index" src="imagem6.jpg" alt="Imagem 1">
            <img class="img_index" src="imagem7.jpg" alt="Imagem 1">

        </div>

    </div>

    <script>

        const slide = document.getElementById('slide');
        const images = slide.querySelectorAll('img');
        let index = 0;
        let startX = 0;
        let isDragging = false;
        let autoSlideInterval;
        let autoSlideDelay = 3000;

        // Função para atualizar o slide
        function updateSlide() {
            slide.style.transform = `translateX(-${index * 100}%)`;
        }

        // Função para iniciar o slide automático
        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                index = (index + 1) % images.length;
                updateSlide();
            }, autoSlideDelay);
        }

        // Função para pausar e reiniciar com delay maior
        function pauseAndDelayAutoSlide() {
            clearInterval(autoSlideInterval);
            setTimeout(() => {
                autoSlideDelay = 5000; // aumenta para 5 segundos
                startAutoSlide();
            }, 5000); // espera 5 segundos antes de reiniciar
        }

        // Eventos de toque/mouse
        slide.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
        });

        slide.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX;
        });

        slide.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            const endX = e.pageX;
            handleSwipe(endX);
            isDragging = false;
        });

        slide.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].pageX;
            handleSwipe(endX);
            isDragging = false;
        });

        // Lógica do swipe
        function handleSwipe(endX) {
            const diff = endX - startX;
            if (diff > 50 && index > 0) {
                index--;
            } else if (diff < -50 && index < images.length - 1) {
                index++;
            }
            updateSlide();
            pauseAndDelayAutoSlide(); // pausa e reinicia com delay maior
        }

        // Inicia o slide automático
        startAutoSlide();
    </script>
    <div class="mapa-container">

        <br>
        <br>
        <h2>📍 Localização da Pousada MAKS</h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119073.51789521833!2d-47.8942169566406!3d-21.150510500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9c062fbadd56b%3A0x3ff82f6aa62b259a!2sPOUSADA%20MAKS!5e0!3m2!1spt-BR!2sbr!4v1755976305002!5m2!1spt-BR!2sbr"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade""
    width=" 100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>


    <br>
</body>

<footer class="rodape">
    <div class="conteudo-rodape">
        <p>&copy; 2025 Pousada MAKS — Todos os direitos reservados.</p>
        <p>Contato: <a href="mailto:pousadamaks@gmail.com">pousadamaks@gmail.com</a></p>
        <p><a href="https://wa.me/5516988532041" target="_blank" onclick=gtag_report_conversion();>Fale conosco pelo WhatsApp</a></p>
    </div>
</footer>

</html>

    © 2025 Pousada Maks. Todos os direitos reservados.
  </div>
</footer>
</body>
</html>
