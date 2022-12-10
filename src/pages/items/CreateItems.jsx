import React, { useEffect, useState } from "react";
import "tw-elements";
import { firestore } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import Swal from "sweetalert2";
import Select from "react-tailwindcss-select";

const CreateItems = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [expi, setExpi] = useState("");

  const options = [
    { value: "Luxury", label: "Luxury" },
    { value: "Essential", label: "Essential" },
    { value: "Gift", label: "Gift" },
  ];

  useEffect(() => {
    setCategories({ value: "Luxury", label: "Luxury" });
  }, []);

  const handleChange = (value) => {
    setCategories(value);
  };

  const ref = collection(firestore, "items");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      name: name,
      type: categories.value,
      quantity: quantity,
      expi: expi,
    };
    try {
      addDoc(ref, data);
      setName("");
      setExpi("");
      setQuantity("");
      setCategories({ value: "Luxury", label: "Luxury" });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "An error occur",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="justify-left">
        <button
          onClick={() => (document.location.href = "/AdminHome")}
          className="
      px-6
      py-2.5
      m-8
      bg-secondary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-midnight active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Return
        </button>
      </div>
      <div className="flex flex-col justify-center items-center content-center pt-32 text-center space-x-24">
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Item Name
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="NameItem"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Category
            </label>
            <Select
              value={categories}
              onChange={handleChange}
              options={options}
              classNames={{
                menu: `absolute bg-white w-full rounded-lg text-md border border-gray-200`,
                listItem: ({ isSelected }) =>
                  `block transition duration-200 px-2 py-2 cursor-pointer select-none rounded
                  ${
                    isSelected
                      ? `text-white bg-secondary`
                      : `text-gray-500 hover:bg-gray-100 hover:text-secondary`
                  }`,
              }}
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Quantity Item
            </label>
            <input
              type="number"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="QuantityItem"
              placeholder="5"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <label className="form-label inline-block mb-2 text-gray-700">
            Expiration Date
          </label>
          <div className="datepicker relative form-floating mb-3 xl:w-96">
            <input
              type="date"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date: dd/mm/yyyy"
              value={expi}
              onChange={(e) => setExpi(e.target.value)}
              data-mdb-toggle="datepicker"
              required
            />
            <label htmlFor="floatingInput" className="text-gray-700">
              Select a date
            </label>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-secondary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-midnight active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateItems;
