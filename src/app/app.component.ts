import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') myForm: NgForm; // Another method to access form
defQuestion: string = 'teacher';
answer: string = '';
genders = ['male', 'female'];
user = { username: '', email: '', question: '', answer: '', gender: '' };
formSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName, email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.myForm.form.patchValue({ userData: {
      username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //    console.log(form);
  //    console.log(this.myForm);
  // }

  onSubmit() {
    this.formSubmitted = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.question = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;

    this.myForm.reset();
  }
}
