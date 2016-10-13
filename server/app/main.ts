import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as express from 'express';
import  {Middlewares} from '../libs/middlewares/base/middlewares';
import * as path from 'path';

mongoose.Promise = Promise;

const port = process.env.port || 8080;
let app: express.Express = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let publicStatic = path.resolve(__dirname, '../../public');
let vendorStatic = path.resolve(__dirname, '../../vendor');
let clientStatic = path.resolve(__dirname, '../../client');
let nodeModulesStatic = path.resolve(__dirname, '../../node_modules');
app.use(express.static(publicStatic));
app.use(express.static(vendorStatic));
app.use(express.static(clientStatic));
app.use(express.static(nodeModulesStatic));
app.use(Middlewares.defaultConfiguration());

app.listen(port, () => {
  console.log(`Nose server listen port 8080`);
});
