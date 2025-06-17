"use client";
import { useState } from "react";
import { FiEdit, FiLock } from "react-icons/fi";

// Edit User Form Component
export default function EditUserForm({
  user,
  onUpdateUser,
  onCancel,
  isEditing,
  setError,
}) {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
    phone: user.phone,
    country: user.country,
    img: user.img || "",
    password: "", // Password is optional
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await onUpdateUser(formData);
    } catch (err) {
      // Error is handled in parent
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Username *
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={20}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-3 pr-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:bg-black focus:ring-indigo-500 focus:border-transparent appearance-none  "
          >
            <option value="">Select a country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Profile Image URL
          </label>
          <input
            type="url"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com/photo.jpg"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <FiLock className="text-gray-600" />
            <label className="block text-sm font-medium text-gray-300">
              New Password
            </label>
          </div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Leave blank to keep current password"
          />
          <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
        </div>
      </div>

      <div className="flex justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          disabled={isEditing}
          className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-300 cursor-pointer hover:text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isEditing}
          className={`px-5 py-2.5 rounded-lg text-white cursor-pointer ${
            isEditing
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-700 hover:opacity-90"
          } transition-opacity flex items-center gap-2`}
        >
          {isEditing ? (
            <>
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></span>
              Updating...
            </>
          ) : (
            <>
              <FiEdit />
              <span>Update User</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
