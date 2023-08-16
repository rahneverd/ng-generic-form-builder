import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-controls-tray',
  templateUrl: './controls-tray.component.html',
  styleUrls: ['./controls-tray.component.scss'],
})
export class ControlsTrayComponent {
  controls: any;

  constructor(private dataService: DataService) {
    this.dataService.jsonFormControls$.subscribe((data) => {
      this.controls = data;
    });
  }

  addControl(control: any) {
    this.dataService.setJsonCurrentFormData({
      name: control.name,
      label: control.label,
      value: control.value,
      type: control.type,
      validators: {
        rejex: control.validators.rejex,
        min: control.validators.min,
        max: control.validators.max,
        required: false,
      },
    });
  }
}
