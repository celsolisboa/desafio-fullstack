import express from "express"

const app = express();

app.use(express.json());


app.listen(3333, () => {
    console.log('HTTP server runing on port 3333 ')
})