import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../actions/car.actions";
import Card from "./car/Card";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadCar, setLoadCar] = useState(true);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carReducer);

  useEffect(() => {
    if (loadCar) {
      dispatch(getCars());
      setLoadCar(false);
    }
  }, [loadCar, dispatch]);
  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(cars[0]) &&
          cars.map((car) => {
            return <Card car={car} key={car._id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread;
