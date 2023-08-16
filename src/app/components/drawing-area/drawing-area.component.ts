import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-drawing-area',
  templateUrl: './drawing-area.component.html',
  styleUrls: ['./drawing-area.component.scss'],
})
export class DrawingAreaComponent {
  jsonCurrentForm: any;
  showForm: boolean = false;
  constructor(private dataService: DataService) {
    this.dataService.jsonCurrentFormData$.subscribe((data) => {
      this.jsonCurrentForm = data;
      if (this.jsonCurrentForm.length > 0) {
        this.showForm = true;
      }
    });
  }

  ngOnInit() {}
}
