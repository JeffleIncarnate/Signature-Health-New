import * as React from "react";
import { Markdown, Html } from "@react-email/components";

import { FormInputs } from "@/core/types";

export default function EMAIL_Contact({
  name,
  email,
  phoneNumber,
  message,
}: FormInputs) {
  return (
    <Html>
      <Markdown># Contact form Submission</Markdown>

      <Markdown>{"<hr />"}</Markdown>

      <Markdown>## Name</Markdown>
      <Markdown>{name || "Unable to get Name"}</Markdown>

      <Markdown>## Email</Markdown>
      <Markdown>{email || "Unable to get Email"}</Markdown>

      <Markdown>## Phone Number</Markdown>
      <Markdown>{phoneNumber || "Unable to get Phone Number"}</Markdown>

      <Markdown>## Message</Markdown>
      <Markdown>{message || "Unable to get Message"}</Markdown>
    </Html>
  );
}
