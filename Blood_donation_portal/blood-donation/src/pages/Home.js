import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import DonorForm from '../components/DonorForm';
import DonorList from '../components/DonorList';

function Home() {
  const [donors, setDonors] = useState([]);

  const addDonor = (donor) => {
    setDonors([...donors, donor]);
  };

  return (
    <main>
      <HeroSection />
      <DonorForm onAddDonor={addDonor} />
      <DonorList donors={donors} />
    </main>
  );
}

export default Home;