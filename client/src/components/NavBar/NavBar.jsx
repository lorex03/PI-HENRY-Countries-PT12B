import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../NavBar/NavBar.module.css";
import { connect, useDispatch } from "react-redux";
import { getCountries,orderAlpha,orderCont,orderAlphaRev,showActiv,orderPop,orderPopRev,
} from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";


const NavBar = ({
  orderAlpha,getCountries, orderAlphaRev,orderCont, showActiv, orderPop, orderPopRev,
}) => {
  const [sort, setOrder] = useState("");
  const [region, setRegion] = useState("");
  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (region) {
      getCountries();
      if (region !== "all") {
        setTimeout(() => {
          dispatch(orderCont(region));
        }, 20);
      }
    }
  }, [region]);

  useEffect(() => {
    if (sort === "all") getCountries();
    else if (sort === "a-z") orderAlpha();
    else if (sort === "z-a") orderAlphaRev();
    else if (sort === "↑ population") orderPop();
    else if (sort === "↓ population") orderPopRev();
  }, [sort]);

  const activityHandler = (e) => {
    e.preventDefault();

    setActivity(e.target.value);
  };

  const searchActHandler = (e) => {
    e.preventDefault();
    getCountries();
    setTimeout(() => {
      dispatch(showActiv(activity));
    }, 200);

    console.log(activity);
    setActivity("");
  };

  return (
    <div className={style.navBarContainer} >
      <Link to="/" >
        <p>Welcome LOGO</p>
      </Link>
      <div >
        <p>Sort by</p>
        <select onChange={(event) => setOrder(event.target.value)}>
          <option value="all">-</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="↑ population">↑ population</option>
          <option value="↓ population">↓ population</option>
        </select>
        <SearchBar />
      </div>
      <div >
        <p>Filter by Continent</p>

        <div>
          <select onChange={(event) => setRegion(event.target.value)}>
            <option value="all">All</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Asia">Asia</option>
          </select>
        </div>
      </div>
      <div>
        <label>Activity</label>
        <form>
          <input
           
            placeholder="Search your activity."
            type="text"
            autocomplete="off"
            value={activity}
            onChange={activityHandler}
          />
          <button  onClick={searchActHandler}>
            Search
          </button>
        </form>
      </div>

      <Link to="/activities" >
        <p>CREATE AN ACTIVITY</p>
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderAlpha: () => dispatch(orderAlpha()),
    getCountries: () => dispatch(getCountries()),
    orderCont: (region) => dispatch(orderCont(region)),
    orderAlphaRev: () => dispatch(orderAlphaRev()),
    showActiv: (payload) => dispatch(showActiv(payload)),
    orderPop: () => dispatch(orderPop()),
    orderPopRev: () => dispatch(orderPopRev()),
  };
};
const mapStateToProps = (state) => {
  return {
    countries: state.countries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
                                      



















//el input es donde se ingresa el texto y el button donde yo clickeo placeholder es el texto que se ve en el fondo



//import {Link} from "react-router-dom"
//import style from "./NavBar.module.css"
//const NavBar =() =>{
//return (
//<div className={style.mainContainer}>

//<Link to = "/home">HOME  </Link>

//<Link to = "/create">FORM  </Link>

//</div>
//)

//}
//export default NavBar;
