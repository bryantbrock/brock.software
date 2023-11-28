import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";

export default function Page() {
  return (
    <main className="center mt-28">
      <ContactForm />
    </main>
  );
}
