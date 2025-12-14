"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";

export function Counter() {
  const { count, increment, decrement, reset } = useAppStore();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const countVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Counter App
      </h1>

      <motion.div
        className="text-6xl font-bold text-blue-600"
        key={count}
        variants={countVariants}
        initial="hidden"
        animate="visible"
      >
        {count}
      </motion.div>

      <div className="flex gap-4">
        <motion.button
          onClick={decrement}
          className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Decrement
        </motion.button>

        <motion.button
          onClick={reset}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reset
        </motion.button>

        <motion.button
          onClick={increment}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Increment
        </motion.button>
      </div>
    </motion.div>
  );
}
