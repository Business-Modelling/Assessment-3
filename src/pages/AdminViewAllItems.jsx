import React, {useEffect} from 'react'
import ViewItems from './items/ViewItems';

const AdminViewAllItems = () => {

  useEffect(() => {
    document.title = 'Admin view all items';
  }, []);

  const toHome = () => {
    document.location.href = "/"
  }


  return (
    <>
      <button onClick={toHome} className="fixed top-5 right-0 mr-64 text-white bg-red-700 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Disconnect</button>
      <div>
        <ViewItems/>
      </div>
    </>
  )
}

export default AdminViewAllItems
