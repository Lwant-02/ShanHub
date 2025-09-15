"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "@/components/features/landing/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "@/components/CustomButton";
import { ShanTranslit } from "@/util/ShanTranslit";

export const Translit = () => {
  const t = useTranslations("ShanTranslit");

  const [mode, setMode] = useState<"tai2eng" | "tai2eng_nt" | "eng2tai">(
    "tai2eng"
  );
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const placeholder = useMemo(() => {
    if (mode === "tai2eng") return t("ph_tai2eng");
    if (mode === "tai2eng_nt") return t("ph_tai2eng_nt");
    return t("ph_eng2tai");
  }, [mode, t]);

  const exampleText = useMemo(() => {
    if (mode === "tai2eng") return "မိူင်းတႆးႁၢင်ႊလီ";
    if (mode === "tai2eng_nt") return "မိူင်းတႆးႁၢင်ႊလီ";
    return "móeng tái ha᷈ang lǐi";
  }, [mode]);

  const handleTranslit = () => {
    if (!inputText.trim()) {
      setOutputText("");
      return;
    }
    if (mode === "tai2eng") {
      setOutputText(ShanTranslit.taiToEng(inputText.trim()));
    } else if (mode === "tai2eng_nt") {
      setOutputText(ShanTranslit.taiToEngWithoutTone(inputText.trim()));
    } else {
      setOutputText(ShanTranslit.engToTai(inputText.trim()));
    }
  };

  return (
    <motion.div variants={item} className="space-y-4">
      <Card className="bg-black/40 border-blue-500/30">
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <CustomButton
                text={t("mode_tai2eng")}
                variant={mode === "tai2eng" ? "primary" : "secondary"}
                onClick={() => setMode("tai2eng")}
                className="xl:w-fit w-full"
              />
              <CustomButton
                text={t("mode_tai2eng_nt")}
                variant={mode === "tai2eng_nt" ? "primary" : "secondary"}
                onClick={() => setMode("tai2eng_nt")}
                className="xl:w-fit w-full"
              />
              <CustomButton
                text={t("mode_eng2tai")}
                variant={mode === "eng2tai" ? "primary" : "secondary"}
                onClick={() => setMode("eng2tai")}
                className="xl:w-fit w-full"
              />
            </div>
            <div className="flex gap-2">
              <CustomButton
                text={t("use_example")}
                variant="secondary"
                onClick={() => setInputText(exampleText)}
                className="xl:w-36 w-full"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg text-gray-300 mb-2">
              {t("input_label")}
            </label>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (
                  (e.metaKey || e.ctrlKey) &&
                  e.key.toLowerCase() === "enter"
                ) {
                  e.preventDefault();
                  handleTranslit();
                }
              }}
              placeholder={placeholder}
              className="border border-green/50 focus:ring-1! focus:ring-green/80! rounded-lg h-32 resize-none w-full text-lg!"
            />
            <div className="flex justify-end mt-2 gap-3">
              <CustomButton
                text={t("clear")}
                variant="secondary"
                onClick={() => {
                  setInputText("");
                  setOutputText("");
                }}
                className="w-28"
              />
              <CustomButton
                text={t("convert")}
                variant="primary"
                onClick={handleTranslit}
                className="w-32"
              />
            </div>
          </div>

          <Separator className="bg-blue-500/20" />

          <div>
            <label className="block text-lg text-gray-300 mb-2">
              {t("output_label")}
            </label>
            <Textarea
              value={outputText}
              readOnly
              className="border border-blue-400/50 focus:ring-1! focus:ring-blue-400/80! rounded-lg h-32 resize-none w-full text-lg!"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
