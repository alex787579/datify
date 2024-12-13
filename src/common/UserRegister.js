import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function UserRegister() {
  const [formData, setFormData] = useState({
    gender: '2',
    mGender: '1',
    mAgeMin: '35',
    mAgeMax: '50',
    birthDateDay: '',
    birthDateMonth: '',
    birthDateYear: '',
    username: '',
    password: '',
    email: '',
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };


    return (
        <>
          <h2 className="text-center mb-4">Create a FREE profile</h2>
          <form onSubmit={handleSubmit} className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">I am a:</label>
                  <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                    <option value="1">Woman</option>
                    <option value="2">Man</option>
                  </select>
                </div>
      
                <div className="mb-3">
                  <label htmlFor="mGender" className="form-label">Interested in:</label>
                  <select className="form-select" id="mGender" name="mGender" value={formData.mGender} onChange={handleInputChange}>
                    <option value="1">Women</option>
                    <option value="2">Men</option>
                    <option value="3">Men & Women</option>
                  </select>
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Age range:</label>
                  <div className="row">
                    <div className="col-6">
                      <select className="form-select" name="mAgeMin" value={formData.mAgeMin} onChange={handleInputChange}>
                        {[...Array(83)].map((_, i) => <option key={i}>{i + 18}</option>)}
                      </select>
                    </div>
                    <div className="col-6">
                      <select className="form-select" name="mAgeMax" value={formData.mAgeMax} onChange={handleInputChange}>
                        {[...Array(83)].map((_, i) => <option key={i}>{i + 18}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Date of Birth:</label>
                  <div className="row">
                    <div className="col-4">
                      <select className="form-select" name="birthDateDay" value={formData.birthDateDay} onChange={handleInputChange}>
                        <option disabled value="">Day</option>
                        {[...Array(31)].map((_, i) => <option key={i}>{String(i + 1).padStart(2, '0')}</option>)}
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-select" name="birthDateMonth" value={formData.birthDateMonth} onChange={handleInputChange}>
                        <option disabled value="">Month</option>
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month, i) => (
                          <option key={i} value={i + 1}>{month}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="form-select" name="birthDateYear" value={formData.birthDateYear} onChange={handleInputChange}>
                        <option disabled value="">Year</option>
                        {[...Array(100)].map((_, i) => <option key={i} value={2024 - i}>{2024 - i}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
      
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    placeholder="E.g. DayDreamer, AgentX, etc."
                    onChange={handleInputChange}
                  />
                </div>
      
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
      
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
      
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" htmlFor="agree">
                    I confirm that I am over 18 years of age and grant consent to the Privacy Policy and Terms of Use.
                  </label>
                </div>
      
                <button type="submit" className="btn btn-primary w-100">Join FREE today</button>
              </div>
            </div>
          </form>
        </>
      );
      

}

export default UserRegister;
