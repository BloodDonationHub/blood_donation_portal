import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import DonorForm from '../components/DonorForm';
import DonorList from '../components/DonorList';
import BloodRequestForm from '../components/BloodRequestForm';
import BloodRequestTable from '../components/BloodRequestTable';

// Leaflet imports
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles

function Home() {
  const [donors, setDonors] = useState(() => {
    const saved = localStorage.getItem('donors');
    return saved ? JSON.parse(saved) : [];
  });

  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem('requests');
    return saved ? JSON.parse(saved) : [];
  });

  const donationCenters = [
    { id: 1, name: 'Center 1', lat: 40.748817, lng: -73.985428 },
    { id: 2, name: 'Center 2', lat: 40.742, lng: -73.992 },
    { id: 3, name: 'Center 3', lat: 40.730610, lng: -73.935242 },
  ];

  useEffect(() => {
    localStorage.setItem('donors', JSON.stringify(donors));
  }, [donors]);

  useEffect(() => {
    localStorage.setItem('requests', JSON.stringify(requests));
  }, [requests]);

  const addDonor = (donor) => {
    setDonors([...donors, donor]);
  };

  const addRequest = (request) => {
    setRequests([...requests, request]);
  };

  useEffect(() => {
    // Initialize the Leaflet map
    const map = L.map('map').setView([40.748817, -73.985428], 12); // Default to a central location

    // Set up OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Add markers for donation centers
    donationCenters.forEach(center => {
      L.marker([center.lat, center.lng])
        .addTo(map)
        .bindPopup(center.name)
        .openPopup();
    });

    // Cleanup the map on component unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <main className="container py-4">
      <HeroSection />
      <div className="row">
        <div className="col-md-6">
          <DonorForm onAddDonor={addDonor} />
        </div>
        <div className="col-md-6">
          <DonorList donors={donors} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <BloodRequestForm onAddRequest={addRequest} />
        </div>
        <div className="col-md-6">
          <BloodRequestTable requests={requests} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2>Donation Centers</h2>
          {/* Map container */}
          <div id="map" style={{ height: '400px' }}></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
