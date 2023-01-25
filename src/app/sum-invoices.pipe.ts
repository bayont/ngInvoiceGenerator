import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from './shared';

@Pipe({
  name: 'sumInvoices'
})
export class SumInvoicesPipe implements PipeTransform {
  transform(invoices: Invoice[]): number {
    return invoices
      .map((invoice) => invoice.count * invoice.price)
      .reduce((previous, current) => previous + current);
  }
}
