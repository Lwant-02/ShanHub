import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";

export const Content = () => {
  const t = useTranslations("PrivacyPolicy");
  return (
    <motion.div
      variants={item}
      className="prose prose-invert prose-emerald max-w-none"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            1. {t("information_we_collect.title")}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-emerald-300 mb-2">
                {t("information_we_collect.personal_information.title")}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("information_we_collect.personal_information.content")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-emerald-300 mb-2">
                {t("information_we_collect.usage_data.title")}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t("information_we_collect.usage_data.content")}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            2. {t("how_we_use_your_information.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("how_we_use_your_information.content")}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            {(t.raw("how_we_use_your_information.purposes") as string[]).map(
              (purpose, index) => (
                <li key={index}>{purpose}</li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            3. {t("information_sharing.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("information_sharing.content")}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            {(t.raw("information_sharing.circumstances") as string[]).map(
              (circumstance, index) => (
                <li key={index}>{circumstance}</li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            4. {t("security.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t("security.content")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            5. {t("your_rights.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("your_rights.content")}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            {(t.raw("your_rights.rights") as string[]).map((right, index) => (
              <li key={index}>{right}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            6. {t("contact_information.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t("contact_information.content")}
          </p>
        </section>
      </div>
    </motion.div>
  );
};
