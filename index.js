const venom = require('venom-bot');

venom.create().then((client) => start(client));

function start(client) {
  client.onMessage((message) => {
    const msg = message.body.toLowerCase();

    if (msg === '1') {
      client.sendText(message.from, '✨ Veja nossas joias em prata 925 no site:\n👉 https://seusite.com.br');
    } else if (msg === '2') {
      client.sendText(message.from, '📦 *Trocas e Devoluções*\n\nVocê pode trocar em até 7 dias após o recebimento. Produto deve estar sem uso e com embalagem original.\n\nPara solicitar, envie: "Quero trocar um produto"');
    } else if (msg === '3') {
      client.sendText(message.from,
        '❓ *Dúvidas Frequentes:*\n\n' +
        '- As joias são prata 925 de verdade?\n👉 Sim! Todas têm certificado.\n\n' +
        '- Fazem entregas para todo o Brasil?\n👉 Sim!\n\n' +
        '- Como limpar minha prata?\n👉 Use flanela ou produtos próprios.'
      );
    } else if (msg === '4') {
      client.sendText(message.from, '📞 Um atendente será chamado para te ajudar em breve!');
    } else {
      client.sendText(message.from,
        'Olá! 💍 Bem-vindo(a) à *Verttraue – Joias em Prata 925*.\n\n' +
        'Sou o assistente virtual. Me diga com o número:\n' +
        '1️⃣ Ver produtos\n' +
        '2️⃣ Trocas e devoluções\n' +
        '3️⃣ Dúvidas frequentes\n' +
        '4️⃣ Falar com atendente'
      );
    }
  });
}
