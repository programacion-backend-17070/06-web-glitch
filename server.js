const express = require('express')
const app = express();

const PORT = process.env.PORT || 8080
// route
app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/api/courses", (req, res) => {
    res.send(JSON.stringify([1, 2, 3]))
})

app.listen(PORT, () => console.log(`escuchando en puerto ${PORT}`))