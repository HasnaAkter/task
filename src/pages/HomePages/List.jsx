import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [formData, setFormData] = useState({
    name: "",
    profilePicture: null,
    phoneNumber: "",
    description: "",
    birthdate: "",
    activeStatus: true,
  });

  const [inputErrorList, setInputErrorList] = useState({});
  const [addedData, setAddedData] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      profilePicture: formData.profilePicture,
      phoneNumber: formData.phoneNumber,
      description: formData.description,
      birthdate: formData.birthdate,
    };

    axios
      .post(`https://tasks.vitasoftsolutions.com/`, data)
      .then((res) => {
        alert(res.data.message);

        setAddedData([...addedData, formData]);

        setFormData({
          name: "",
          profilePicture: null,
          phoneNumber: "",
          description: "",
          birthdate: "",
          activeStatus: true,
        });

        setIsFormVisible(false);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
          }
        }
      });
  };

  return (
    <div>
      {isFormVisible && (
        <div className="bg-gray-200 min-h-screen flex items-center pt-36 pb-20">
          <div className="w-full">
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Put in your fullname."
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    onChange={handleChange}
                  />
                  <span className="text-danger">{inputErrorList.name}</span>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="profilePicture"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Profile picture
                  </label>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="description"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter a brief description"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="birthdate"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Birthdate
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    placeholder="mm/dd/yyyy"
                    className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    onChange={handleChange}
                  />
                  <span className="text-danger">
                    {inputErrorList.birthdate}
                  </span>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="activeStatus"
                    className="block mb-2 font-bold text-gray-600"
                  >
                    Active status
                  </label>
                  <input
                    type="checkbox"
                    id="activeStatus"
                    name="activeStatus"
                    checked={formData.activeStatus}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-gray-600">Is active</span>
                </div>

               <Link to="form"> <button
                  type="submit"
                  className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
                >
                  Add
                </button></Link>
              </form>
            </div>
          </div>
        </div>
      )}

      {addedData.length > 0 && (
        <div>
          <h2>Added Data</h2>
          <ul>
            {addedData.map((data, index) => (
              <li key={index}>{data.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;
