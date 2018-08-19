import * as express from 'express';
import { ContactController } from '../controllers/crmController';

export class UserRoutes {
  public contactController: ContactController = new ContactController();

  public routes(app: express.Application): void {
    app.route('user').post(this.contactController.addNewContact);
    app.route('user').get(this.contactController.getContacts);
    app
      .route('user/:contactId')
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
