const config = require('../config')
const { cmd } = require('../command')
const os = require("os")
const { runtime, sleep } = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "repo",
    alias: ["sc", "script", "repository"],
    desc: "Show the bot's GitHub repository",
    react: "🥘",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/ZEZETECH47/FAITH-MD';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        const response = await axios.get(`https://api.github.com/repos/ZEZETECH47/FAITH-MD`);
        const repoData = response.data;

        const formattedInfo = `
╭─〔 *FAITH-MD REPOSITORY* 〕
│
├─ *📌 Repo Name:* ${repoData.name}
├─ *👤 Owner:* ${repoData.owner.login}
├─ *⭐ Stars:* ${repoData.stargazers_count}
├─ *⑂ Forks:* ${repoData.forks_count}
├─ *📄 Description:* ${repoData.description || 'Powerful WhatsApp Multi-Device Bot by ZEZETECH'}
│
├─ *🔗 GitHub Link:*
│   ${repoData.html_url}https://chat.whatsapp.com/IIeq9B11nQoIa3gduDKljz?mode=ems_copy_t
│
├─ *🌍 Channel:*
│   https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r
│.  https://whatsapp.com/channel/0029VbANIT5D8SDpK7oExi1v
╰─ *🚀 Powered by Mr REY-AI*
`.trim();

        await conn.sendMessage(from, {
            image: { url: `"https://i.imgur.com/VwloR6v.jpeg"` }, // you can change image
            caption: formattedInfo,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363295141350550@newsletter',
                    newsletterName: 'FAITH-MD UPDATE',
                    serverMessageId: 110
                }
            }
        }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "FAITH-MD VERIFIED",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN: FAITH-MD;BOT;;;\nFN: FAITH-MD\nitem1.TEL;waid=255747397675:+255 74739 7675\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

    } catch (error) {
        console.error("❌ Error fetching repo:", error);
        reply("❌ Failed to fetch repository info. Please try again later.");
    }
});
