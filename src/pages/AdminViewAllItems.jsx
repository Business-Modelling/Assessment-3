import React, {useEffect} from 'react'

const AdminViewAllItems = () => {

  useEffect(() => {
    document.title = 'Admin view all items';
  }, []);

  return (
    <div>
      View all items
    </div>
  )
}

export default AdminViewAllItems
