import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, Observable, of, tap } from 'rxjs';
import { environment } from '@env/environment';
import { Project } from '@data/models/project.model';
import { projectsData } from '@data/personal-projects.data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = `${environment.apiUrl}/api/projects`;
  private http = inject(HttpClient);
  isLoading = signal<boolean>(false);

  getProjects(): Observable<Project[]> {
    this.isLoading.set(true);
    return this.http.get<{ results: Project[] }>(this.apiUrl).pipe(
      tap(() => this.isLoading.set(false)),
      map((response) => {
        if (response.results.length === 0) {
          return projectsData;
        }
        return response.results;
      }),
      catchError((err) => {
        console.error(err);
        this.isLoading.set(false);
        return of(projectsData);
      }),
    );
  }

  getProject(id: number): Observable<Project> {
    this.isLoading.set(true);
    return this.http
      .get<Project>(`${this.apiUrl}/${id}`)
      .pipe(tap(() => this.isLoading.set(false)));
  }

  // For admin functionality
  createProject(project: Project): Observable<Project> {
    this.isLoading.set(true);
    return this.http
      .post<Project>(this.apiUrl, project)
      .pipe(tap(() => this.isLoading.set(false)));
  }

  updateProject(id: number, project: Project): Observable<Project> {
    this.isLoading.set(true);
    return this.http
      .put<Project>(`${this.apiUrl}/${id}`, project)
      .pipe(tap(() => this.isLoading.set(false)));
  }

  deleteProject(id: number): Observable<void> {
    this.isLoading.set(true);
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(tap(() => this.isLoading.set(false)));
  }
}
