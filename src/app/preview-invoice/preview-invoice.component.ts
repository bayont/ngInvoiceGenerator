import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDetailsHttpService } from '../services/company-details-http.service';
import { CompanyDetails, Invoice } from '../shared';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss']
})
export class PreviewInvoiceComponent {
  constructor(private companyDetailsHttpService: CompanyDetailsHttpService) {}
  companyDetails$: Observable<CompanyDetails> =
    this.companyDetailsHttpService.fetchCompanyDetails();
  invoices: Invoice[] = window.history.state.invoices;
}
