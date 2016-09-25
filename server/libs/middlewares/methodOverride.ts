import * as methodOverride from 'method-override';
import express = require('express');

export class MethodOverride {
  static override(): express.Express {
    const app = express();
    app.use(methodOverride('X-HTTP-Method')); // Microsoft
    app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
    app.use(methodOverride('X-Method-Override')); // IBM
    app.use(methodOverride('_method'));
    return app;
  }
}

Object.seal(MethodOverride);
