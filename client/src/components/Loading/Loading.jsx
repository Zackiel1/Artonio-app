import style from "./Loading.module.css";

const Loading = ({size}) => {
    //Donde lo importes debes pasarle como props a size={50px} por ejemplo o el tamaño que desees
    return(
        <div className={style.loading} style={{height: size, width: size}}>
            
        </div>
    );
};

export default Loading;
