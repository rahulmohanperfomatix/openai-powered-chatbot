import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { ChatbotResponse } from '../chatbot-response';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.scss']
})
export class ChatInterfaceComponent implements OnInit {

  prompt = '';
  messages: { sender: string, text: string }[] = [];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void { }

  sendMessage() {
    this.messages.push({ sender: 'User', text: this.prompt });
    this.getBotResponse();
    this.prompt = '';
  }

  getBotResponse() {
    this.chatbotService.getChatbotResponse(this.prompt).subscribe(
      (response: ChatbotResponse) => {
        this.messages.push({ sender: 'Chatbot', text: response.choices[0].text.trim() });
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
