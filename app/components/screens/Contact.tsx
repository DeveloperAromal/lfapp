"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../../utils/contact-send-email";
import { toast } from "react-toastify";
export type FormData = {
  name: string;
  phonenumber: number;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    toast.success("Your response has been sent");
  }

  return (
    <section className="py-8 bg-neutral-900">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-cyan-500 text-center font-bold mb-6">
          Contact Us
        </h1>
        <div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-md border border-teal-800 focus:outline-none focus:border-orange text-black"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-teal-800 focus:outline-none focus:border-orange text-black"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="phone number"
                maxLength={10}
                className="w-full px-4 py-2 rounded-md border border-teal-800 focus:outline-none focus:border-orange text-black"
                {...register("phonenumber", { required: true })}
              />
            </div>
            <div>
              <textarea
                id="message"
                cols={30}
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-md border border-teal-800 focus:outline-none text-black focus:border-orange"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-40 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
