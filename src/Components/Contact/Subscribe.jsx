import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState("");
  const [showThanks, setShowThanks] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "63b17df6-92dc-47c4-be77-7614d7a12bd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowThanks(true);
      event.target.reset();
      setName('');
      setEmail('');
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full px-5 py-10">
      <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
      {showThanks ? (
        <div className="text-green-600 font-semibold mb-4">
          Thank you for subscribing to our newsletter!
        </div>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-zinc-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-zinc-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-zinc-800 text-white py-2 px-4 rounded hover:bg-zinc-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
      {result && <p className="mt-4 text-green-600 font-semibold">{result}</p>}
      <p className="mt-4 text-sm opacity-75">
        Stay updated with our latest collections and exclusive offers.
      </p>
      <NavLink to="/privacy-policy" className="mt-2 inline-block text-sm text-zinc-600 hover:underline">
        Privacy Policy
      </NavLink>
    </div>
  );
}

export default Subscribe;
