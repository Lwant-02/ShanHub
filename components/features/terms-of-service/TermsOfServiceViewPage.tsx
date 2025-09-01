"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { container, item } from "@/components/features/landing/Hero";
import { useTranslations } from "next-intl";

export default function TermsOfServiceViewPage() {
  const t = useTranslations("TermsOfService");
  return (
    <div className="min-h-screen py-12 ">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            <span>{t("btn_text")}</span>
          </Link>
          <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-lg">
            {t("last_updated")} - {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={item}
          className="prose prose-invert prose-emerald max-w-none"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using ShanHub, you accept and agree to be bound
                by the terms and provision of this agreement. If you do not
                agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ShanHub is a platform dedicated to preserving and promoting the
                Shan language and culture through technology. Our services
                include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Shan language learning tools and applications</li>
                <li>Font conversion and text processing utilities</li>
                <li>
                  Cultural content including proverbs, songs, and calendar
                </li>
                <li>Community features for Shan language speakers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a user of ShanHub, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Use the service for lawful purposes only</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not attempt to harm or disrupt the service</li>
                <li>Provide accurate information when required</li>
                <li>
                  Respect other users and maintain a positive community
                  environment
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The content, features, and functionality of ShanHub are owned by
                ShanHub and are protected by international copyright, trademark,
                and other intellectual property laws. You may not reproduce,
                distribute, or create derivative works without explicit
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                5. Privacy and Data
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your privacy is important to us. Please review our Privacy
                Policy to understand how we collect, use, and protect your
                information. By using our service, you consent to the collection
                and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                ShanHub is provided "as is" without any warranties. We shall not
                be liable for any damages arising from the use or inability to
                use our service, including but not limited to direct, indirect,
                incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                7. Modifications to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of the service after changes constitutes acceptance of the new
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                8. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us through our official channels or community forums.
              </p>
            </section>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={item} className="mt-12 text-center">
          <p className="text-gray-400">
            Thank you for being part of the ShanHub community and helping
            preserve the Shan language and culture.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
