import React, { useState } from 'react';

const QuickSearchForm = () => {
  const [formData, setFormData] = useState({
    gender: '2', // Default value 'Man'
    mGender: '1', // Default value 'Women'
    mAgeRange: [18, 35], // Default age range
    mCountryID: ['xx'], // Default 'India'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSliderChange = (e) => {
    const minAge = Math.min(e.target.value, formData.mAgeRange[1]);
    const maxAge = Math.max(e.target.value, formData.mAgeRange[0]);
    setFormData({
      ...formData,
      mAgeRange: [minAge, maxAge],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form id="form2" onSubmit={handleSubmit} className="container my-4">
      <h2 className="text-center mb-4">Quick Search</h2>
      <input type="hidden" name="sub" value="yes" />
      <input type="hidden" name="searchType" value="quick" />

      {/* Gender Selection */}
      <div className="mb-3">
        <label htmlFor="gender_qs" className="form-label">I am a:</label>
        <select
          name="gender"
          id="gender_qs"
          className="form-select"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="1">Woman</option>
          <option value="2">Man</option>
        </select>
      </div>

      {/* Interested In */}
      <div className="mb-3">
        <label htmlFor="mGender_qs" className="form-label">Interested in:</label>
        <select
          name="mGender"
          id="mGender_qs"
          className="form-select"
          value={formData.mGender}
          onChange={handleInputChange}
        >
          <option value="1">Women</option>
          <option value="2">Men</option>
          <option value="3">Men & Women</option>
        </select>
      </div>

      {/* Age Range Slider */}
      <div className="mb-3">
        <label className="form-label">
          Age range: {formData.mAgeRange[0]} - {formData.mAgeRange[1]}
        </label>
        <input
          type="range"
          className="form-range"
          min="18"
          max="100"
          value={formData.mAgeRange[0]}
          onChange={handleSliderChange}
          style={{ width: '100%' }}
        />
        <input
          type="range"
          className="form-range"
          min="18"
          max="100"
          value={formData.mAgeRange[1]}
          onChange={handleSliderChange}
          style={{ width: '100%' }}
        />
      </div>

      {/* Location Selection */}
      <div className="mb-3">
        <label htmlFor="mCountryID" className="form-label">Location:</label>
        <select
          name="mCountryID"
          id="mCountryID"
          className="form-select"
          multiple
          value={formData.mCountryID}
          onChange={handleInputChange}
        >
          <option value="00">Anywhere in the World</option>
          <option value="xx">India</option>
          <option value="af">Afghanistan</option>
          {/* Add other countries as needed */}
        </select>
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    </form>
  );
};

export default QuickSearchForm;
