import React, {useEffect} from 'react'

const AdminHome = () => {

  /*useEffect(() => {
    document.title = 'Admin Home';
  }, []);*/

  const toHome = () => {
    document.location.href = "/"
  }

  return (
    <>
      {/*<button onClick={toHome} className="fixed top-5 right-0 mr-64 text-white bg-red-700 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Disconnect</button>*/}
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
