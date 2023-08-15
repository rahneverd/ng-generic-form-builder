import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent implements OnInit {
  jsonFormData: any;
  myForm: FormGroup = this.fb.group({});

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.dataService.jsonFormData$.subscribe((data) => {
      this.jsonFormData = data;
    });
  }

  ngOnInit(): void {
    console.log(this.jsonFormData);
    this.createForm(this.jsonFormData.controls);
  }

  createForm(controls: any) {
    for (const control of controls) {
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, Validators.required)
      );
    }
  }

  onButtonClicked() {}
}
