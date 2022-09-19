import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('response from sir inzamam computer: ' +  req.ip);
    res.send('response from sir inzamam computer: ' +  req.ip)
})

// 172.16.21.247:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})