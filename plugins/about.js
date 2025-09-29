const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["faith","whois"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 FAITH-MD 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ *
*┃★│* *ᴄʀᴇᴀᴛᴇʀ :Mr-REY*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : ᴍʀ HUMPHREY*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ZEZETECH*
*┃★│* *ᴀɢᴇ : 18 years*
*┃★│* *ᴄɪᴛʏ : ARUSHA TZ*
*┃★│* *a powerful bot *
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢ALONE-MD*
*┃★│* *▢FAITH(MY LOVELY)*
*┃★│* *▢RUHAMA(MY BEST)*
*┃★│* *▢BRIGHT(MY BEST)*
*┃★│* *▢PETER(MY BEST)*
*┃★│* *▢INNOCENT(MY BEST*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mr REY-AI
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:``},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363295141350550@newsletter',
      newsletterName: 'FAITH-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})
