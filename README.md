# Micro-interações: o detalhe que faz o site parecer caro

Material do vídeo **"Micro-interações"** do canal da [Digital Lift](https://digitallift.com.br).

Tudo em CSS e JavaScript puro, sem biblioteca:

| Micro-interação | Arquivo |
|---|---|
| Hover assimétrico (entra em 0.1s, sai em 0.3s) | `css/hover.css` |
| Lift effect em cards | `css/hover.css` |
| Underline animado com `::after` | `css/hover.css` |
| Skeleton screen + shimmer | `css/loading.css` |
| Botão loading (sem clique duplo) | `css/loading.css` |
| Shake em campo inválido e sucesso inline | `css/feedback.css` + `js/feedback.js` |
| Like com bounce (Web Animations API) | `js/feedback.js` |
| `navigator.vibrate(10)` no mobile | `js/feedback.js` |
| `prefers-reduced-motion` | `css/reduced-motion.css` |

## Como usar (passo a passo)

1. Baixe o repositório: botão verde **Code → Download ZIP** e descompacte.
2. Dê dois cliques no `index.html`: abre no navegador, sem instalar nada.
3. Passe o mouse nos botões, no card e no link; clique em "Enviar pedido" e no coração; digite um e-mail e saia do campo.
4. Para usar no seu site, copie o arquivo `.css` da micro-interação que quiser e as variáveis de `css/base.css`.

> `navigator.vibrate` funciona em navegadores Android. O Safari do iPhone ignora a chamada (não dá erro).

## As 3 regras de ouro
1. Dura menos de 300ms.
2. Comunica algo real.
3. Não bloqueia o fluxo.

E sempre respeite `prefers-reduced-motion`.
