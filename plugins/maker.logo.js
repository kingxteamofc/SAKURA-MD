let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	 let name = conn.getName(m.sender)
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
    let user = global.db.data.users[m.sender]
   let tee = `✳️ Enter a short text\n\n📌 Example  : *${usedPrefix + command}* SAKURA-MD`
   let too = `✳️ Separate the text with a *+* \n\n📌 Example : \n*${usedPrefix + command}* SAKURA-MD`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
    case 'marvel': 
	if (!text) throw tee
	let di = global.API('fgmods', '/api/textpro/marvel', { text }, 'apikey')
	conn.sendFile(m.chat, di, 'logo.png', `*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break 
     case 'ninja': 
	if (!text) throw tee
	let mh = global.API('fgmods', '/api/textpro/ninja', { text }, 'apikey')
	conn.sendFile(m.chat, mh, 'logo.png', `*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break 
     case 'tiktok': 
	if (!text) throw tee
	let ch = global.API('fgmods', '/api/textpro/tiktok', { text }, 'apikey')
	conn.sendFile(m.chat, ch, 'logo.png', `*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break  
     case 'lightglow': 
	if (!text) throw tee
	let ut = global.API('fgmods', '/api/textpro/lightglow', { text }, 'apikey')
	conn.sendFile(m.chat, ut, 'logo.png', `*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break 
     case 'layer': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let lr = global.API('fgmods', '/api/textpro/layered', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, lr, 'logo.png', `*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break  
     case 'aglow': 
	if (!text) throw tee
	let da = global.API('fgmods', '/api/textpro/advancedglow', { text }, 'apikey')
	conn.sendFile(m.chat, da, 'logo.png', `*©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break 
     case 'diamond': 
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/diamond', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `©ᴘᴏᴡᴇʀᴅ ʙʏ ᴄʏʙᴇʀ x ᴡᴀʀʀɪᴏʀꜱ™* \n 🐉🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸🐉`, m)
	m.react(done)
	break 
  default:
} 
} 
handler.help = ['gfx5', 'marvel', 'ninja', 'tiktok', 'lightglow', 'layer', 'aglow', 'diamond']
handler.tags = ['maker']
handler.command = /^(gfx5|marvel|ninja|tiktok|lightglow|layer|aglow|diamond)$/i
handler.diamond = true

export default handler
