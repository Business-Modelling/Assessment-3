import React, {useEffect} from 'react'
import CreateItems from './items/CreateItems';

const AdminAddItems = () => {

  useEffect(() => {
    document.title = 'Admin add items';
  }, []);

  return (
    <div>
      <CreateItems/>
    </div>
  )
}

export default AdminAddItems
