import React, { useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', form.email);
    formData.append('practice', form.name);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxIlhqCHc8npB3IASj-CsQQ-guqOFuD79vHTDTDjEqbwhsJP7cvoVeAjSUdVQzU4NWkkQ/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );
      setSubmitted(true);
    } catch (error) {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-900">
      <header className="text-center py-10">
        <motion.img src="/assets/logo.png" alt="Denpare Logo" className="mx-auto w-24 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
        <motion.h1 className="text-4xl font-bold" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Smarter Dental Procurement Starts Here
        </motion.h1>
        <p className="mt-4 max-w-xl mx-auto">Compare prices across UK dental suppliers. Launching soon – sign up now to stay in the loop.</p>
      </header>

      <section className="flex justify-center items-center">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded w-full max-w-md space-y-4">
            <input name="name" type="text" placeholder="Practice Name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
            <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded" />
            <button type="submit" className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded hover:bg-green-700">Join the Waitlist</button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-bold">Thank you! You've been added to the waitlist.</div>
        )}
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        Denpare is currently in development. Launching soon.
      </footer>
    </div>
  );
};

export default App;