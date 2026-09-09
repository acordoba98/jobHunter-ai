import { Component, input, output } from '@angular/core';
import { Job } from '../../../core/models/job.model';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-job-card',
  imports: [MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  job = input.required<Job>();
  jobSelected = output<Job>();
}
