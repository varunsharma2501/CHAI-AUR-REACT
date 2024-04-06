import { useState,useEffect } from "react";

export default function useCurrencyInfo(currency) {

    const [data,setData]=useState({});
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch('currency.json');  
            if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
            const jsonData = await response.json();
            setData(jsonData[currency]);
        }
        fetchData();
    },[currency])

    console.log(data);
    return data;
}
