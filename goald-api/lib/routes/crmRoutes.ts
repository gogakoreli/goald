import * as express from 'express';
import { ContactController } from '../controllers/crmController';

export class CrmRoutes {
  public contactController: ContactController = new ContactController();

  public routes(app: express.Application): void {
    app.route('/contact').post(this.contactController.addNewContact);
    app.route('/contact').get(this.contactController.getContacts);
    app
      .route('/contact/:contactId')
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
