import React from "react";
import { Metadata } from "next";

import { FAQViewPage } from "@/components/features/faq/FAQViewPage";

export const metadata: Metadata = {
  title: "ShanHub | FAQ",
  description:
    "Frequently Asked Questions for ShanHub - Find answers to common questions about our Shan language and culture platform",
};

export default function FAQPage() {
  return <FAQViewPage />;
}
