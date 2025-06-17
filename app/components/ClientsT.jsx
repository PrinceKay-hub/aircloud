"use client";

import { useState, useEffect } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";
import { FiTrash2, FiAlertTriangle, FiX, FiEdit, FiLock } from "react-icons/fi";
import SearchCompo from "./SearchCompo";

const ClientsT = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(urlSearch);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null); // { id, name }
  const [isDeleting, setIsDeleting] = useState(false);
  const [editUser, setEditUser] = useState(null); // { user data }
  const [isEditing, setIsEditing] = useState(false);

  // Function to open edit modal
  const handleEditClick = (user) => {
    setEditUser(user);
  };

  // Fetch users with search term
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const url = searchTerm
          ? `/api/users?search=${encodeURIComponent(searchTerm)}`
          : "/api/users";
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  // Update URL when search term changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        params.set("search", searchTerm);
      } else {
        params.delete("search");
      }
      router.push(`?${params.toString()}`, { scroll: false });
    }, 300); // Debounce for 300ms

    return () => clearTimeout(timer);
  }, [searchTerm, router, searchParams]);

  // Handle adding a new user
  const handleAddUser = async (userData) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create user");
      }

      // Update UI with new user
      setUsers([result.user, ...users]);
      setSuccessMessage("User created successfully!");

      // Close modal and clear success message after delay
      setTimeout(() => {
        setIsAddModalOpen(false);
        setSuccessMessage("");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async () => {
    if (!deleteConfirm) return;

    try {
      setIsDeleting(true);
      const response = await fetch(`/api/users/${deleteConfirm.id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete user");
      }

      // Update UI by removing the deleted user
      setUsers(users.filter((user) => user._id !== deleteConfirm.id));
      setSuccessMessage(`User "${deleteConfirm.name}" deleted successfully!`);

      // Clear states
      setDeleteConfirm(null);
      setIsDeleting(false);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.message);
      setIsDeleting(false);
    }
  };

  // Function to update user
  const handleUpdateUser = async (updatedUserData) => {
    try {
      setIsEditing(true);
      const response = await fetch(`/api/users/${editUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUserData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to update user");
      }

      // Update UI with updated user
      setUsers(
        users.map((user) =>
          user._id === editUser._id ? { ...user, ...result.user } : user
        )
      );
      setSuccessMessage("User updated successfully!");

      // Close modal and clear success message after delay
      setTimeout(() => {
        setEditUser(null);
        setIsEditing(false);
        setSuccessMessage("");
      }, 1500);
    } catch (err) {
      setError(err.message);
      setIsEditing(false);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left">
          Clients Table
        </h2>

        <div className="flex gap-3 items-center">
          
          <SearchCompo onChange={(e) => setSearchTerm(e.target.value)}/>

          <button
            onClick={() => setIsAddModalOpen(true)}
            title="Add new user"
            className="bg-indigo-700 hover:bg-indigo-600 text-sm p-1.5 rounded-lg cursor-pointer"
          >
            Add new
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="py-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-300">Loading users...</p>
          </div>
        ) : error ? (
          <div className="py-8 text-center">
            <div className="inline-block p-4 bg-red-50 rounded-lg">
              <p className="text-red-600 font-medium">{error}</p>
              <button
                onClick={fetchUsers}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        ) : users === 0 ? (
          <div className="text-center py-8 text-gray-500">No users found</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                {["Name", "email", "Phone", "Country", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-3 md:px-6 md:py-3 text-left text-xs font-medium
                              text-gray-400 uppercase tracking-wider hidden md:table-cell"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-700">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className={`flex flex-col md:table-row mb-4 md:mb-0 border-b  md:border-b-0
                         border-gray-700 md:border-none p-2 md:p-0`}
                >
                  {/*Mobile display of products */}
                  <td className="md:hidden px-3 py-2">
                    <div className="flex items-center justify-between">
                      <div className="mt-2 text-xs text-gray-300">
                        <div className="text-sm font-medium text-gray-100">
                          Name: {user.username}
                        </div>
                        <div className="text-sm font-medium text-gray-100">
                          Email: {user.email}
                        </div>
                        <div className="text-sm font-medium text-gray-100">
                          Phone: {user.phone}
                        </div>
                        <div className="text-sm font-medium text-gray-100">
                          Country: {user.country}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/*Tablet to Desktop display of products */}
                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-300">
                    <div className="flex items-center">
                      <MdOutlineAccountCircle className="w-[25px] h-[25px]" />
                      <div className="ml-4">{user.username}</div>
                    </div>
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {user.email}
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {user.phone}
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {user.country}
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex space-x-1 ml-2">
                      <button
                        className="text-indigo-500 hover:text-indigo-300 cursor-pointer"
                        onClick={() => handleEditClick(user)}
                        title="Edit user"
                      >
                        <FaRegEdit className="w-[18px] h-[18px]" />
                      </button>
                      <button
                        className="text-red-500 hover:text-red-300 cursor-pointer"
                        onClick={() =>
                          setDeleteConfirm({
                            id: user._id,
                            name: user.username,
                          })
                        }
                        title="delete"
                      >
                        <FaRegTrashAlt className="w-[18px] h-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div
            className="bg-[#1e1e1e] rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <AddUserForm
                onAddUser={handleAddUser}
                successMessage={successMessage}
                setError={setError}
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editUser && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => !isEditing && setEditUser(null)}
        >
          <div
            className="bg-[#1e1e1e] rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1e1e1e] z-10 border-b">
              <div className="flex justify-between items-center p-5">
                <h2 className="text-xl font-bold text-gray-300">Edit User</h2>
                <button
                  onClick={() => setEditUser(null)}
                  disabled={isEditing}
                  className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                >
                  <FiX className="text-xl cursor-pointer text-gray-300 hover:text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-5">
              <EditUserForm
                user={editUser}
                onUpdateUser={handleUpdateUser}
                onCancel={() => setEditUser(null)}
                isEditing={isEditing}
                setError={setError}
              />
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => !isDeleting && setDeleteConfirm(null)}
        >
          <div
            className="bg-[#1e1e1e] rounded-xl shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-center text-red-500 mb-4">
                <FiAlertTriangle className="text-5xl" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-300 mb-2">
                Confirm Deletion
              </h3>
              <p className="text-gray-200 text-center mb-6">
                Are you sure you want to delete{" "}
                <span className="font-semibold">{deleteConfirm.name}</span>?
                This action cannot be undone.
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  disabled={isDeleting}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-white hover:text-gray-700 cursor-pointer hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  disabled={isDeleting}
                  className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white cursor-pointer rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-70"
                >
                  {isDeleting ? (
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Deleting...
                    </span>
                  ) : (
                    <>
                      <FiTrash2 />
                      Delete User
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsT;

function EditUserFormss({ user, onUpdateUser, isEditing, setError }) {
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
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
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
            <label className="block text-sm font-medium text-gray-700">
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

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={() => setEditUser(null)}
          disabled={isEditing}
          className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isEditing}
          className={`px-5 py-2.5 rounded-lg text-white ${
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
