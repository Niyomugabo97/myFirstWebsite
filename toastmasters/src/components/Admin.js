import React, { useState, useEffect } from "react";

const Admin = () => {
  const [profileImages, setProfileImages] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true); // Simulate admin access

  // Fetch existing images from API
  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => setProfileImages(data.images))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Handle Image Upload
  const handleImageUpload = async (event) => {
    if (!isAdmin) return;

    const formData = new FormData();
    for (const file of event.target.files) {
      formData.append("images", file);
    }

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setProfileImages([...profileImages, ...data.images]); // Update state with new images
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <div className="dashboard">
      <main className="main-content">
        <h1>Admin Dashboard</h1>

        {!isAdmin ? (
          <p>You do not have permission to manage profile images.</p>
        ) : (
          <>
            <h2>Upload Profile Images:</h2>
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

            <div className="profile-gallery">
              {profileImages.length > 0 ? (
                profileImages.map((image, index) => (
                  <div key={index} className="profile-preview">
                    <img
                      src={`http://localhost:5000${image}`}
                      alt={`Profile ${index + 1}`}
                      className="profile-image"
                    />
                  </div>
                ))
              ) : (
                <p>No profile images uploaded</p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Admin;
