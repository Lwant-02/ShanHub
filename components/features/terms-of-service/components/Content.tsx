import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { item } from "../../landing/components/Hero";

export const Content = () => {
  const t = useTranslations("TermsOfService");

  return (
    <motion.div
      variants={item}
      className="prose prose-invert prose-emerald max-w-none"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            1. {t("acceptance_of_terms.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t("acceptance_of_terms.content")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            2. {t("description_of_service.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("description_of_service.content")}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            {(t.raw("description_of_service.services") as string[]).map(
              (service, index) => (
                <li key={index}>{service}</li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            3. {t("user_responsibilities.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("user_responsibilities.content")}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            {(t.raw("user_responsibilities.responsibilities") as string[]).map(
              (responsibility, index) => (
                <li key={index}>{responsibility}</li>
              )
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            4. {t("privacy_and_data.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t("privacy_and_data.content")}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            5. {t("contact_information.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {t("contact_information.content")}
          </p>
        </section>
      </div>
    </motion.div>
  );
};
