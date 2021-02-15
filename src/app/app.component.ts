import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //array of subscription options
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  //initial value of option form
  selectedSubscription = "Advanced";

  //setup change detection on the form with view child and #signupForm element reference in the template
  @ViewChild('signupForm', { static: false }) sgnForm: NgForm; //Creates a top-level FormGroup instance and binds it to a form to track aggregate form value and validation status.

  onSubmit() {
    console.log(this.sgnForm.value);
  }


}
