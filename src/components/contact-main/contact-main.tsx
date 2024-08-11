"use client";

import "./contact-main.scss";

import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { ACTION_SendEmail } from "@/actions/sendEmail";
import type { FormInputs } from "@/core/types";

function Form() {
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    <>
      {formSuccess ? (
        <div className="Thanks">
          <h2>Thank you for contacting us!</h2>
          <p>Thank you for filling out our form, your email has been sent!</p>
        </div>
      ) : (
        <main
          className="Contact"
          onSubmit={handleSubmit((data) => {
            ACTION_SendEmail({ data });

            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              setFormSuccess(true);
            }, 2000);
          })}
        >
          <form className="Form">
            <div className="Top__Wrapper">
              <input type="text" className="Honey_Pot" />

              <div className="Top__One">
                <label>
                  Name<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Bob Smith"
                  {...register("name", { required: true, minLength: 2 })}
                />
                {errors.name && (
                  <p>Your Firstname should be longer than 2 characters</p>
                )}
              </div>

              <div className="Top">
                <div>
                  <label>
                    Email<span>*</span>
                  </label>
                  <input
                    placeholder="bobsmith@domain.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    })}
                  />
                  {errors.email && <p>Your Email is not valid</p>}
                </div>

                <div>
                  <label>Phone Number</label>
                  <input
                    placeholder="123 456 789"
                    {...register("phoneNumber", {
                      required: false,
                      pattern: /^\d+/,
                    })}
                  />
                  {errors.phoneNumber && (
                    <p>Your Phone Number should contain only numbers</p>
                  )}
                </div>
              </div>
            </div>

            <div className="Bottom">
              <label>
                Your Message<span>*</span>
              </label>
              <textarea
                placeholder="What I want to ask you is..."
                {...register("message", { required: true, minLength: 10 })}
              ></textarea>
              {errors.message && (
                <p className="error">
                  Your message should be longer than 20 characters
                </p>
              )}

              <p>
                By submitting this form you agree to our terms and conditions
                and our privacy policy which explains how we may collect, use
                and disclose your personal information including to third
                parties.{" "}
                <strong>
                  If the label has a <span>*</span> next to it, it is required.
                </strong>
              </p>
            </div>

            {loading ? (
              <button
                disabled={true}
                style={{ background: "grey", cursor: "not-allowed" }}
                type="submit"
              >
                <FontAwesomeIcon
                  className="Button__Loading__Icon"
                  icon={faCircleNotch}
                  spin
                />
                Loading...
              </button>
            ) : (
              <button type="submit">Submit</button>
            )}
          </form>

          <div className="Icons"></div>
        </main>
      )}
    </>
  );
}

export default function ContactMain() {
  return (
    // <QueryClientProvider client={queryClient}>
    <Form />
    // </QueryClientProvider>
  );
}
