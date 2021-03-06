import * as express from 'express';
import * as bodyParser from 'body-parser';
import {MethodOverride} from '../method-override';
import {BaseRoutes} from '../../../config/routes/base/base.routes';
import {NextFunction} from 'express';

type BodyParseMethod = express.RequestHandler;

export class Middlewares {

  static defaultConfiguration(): express.Express {
    const app = express();
    const methods = Middlewares.getBodyParseMethods();
    methods.forEach((method: BodyParseMethod) => app.use(method));
    app.use(MethodOverride.override());
    app.use('/', Middlewares.getLoggerMiddleware());
    app.use('/', BaseRoutes.routes());
    return app;
  }

  private static getBodyParseMethods(): BodyParseMethod[] {
    return [
      bodyParser.urlencoded({
        extended: true
      }),
      bodyParser.json()
    ];
  }

  private static getLoggerMiddleware(): express.RequestHandler {
    return (req: express.Request, res: express.Response, next: NextFunction) => {
      console.log(`Request ${req.url} - method: ${req.method}`);
      if (req.body && Object.keys(req.body).length > 0) {
        console.log(`Body: ${JSON.stringify(req.body)}`);
      }
      next();
    };
  }
}
