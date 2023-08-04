import style from "../Acitivites/SmallCountry.module.css"


export const SmallCountry = ({name, flags, id}) => {


    return (
        <div>
            <div>
                 
                <img className={style.imgContainer}src={flags}/>
                <p className={style.text}>{name}</p>
                <p>{id}</p>

    
                
            </div>
        </div>
    )
}
