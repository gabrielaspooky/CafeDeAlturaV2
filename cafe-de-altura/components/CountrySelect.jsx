"use client"
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const CountrySelect = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Fetch country data from a public API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => ({
          value: country.cca2, 
          label: country.name.common,
        }));
        setOptions(countries);
      });
  }, []);

  return (
    <Select 
      options={options} 
      placeholder="Seleccionar país" 
      className="form-select mt-1 block w-full focus:ring-[#2A5B45]"
    />
  );
};

export default CountrySelect;
