'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  childClass: string;
  preferredTerm: string;
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    childClass: '',
    preferredTerm: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', form);
    setSubmitted(true);
    setLoading(false);

    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', childClass: '', preferredTerm: '' });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-2 text-center">Start Admission</h3>
      <p className="text-gray-600 text-center mb-6">Apply Now / Get Admission Info</p>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Parent Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
        />

        <select
          name="childClass"
          value={form.childClass}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
        >
          <option value="">Child&apos;s Class</option>
          <option>Primary</option>
          <option>Secondary</option>
        </select>

        <select
          name="preferredTerm"
          value={form.preferredTerm}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
        >
          <option value="">Preferred Start Term</option>
          <option>First Term (September)</option>
          <option>Second Term (January)</option>
          <option>Third Term (April)</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-800 text-white py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors disabled:opacity-50"
        >
          {loading ? 'Submitting...' : submitted ? 'Submitted!' : 'Apply Now / Get Admission Info'}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        Limited admission slots available. Apply now.
      </p>
    </form>
  );
}
