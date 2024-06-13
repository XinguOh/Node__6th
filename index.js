import express from 'express';
import { specs } from './src/config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';

import userRouter from './src/routes/user.route.js';
import reviewRouter from './src/routes/review.route.js';
import missionRouter from './src/routes/mission.route.js';
import storeRouter from './src/routes/store.route.js';

import { response } from './src/config/response.js';
import { status } from './src/config/response.status.js';

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

app.use('/user', userRouter);
app.use('/review', reviewRouter);
app.use('/mission', missionRouter);
app.use('/store', storeRouter);

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    console.log("error", err);
    res.status(err.data?.status || status.INTERNAL_SERVER_ERROR.status).send(response(err.data || status.INTERNAL_SERVER_ERROR));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});
