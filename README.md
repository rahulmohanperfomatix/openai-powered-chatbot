# openai-powered-chatbot

This project is a simple chatbot developed using Angular and the OpenAI API. It utilizes the advanced GPT-3 model for generating conversation responses. 

## Project Setup

1. Clone the repository
```bash
git clone <repo-link>
```
2. Navigate to the project directory
```bash
cd <project-directory>
```
4. Install the dependencies
```bash
npm install
```
5. Run the application
```bash
ng serve
```
## Project Structure

- `src/app/app.module.ts` - The main module of the application.
- `src/app/chatbot.service.ts` - Service for communicating with the OpenAI API.
- `src/app/chat-interface/chat-interface.component.ts` - Component handling the chat interface.
- `src/app/chat-interface/chat-interface.component.html` - HTML for the chat interface.
- `src/app/chat-interface/chat-interface.component.scss` - Styles for the chat interface.
- `src/app/chatbot-response.ts` - Chatbot response interface.

## Usage

The chatbot interface consists of a single input field for user input and a display area for the chatbot's responses. To send a message, simply type into the input field and press the 'Send' button. The chatbot's response will be displayed above.

## Deployment

This application can be built for production using the command `ng build --prod`. This will create a `dist/` directory with the production-ready files.
