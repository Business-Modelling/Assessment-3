import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { firestore } from "../../firebase";

const ViewItems = () => {

    const [items, setItems] = useState([]);

    const fetchPost = async () => {
        await getDocs(collection(firestore, "items"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setItems(newData);
                console.log(items, newData);
            })
    }
    useEffect(() => {
        fetchPost();
    }, [])

    const deleteItem = async event => {
        //setItems(items.filter((item, idx) => idx !== Number(event.currentTarget.id)));
        try {

            await deleteDoc(doc(firestore, "items", items[event.currentTarget.id].id))
            fetchPost();
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div>
                <button onClick={() => document.location.href = "/AdminHome"} className="
      px-6
      py-2.5
      m-8
      bg-secondary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primary hover:shadow-lg
      focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-midnight active:shadow-lg
      transition
      duration-150
      ease-in-out">Return</button>
            </div>
            <div className='flex flex-wrap justify-center'>

                {items?.map((item, i) => (
                    <div key={i} className="p-6 rounded-lg shadow-lg m-6 bg-white w-2/6 space-x-6">
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Category : {item.type}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Quantity : {item.quantity}
                        </p>
                        <p className="text-gray-700 text-base mb-4">
                            Expiration Date : {item.expi}
                        </p>
                        <button type="button" id={i} onClick={deleteItem} className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ViewItems