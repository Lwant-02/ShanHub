import { motion } from "framer-motion";

import { item } from "../../landing/components/Hero";
export const Content = () => {
  return (
    <motion.div
      variants={item}
      className="prose prose-invert prose-emerald max-w-none"
    >
      <div className="bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            1. Information We Collect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-emerald-300 mb-2">
                Personal Information
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When you use Google authentication, we collect basic profile
                information including your name, email address, and profile
                picture as provided by Google.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-emerald-300 mb-2">
                Usage Data
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We collect information about how you interact with our
                applications, including features used, time spent, and general
                usage patterns to improve our services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-emerald-300 mb-2">
                Device Information
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We may collect device information such as browser type,
                operating system, and IP address for security and optimization
                purposes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>To provide and maintain our services</li>
            <li>To authenticate and secure your account</li>
            <li>To improve and optimize our applications</li>
            <li>To communicate important updates or changes</li>
            <li>To provide customer support when needed</li>
            <li>To analyze usage patterns and enhance user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third
            parties. We may share information only in the following
            circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and prevent fraud</li>
            <li>
              With service providers who assist in our operations (under strict
              confidentiality agreements)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            5. Data Retention
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We retain your personal information only for as long as necessary to
            provide our services and fulfill the purposes outlined in this
            policy. You may request deletion of your account and associated data
            at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Access and review your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your account and data</li>
            <li>Withdraw consent for data processing</li>
            <li>Export your data in a portable format</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            7. Cookies and Tracking
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We use cookies and similar technologies to enhance your experience,
            remember your preferences, and analyze site traffic. You can control
            cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the Last updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us through our official channels or
            community forums.
          </p>
        </section>
      </div>
    </motion.div>
  );
};
