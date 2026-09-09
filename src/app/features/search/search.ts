import { Component, inject, OnInit } from '@angular/core';
import { JobsService } from '../../core/services/jobs.service';
import { Platform } from '../../core/models/job.model';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-search',
  imports: [
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  ngOnInit(): void {
    this.search();
  }
  private jobsService = inject(JobsService);
  loading = this.jobsService.loading;
  filteredJobs = this.jobsService.filteredJobs;
  hasResults = this.jobsService.hasResults;
  totalResults = this.jobsService.totalResults;
  selectedPlatforms = this.jobsService.selectedPlatforms;
  query = this.jobsService.query;
  searchQuery = '';
  platforms = [
    { id: 'linkedin' as Platform, name: 'LinkedIn' },
    { id: 'infojobs' as Platform, name: 'InfoJobs' },
    { id: 'indeed' as Platform, name: 'Indeed' },
    { id: 'tecnoempleo' as Platform, name: 'Tecnoempleo' },
    { id: 'glassdoor' as Platform, name: 'Glassdoor' },
  ];

  search() {
    this.jobsService.search();
  }

  setQuery(q: string) {
    this.jobsService.setQuery(q);
  }

  togglePlatform(id: Platform) {
    this.jobsService.togglePlatform(id);
  }

  onSearch() {
    this.setQuery(this.searchQuery);
    this.search();
  }
}
