/*import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, selectCount, incrementAsync } from "./orderSlice";

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  //const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>

      </div>
    </div>
  );
}*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
} from './counterSlice';

export default function Order() {
  const dispatch = useDispatch();


  return (
    <div>
      <div>
      
       
      </div>
    </div>
  );
}
