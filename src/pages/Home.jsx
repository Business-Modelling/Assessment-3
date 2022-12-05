import React, {useEffect} from 'react'

const Home = () => {

  const Items = [
    {
      name: 'bag',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'OOI',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'DFGFV',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
    },
    {
      name: 'BVFE',
      date: '13/25/5655',
      price: '50',
      categories: 'luxury',
      VTA: '50%',
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

  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
    <div className='flex justify-between mt-5 h-full'>
      <div className='w-5/6 flex flex-wrap flex-row h-full'>
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
                    VTA: 
                  </div>
                  <div>
                  {item.VTA}
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
      <div className='bg-gray-50 w-1/6 fixed right-0 h-5/6 border border-gray-200 shadow-inner rounded-lg mx-1 flex pl-3 py-3'>
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
                    (VTA included)
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
