import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsComponent} from './contacts.component';
import {ContactDetailsComponent} from './components/contact-details/contact-details.component';
import {ContactEditComponent} from './components/contact-edit/contact-edit.component';
import {ContactNewComponent} from './components/contact-new/contact-new.component';
import {ContactsIndexComponent} from './components/contacts-index/contacts-index.component';
import {ContactsRoutingModule} from './contacts-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ContactsEffects} from './ngrx/contacts-effects';
import {ContactsStoreFacade} from './ngrx/contacts.store-facade';
import {reducers} from './ngrx/index';
import {ContactsSocketService} from './services/contacts-socket.service';
import {ContactsService} from './services/contacts.service';
import {ContactListComponent} from './shared/components/contact-list/contact-list.component';
import {ContactFormComponent} from './shared/components/contact-form/contact-form.component';
import {ContactDetailsContainerComponent} from './shared/components/contact-details/contact-details-container.component';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    StoreModule.forFeature('contacts', reducers),
    EffectsModule.forFeature([ContactsEffects])
  ],
  declarations: [
    ContactsComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactNewComponent,
    ContactsIndexComponent,
    ContactListComponent,
    ContactFormComponent,
    ContactDetailsContainerComponent,
    ToolbarComponent
  ],
  providers: [ContactsService, ContactsSocketService, ContactsStoreFacade]
})
export class ContactsModule { }
