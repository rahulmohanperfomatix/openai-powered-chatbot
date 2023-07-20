export interface ChatbotResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{ text: string }>;
}
