const likeBtn = document.querySelector('#like');
const addToCart = document.querySelector('#add-to-cart');
const email = document.querySelector('#email');
const pedido = document.querySelector('#pedido');

// like com bounce: 1 → 1.3 → 0.9 → 1
likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('is-liked');
  likeBtn.textContent = likeBtn.classList.contains('is-liked') ? '♥' : '♡';
  likeBtn.animate(
    [{ scale: 1 }, { scale: 1.3 }, { scale: 0.9 }, { scale: 1 }],
    { duration: 400, easing: 'ease-out' }
  );
});

// mobile: 10ms de vibração em ações importantes
function confirmarToque() {
  if ('vibrate' in navigator) navigator.vibrate(10);
}
addToCart.addEventListener('click', confirmarToque);

// sucesso inline: valida no campo, sem recarregar
email.addEventListener('blur', () => {
  const ok = email.checkValidity();
  email.classList.toggle('is-valid', ok);
  email.classList.toggle('is-invalid', !ok);
});

// botão loading: simula uma requisição de 2s
pedido.addEventListener('click', () => {
  pedido.classList.add('is-loading');
  setTimeout(() => {
    pedido.classList.remove('is-loading');
    pedido.textContent = '✓ Pedido enviado';
  }, 2000);
});

// skeleton: troca pelo conteúdo depois de 2,5s
setTimeout(() => {
  document.querySelector('#lista').innerHTML = `
    <article class="post"><b>Micro-interações</b><p>Feedback que o usuário entende.</p></article>
    <article class="post"><b>Skeleton screens</b><p>O layout chega antes do conteúdo.</p></article>`;
}, 2500);
