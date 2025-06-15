import React, { useState } from 'react';

function BloodRequestForm({ onAddRequest }) {
  const [request, setRequest] = useState({
    name: '',
    bloodType: '',
    location: '',
    urgency: 'Medium',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!request.name || !request.bloodType || !request.location) {
      alert('Please fill in all required fields.');
      return;
    }

    onAddRequest(request);
    setRequest({ name: '', bloodType: '', location: '', urgency: 'Medium' });
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-3">🩸 Request Blood</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
              value={request.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <select
              name="bloodType"
              className="form-select"
              value={request.bloodType}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Type</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="form-control"
              value={request.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Urgency</label>
            <select
              name="urgency"
              className="form-select"
              value={request.urgency}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <button type="submit" className="btn btn-danger w-100">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default BloodRequestForm;
