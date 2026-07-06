import { Metadata } from "next";
import Resources from "./resources.mdx";

export const metadata: Metadata = {
  title: "LETTERS",
  description: "every letter i've written to sophie jo.",
};

export default function ResourcesPage() {
  return <Resources />;
}
