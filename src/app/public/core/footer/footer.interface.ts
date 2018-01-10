export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  content: string;
  sendCopy: boolean;
}

export interface ContactDataResponse {
  status: boolean;
  message; string;
}
