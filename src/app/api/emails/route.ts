import { Resend } from "resend";

import Test from "@/emails/test";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    await resend.emails.send({
      from: "signature@dhruvrayat.com",
      to: process.env.SEND_EMAIL_TO,
      subject: "TEST EMAILS PLEASE WORK",
      react: Test(),
    });

    return new Response("OK", { status: 200 });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
}
