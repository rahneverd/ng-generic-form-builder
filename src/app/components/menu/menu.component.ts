import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  sidebarVisible: boolean = true;
  itemsstatic: MenuItem[] = [
    {
      label: 'Form Builder',
      icon: '',
      escape: false,
      command: () => {
        // this.activeMenu(event);
        this.sidebarVisible = false;
        this.router.navigate(['']);
      },
    },
    {
      label: 'Form',
      icon: '',
      escape: false,
      command: () => {
        // this.activeMenu(event);
        this.sidebarVisible = false;
        this.router.navigate(['genericForm']);
      },
    },
  ];

  constructor(private router: Router) {}
  onOpenningMenu(value?: any) {
    if (value === false) {
      this.sidebarVisible = false;
    } else {
      this.sidebarVisible = true;
    }
  }
}
