/**
 * Description of the action goes here
 * @param  {String} params.question
 */
async function consultarQA(state, event, params) {
  const axios = require('axios')
  const getQA = async () => {
    const client = axios.create({
      baseURL: 'http://10.0.0.103:8081/botApplication'
    })
    const ask = await client.get('/api/qa/' + params.question).then(res => res.data)
    return {
      ...state,
      resposta: ask
    }
  }
  return getQA()
}

module.exports = { consultarQA }
