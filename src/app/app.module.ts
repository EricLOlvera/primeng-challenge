import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { itemReducer } from './store/reducers/item.reducer';
import { ItemEffects } from './store/effects/item.effects';

import { AppComponent } from './app.component';
import { TabContainerComponent } from './containers/tab-container/tab-container.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
    StoreModule.forRoot({
      items: itemReducer
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
