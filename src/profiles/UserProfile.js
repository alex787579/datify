import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; // Import useParams
import Sidebar from "../layout/Sidebars";
import Navbars from "../layout/Navbars";
import "./ImageSlider.css";
import "./ProfileView.css";
import { auth, db, storage } from "../firebase"; 
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage"; 
import { useDropzone } from "react-dropzone"; // Import necessary functions

const UserProfile = () => {
  const { userId } = useParams(); // Get userId from URL
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser(userData);
        
        const photoURLs = userData.photoURLs || [];
        const imagePromises = photoURLs.map(async (photo) => {
          const imageRef = ref(storage, photo);
          try {
            const url = await getDownloadURL(imageRef);
            return url;
          } catch (error) {
            console.error(`Error fetching image ${photo}:`, error);
            return null; 
          }
        });

        const fetchedImages = await Promise.all(imagePromises);
        setImages(fetchedImages.filter(Boolean)); // Filter out nulls
      }
    };

    fetchUserProfile();
  }, [userId]); // Run effect when userId changes

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

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div className="container-fluid pt-4 px-4">
          <div className="bg-light text-center rounded p-4">
            <div className="slider-container">
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
            </div>
            <div className="mt-3">
              {images.length > 1 && (
                <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}>
                  Previous
                </button>
              )}
              {images.length > 1 && (
                <button onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
                  Next
                </button>
              )}
            </div>
          </div>

          <div className="mt-4">
            <h2>{user?.name}</h2>
            <p>Age: {user?.age}</p>
            <p>Interests:</p>
            <ul>
              {user?.selectedInterests.map((id) => (
                <li key={id} className={`badge badge-${interestColors[id] || "secondary"}`}>
                  {allInterests.find((interest) => interest.id === id)?.label}
                </li>
              ))}
            </ul>
            {/* Other profile details can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
