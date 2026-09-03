import { computed, Injectable, signal } from '@angular/core';
import { Job, Platform } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private _jobs = signal<Job[]>([]);
  private _selectedPlatforms = signal<Platform[]>(['linkedin', 'infojobs', 'tecnoempleo']);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);
  private _query = signal<string>('');

  readonly jobs = this._jobs.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly selectedPlatforms = this._selectedPlatforms.asReadonly();
  readonly query = this._query.asReadonly();

  filteredJobs = computed(() => {
    const q = this._query().toLowerCase();
    const p = this._selectedPlatforms();

    return this._jobs()
      .filter((j) => p.includes(j.platform))
      .filter((j) => j.title.toLowerCase().includes(q))
      .sort((a, b) => b.match - a.match);
  });

  totalResults = computed(() => {
    return this.filteredJobs().length;
  });

  hasResults = computed(() => {
    return this.totalResults() > 0;
  });

  setQuery(q: string) {
    this._query.set(q);
  }

  togglePlatform(id: Platform) {
    this._selectedPlatforms.update((platforms) =>
      platforms.includes(id) ? platforms.filter((p) => p !== id) : [...platforms, id],
    );
  }

  search() {
    this._loading.set(true);

    setTimeout(() => {
      this._jobs.set([
        {
          id: '1',
          title: 'Frontend Developer Angular',
          company: 'TechCorp',
          location: 'Madrid',
          salary: '35.000€ - 45.000€',
          platform: 'linkedin',
          tags: ['Angular', 'TypeScript', 'RxJS'],
          posted: 'Hace 2 días',
          match: 92,
          url: 'https://linkedin.com',
        },
      ]);
      this._loading.set(false);
    }, 1500);
  }
}
