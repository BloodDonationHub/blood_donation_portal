import React, { useState } from 'react';

function DonorForm({ onAddDonor }) {
  const [formData, setFormData] = useState({
    name: '',
    bloodType: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDonor(formData);
    setFormData({ name: '', bloodType: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="donor-form">
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <button type="submit">Register as Donor</button>
    </form>
  );
}

export default DonorForm;