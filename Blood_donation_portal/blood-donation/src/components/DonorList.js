import React from 'react';

function DonorList({ donors }) {
  return (
    <div className="donor-list">
      <h3>Registered Donors</h3>
      <ul>
        {donors.map((donor, index) => (
          <li key={index}>{donor.name} - {donor.bloodType} - {donor.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default DonorList;