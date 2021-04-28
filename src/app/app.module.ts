import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SmallTableComponent } from './components/small-table/small-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MediumTableComponent } from './components/medium-table/medium-table.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DatePickerComponent,
    TableComponent,
    PaginationComponent,
    SmallTableComponent,
    MediumTableComponent,
    // JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
