import React, { useState } from 'react';

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

    // ✅ Assume success because of no-cors mode
    setSubmitted(true);
  } catch (error) {
    console.error('Submission error:', error);
    alert('There was an error submitting the form.');
  }
};

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-6">Smarter Dental Procurement Starts Here</h1>
      <p className="text-center max-w-xl mb-8">
        Compare prices across UK suppliers and cut material costs effortlessly.
      </p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Practice Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Sign Up for Updates
          </button>
        </form>
      ) : (
        <div className="text-green-600 font-semibold text-center">
          Thank you! You've been added to the waitlist.
        </div>
      )}
    </div>
  );
};

export default App;
