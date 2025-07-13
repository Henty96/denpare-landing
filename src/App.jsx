
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-green-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center p-10"
      >
        <img src="/assets/logo.png" alt="Denpare Logo" className="mx-auto mb-6 w-24" />
        <h1 className="text-4xl font-bold mb-2">Denpare is Coming Soon</h1>
        <p className="text-lg max-w-xl mx-auto">
          We’re building the smartest dental procurement tool to help your practice save time and cut material costs.
        </p>
      </motion.div>
    </main>
  );
};

export default App;
