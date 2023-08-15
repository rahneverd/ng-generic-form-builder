import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  jsonFormData = new BehaviorSubject({
    controls: [
      {
        name: 'firstName',
        label: 'First name:',
        value: '',
        type: 'text',
        validators: {
          required: true,
          minLength: 10,
        },
      },
      {
        name: 'lastName',
        label: 'Last name:',
        value: '',
        type: 'text',
        validators: {},
      },
      {
        name: 'comments',
        label: 'Comments',
        value: '',
        type: 'textarea',
        validators: {},
      },
      {
        name: 'agreeTerms',
        label: 'This is a checkbox?',
        value: 'false',
        type: 'checkbox',
        validators: {},
      },
      {
        name: 'size',
        label: '',
        value: '',
        type: 'range',
        options: {
          min: '0',
          max: '100',
          step: '1',
          icon: 'sunny',
        },
        validators: {},
      },
    ],
  });
  jsonFormData$ = this.jsonFormData.asObservable();

  constructor() {}

  setJsonFormData(jsonFormData: any) {
    this.jsonFormData.next(jsonFormData);
  }
}
