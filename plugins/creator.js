function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6281386945391@s.whatsapp.net')}\nitem1.TEL;waid=6281386945391:6281386945391\nitem1.X-ABLabel:Busy.\nURL;My Web: https://nizarrahman.000webhostapp.com/\nEMAIL;Email Owner: https://nizarrahman.000webhostapp.com/\nORG: NOT A BOT + NO SAVE\nTEL;My number bot;waid=79112173741:79112173741\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
