import  { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState([
    { id: 1, name: "Hasna", profilePicture: "..", phoneNumber: "22", description: "ok", date: "01-01-2000", done: true },
    { id: 2, name: "Hena", profilePicture: "..", phoneNumber: "22", description: "ok", date: "02-01-2000", done: false },
    { id: 3, name: "Ena", profilePicture: "..", phoneNumber: "22", description: "ok", date: "03-01-2000", done: true },
    { id: 4, name: "Diya", profilePicture: "..", phoneNumber: "22", description: "ok", date: "04-01-2000", done: false },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    profilePicture: "",
    phoneNumber: "",
    description: "",
    date: "",
    done: false,
  });

  const [editItem, setEditItem] = useState(null);

  const handleEdit = (id) => {
    setEditItem(id);
  };

  const handleSaveEdit = () => {
    
    setEditItem(null); 
  };

  const handleCancelEdit = () => {
    setEditItem(null);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAddRow = () => {
    
    setData([
      ...data,
      {
        id: data.length + 1,
        name: formData.name,
        profilePicture: formData.profilePicture,
        phoneNumber: formData.phoneNumber,
        description: formData.description,
        date: formData.date,
        done: formData.done,
      },
    ]);
    setFormData({
      name: "",
      profilePicture: "",
      phoneNumber: "",
      description: "",
      date: "",
      done: false,
    });
  };

  return (
    <div className="p-8 md:p-20">
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Table</h2>
        <Link to="list" className="btn uppercase bg-purple-200 font-bold">
          Create New +
        </Link>
        <div className="shadow overflow-x-auto border-b border-gray-400 sm:rounded-lg">
          <table className="w-full table-fixed border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2 sm:w-1/6">Name</th>
                <th className="border border-gray-400 p-2 sm:w-1/6">Profile Picture</th>
                <th className="border border-gray-400 p-2 sm:w-1/6">Phone Number</th>
                <th className="border border-gray-400 p-2 sm:w-1/6">Description</th>
                <th className="border border-gray-400 p-2 sm:w-1/6">Birthdate</th>
                <th className="border border-gray-400 p-2 sm:w-1/6">Active Status</th>
                <th className="border border-gray-400 p-2 sm:w-1/6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border border-gray-400">
                  <td className="border border-gray-400 p-2">
                    {editItem === item.id ? <input type="text" value={item.name} /> : item.name}
                  </td>
                  <td className="border border-gray-400 p-2">{item.profilePicture}</td>
                  <td className="border border-gray-400 p-2">{item.phoneNumber}</td>
                  <td className="border border-gray-400 p-2">{item.description}</td>
                  <td className="border border-gray-400 p-2">{item.date}</td>
                  <td className="border border-gray-400 p-2">{item.done ? "Active" : "Inactive"}</td>
                  <td className="border border-gray-400 p-2 flex">
                    {editItem === item.id ? (
                      <>
                        <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleSaveEdit}>
                          Save
                        </button>
                        <button className="bg-gray-400 text-white px-2 py-1 rounded ml-2" onClick={handleCancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleEdit(item.id)}>
                        Edit
                      </button>
                    )}
                    <button className="bg-red-500 text-white px-2 py-1 rounded ml-2" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              
              <tr>
                <td className="border border-gray-400 p-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </td>
                <td className="border border-gray-400 p-2">
                  <input
                    type="text"
                    placeholder="Profile Picture"
                    value={formData.profilePicture}
                    onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })}
                  />
                </td>
                <td className="border border-gray-400 p-2">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </td>
                <td className="border border-gray-400 p-2">
                  <input
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </td>
                <td className="border border-gray-400 p-2">
                  <input
                    type="text"
                    placeholder="Birthdate"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </td>
                <td className="border border-gray-400 p-2">
                  <input
                    type="checkbox"
                    checked={formData.done}
                    onChange={(e) => setFormData({ ...formData, done: e.target.checked })}
                  />
                </td>
                <td className="border border-gray-400 p-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleAddRow}>
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Form;
