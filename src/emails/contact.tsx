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
      <Markdown children="# Contact form submission" />
      <Markdown children="<hr />" />
      <Markdown children="## Name" />
      <Markdown children={name || "Unable to get Name"} />

      <Markdown children="## Email" />
      <Markdown children={email || "Unable to get Email"} />

      <Markdown children="## Phone Number" />
      <Markdown children={phoneNumber || "Unable to get Phone Number"} />

      <Markdown children="## Message" />
      <Markdown children={message || "Unable to get Message"} />
    </Html>
  );
}
