import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
  isLoading = true;

  ngOnInit() {
    // Perform initialization tasks here
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulate a 3-second initialization
  }
}

