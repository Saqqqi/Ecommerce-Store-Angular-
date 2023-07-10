import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/payment.service';

@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styleUrls: ['./payment2.component.css']
})
export class Payment2Component {
  router: any;
  handlePayment() {
    if (this.paymentForm.valid) {
      this.router.navigate(['/complete']);
    } else {
      // Show error message or perform other actions
      console.log('Payment form is invalid. Please fill in the required fields.');
    }
  }
  
  paymentForm!: FormGroup;
  totalPrice: number = 0;
  


  constructor(private fb: FormBuilder, private paymentService: PaymentService)  {
    this.paymentForm = this.fb.group({
      personName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(12), Validators.maxLength(12)]],
      expiry: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.totalPrice = this.paymentService.totalPrice;
    console.log("totalllllllllll" ,this.totalPrice)
  }
  
}
