// import React, { useState } from 'react';

// function DonorForm({ onAddDonor }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     bloodType: '',
//     location: '',
//     lastDonation: '',
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.bloodType || !formData.location) {
//       alert('Please fill all required fields.');
//       return;
//     }

//     onAddDonor(formData);
//     setMessage('✅ Donor successfully registered!');
//     setTimeout(() => setMessage(''), 3000);
//     setFormData({ name: '', bloodType: '', location: '', lastDonation: '' });
//   };

//   return (
//     <div className="card shadow-sm">
//       <div className="card-body">
//         <h5 className="card-title mb-3">🧑‍🤝‍🧑 Register as Donor</h5>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="form-control"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <select
//               name="bloodType"
//               className="form-select"
//               value={formData.bloodType}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Blood Type</option>
//               <option>A+</option>
//               <option>A-</option>
//               <option>B+</option>
//               <option>B-</option>
//               <option>AB+</option>
//               <option>AB-</option>
//               <option>O+</option>
//               <option>O-</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               className="form-control"
//               value={formData.location}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Last Donation Date</label>
//             <input
//               type="date"
//               name="lastDonation"
//               className="form-control"
//               value={formData.lastDonation}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="btn btn-danger w-100">
//             Register as Donor
//           </button>

//           {message && (
//             <div className="alert alert-success mt-3 p-2" role="alert">
//               {message}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DonorForm;
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DonorForm({ onAddDonor }) {
  const [formData, setFormData] = useState({ name: '', bloodType: '', location: '', lastDonation: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDonor(formData);
    toast.success('✅ Donor successfully registered!');
    setFormData({ name: '', bloodType: '', location: '', lastDonation: '' });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-3">
          <input className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <input className="form-control" name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <input className="form-control" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="col-md-2">
          <input className="form-control" name="lastDonation" type="date" value={formData.lastDonation} onChange={handleChange} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger w-100" type="submit">Register</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default DonorForm;
