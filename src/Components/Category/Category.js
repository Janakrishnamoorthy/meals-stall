import React, { useEffect, useState } from "react";
import { Home } from "../Home/Home";
import "./Category.css";
import { useNavigate } from "react-router-dom";
// import { imgContext } from "../../App";

export const Category = (props) => {
  // const {setImage} = useContext(imgContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(props.data);
  }, [props]);

  return (
    <div>
      {/* <h1>Welcome to Meal's Stall</h1> */}
      <Home
        categoryname={
          props.type == "category" ? (
            <p className="p-category">
              Meal <span>Stall</span>{" "}
            </p>
          ) : (
            props.categorytype
          )
        }
      />
      <div
        className={`main-div ${props.type == "category" ? "main-div-2" : ""}`}
      >
        {users.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (props.type == "category") {
                // setImage(item.strCategoryThumb);
                navigate(`meal_details/${item.strCategory}`);
              }
              console.log(item);
            }}
            className="sub-div"
          >
            <img
              src={item.strCategoryThumb || item.strMealThumb}
              className="div-img"
            />
            <h3>{item.strCategory || item.strMeal}</h3>
            <p>
              {item.strCategoryDescription ||
                "A non-vegetarian diet also has several health benefits because this type of food is rich in protein and vitamin B. Non-vegetarian food strengthens our muscles and helps them grow faster. It also helps to maintain body stamina and hemoglobin."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
