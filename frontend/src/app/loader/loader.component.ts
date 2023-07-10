import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    // show spinner
    this.spinner.show();

    // simulate API call
    setTimeout(() => {
      // hide spinner
      this.spinner.hide();
    }, 4200);
  }
}
