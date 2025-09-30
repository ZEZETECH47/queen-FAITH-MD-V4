const { cmd } = require('../command');
const moment = require('moment-timezone');

cmd({
  pattern: "support",
  alias: ["supportgroup", "help", "channel"],
  desc: "Get FAITH-MD support, channel & developer contact",
  category: "system",
  filename: __filename,
}, async (Void, m, text) => {

  const jtime = moment.tz('Africa/Nairobi').format("HH:mm:ss");
  const jdate = moment.tz('Africa/Nairobi').format("DD/MM/YY");

  // 🧾 Fake Verified Contact
  const fakeContact = {
    key: {
      fromMe: false,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      contactMessage: {
        displayName: "FAITH-MD | FAITH-MD",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:FAITH-MD | FAITH\nORG:FAITH-MD;\nTEL;type=CELL;type=VOICE;waid=255747397675:+255 747 397675\nEND:VCARD`,
        jpegThumbnail: Buffer.alloc(0)
      }
    }
  };

  const contextInfo = {
    externalAdReply: {
      title: "📞 FAITH-MD • Support & Channel",
      body: `🕒 ${jtime} | 📅 ${jdate}`,
      thumbnailUrl: 'https://files.catbox.moe/12phie.jpg',
      sourceUrl: 'https://chat.whatsapp.com/IIeq9B11nQoIa3gduDKljz?mode=ems_copy_t',
      mediaType: 1,
      renderLargerThumbnail: true,
      showAdAttribution: true
    },
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363295141350550@newsletter",
      newsletterName: "FAITH-MD"
    }
  };

  const supportText = `*🛠️ FAITH-MD Support Center*\n\n╭─❍ *Support Links*\n│👥 Group: \n│📡 Channel: \n│📞 Dev: wa.me/255747397676 (FAITH-MD)\n╰───────────────╮\n\n📌 Feel free to ask for help, request features or report bugs.\n\n⏰ *Time:* ${jtime}\n📅 *Date:* ${jdate}\n\n*Powered by MR REY-AI*`;

  await Void.sendMessage(m.chat, {
    text: supportText,
    contextInfo
  }, { quoted: fakeContact });
});
