import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
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
  saved = signal(false);

  constructor() {
    const profile = localStorage.getItem('jh-profile');
    if (profile != null) {
      this.form.patchValue(JSON.parse(profile));
    }
  }

  save() {
    if (this.form.valid) {
      localStorage.setItem('jh-profile', JSON.stringify(this.form.value));
      this.saved.set(true);
      setTimeout(() => {
        this.saved.set(false);
      }, 2500);
    }
  }
}
