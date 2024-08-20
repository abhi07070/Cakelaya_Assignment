import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosPeople } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";

const Home = () => {
  const [ordersByMonth, setOrdersByMonth] = useState([]);
  const [ordersByCity, setOrdersByCity] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders/ordersByMonth")
      .then((response) => {
        setOrdersByMonth(response.data);
        setSelectedMonth(response.data[0]?.month);
      })
      .catch((error) => {
        console.error("Error fetching orders by month:", error);
      });

    axios
      .get("http://localhost:8000/api/orders/ordersByCity")
      .then((response) => {
        setOrdersByCity(response.data);
        setSelectedCity(response.data[0]?.city);
      })
      .catch((error) => {
        console.error("Error fetching orders by city:", error);
      });
  }, []);

  const selectedMonthData = ordersByMonth.find(
    (data) => data.month === selectedMonth
  );
  const selectedCityData = ordersByCity.find(
    (data) => data.city === selectedCity
  );

  return (
    <div>
      <div className="flex gap-4">
        <select
          className="p-2 shadow-2xl rounded-xl outline-none"
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {ordersByMonth.map((data, index) => (
            <option key={index} value={data.month}>
              {data.month}
            </option>
          ))}
        </select>
        <select
          className="p-2 shadow-2xl rounded-xl outline-none"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {ordersByCity.map((data, index) => (
            <option key={index} value={data.city}>
              {data.city}
            </option>
          ))}
        </select>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-8">
        <div className="bg-white w-[265px] h-[170px] shadow-xl flex justify-between items-center p-6 rounded-2xl ">
          <div className="bg-[#FF1616] bg-opacity-15 text-white p-4 rounded-full relative">
            <IoIosPeople size={60} />
            <div className="absolute top-14 right-4 bg-[#FF1616] rounded-full p-1">
              <IoPeopleOutline size={15} />
            </div>
          </div>
          <div className="w-1/2 float-end">
            <span className="text-3xl font-bold">
              {selectedMonthData?.orders || 0}
            </span>
            <p className="text-black/80">
              Orders in {selectedMonth} {selectedMonthData?.year}
            </p>
          </div>
        </div>

        <div className="bg-white w-[265px] h-[170px] shadow-xl flex justify-between items-center p-6 rounded-2xl">
          <div className="bg-[#FF1616] bg-opacity-15 text-white p-4 rounded-full relative">
            <IoIosPeople size={60} />
            <div className="absolute top-14 right-4 bg-[#FF1616] rounded-full p-1">
              <IoPeopleOutline size={15} />
            </div>
          </div>
          <div className="w-1/2">
            <span className="text-3xl font-bold">
              {selectedCityData?.orders || 0}
            </span>
            <p className="text-black/80">Orders in {selectedCity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
