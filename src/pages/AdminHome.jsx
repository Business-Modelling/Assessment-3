import React, {useEffect} from 'react'

const AdminHome = () => {

  useEffect(() => {
    document.title = 'Admin Home';
  }, []);

  return (
    <>
      <div className='flex flex-row justify-center items-center content-center pt-72 text-center space-x-24'>
        <a href="/AdminAddItems">
          <div className="flex justify-center items-center content-center mb-6 w-48 h-48 border-2 border-secondary rounded-lg shadow-2xl hover:shadow-none hover:bg-gray-200">
            Add items
          </div>
        </a>
        <a href="/AdminViewAllItems">
          <div className="flex justify-center items-center content-center mb-6 w-48 h-48 border-2 border-secondary rounded-lg shadow-2xl hover:shadow-none hover:bg-gray-200">
            View all items
          </div>
        </a>
      </div>
    </>
  )
}

export default AdminHome
