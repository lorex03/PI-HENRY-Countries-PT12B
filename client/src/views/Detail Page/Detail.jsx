import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import  Activity  from "../../components/CardsContainer/ActivDetail/ActivDetail";
import style from "../Detail Page/Detail.module.css";

//"../Countries/ActivDetail";
const Detail = () => {
  const countryDetail = useSelector((state) => state.countryDetail);
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);
 



// este es para dentro de mi card que me manda el detalle del pais

 

  return (
    <div className={style.all}>
      <button className={style.butn}>
      <Link className={style.link} to="/home" >Back to countries</Link></button>
      <div className={style.countryContainer}>
        <h1>{countryDetail.name}</h1>
        <h3>{countryDetail.id}</h3>
        <div className={style.imgContainer}>
          <img src={countryDetail.flags} alt="No img" />
        </div>
        <h4>Region: {countryDetail.continent}</h4>
        <h5>Subregion: {countryDetail.subregion}</h5>
        <h5>Capital: {countryDetail.capital}</h5>
        <h5>Area: {countryDetail.area}</h5>
        <h5>Population: {countryDetail.population} Hab. </h5>
        <div className={style.activity}>
        <Activity countryName={countryDetail.name} activities={countryDetail.activities}/></div>
      </div>
      
    </div>
  );
};
export default Detail;



//  <ActivDetail activities={activnames}/>

