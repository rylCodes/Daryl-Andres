import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MessageData } from '../../interface/contact';
import { throwError } from 'rxjs';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'https://daryl-django-api.azurewebsites.net/messages-api/create-message/'

  constructor(private http: HttpClient) { }

  sendMessage(messageData: MessageData): Observable<MessageData> {
    return this.http.post<MessageData>(this.apiUrl, messageData).pipe(
      catchError((error) => {
        console.log(error)
        return throwError(() => error);
      })
    );
  }
}
