import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  siteMenus = [
    { Name: "Home", Path: "/" },
    { Name: "How To Volunteer", Path: "volunteer" },
    { Name: "Seeking Gifts?", Path: "seekingGift" },
    { Name: "About Us", Path: "aboutUs" },
    { Name: "Photos", Path: "photos" },
    { Name: "Press Releases", Path: "pressRelease" },
    { Name: "Real Santa Letters", Path: "santaLetters" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
