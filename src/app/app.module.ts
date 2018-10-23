import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { itemReducer } from './store/reducers/item.reducer';
import { ItemEffects } from './store/effects/item.effects';
import { modalReducer } from './store/reducers/modal.reducer';

import { AppComponent } from './app.component';
import { TabContainerComponent } from './containers/tab-container/tab-container.component';

import { DataService } from './services/data.service';
import { ItemDetailsModalComponent } from './components/item-details-modal/item-details-modal.component';
import { StaffTabComponent } from './components/staff-tab/staff-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    ItemDetailsModalComponent,
    StaffTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    StoreModule.forRoot({
      items: itemReducer,
      modal: modalReducer
    }),
    EffectsModule.forRoot([
      ItemEffects
    ]),
    StoreDevtoolsModule.instrument( {
      maxAge: 10
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
