"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)]"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              className="font-display text-2xl tracking-tight gradient-text"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              NS
            </motion.span>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-[var(--border)]">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent-cyan)]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
