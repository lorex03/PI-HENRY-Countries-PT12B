import { Link } from "react-router-dom";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import React, { useEffect } from "react";
import { getCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Nav from "../../components/NavBar/NavBar.jsx";
export function Home () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  return (
    <div>
      <Nav />
      <div>
        <CardsContainer />
      </div>
    </div>
  );
}

export default Home;

