import { Metadata } from "next";
import MdxLayout from "@/components/mdx-layout";
import Form from "./form";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "contact me @ noah [at] noahjbusiness [dot] com",
};

export default function ContactPage() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h2>CONTACT</h2>
        
        <p>i read every message - always open to collaborating or helping out.</p>
        
        <Form />
        
        <h4>OR EMAIL AT:</h4>
        <ul>
          <li>noah [at] noahjbusiness [dot] com</li>
        </ul>
      </div>
    </MdxLayout>
  );
}
