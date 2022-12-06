import React, {useEffect, useState} from 'react';
import Select from "react-tailwindcss-select";

const Home = () => {
  const [categories, setCategories] = useState(null);

  const Items = [
    {
      name: 'bag',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'OOI',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'DFGFV',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VAT: '50%',
    },

  ]

  const itemsBasket = [
    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },
    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },
    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },
    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },
    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },
    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },

    {
      name: 'OUII',
      quantity: 6,
      price: 50,
    },{
      name: 'OUII',
      quantity: 6,
      price: 50,
    },
  ]

  const options = [
    { value: "Luxury", label: "Luxury" },
    { value: "Essential", label: "Essential" },
    { value: "Gift", label: "Gift" }
  ];

  const handleChange = value => {
    setCategories(value);
  };

  useEffect(() => {
    document.title = 'Home';
    setCategories({ value: "Luxury", label: "Luxury" })
  }, []);

  return (
    <>
    <div className='flex justify-between h-full'>
      <div className='flex flex-col w-5/6'>
        <div className='w-5/6 bg-white shadow-xl h-24 flex justify-center items-center fixed '>
          <div className='w-1/4'>
            <Select
              value={categories}
              onChange={handleChange}
              options={options}
              classNames={{
                menu: `absolute bg-white w-full rounded-lg text-lg border border-gray-200`,
                listItem: ({ isSelected }) => (
                  `block transition duration-200 px-2 py-2 cursor-pointer select-none rounded
                  ${
                    isSelected
                      ? `text-white bg-secondary`
                      : `text-gray-500 hover:bg-gray-100 hover:text-secondary`
                  }`
              )
              }}
            />
          </div>
        </div>
        <div className='flex flex-wrap flex-row h-full mt-32'>
          {Items.map(item => {
            return (
              <div className='grow mx-2 mb-4 max-w-lg w-1/4 h-1/5 rounded-lg border border-gray-300 shadow-xl'>
                <div className='flex flex-col p-3 space-y-5'>
                  <div className='text-center font-bold font-Montserrat'>
                    {item.name}
                  </div>
                  <div className='flex justify-between'>
                    <div className='font-Montserrat'>
                      Item Price:
                    </div>
                    <div>
                      {item.price} €
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      Expiration Date:
                    </div>
                    <div>
                    {item.date}
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <div>
                      VAT: 
                    </div>
                    <div>
                    {item.VAT}
                    </div>
                  </div>
                  <button className='w-fit px-3 py-2 self-center rounded-lg bg-secondary text-white font-medium leading-tight shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-midnight active:shadow-lg transition duration-150 ease-in-out'>
                    Add to basket
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-1/6 fixed right-0 h-5/6 border-l border-b bg-white border-gray-200 shadow-inner mx-1 flex pl-3 py-3'>
        <div className='flex flex-col justify-between w-full'>
          <div className='text-center text-lg font-bold my-2'>Basket</div>
          <div className='self-center border-b border-gray-300 w-32 my-2' />
          <div className='my-2 grow overflow-y-auto'>
            {itemsBasket.map(item => {
              return (
                <div className='h-24 flex flex-col mr-2'>
                  <div className='flex justify-between my-2'>
                    <div className='text-md font-bold'>{item.name}</div>
                    <div>x{item.quantity}</div>
                  </div>
                  <div className='self-end'>
                    {item.price} €
                  </div>
                  <div className='self-end text-xs italic'>
                    (VAT included)
                  </div>
                </div>
              )
            })}
          </div>
          <div className='self-center border-b border-gray-300 w-32 my-2' />
          <div className='flex justify-between my-2 mr-2'>
            <div className='text-md font-bold'>Total price:</div>
            <div>7000€</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
