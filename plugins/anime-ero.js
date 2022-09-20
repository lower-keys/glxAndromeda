let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.send3TemplateButtonImg(m.chat, global.API('xteam', '/randomimage/ero', {}, 'd37372311698ed1d'), 'wangy wangy', wm, 'Again', `${usedPrefix + command}`, 'Menu', `${usedPrefix}menu`, 'Owner', `${usedPrefix}owner`, m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
