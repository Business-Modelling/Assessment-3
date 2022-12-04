import React, {useEffect} from 'react'
import ViewItems from './items/ViewItems';

const AdminViewAllItems = () => {

  useEffect(() => {
    document.title = 'Admin view all items';
  }, []);

  return (
    <div>
      <ViewItems/>
    </div>
  )
}

export default AdminViewAllItems
