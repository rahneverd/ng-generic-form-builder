import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  jsonFormData = new BehaviorSubject([
    {
      name: 'First Form',
      controls: [
        {
          name: 'firstName',
          label: 'First name:',
          value: '',
          type: 'text',
          validators: {
            required: true,
            min: 10,
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
    },
    {
      name: 'Second Form',
      controls: [
        {
          name: 'firstName',
          label: 'First name:',
          value: '',
          type: 'text',
          validators: {
            required: true,
            min: 10,
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
    },
  ]);
  jsonFormData$ = this.jsonFormData.asObservable();
  setJsonFormData(jsonFormData: any) {
    let previousJsonFormData = this.jsonFormData.value;
    previousJsonFormData.push(jsonFormData);
    this.jsonFormData.next(previousJsonFormData);
  }

  jsonFormControls = new BehaviorSubject<any>([
    {
      name: 'PhoneNumber',
      label: 'Phone Number',
      value: '',
      type: 'number',
      validators: {
        rejex: '',
        min: '9',
        max: '9',
      },
    },
  ]);
  jsonFormControls$ = this.jsonFormControls.asObservable();

  jsonCurrentFormData = new BehaviorSubject<any>([]);
  jsonCurrentFormData$ = this.jsonCurrentFormData.asObservable();
  setJsonCurrentFormData(controlToBeAdded: any) {
    let previousJsonCurrentFormData = this.jsonCurrentFormData.value;
    previousJsonCurrentFormData.push(controlToBeAdded);
    this.jsonCurrentFormData.next(previousJsonCurrentFormData);
  }
}
