const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('MecEdu API Running')
});
app.listen(port, () => {
    console.log('MecEdu Server running on port: ', port)
})