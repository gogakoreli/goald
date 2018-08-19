import { Request, Response } from 'express';
import * as express from 'express';
import { ContactController } from '../controllers/crmController';

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app: express.Application): void {
    app.route('/contact').post(this.contactController.addNewContact);
    app.route('/contact').get(this.contactController.getContacts);
    app
      .route('/contact/:contactId')
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);

    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successfulll!!!!',
      });
    });

    app
      .route('/contact')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successfulll!!!!',
        });
      })
      .post((req: Request, res: Response) => {
        res.status(200).send({
          message: 'POST request successfulll!!!!',
        });
      });

    app
      .route('/contact/:contactId')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          name: 'Goga',
          lastName: 'Koreli',
        });
      })
      .put((req: Request, res: Response) => {
        res.status(200).send({
          message: 'PUT request successfulll!!!!',
        });
      })
      .delete((req: Request, res: Response) => {
        res.status(200).send({
          message: 'DELETE request successfulll!!!!',
        });
      });
  }
}
