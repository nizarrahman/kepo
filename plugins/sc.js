let handler = async (m, { conn, usedPrefix: _p }) => {


let buttonMessage= {
'document':{'url': 'http://s.id/re-md' },
'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName': `γ  π―ππππ πΎππππ γ`,
'fileLength': 22222222222222,
'pageCount': 222,
'contextInfo':{
'forwardingScore':222,
'isForwarded':true,
'externalAdReply':{
'mediaUrl': 'http://instagram.com/nizarrrahman.f_',
'mediaType': 2,
'previewType': 2,
'title': 'Searching Source Code?',
'body': me,
'thumbnail': thumb2,
'sourceUrl': 'https://instagram.com/nai-developer'}},
'caption': 'http://github.com/Rlxfly/nizarrahman',
'footer': me,
'buttons':[
{'buttonId': _p + 'menu','buttonText':{'displayText':'α΄α΄Ι΄α΄'},'type':1},
{'buttonId': _p + 'runtime','buttonText':{'displayText':'Κα΄Ι΄α΄Ιͺα΄α΄'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted: m })

}

handler.command = /^(sc)$/i

export default handler
