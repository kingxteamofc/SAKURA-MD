let handler = m => m
handler.all = async function (m) {

    if (/^.alive$/i.test(m.text) ) {
      let av = './src/mp3/Saku.mp3'
      this.sendPresenceUpdate('recording', m.chat);
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
      }

  if (/^.menu$/i.test(m.text) ) {
    let av = './src/mp3/menu.mp3'
    this.sendPresenceUpdate('recording', m.chat);
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^Hi|Hey|👋$/i.test(m.text) ) {
    let av = './src/mp3/Hi.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^Gm|Good Morning|Morning|🥱🌄|🌅$/i.test(m.text) ) {
    let av = './src/mp3/gm.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^gn|good noght|Night|😴$/i.test(m.text) ) {
    let av = './src/mp3/gn.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^mano|mood🍃$/i.test(m.text) ) {
    let av = './src/mp3/bgm.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
    
  if (/^dev|developer|sakura|theekshana$/i.test(m.text) ) {
    let av = './src/mp3/dev.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
