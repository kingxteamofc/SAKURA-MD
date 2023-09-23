let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '🐉𝚈𝙰𝚂𝙸𝚈𝙰 𝙾𝙵𝙲🐉', body: '🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸', sourceUrl: `https://github.com/kingxteamofc/SAKURA_MD`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '🐉𝚈𝙰𝚂𝙸𝚈𝙰 𝙾𝙵𝙲🐉', body: '🌸𝚂𝙰𝙺𝚄𝚁𝙰 𝙼𝙳🌸', sourceUrl: `https://github.com/kingxteamofc/SAKURA_MD`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
