import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isNavbarOpen: boolean = false;
  activeLink: string = 'Dashboard';

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }

}
