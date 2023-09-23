import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`

╭───❮ *🎯GIT* ❯ 
│${_package.homepage}
│ *Youtube :* https://youtube.com/@CyberWarriorOffcial
│
│ *WhatsApp :* https://chat.whatsapp.com/H2vrVlXv9eQJVPaGVaGc7m
│
│ *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ᴛʜᴇᴇᴋꜱʜᴀɴᴀ & ᴠɪᴍᴜᴋᴛʜɪ*
│ *©ᴏᴡɴᴇʀ ʏᴀꜱɪʏᴀ x ᴏꜰᴄ*
│ *©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ ᴡᴀʀʀɪᴏʀ ᴛᴇᴀᴍ™*
╰────────────⦁`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
