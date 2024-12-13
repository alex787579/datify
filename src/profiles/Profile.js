// Login.js
// import React,  from 'react';
import React from 'react';
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';

// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
const Profile = () => {


 
    return (
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Spinner Start */}
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* Spinner End */}
        <Sidebar />
        {/* Content Start */}
        <div className="content">
          <Navbars />

          <>
            {/* Form Start */}
            <div className="container-fluid pt-4 px-4">
              <div className="row g-4">
                <div className="col-sm-12 col-xl-6">
                  <div className="bg-light rounded h-100 p-4">
                    {/* <h6 className="mb-4">Edit Profiles</h6> */}
                    <form>
                      <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">
                          Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="nameInput" className="form-label">
                          Location
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="iamval" className="form-label">
                          Marital Status
                        </label>
                        <select
                          className="form-select form-select-sm mb-3"
                          id="iamval"
                          aria-label="Marital Status"
                        >
                          <option value="Single" selected="">
                            Single
                          </option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Married with kids</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Divorced with kids">
                            Divorced with kids
                          </option>
                          <option value="Widowed">Widowed</option>
                          <option value="Widowed with kids">
                            Widowed with kids
                          </option>
                          <option value="Separated">Separated</option>
                          <option value="Separated with kids">
                            Separated with kids
                          </option>
                          <option value="Single parent">Single parent</option>
                        </select>
                      </div>

                      <div className="mb-3">
                    <strong className="title_cont">Hide these on my profile</strong>
                    <ul className="checkList checkListnew">
                      <li>
                        <label>
                          <input type="checkbox" name="relationshipHide" className="my_chkbox" />
                          <cite>Relationship</cite>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="ageHide" className="my_chkbox" />
                          <cite>Age</cite>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="cityHide" className="my_chkbox" />
                          <cite>City</cite>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="professionHide" className="my_chkbox" />
                          <cite>Profession</cite>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="educationHide" className="my_chkbox" />
                          <cite>Education</cite>
                        </label>
                      </li>
                    </ul>
                  </div>

                      <button type="submit" className="btn btn-primary">
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-sm-12 col-xl-6">
                  <div className="bg-light rounded h-100 p-4">
                    <div className="mb-3">
                      <label htmlFor="lookingforval" className="form-label">
                        Looking For
                      </label>
                      <select
                        className="form-select form-select-sm mb-3"
                        id="lookingforval"
                        aria-label="Looking For"
                      >
                        <option value="Non-committal relationship">
                          Non-committal relationship
                        </option>
                        <option value="Casual relationship, but exclusive">
                          Casual relationship, but exclusive
                        </option>
                        <option value="Casual now, long-term relation later">
                          Casual now, long-term relation later
                        </option>
                        <option value="New friends">New friends</option>
                        <option value="Friendship, open to dating">
                          Friendship, open to dating
                        </option>
                        <option value="Dating" selected="">
                          Dating
                        </option>
                        <option value="Dating, leading to marriage">
                          Dating, leading to marriage
                        </option>
                        <option value="Marriage, open to dating">
                          Marriage, open to dating
                        </option>
                        <option value="Long-term relationship">
                          Long-term relationship
                        </option>
                        <option value="Long-term, fine with short">
                          Long-term, fine with short
                        </option>
                        <option value="Fine with both long-term and short-term">
                          Fine with both long-term and short-term
                        </option>
                        <option value="Open relationship">
                          Open relationship
                        </option>
                        <option value="Online companion">
                          Online companion
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="proval" className="form-label">
                        Profession
                      </label>
                      <select
                        className="form-select form-select-sm mb-3"
                        id="proval"
                        aria-label="Profession"
                      >
                        <option>Student</option>
                        <option>Business Person / Entrepreneur</option>
                        <option>Engineering Professional</option>
                        <option selected="">IT / Software Professional</option>
                        <option>Sales and Marketing</option>
                        <option>Agriculture</option>
                        <option>Architect / Urban Planner</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="eatval" className="form-label">
                        Eating Habits
                      </label>
                      <select
                        className="form-select form-select-sm mb-3"
                        id="eatval"
                        aria-label="Eating Habits"
                      >
                        <option value="Vegetarian" selected="">
                          Vegetarian
                        </option>
                        <option value="Non-vegetarian">Non-vegetarian</option>
                        <option value="Eggetarian">Eggetarian</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="eduval" className="form-label">
                        Education
                      </label>
                      <select
                        className="form-select form-select-sm mb-3"
                        id="eduval"
                      >
                        <option>Higher Secondary / Intermediate</option>
                        <option selected="">Bachelor's Degree</option>
                        <option>Master's Degree</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="languages" className="form-label">
                        Languages
                      </label>
                      <select
                        className="form-select form-select-sm mb-3"
                        id="languages"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Angami">Angami</option>
                        <option value="Angika">Angika</option>
                        <option value="Assamese">Assamese</option>
                        {/* Continue adding the rest of the languages */}
                      </select>
                    </div>
                  </div>
                </div>

                
                {/* <div className="col-sm-12 col-xl-6">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Horizontal Form</h6>
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Second radio
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Checkbox</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Check me out
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div> */}

                {/* <div className="col-sm-12 col-xl-6">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">File Input</h6>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">
              Multiple files input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label">
              Small file input example
            </label>
            <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
            />
          </div>
          <div>
            <label htmlFor="formFileLg" className="form-label">
              Large file input example
            </label>
            <input
              className="form-control form-control-lg"
              id="formFileLg"
              type="file"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Select</h6>
          <select
            className="form-select form-select-sm mb-3"
            aria-label=".form-select-sm example"
          >
            <option selected="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            <option selected="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <select
            className="form-select"
            multiple=""
            aria-label="multiple select example"
          >
            <option selected="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
      </div>
      <div className="col-sm-12 col-xl-6">
        <div className="bg-light rounded h-100 p-4">
          <h6 className="mb-4">Check, Radio &amp; Switch</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue=""
              id="flexCheckChecked"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              defaultValue="option3"
              disabled=""
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              3 (disabled)
            </label>
          </div>
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Default checked radio
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              defaultValue="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              defaultValue="option3"
              disabled=""
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              3 (disabled)
            </label>
          </div>
          <hr />
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              defaultChecked=""
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Checked switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDisabled"
              disabled=""
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDisabled"
            >
              Disabled switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCheckedDisabled"
              defaultChecked=""
              disabled=""
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckCheckedDisabled"
            >
              Disabled checked switch checkbox input
            </label>
          </div>
        </div>
      </div> */}
              </div>
            </div>
            {/* Form End */}
          </>
        </div>
        {/* Content End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    );
};

export default Profile;
