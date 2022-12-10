import React, {useEffect, useState} from 'react';
import Select from "react-tailwindcss-select";
import BasketPrice from '../components/BasketPrice';
import CardMarket from '../components/CardMarket';
import Divider from '../components/Divider';
import ItemBasket from '../components/ItemBasket';
import {collection, getDocs, query, where} from "firebase/firestore";
import {firestore} from "../firebase";
import Swal from "sweetalert2";

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState([]);

  const fetchPost = async (type) => {
    await getDocs(query(
        collection(firestore, "items"),
        where("type", "==", type)))
        .then((querySnapshot) => {
          const newData = querySnapshot.docs
              .map((doc) => ({ ...doc.data(), id: doc.id }));
          setItems(newData);
        })
  }
  useEffect(() => {
    fetchPost("Luxury");
  }, [])

  const [basketList, setBasketList] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("basketListStorage"))
    const initialValue = saved
    return initialValue || []
  })

  function calculate(type, quantity) {
    if (type === "Luxury")
      Swal.fire("It will cost you " + 60*quantity + "€")
    if (type === "Essential")
      Swal.fire("It will cost you " + 33*quantity + "€")
    if (type === "Gift")
      Swal.fire("It will cost you " + 21*quantity + "€")
  }

  function addItemToBasket(name, vat, price, quantity=1) {
    const tva = {'5%': 1.05, '10%':1.10, '20%':1.20}
    setBasketList([...basketList, {
      name:name,
      vat:vat,
      price:price*tva[vat]*quantity,
      quantity:quantity
    }])
  }

  function checkVAT(type){
    if (type === "Luxury")
        return "20%"
    if (type === "Essential")
        return "10%"
    if (type === "Gift")
        return "5%"
  }

  function checkPrice(type){
    if (type === "Luxury")
      return "50"
    if (type === "Essential")
      return "30"
    if (type === "Gift")
      return "20"
  }

  function clearBasket() {
    setBasketList([])
  }

  useEffect(() => {
    localStorage.setItem("basketListStorage", JSON.stringify(basketList))
  }, [basketList])

  const options = [
    { value: "Luxury", label: "Luxury" },
    { value: "Essential", label: "Essential" },
    { value: "Gift", label: "Gift" }
  ];

  const handleChange = value => {
    fetchPost(value.value);
    setCategories(value);
  };

  useEffect(() => {
    document.title = 'Home';
    setCategories({ value: "Luxury", label: "Luxury" })
  }, []);

  function basketPrice(itemBasket) {
    let price = 0
    itemBasket.map((item) => price += item.price)

    return price
  }

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
          {items.map((item, idx) => {
            return (
              <CardMarket key={idx} name={item.name}  price={checkPrice(item.type)} date={item.expi} vat={checkVAT(item.type)} quantity={item.quantity}
                addItemToBasket = {addItemToBasket} calculate={calculate} type={item.type}
              />
            )
          })}
        </div>
      </div>
      <div className='w-1/6 fixed right-0 h-5/6 border-l border-b bg-white border-gray-200 shadow-inner mx-1 flex px-3 py-3'>
        <div className='flex flex-col justify-between w-full'>
          <div className='text-center text-lg font-bold my-2'>Basket</div>
          <Divider />
          <div className='my-2 grow overflow-y-auto'>
            {basketList.map((item, idx) => {
              return (
                <ItemBasket key={idx} idx={idx} name={item.name} vat={item.vat} quantity={item.quantity} price={item.price}/>
              )
            })}
          </div>
          <button onClick={clearBasket} className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Clear Basket</button>
          <Divider />
          <BasketPrice price={basketPrice(basketList)} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
