
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share SAKURA-MD Bot Link And Support. Git Link https://github.com/kingxteamofc/SAKURA_MD`
let img = 'https://telegra.ph/file/12b00b3cc00c5ee3cf78e.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
