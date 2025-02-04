import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.myForm = this.fb.group({
    //   firstName: ['', [Validators.required, Validators.minLength(2)]],
    //   lastName: ['', [Validators.required, Validators.minLength(2)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', [Validators.required]],
    //   phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    //   address: ['', Validators.required],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
    //   lessons: this.fb.array([])
    // });

    this.myForm = this.fb.group({
      chef_name: new FormControl("", [Validators.required]),
      location: new FormControl("", [Validators.required]),
      reciepe: this.fb.array([
        this.fb.group({
          reciepe_name: ['', Validators.required],
          ingredient: ['', Validators.required],
          cooking_time: ['', Validators.required],
        }),
      ]),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted:', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get lessons() {
    console.log(this.myForm.controls);
    return this.myForm as FormGroup;
  }

  ngOnInit(): void {
    console.log(this.myForm.controls);
  }

}
