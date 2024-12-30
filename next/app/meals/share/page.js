'use client';

import BackToHomeButton from '@/components/BackToHomeButton';
import { useState } from 'react';

export default function ShareMealPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    creator: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Your meal has been shared!');
    setFormData({ title: '', description: '', creator: '' });
  };

  return (
    <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', background: '#fff', borderRadius: '8px' }}>
      <h1>Share Your Meal</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '.5rem' }}>Meal Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description" style={{ display: 'block', marginBottom: '.5rem' }}>Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          ></textarea>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="creator" style={{ display: 'block', marginBottom: '.5rem' }}>Your Name</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={formData.creator}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#ff8a05', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Share Meal
        </button>
      </form>
      <BackToHomeButton />
    </main>
  );
}
