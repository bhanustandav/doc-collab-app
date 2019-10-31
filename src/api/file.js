import axios from 'axios'

export const createFile = () => {

    var bodyFormData = new FormData();
    bodyFormData.set('editor_settings', JSON.stringify({'unit':'in','language':'en','view':'pageview'}));
    bodyFormData.set('permissions', JSON.stringify({'document.export':true,'document.print':true,'document.edit':true,'review.changes.resolve':false,'review.comment':true,'collab.chat':true }))
    bodyFormData.set('callback_settings', JSON.stringify({'save_format':'docx','save_url':'https://example.com/zoho_save_callback','context_info':'Value can be used during save callback' }))
    bodyFormData.set('document_info', JSON.stringify({'document_name':'Legal  Document','document_id':1349}))
    bodyFormData.set('user_info', JSON.stringify({'user_id':'3001083','display_name':'bhanu prathap'}))

    return axios({
        method: 'post',
        url: 'https://writer.zoho.com/writer/v1/officeapi/document?apikey=19232f09d016ec7d0cba5e057d7dd652',
        data: bodyFormData,
        config: { headers: {'Access-Control-Allow-Origin': 'http://localhost:3000','Content-Type': 'multipart/form-data' }}
    })
}