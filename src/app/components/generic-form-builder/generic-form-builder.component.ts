import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-form-builder',
  templateUrl: './generic-form-builder.component.html',
  styleUrls: ['./generic-form-builder.component.scss'],
})
export class GenericFormBuilderComponent {
  createNewForm: boolean = false;

  constructor() {}

  ngOnInit() {}

  onCreateNewForm() {
    this.createNewForm = true;
  }
}
