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
