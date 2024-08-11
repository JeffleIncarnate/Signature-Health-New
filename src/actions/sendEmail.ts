"use server";

import type { FormInputs } from "@/core/types";
import { Resend } from "resend";

import Test from "@/emails/test";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function ACTION_SendEmail({ data }: { data: FormInputs }) {
  try {
    await resend.emails.send({
      from: "signaturehealth@dhruvrayat.com",
      to: process.env.SEND_EMAIL_TO,
      subject: "Contact form",
      react: Test(),
    });
  } catch (err) {
    throw new Error("Unable to send email");
  }
}
