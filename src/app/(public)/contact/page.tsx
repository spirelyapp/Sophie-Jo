import { Metadata } from "next";
import MdxLayout from "@/components/mdx-layout";
import Form from "./form";

export const metadata: Metadata = {
  title: "CONTACT",
  description: "contact me @ noahjohnsoncopy@gmail.com",
};

export default function ContactPage() {
  return (
    <MdxLayout>
      <div className="prose prose-zinc max-w-none">
        <h2>CONTACT</h2>
        
        <p>i enjoy reading emails, so please holla at your boy.</p>
        
        <Form />
        
        <h4>OR EMAIL AT:</h4>
        <ul>
          <li>noahjohnsoncopy@gmail.com</li>
        </ul>
      </div>
    </MdxLayout>
  );
}
