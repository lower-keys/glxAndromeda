const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	conn.p[id] = [
	await conn.sendKontak(m.chat, data.kontak, fake, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    body: 'Owner Ku Anime',
    title: 'Nih Nomor Owner',
    sourceUrl: data.sc,
    thumbnail: await(await fetch(img)).buffer(),
     }}
  })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `Hai kak @${m.sender.split('@')[0]}, itu nomor ownerku •~•`, mentions: [m.sender] }, { quoted: conn.p[id][0]
  })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
