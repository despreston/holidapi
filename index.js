const axios = require('axios')
const cheerio = require('cheerio')
const qs = require('querystring')

async function getPostTitles(month, day) {
  const url = `https://en.wikipedia.org/wiki/${month}_${day}`
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  const holidays = []

  $('#Holidays_and_observances')
    .parent()
    .next()
    .children()
    .map((i, el) => holidays.push($(el).text()))

  // remove christian feast day because every fucking day is christian feast day
  return holidays.filter(h => !h.toUpperCase().includes('CHRISTIAN FEAST DAY'))
};

module.exports.handler = async (event, ctx, cb) => {
  try {
    const params = qs.parse(event.rawQueryString)
    console.log(`Fetching holidays for ${params.m} ${params.d}`)
    return await getPostTitles(params.m, params.d)
  } catch (err) {
    console.log(err)
    throw err
  }
}
