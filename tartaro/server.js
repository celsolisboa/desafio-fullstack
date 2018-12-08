import express from 'express';
import mongoose from 'mongoose';
import bodyParse from 'body-parser';
import cors from 'cors';

import routes from './src/routes/routes';

const app = express();
const PORT = process.env.PORT || 3000;
mongoose.Promise = global.Promise;

const dbUrl = 'mongodb://hades:7SwcvZ6716u6@ds127944.mlab.com:27944/hades_mongo_db';

mongoose.connect(dbUrl, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Mongoose default connection open to ${dbUrl}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose default connection error: ${err.message}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.use(cors({ origin: 'http://localhost:4200' }));

routes(app);

app.get('/', (req, res) => {
    res.send(`Node and express server running ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
