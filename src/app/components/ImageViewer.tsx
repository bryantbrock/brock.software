"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, cloneElement, useState } from "react";

type Props = { children: ReactNode };

export const ImageViewer = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger
        onClick={() => setIsOpen((p) => !p)}
        asChild
        className="cursor-pointer"
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogOverlay className="bg-black/60" />
      <AlertDialogContent className="max-w-[80vw] p-0 m-0">
        <div
          onClick={() => setIsOpen(false)}
          className="absolute left-1/2 -top-14"
        >
          <Button variant="outline" size="lg" className="text-lg">
            Close
          </Button>
        </div>
        {cloneElement(children as any, {
          className: "w-[80vw] h-[80vh] object-contain rounded-xl",
        })}
      </AlertDialogContent>
    </AlertDialog>
  );
};
