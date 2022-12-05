import React, {useEffect} from 'react'
import CreateItems from './items/CreateItems';

const AdminAddItems = () => {

  /*useEffect(() => {
    document.title = 'Admin add items';
  }, []);*/

  const toHome = () => {
    document.location.href = "/"
  }

  return (
    <>
      {/*<button onClick={toHome} className="fixed top-5 right-0 mr-64 text-white bg-red-700 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Disconnect</button>*/}
      <div>
        <CreateItems/>
      </div>
    </>
  )
}

export default AdminAddItems