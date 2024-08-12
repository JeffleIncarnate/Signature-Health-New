declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RESEND_API_KEY: string;
      SEND_EMAIL_TO: string;
      DOMAIN: string;
    }
  }
}
export {};
