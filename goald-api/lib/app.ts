import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Routes } from './routes/crmRoutes';

import mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  public mongoUrl: string = 'mongodb://localhost:27017/CRMdb';

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.connect(
      this.mongoUrl,
      { useNewUrlParser: true },
    );
  }
}

export default new App().app;
