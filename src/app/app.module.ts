import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';

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
    TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
