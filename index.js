const get = require('simple-get')

function youtube() {
  get.concat('http://kith.com', function (err, res, data) {
    if (err) throw err
    console.log(res.statusCode) // 200
    console.log(data) // Buffer('this is the server response')
  })
}
