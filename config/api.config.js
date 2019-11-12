const isPro = Object.is(process.env.NODE_ENV, 'production')

// console.log(isPro);

module.exports = {
  // baseUrl: isPro ? 'https://www.jinpinyun.com/demoshop/api' : 'api/'
  baseUrl: isPro ? 'http://148.70.137.64:10' : 'api/'
}
