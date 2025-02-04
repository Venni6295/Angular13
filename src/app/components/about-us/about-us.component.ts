import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  slogan: string = "our slogan";
  formInValid: boolean = true;
  getSlogan(){
    return this.slogan;
  }
  checkFormValid(){
    return this.formInValid;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
