import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrl: './add-mobile.component.css'
})
export class AddMobileComponent implements OnInit{
  mobileForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.mobileForm = this.fb.group({
      brand: ['', [Validators.required, Validators.minLength(2)]],
      model: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      color: ['', [Validators.required]],
      storage: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  get brand() {
    return this.mobileForm.get('brand');
  }

  get model() {
    return this.mobileForm.get('model');
  }

  get price() {
    return this.mobileForm.get('price');
  }

  get color() {
    return this.mobileForm.get('color');
  }

  get storage() {
    return this.mobileForm.get('storage');
  }

  get description() {
    return this.mobileForm.get('description');
  }

  onSubmit(): void {
    if (this.mobileForm.valid) {
      this.appService.addMobile(this.mobileForm.value).subscribe(
        response => {
          this.successMessage = 'Mobile added successfully!';
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = 'Failed to add mobile!';
          this.successMessage = '';
        }
      );
    }
  }
 
  }
