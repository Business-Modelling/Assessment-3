import React from 'react'
import 'tw-elements';

const CreateItems = () => {
    return (
        <div className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form>
                <div className="form-group mb-6">
                    <label className="form-label inline-block mb-2 text-gray-700">Item Name</label>
                    <input type="text" className="
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
                    />
                </div>
                <div className="form-group mb-6">

                    <label className="form-label inline-block mb-2 text-gray-700">Category</label>
                    <select className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected>Select menu</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Essential">Essential</option>
                        <option value="Gift">Gift</option>
                    </select>
                </div>
                <label className="form-label inline-block mb-2 text-gray-700">Expiration Date</label>
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="text"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date" />
    <label for="floatingInput" class="text-gray-700">Select a date</label>
  </div>
                <button type="submit" className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add Item</button>
            </form>
        </div>
    )
}

export default CreateItems