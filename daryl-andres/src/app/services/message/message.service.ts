import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MessageData } from '../../interface/contact';
import { throwError } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private apiUrl = environment.apiUrl + '/messages-api/create-message/';

  constructor(private http: HttpClient) {}

  sendMessage(messageData: MessageData): Observable<MessageData> {
    return this.http.post<MessageData>(this.apiUrl, messageData).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => error);
      })
    );
  }
}
