import React, { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { useParams } from "react-router-dom";


import Axios from "axios";

export const MealStall = (props) => {
  const { name } = useParams();
  const [users, setUsers] = useState([]);
  const loadData = async () => {
    if (props.type == "category") {
      const response = await Axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(response.data);
      setUsers(response.data.categories);
    }
    else if(props.type == "details"){
        const response = await Axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
          );
          console.log(response.data);
          setUsers(response.data.meals);

    }
  };

  useEffect(() => {
    console.log(props.type);
    console.log(name);
    loadData();
  }, [props]);

  return <Category data={users} type={props.type} categorytype={name} />;
};
