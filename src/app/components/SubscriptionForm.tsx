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

export const SubscriptionForm = () => {
  const [result, setResult] = useState<"success" | "error" | undefined>();

  const subscribe = async (e: any) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
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
        <div className="mt-2 p-1 w-[270px] rounded-md bg-gray-100 flex gap-2 items-center">
          <input
            className="bg-gray-100 px-2 py-1 outline-none"
            style={{ width: "90%" }}
            placeholder="you@domain.com"
            id="email"
            type="email"
            required
          />
          <button
            type="submit"
            className="text-sm p-2 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            Subscribe
          </button>
        </div>
      </form>
      <AlertDialog open={!!result}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {result === "success" ? "You subscribed successfully!" : "Uh oh!"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {result === "success"
                ? "Welcome to the club! We are glad you decided to join."
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
