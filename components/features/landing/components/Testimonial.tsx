"use client";

import { useTranslations } from "next-intl";

import { Marquee } from "@/components/Marquee";
import AnimateOnview from "@/components/AnimateOnview";
import { TestimonialCard } from "./TestimonialCard";
import { GradientTitle } from "@/components/GradientTitle";

const testimonials = [
  {
    name: "ၸၢၼ်ႈမၢင်း",
    content:
      "ShanHub has revolutionized how I teach Shan language to my students.",
    contentShan: "ShanHub ယဝ်ႉ လူၵ်ႈပိၼ်ႇ ၸၢၼ်ႈလိၵ်ႈ ၶူး ၸိူဝ်းၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၼၢင်းၼမ်",
    content: "Learning Shan has never been easier with these amazing tools.",
    contentShan: "ၸၢၼ်ႈလိၵ်ႈ ႁဵၼ်းၸူး ၸိူဝ်းၸႂ်ႉတိုဝ်း လႄႈ ၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၸၢၼ်ႈၶမ်း",
    content:
      "The API and tools provided by ShanHub are exceptional for building Shan apps.",
    contentShan:
      "ShanHub ယဝ်ႉ API လႄႈ ၸိူဝ်းၸႂ်ႉတိုဝ်း ၸၢၼ်ႈအႅပ်ႇ ၸိူဝ်းၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၸၢၼ်ႈမၢင်း",
    content:
      "ShanHub has revolutionized how I teach Shan language to my students.",
    contentShan: "ShanHub ယဝ်ႉ လူၵ်ႈပိၼ်ႇ ၸၢၼ်ႈလိၵ်ႈ ၶူး ၸိူဝ်းၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၼၢင်းၼမ်",
    content: "Learning Shan has never been easier with these amazing tools.",
    contentShan: "ၸၢၼ်ႈလိၵ်ႈ ႁဵၼ်းၸူး ၸိူဝ်းၸႂ်ႉတိုဝ်း လႄႈ ၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၼၢင်းၼမ်",
    content: "Learning Shan has never been easier with these amazing tools.",
    contentShan: "ၸၢၼ်ႈလိၵ်ႈ ႁဵၼ်းၸူး ၸိူဝ်းၸႂ်ႉတိုဝ်း လႄႈ ၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၼၢင်းၼမ်",
    content: "Learning Shan has never been easier with these amazing tools.",
    contentShan: "ၸၢၼ်ႈလိၵ်ႈ ႁဵၼ်းၸူး ၸိူဝ်းၸႂ်ႉတိုဝ်း လႄႈ ၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
  {
    name: "ၼၢင်းၼမ်",
    content: "Learning Shan has never been easier with these amazing tools.",
    contentShan: "ၸၢၼ်ႈလိၵ်ႈ ႁဵၼ်းၸူး ၸိူဝ်းၸႂ်ႉတိုဝ်း လႄႈ ၸႂ်ႉတိုဝ်း",
    avatar: "",
    date: "2021-01-01",
  },
];

export const Testimonial = () => {
  const t = useTranslations("HomePage.Testimonial");
  return (
    <section className="py-14 mt-14 px-4 ">
      <div className="max-w-6xl mx-auto">
        <AnimateOnview>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <GradientTitle title={t("title")} />
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("content")}
            </p>
          </div>
        </AnimateOnview>
        <AnimateOnview>
          <div className="w-full h-full overflow-hidden">
            <Marquee direction="left">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`testimonial-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </Marquee>
          </div>
        </AnimateOnview>
      </div>
    </section>
  );
};
