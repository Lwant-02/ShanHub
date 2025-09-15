"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "@/components/features/landing/components/Hero";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShanWordSorting } from "@/util/ShanWordSorting";
import { Textarea } from "@/components/ui/textarea";
import { CustomButton } from "@/components/CustomButton";

export const Sorter = () => {
  const t = useTranslations("ShanWordSorting");
  const [listText, setListText] = useState("");
  const [wordA, setWordA] = useState("");
  const [wordB, setWordB] = useState("");
  const [sorted, setSorted] = useState<string[]>([]);
  const [comparison, setComparison] = useState<string>("");

  const handleSort = () => {
    const words = listText
      .split(/\n|,|၊|။|;|\s+/)
      .map((w) => w.trim())
      .filter((w) => w.length > 0);
    const unique = Array.from(new Set(words));
    unique.sort(ShanWordSorting.compare.bind(ShanWordSorting));
    setSorted(unique);
  };

  const handleCompare = () => {
    if (!wordA || !wordB) return setComparison("");
    const result = ShanWordSorting.compareWordString(
      wordA.trim(),
      wordB.trim()
    );
    setComparison(result);
  };

  const summary = useMemo(() => {
    if (!sorted.length) return "";
    return t("sorted_count", { count: sorted.length });
  }, [sorted, t]);

  return (
    <motion.div variants={item} className="space-y-4">
      <Card className="bg-black/40 border-blue-500/30">
        <CardContent className="p-4 space-y-3">
          <div>
            <div className="flex justify-between items-center py-2">
              <label className="block text-lg text-gray-300 mb-2">
                {t("list_label")}
              </label>
              <CustomButton
                text={t("use_example")}
                variant="secondary"
                onClick={() => setListText("မိူဝ်ႈ, ၼႆႉ, ၵဝ်, ၶႃႈ")}
                className="w-32"
              />
            </div>
            <Textarea
              value={listText}
              onChange={(e) => setListText(e.target.value)}
              className="border border-green/50 focus:ring-1! focus:ring-green/80! rounded-lg h-40 resize-none w-full text-lg!"
              placeholder={t("list_placeholder")}
            />

            <div className="flex justify-end mt-2 gap-3">
              {(sorted.length ||
                listText.length > 0 ||
                comparison.length > 0) && (
                <CustomButton
                  text={t("clear")}
                  variant="secondary"
                  onClick={() => {
                    setSorted([]);
                    setListText("");
                    setComparison("");
                    setWordA("");
                    setWordB("");
                  }}
                  className="w-32"
                />
              )}
              <CustomButton
                text={t("sort_action")}
                variant="primary"
                onClick={handleSort}
                className="w-32"
              />
            </div>
          </div>

          <Separator className="bg-blue-500/20" />

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              {t("compare_label")}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Input
                value={wordA}
                onChange={(e) => setWordA(e.target.value)}
                placeholder={t("word_a")}
                className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg"
              />
              <Input
                value={wordB}
                onChange={(e) => setWordB(e.target.value)}
                placeholder={t("word_b")}
                className="border border-green/50 focus:ring-1! focus:ring-green/80 rounded-lg "
              />
              <CustomButton
                text={t("compare_action")}
                variant="primary"
                onClick={handleCompare}
              />
            </div>
            {comparison && (
              <p className="text-sm text-gray-300 mt-2">
                {t("compare_result")}:{" "}
                <span className="text-blue-300">{comparison}</span>
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <p className="text-sm text-gray-400">
        {sorted.length > 0 && t("hint", { count: sorted.length })}
      </p>
      {sorted.length > 0 && (
        <Card className="bg-black/40 border-blue-500/30">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{summary}</span>
            </div>
            <ul className="grid gap-2 xl:grid-cols-2">
              {sorted.map((w, i) => (
                <li key={`${w}-${i}`} className="text-blue-200">
                  <span className="font-semibold mr-2 text-lg">{i + 1}.</span>{" "}
                  {w}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
};
