import React, { useState } from 'react';

function DonorList({ donors }) {
  const [search, setSearch] = useState('');

  const filteredDonors = donors.filter(donor =>
    donor.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h4>Registered Donors</h4>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Search by location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group">
        {filteredDonors.map((donor, index) => (
          <li key={index} className="list-group-item">
            <strong>{donor.name}</strong> - {donor.bloodType} - {donor.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonorList;
