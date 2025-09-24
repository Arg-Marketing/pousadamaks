// === Formulário de cotação ===
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cotacaoForm');
  const checkinInput = form.querySelector('input[name="checkin"]');
  const checkoutInput = form.querySelector('input[name="checkout"]');

  const formatDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const hoje = new Date();
  const hojeStr = formatDate(hoje);
  checkinInput.min = hojeStr;
  checkoutInput.min = hojeStr;

  checkinInput.addEventListener('change', () => {
    if (!checkinInput.value) return;
    const checkinVal = new Date(checkinInput.value);
    const proximoDia = new Date(checkinVal);
    proximoDia.setDate(proximoDia.getDate() + 1);
    checkoutInput.min = formatDate(proximoDia);
    if (checkoutInput.value && new Date(checkoutInput.value) <= checkinVal) {
      checkoutInput.value = '';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkin = new Date(checkinInput.value);
    const checkout = new Date(checkoutInput.value);
    const hospedes = parseInt(form.hospedes.value, 10);

    if (isNaN(checkin) || isNaN(checkout)) {
      alert('Por favor, selecione datas válidas.');
      return;
    }
    if (checkout <= checkin) {
      alert('A data de saída deve ser depois da data de entrada.');
      return;
    }
    if (hospedes < 1) {
      alert('Informe pelo menos 1 hóspede.');
      return;
    }

    const msg = `Olá tudo bem, gostaria de fazer uma reserva para esta data, tem disponibilidade?%0A- Check-in: ${checkinInput.value}%0A- Check-out: ${checkoutInput.value}%0A- Hóspedes: ${hospedes}`;
    const phone = '5516997073816';
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  });
});

// === Slider da galeria ===
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-slider .slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  showSlide(current);
  setInterval(nextSlide, 4000);
});
