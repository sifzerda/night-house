import React, { useState, useEffect } from 'react';
import SunCalc from 'suncalc';

const MoonPhase = () => {
  const [phase, setPhase] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const now = new Date();
    const moonIllumination = SunCalc.getMoonIllumination(now);
    const phaseName = getMoonPhase(moonIllumination.phase);
    const imageSrc = getImageForPhase(phaseName);

    setPhase(phaseName);
    setImageSrc(imageSrc);
  }, []);

  // Function to get moon phase name from its angle
  const getMoonPhase = (phase) => {
    if (phase < 0.0625 || phase > 0.9375) {
      return 'New Moon';
    } else if (phase < 0.1875) {
      return 'Waxing Crescent';
    } else if (phase < 0.3125) {
      return 'First Quarter';
    } else if (phase < 0.4375) {
      return 'Waxing Gibbous';
    } else if (phase < 0.5625) {
      return 'Full Moon';
    } else if (phase < 0.6875) {
      return 'Waning Gibbous';
    } else if (phase < 0.8125) {
      return 'Last Quarter';
    } else {
      return 'Waning Crescent';
    }
  };

  // Function to get image source for moon phase
  const getImageForPhase = (phaseName) => {
    switch (phaseName) {
      case 'New Moon':
        return 'new_moon_image_url';
      case 'Waxing Crescent':
        return 'waxing_crescent_image_url';
      case 'First Quarter':
        return 'first_quarter_image_url';
      case 'Waxing Gibbous':
        return 'waxing_gibbous_image_url';
      case 'Full Moon':
        return 'full_moon_image_url';
      case 'Waning Gibbous':
        return 'waning_gibbous_image_url';
      case 'Last Quarter':
        return 'last_quarter_image_url';
      case 'Waning Crescent':
        return 'waning_crescent_image_url';
      default:
        return '';
    }
  };

  return (
    <div>
      <h1>Current Moon Phase: {phase}</h1>
      {/* Render moon phase image */}
      {imageSrc && <img src={imageSrc} alt={phase} />}
    </div>
  );
};

export default MoonPhase;