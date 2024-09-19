import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { increament, decreament, increamentByAmount } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className="">
        <h1 className="text-3xl">Counter {count}</h1>
      <div>
        <button 
          onClick={()=>{dispatch(increament())}}
          className="bg-blue-500 text-white px-3 py-1 rounded m-1 hover:bg-blue-600">Increase</button>
        <button 
          onClick={()=>{dispatch(decreament())}}
          className="bg-blue-500 text-white px-3 py-1 rounded m-1 hover:bg-blue-600">Decrease</button>
        <button
          onClick={()=>{dispatch(increamentByAmount(5))}}
          className="bg-blue-500 text-white px-3 py-1 rounded m-1 hover:bg-blue-600">Add 5</button>
      </div>
    </div>
  );
};
