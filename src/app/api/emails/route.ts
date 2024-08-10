import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

import Test from "@/emails/test";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    await resend.emails.send({
      from: "signature@dhruvrayat.com",
      to: process.env.SEND_EMAIL_TO,
      subject: "TEST EMAILS PLEASE WORK",
      react: Test(),
    });

    return res.status(200);
  } catch (err) {
    return res.status(500).send(err);
  }
}
