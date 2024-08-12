"use server";

import type { FormInputs } from "@/core/types";
import { Resend } from "resend";

import EMAIL_Contact from "@/emails/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function ACTION_SendEmail({ data }: { data: FormInputs }) {
  try {
    await resend.emails.send({
      from: `contact@${process.env.DOMAIN}`,
      to: process.env.SEND_EMAIL_TO,
      subject: "Contact form",
      react: EMAIL_Contact({ ...data }),
    });
  } catch (err) {
    throw new Error("Unable to send email");
  }
}
