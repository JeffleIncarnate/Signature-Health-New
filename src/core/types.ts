import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface FormInputs {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export interface SendEmail {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  token: string;
}

export interface Service {
  heading: string;
  text: string;
  itemsServiceHas: string[];
  icon: IconDefinition;
}
