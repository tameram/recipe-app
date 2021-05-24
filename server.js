const express = require('express')
const path = require('path')
const urllib = require('urllib')
const app = express()
const port = 8080
app.set('port', process.env.PORT || port);

app.use(express.static(path.join(__dirname , 'dist')))
app.use(express.static(path.join(__dirname , 'node_modules')))


app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


app.get('/sanity/:ingredient', function (request, response) {

    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${request.params.ingredient}`, function (err, data, res) {
        if (err) {
            throw err
        }
      
        const _data = JSON.parse(data)
        response.send(_data.results)

    })

})