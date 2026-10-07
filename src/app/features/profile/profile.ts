import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    title: ['', Validators.required],
    experience: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    location: [''],
    skills: [''],
    education: [''],
    languages: [''],
  });
}
