import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, Observable, of } from 'rxjs';
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
    return this.http.get<{ results: Project[] }>(this.apiUrl).pipe(
      map((response) => {
        if (response.results.length === 0) {
          return projectsData;
        }
        return response.results;
      }),
      catchError(() => of(projectsData)),
    );
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  // For admin functionality
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
