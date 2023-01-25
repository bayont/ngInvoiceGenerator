import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  public invoiceForm = this.fb.group(
    {
      invoices: this.fb.array([this.buildInvoiceRow()])
    },
    { updateOn: 'submit' }
  );

  get invoicesArr(): FormArray<FormGroup> {
    return this.invoiceForm.controls.invoices;
  }

  public addNewInvoice(): void {
    this.invoicesArr.push(this.buildInvoiceRow());
  }

  public removeInvoice(index: number): void {
    this.invoicesArr.removeAt(index);
  }

  public submitForm(event: Event): void {
    console.log(this.invoicesArr.controls[0].controls['name'].errors);
    if (this.invoiceForm.valid) {
      this.router.navigate(['preview'], { state: { invoices: this.invoicesArr.getRawValue() } });
    }
  }

  private buildInvoiceRow(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      count: [1, [Validators.min(1), Validators.max(100)]],
      price: [1, [Validators.min(1), Validators.max(1000000)]]
    });
  }
}
