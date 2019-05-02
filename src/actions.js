/**
 * Description of the action goes here
 * @param  {String} params.question
 */
async function consultarQA(state, event, params) {
  const axios = require('axios')
  const getQA = async () => {
    const client = axios.create({
      baseURL: 'https://opinionated-quotes-api.gigalixirapp.com/v1'
    })
    const quote = await client.get('/quotes').then(res => res.data.quotes[0].quote)
  }
  return getQA()
}

module.exports = { consultarQA }
