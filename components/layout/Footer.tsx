"use client";

import AnimateOnview from "../AnimateOnview";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <AnimateOnview>
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                ShanHub
              </h3>
              <p className="text-gray-400 mb-4 max-w-md text-lg">
                Empowering the Shan community through technology. Discover,
                share, and celebrate our digital culture.
              </p>
            </div>
          </div>
        </AnimateOnview>
        <AnimateOnview>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p className="text-lg">
              &copy; {year} ShanHub. All rights reserved. Built with ❤️ for the
              Shan community.
            </p>
          </div>
        </AnimateOnview>
      </div>
    </footer>
  );
};
