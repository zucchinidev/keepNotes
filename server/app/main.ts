import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as express from 'express';
import  {Middlewares} from '../libs/middlewares/base/middlewares';
mongoose.Promise = Promise;

const port = process.env.port || 8080;
let app: express.Express = express();
app.use(express.static(__dirname + '/public'));
app.use(Middlewares.defaultConfiguration());

app.listen(port, () => {
  console.log(`Nose server listen port 8080`);
});
