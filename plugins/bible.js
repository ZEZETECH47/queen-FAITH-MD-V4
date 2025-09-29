const axios = require("axios");
const { cmd } = require("../command");

// Command: bible
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "fun",
    react: "📖",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        if (args.length === 0) {
            return reply(`⚠️ *Please provide a Bible reference.*\n\n📝 *Example:*\n.bible John 1:1`);
        }

        const reference = args.join(" ");
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            // Fake verified contact (quoted)
            let fakeContact = {
                key: {
                    fromMe: false,
                    participant: '0@s.whatsapp.net',
                    remoteJid: 'status@broadcast'
                },
                message: {
                    contactMessage: {
                        displayName: 'PKDRILLER ✅',
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:MR REY ✅\nORG:MR REY;\nTEL;type=CELL;type=VOICE;waid=255747397675:+255 747 397675\nEND:VCARD`,
                        jpegThumbnail: null
                    }
                }
            }

            await conn.sendMessage(m.chat, {
                text:
                    `📜 *Bible Verse Found!*\n\n` +
                    `📖 *Reference:* ${ref}\n` +
                    `📚 *Text:* ${text}\n\n` +
                    `🗂️ *Translation:* ${translation_name}\n\n` +
                    `© FAITH-MD BIBLE`,
                contextInfo: {
                    externalAdReply: {
                        title: "HOLY BIBLE VERSES",
                        body: "Powered by Mr REY-AI",
                        thumbnailUrl: "https://files.catbox.moe/12phie.jpg",
                        sourceUrl: "https://github.com/ZEZETECH47/FAITH-MD",
                        mediaType: 1,
                        renderLargerThumbnail: false,
                        showAdAttribution: true
                    },
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363295141350550@newsletter",
                        newsletterName: "FAITH Bot Updates",
                        serverMessageId: "",
                    }
                }
            }, { quoted: fakeContact });

        } else {
            reply("❌ *Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error("Bible Error:", error);
        reply("⚠️ *An error occurred while fetching the Bible verse.* Please try again.");
    }
});
