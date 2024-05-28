import express from 'express';
import { tempRouter } from './src/routes/temp.route.js';
import { response } from './src/config/response.js';
const app = express();
const port = 3000;

app.use('/temp', tempRouter);

app.use((err, req, res, next) => {
    res.locals.message = err.message;   
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
		console.log(`Example app listening on port ${port}`);
});