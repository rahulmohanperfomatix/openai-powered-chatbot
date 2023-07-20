import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatbotResponse } from './chatbot-response';


@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
    })
  };

  constructor(private http: HttpClient) { }

  getChatbotResponse(userInput: string): Observable<ChatbotResponse> {
    const data = {
      prompt: userInput,
      max_tokens: 60
    };

    return this.http.post<ChatbotResponse>(this.apiUrl, data, this.httpOptions);
  }
}
