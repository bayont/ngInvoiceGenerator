import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';
import { CompanyDetailsHttpService } from './services/company-details-http.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayPhonesPipe } from './display-phones.pipe';
import { SumInvoicesPipe } from './sum-invoices.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewInvoiceComponent,
    PreviewInvoiceComponent,
    DisplayPhonesPipe,
    SumInvoicesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
