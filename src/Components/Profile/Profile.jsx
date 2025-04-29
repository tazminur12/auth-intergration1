import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  const userKey = user?.email || user?.uid || 'defaultUser';
  const defaultBio = "Passionate developer. Lover of clean UI, modern code, and beautiful user experiences.";

  const [bio, setBio] = useState(() => localStorage.getItem(`bio-${userKey}`) || defaultBio);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedBio = localStorage.getItem(`bio-${userKey}`);
    if (storedBio) setBio(storedBio);
  }, [userKey]);

  const toggleModal = () => setIsOpen(!isOpen);

  const handleSave = () => {
    localStorage.setItem(`bio-${userKey}`, bio);
    console.log("Updated bio:", bio);
    setIsOpen(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      {/* Cover Photo */}
      <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://source.unsplash.com/1600x400/?nature')" }}>
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 bg-white px-4 py-1 text-sm rounded shadow hover:bg-gray-100 transition"
        >
          Edit Profile
        </button>
      </div>

      {/* Profile Image and Info */}
      <div className="p-6 relative">
        <div className="absolute -top-16 left-6">
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        <div className="mt-20 ml-36 sm:ml-40">
          <h2 className="text-2xl font-bold text-gray-800">{user?.displayName || "John Doe"}</h2>
          <p className="text-sm text-gray-600">{user?.email || "johndoe@example.com"}</p>
          <p className="text-xs text-gray-400 mt-1">
            Joined: {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toDateString() : 'N/A'}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 pb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">About</h3>
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{bio}</p>
      </div>

      {/* Edit Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl">
            <h2 className="text-lg font-bold mb-4">Edit Your Profile</h2>
            <label className="block mb-2 text-sm font-medium text-gray-700">Bio</label>
            <textarea
              className="w-full h-28 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
