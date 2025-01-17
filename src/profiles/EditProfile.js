import React, { useState, useEffect } from "react";
import Sidebar from "../layout/Sidebars";
import Navbars from "../layout/Navbars";
import "./ImageSlider.css";
import "./ProfileView.css";
import "../TableCss.css";
import { auth, db, storage } from "../firebase"; // Adjust the path based on your folder structure
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  ref,
  listAll,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage"; // Import necessary functions
import { useDropzone } from "react-dropzone";

const EditProfile = () => {
  const images = [
    "img/1.jpg",
    "img/00.jpg",
    "img/6.jpg",
    "img/8.jpg"
  ];

  //   const [images, setImages] = useState([]); // State to hold image URLs
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
//   const [user, setUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false); // State for editing other sections
  const [showAboutModal, setShowAboutModal] = useState(false); // State for editing "About Us"
  // const [aboutText, setAboutText] = useState(
  //   "I'm looking to meet someone for friendship and dating."
  // ); // Initial About Us text

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]); // State to hold selected files
//   const [uploadedImages, setUploadedImages] = useState([]); // State to hold uploaded images
  const [uploadProgress, setUploadProgress] = useState(0); // State for total upload progress
  const [totalFiles, setTotalFiles] = useState(0); // Total files to upload
//   const [completedFiles, setCompletedFiles] = useState(0); // Files successfully uploaded

  // Fetch user images from Firebase when the user logs in
  //    useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //       if (currentUser) {
  //         setUser(currentUser);
  //         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
  //         if (userDoc.exists()) {
  //           const userData = userDoc.data();
  //           const photoURLs = userData.photoURLs || [];

  //           const imagePromises = photoURLs.map(async (photo) => {
  //             const imageRef = ref(storage, photo);
  //             try {
  //               const url = await getDownloadURL(imageRef);
  //               return url;
  //             } catch (error) {
  //               console.error(`Error fetching image ${photo}:`, error);
  //               return null; // Return null if an error occurs
  //             }
  //           });

  //           const fetchedImages = await Promise.all(imagePromises);
  //           setImages(fetchedImages.filter(Boolean)); // Filter out nulls
  //         }
  //       } else {
  //         setUser(null);
  //         setImages([]);
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  // Slider functionality

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [allInterests] = useState([
    { id: 1, label: "Travel" },
    { id: 2, label: "Music" },
    { id: 3, label: "Sports" },
    { id: 4, label: "Food" },
    { id: 5, label: "Technology" },
    { id: 6, label: "Fashion" },
    { id: 7, label: "Fitness" },
    { id: 8, label: "Art" },
  ]);

  // Handlers for the slider navigation
  //  const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  const [lookingFor, setLookingFor] = useState(""); // New state for "Looking For"
  const [eatingHabits, setEatingHabits] = useState(""); // New state for "Eating Habits"
  const [education, setEducation] = useState(""); // New state for "Education"
  const [languages, setLanguages] = useState(""); // New state for "Languages"
  const [relationshipStatus, setRelationshipStatus] = useState(""); // New state for "Relationship Status"

  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("Single"); // Default value
  const [profession, setProfession] = useState("IT / Software Professional"); // Default value
  const [location, setLocation] = useState("");
  const [aboutText, setAboutText] = useState("");

  const handleInterestChange = (interestId) => {
    setSelectedInterests(
      (prevInterests) =>
        prevInterests.includes(interestId)
          ? prevInterests.filter((id) => id !== interestId) // Remove if already selected
          : [...prevInterests, interestId] // Add if not selected
    );
  };

  // Fetch user data from Firestore when the user logs in
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //       if (currentUser) {
  //         setUser({
  //           name: currentUser.displayName || currentUser.email,
  //           email: currentUser.email,
  //           photoURL: currentUser.photoURL || "img/user.jpg", // Default user image
  //         });

  //         // Fetch user details from Firestore
  //         const userDoc = await getDoc(doc(db, "users", currentUser.uid));
  //         if (userDoc.exists()) {
  //           const userData = userDoc.data();
  //           // Set state with user data
  //           setLookingFor(userData.lookingFor || "");
  //           setEatingHabits(userData.eatingHabits || "");
  //           setEducation(userData.education || "");
  //           setLanguages(userData.languages || "");
  //           setRelationshipStatus(userData.relationshipStatus || "");
  //           // Set interests if available
  //           setSelectedInterests(userData.selectedInterests || []);
  //           setGender(userData.gender || ""); // Set gender from Firestore
  //           setMaritalStatus(userData.maritalStatus || "Single"); // Set marital status from Firestore
  //           setProfession(userData.profession || "IT / Software Professional"); // Set profession from Firestore
  //           setLocation(userData.location || ""); // Set location from Firestore
  //           setAboutText(userData.aboutText || ""); // Set about text from Firestore
  //         }
  //       } else {
  //         setUser(null);
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, []);

  // Handle profile update
  //   const handleUpdateProfile = async (e) => {
  //     e.preventDefault();
  //     if (user) {
  //       const userRef = doc(db, "users", auth.currentUser.uid);
  //       await setDoc(
  //         userRef,
  //         {
  //           lookingFor,
  //           eatingHabits,
  //           education,
  //           languages,
  //           relationshipStatus,
  //           selectedInterests: selectedInterests, // Store the array of selected interests
  //         },
  //         { merge: true }
  //       ); // Merge with existing data
  //       alert("Profile updated successfully!");
  //     }
  //   };

  //   const handleUpdateAboutUs = async (e) => {
  //     e.preventDefault();
  //     if (user) {
  //       const userRef = doc(db, "users", auth.currentUser.uid);
  //       await setDoc(
  //         userRef,
  //         {
  //           gender,
  //           maritalStatus,
  //           profession,
  //           location,
  //           aboutText,
  //         },
  //         { merge: true }
  //       ); // Merge with existing data
  //       alert("Profile About us updated successfully!");
  //     }
  //   };

  const interestColors = {
    1: "primary",
    2: "secondary",
    3: "success",
    4: "danger",
    5: "warning",
    6: "info",
    7: "light",
    8: "dark",
  };

  // Image Upload

  const onDrop = (acceptedFiles) => {
    // Update selected files without closing the modal
    setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    setTotalFiles((prev) => prev + acceptedFiles.length); // Set total files for progress calculation
  };

  const handleFileRemove = (file) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file)); // Remove selected file
  };

  const handleUpload = () => {
    return false;
  };
  const handleUpdateProfile = () => {
    return false;
  };

  const handleUpdateAboutUs = () => {
    return false;
  };

  // const handleUpload = () => {
  //   if (selectedFiles.length === 0) return; // No files to upload

  //   setUploadProgress(0); // Reset progress
  //   setCompletedFiles(0); // Reset completed files count

  //   if (auth.currentUser) {
  //     const uid = auth.currentUser.uid; // Get the logged-in user's uid

  //     selectedFiles.forEach((file) => {
  //       const storageRef = ref(storage, `profilePictures/${uid}/${file.name}`); // Unique storage path for each image

  //       // Upload file with progress monitoring
  //       const uploadTask = uploadBytesResumable(storageRef, file);

  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           setUploadProgress((prev) => Math.round(((prev * completedFiles) + progress) / (completedFiles + 1))); // Calculate overall progress
  //         },
  //         (error) => {
  //           console.error("Upload error: ", error);
  //         },
  //         () => {
  //           // Get the download URL and update Firestore
  //           getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //             setUploadedImages((prev) => [...prev, url]); // Append new image URL
  //             const userRef = doc(db, "users", uid); // Use uid for Firestore reference
  //             setDoc(userRef, { photoURLs: [...uploadedImages, url] }, { merge: true });
  //             setCompletedFiles((prev) => prev + 1); // Increment completed files count
  //           });
  //         }
  //       );
  //     });

  //     setSelectedFiles([]); // Clear selected files after starting the upload
  //   } else {
  //     console.error("User is not logged in.");
  //   }
  // };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container-xxl position-relative d-flex p-0">
      <Sidebar />
      {/* Content Start */}
      <div className="content">
        <Navbars />

        <>
          {/* Form Start */}
          <div classname="container-fluid pt-4 px-4">
            <div classname="bg-light text-center rounded p-4">
              <div className="bg-light rounded h-100 p-4">
                <aside className="container">
                  <div className="row">
                    <div className="bg-light rounded">
                      <div className="slider-container">
                        <button onClick={prevSlide} className="prev-button">
                          ❮
                        </button>
                        <div className="slider">
                          {images.length > 0 ? (
                            <img
                              src={images[currentIndex]}
                              alt={`Slide ${currentIndex}`}
                              className="slider-image"
                            />
                          ) : (
                            <img
                              src="img/passport_photo.jpg" // Default placeholder image if no images available
                              alt="Default profile"
                              className="slider-image"
                            />
                          )}
                        </div>
                        <button onClick={nextSlide} className="next-button">
                          ❯
                        </button>
                      </div>
                      <div
                        className="profile-placeholder text-center"
                        onClick={() => setShowProfileModal(true)}
                      >
                        <i className="fa fa-camera camera-icon"></i>
                        <p>Click to upload profile image</p>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="card shadow-sm">
                        <div className="card-body">
                          <div className="profile-info mt-4 text-center">
                            <h3>
                              <strong>Sam,</strong> 25
                              <small id="profile_city_name">Mumbai</small>
                            </h3>
                            {/* {user ? (
                              <h3>
                                <strong>Sam,</strong> 25
                                <small id="profile_city_name">Mumbai</small>
                              </h3>
                            ) : (
                              <p>
                                Please log in to see your profile information.
                              </p>
                            )} */}
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() => setShowEditModal(true)}
                            >
                              Edit
                            </button>
                          </div>

                          {/* New Code Adding */}

                          <div className="table-responsive">
                            <table className="table table-0 custom-table">
                              {/* <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead> */}
                              <tbody>
                                {/* About Us */}
                                <tr>
                                  <th>About Us</th>
                                  <td>
                                    Unminify or minify React JS. If you would
                                    like to download your raw code or your
                                    minified code (.js), you can do so. Share it
                                    via URL as well.
                                  </td>
                                </tr>

                                {/* Relationship Status */}
                                <tr>
                                  <th>Relationship</th>
                                  <td>{relationshipStatus || "Single"}</td>
                                </tr>

                                {/* Looking For */}
                                <tr>
                                  <th>I'm Looking</th>
                                  <td>{lookingFor || "Dating"}</td>
                                </tr>

                                {/* Interests */}
                                <tr>
                                  <th>Interest</th>
                                  <td>
                                    <div className="m-n2">
                                      {selectedInterests.map((interestId) => (
                                        <button
                                          key={interestId}
                                          className={`btn btn-${
                                            interestColors[interestId] ||
                                            "light"
                                          } m-2`}
                                        >
                                          {
                                            allInterests.find(
                                              (interest) =>
                                                interest.id === interestId
                                            )?.label
                                          }
                                        </button>
                                      ))}
                                    </div>
                                  </td>
                                </tr>

                                {/* Education */}
                                <tr>
                                  <th>Education</th>
                                  <td>{education || "Bachelor's Degree"}</td>
                                </tr>

                                {/* Profession */}
                                <tr>
                                  <th>Profession</th>
                                  <td>
                                    {profession || "IT / Software Professional"}
                                  </td>
                                </tr>

                                {/* Eating Habits */}
                                <tr>
                                  <th>Eating</th>
                                  <td>{eatingHabits || "Vegetarian"}</td>
                                </tr>

                                {/* Languages */}
                                <tr>
                                  <th>Languages</th>
                                  <td>
                                    {languages || "English, Hindi, Marathi"}
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            {/* Action Buttons */}
                            <div className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setShowAboutModal(true)}
                              >
                                Edit About Us
                              </button>
                            </div>
                          </div>

                          {/* New Code Adding */}
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Modal for Profile Other Sections */}
                <div
                  className={`modal fade ${showProfileModal ? "show" : ""}`}
                  style={{ display: showProfileModal ? "block" : "none" }}
                  id="profileModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="profileModalLabel"
                  aria-hidden={!showProfileModal}
                >
                  <div
                    className="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="profileModalLabel">
                          Profile Upload
                        </h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => setShowProfileModal(false)}
                        >
                          <span>&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div
                          {...getRootProps()}
                          className={`dropzone ${isDragActive ? "active" : ""}`}
                        >
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here...</p>
                          ) : (
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          )}
                        </div>
                        <div className="selected-files">
                          {selectedFiles.map((file, index) => (
                            <div key={index} className="file-item">
                              <span>{file.name}</span>
                              <button
                                className="remove-button"
                                onClick={() => handleFileRemove(file)}
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                        {totalFiles > 0 && (
                          <div className="progress-bar">
                            <div
                              className="progress"
                              style={{ width: `${uploadProgress}%` }}
                            >
                              {uploadProgress}%{" "}
                              {uploadProgress === 100 && " - Completed!"}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setShowProfileModal(false)}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleUpload}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal for Profile Other Sections */}

                {/* Modal for Editing Other Sections */}
                <div
                  className={`modal fade ${showEditModal ? "show" : ""}`}
                  style={{ display: showEditModal ? "block" : "none" }}
                  id="editModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="editModalLabel"
                  aria-hidden={!showEditModal}
                >
                  <div
                    className="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">
                          Edit Profile
                        </h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => setShowEditModal(false)}
                        >
                          <span>&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleUpdateProfile}>
                          <div className="mb-3">
                            <label
                              htmlFor="lookingforval"
                              className="form-label"
                            >
                              Looking For
                            </label>
                            <select
                              className="form-select form-select-sm mb-3"
                              id="lookingforval"
                              value={lookingFor}
                              onChange={(e) => setLookingFor(e.target.value)}
                            >
                              <option value="">Select...</option>
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
                              <option value="Dating">Dating</option>
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
                            <label htmlFor="eatval" className="form-label">
                              Eating Habits
                            </label>
                            <select
                              className="form-select form-select-sm mb-3"
                              id="eatval"
                              value={eatingHabits}
                              onChange={(e) => setEatingHabits(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="Vegetarian">Vegetarian</option>
                              <option value="Non-vegetarian">
                                Non-vegetarian
                              </option>
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
                              value={education}
                              onChange={(e) => setEducation(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="Higher Secondary / Intermediate">
                                Higher Secondary / Intermediate
                              </option>
                              <option value="Bachelor's Degree">
                                Bachelor's Degree
                              </option>
                              <option value="Master's Degree">
                                Master's Degree
                              </option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="languages" className="form-label">
                              Languages
                            </label>
                            <select
                              className="form-select form-select-sm mb-3"
                              id="languages"
                              value={languages}
                              onChange={(e) => setLanguages(e.target.value)}
                            >
                              <option value="">Select...</option>
                              <option value="English">English</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Angami">Angami</option>
                              <option value="Angika">Angika</option>
                              <option value="Assamese">Assamese</option>
                            </select>
                          </div>

                          {/* <div className="form-group">
                        <label htmlFor="relationshipStatus">
                          Relationship Status
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="relationshipStatus"
                          value={relationshipStatus}
                          onChange={(e) => setRelationshipStatus(e.target.value)}
                          placeholder="Enter your relationship status"
                        />
                      </div> */}

                          <label htmlFor="relationshipStatus">
                            Select Your Interests
                          </label>

                          <div className="interest-checkboxes row p-3">
                            {allInterests.map((interest) => (
                              <div
                                key={interest.id}
                                className="col-6 form-check"
                              >
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id={`interest-${interest.id}`}
                                  checked={selectedInterests.includes(
                                    interest.id
                                  )}
                                  onChange={() =>
                                    handleInterestChange(interest.id)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`interest-${interest.id}`}
                                >
                                  {interest.label}
                                </label>
                              </div>
                            ))}
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Update Profile
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setShowEditModal(false)}
                        >
                          Close
                        </button>
                        {/* <button type="button" className="btn btn-primary">
                          Save changes
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal for Editing "About Us" Section */}
                <div
                  className={`modal fade ${showAboutModal ? "show" : ""}`}
                  style={{ display: showAboutModal ? "block" : "none" }}
                  id="aboutModal"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="aboutModalLabel"
                  aria-hidden={!showAboutModal}
                >
                  <div
                    className="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="aboutModalLabel">
                          Edit About Us
                        </h5>
                        <button
                          type="button"
                          className="close"
                          onClick={() => setShowAboutModal(false)}
                        >
                          <span>&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="gender"
                              className="form-label button-text-color"
                            >
                              Gender
                            </label>
                            <select
                              className="form-control form-border-color"
                              id="gender"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)} // Update state with selected gender
                              required
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="iamval" className="form-label">
                              Marital Status
                            </label>
                            <select
                              className="form-select form-select-sm mb-3"
                              id="iamval"
                              value={maritalStatus}
                              onChange={(e) => setMaritalStatus(e.target.value)} // Update state with selected marital status
                            >
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
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
                              <option value="Single parent">
                                Single parent
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
                              value={profession}
                              onChange={(e) => setProfession(e.target.value)} // Update state with selected profession
                            >
                              <option value="Student">Student</option>
                              <option value="Business Person / Entrepreneur">
                                Business Person / Entrepreneur
                              </option>
                              <option value="Engineering Professional">
                                Engineering Professional
                              </option>
                              <option value="IT / Software Professional">
                                IT / Software Professional
                              </option>
                              <option value="Sales and Marketing">
                                Sales and Marketing
                              </option>
                              <option value="Agriculture">Agriculture</option>
                              <option value="Architect / Urban Planner">
                                Architect / Urban Planner
                              </option>
                              {/* Add more options as needed */}
                            </select>
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="locationInput"
                              className="form-label"
                            >
                              Location
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="locationInput"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)} // Update state with new location
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="aboutInput">About</label>
                            <textarea
                              className="form-control"
                              id="aboutInput"
                              value={aboutText}
                              onChange={(e) => setAboutText(e.target.value)} // Update state with new about text
                              placeholder="Enter about you"
                              rows="3"
                            />
                          </div>

                          <button
                            type="button"
                            className="btn btn-primary mt-5"
                            onClick={handleUpdateAboutUs} // Call update function on button click
                          >
                            Update About Us
                          </button>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => setShowAboutModal(false)}
                        >
                          Close
                        </button>
                        {/* <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setShowAboutModal(false)}
                        >
                          Save changes
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form End */}
        </>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
};

export default EditProfile;
