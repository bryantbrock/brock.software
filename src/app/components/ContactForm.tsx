"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export const ContactForm = () => {
  const [result, setResult] = useState<"success" | "error" | undefined>();

  const subscribe = async (e: any) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: { "Content-Type": "application/json" },
    }).catch();

    if (res.ok) {
      setResult("success");
    } else {
      setResult("error");
    }
  };

  return (
    <>
      <form onSubmit={subscribe}>
        <div className="flex flex-col gap-4 mx-auto max-w-[800px]">
          <div>
            <h2>Contact</h2>
            <p className="mt-1">
              We are currently available for contract work. Please fill out the
              form below and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              className="bg-gray-50 p-3 border outline-none rounded-lg"
              placeholder="you@domain.com"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              className="bg-gray-50 p-3 border outline-none rounded-lg"
              placeholder="Your message..."
              id="message"
              required
            />
          </div>
          <button
            type="submit"
            className="flex gap-3 w-full shadow-sm hover:bg-gray-50 transition rounded-lg border p-2 items-center justify-center"
          >
            <span className="text-lg">Send</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
      <AlertDialog open={!!result}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {result === "success" ? "Your message has been sent!" : "Uh oh!"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {result === "success"
                ? "We will get back to you as soon as possible."
                : "Something didn't quite work. Please try again or send us an email to bryant@brock.software."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setResult(undefined)}>
              {result === "success" ? "Awesome" : "Okay"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
