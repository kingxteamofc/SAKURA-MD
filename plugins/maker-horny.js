let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/horny', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/12b00b3cc00c5ee3cf78e.jpg'),
    }), 'hornycard.png', '*so horny 🥵🔥*', m)
    }
    handler.help = ['hornycard', 'hornylicense']
    handler.tags = ['maker'] 
    handler.command = /^(hornycard|license)$/i 
    export default handler
