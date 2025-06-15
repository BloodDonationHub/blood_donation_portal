// src/components/BloodRequestTable.js
import React, { useState } from 'react';

const BloodRequestTable = () => {
  const [requests, setRequests] = useState([
    { name: 'Ram', bloodType: 'A+', location: 'Kathmandu', urgency: 'High' },
    { name: 'Sita', bloodType: 'O-', location: 'Pokhara', urgency: 'Medium' },
    { name: 'Hari', bloodType: 'B+', location: 'Butwal', urgency: 'Low' },
  ]);

  return (
    <div className="mt-5">
      <h4 className="mb-3">🩸 Blood Requests</h4>
      <table className="table table-striped table-bordered shadow-sm">
        <thead className="table-danger">
          <tr>
            <th>Name</th>
            <th>Blood Type</th>
            <th>Location</th>
            <th>Urgency</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.name}</td>
              <td>{req.bloodType}</td>
              <td>{req.location}</td>
              <td>
                <span className={`badge bg-${getBadgeColor(req.urgency)}`}>
                  {req.urgency}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getBadgeColor = (urgency) => {
  switch (urgency.toLowerCase()) {
    case 'high':
      return 'danger';
    case 'medium':
      return 'warning';
    case 'low':
      return 'success';
    default:
      return 'secondary';
  }
};

export default BloodRequestTable;
