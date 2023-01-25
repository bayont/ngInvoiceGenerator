import { SumInvoicesPipe } from './sum-invoices.pipe';

describe('SumInvoicesPipe', () => {
  it('create an instance', () => {
    const pipe = new SumInvoicesPipe();
    expect(pipe).toBeTruthy();
  });
});
