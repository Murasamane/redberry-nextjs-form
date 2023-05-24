import classes from "./ListItemCard.module.css";
import placeholderImage from '../assets/images/placeholderImage.png'
import Image from "next/image";
import { useRouter } from "next/router";
const ListItemCard = (props) => {
  const router = useRouter()

  const showDetailsHandler = ()=>{
    router.push('/' + props.data.id)
  }
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <Image src={props.data.image} width='200' height='200' alt="card image"/>
      </div>
      <div className={classes.textContainer}>
        <p className={classes.fullName}>{props.data.firstName} {props.data.lastName}</p>
        <p className={classes.cpuInfo}>{props.data.cpu}</p>
        <div>
        <button className={classes.linkBtn} onClick={showDetailsHandler}>მეტის ნახვა</button>
        </div>
      </div>
    </div>
  );
};

export default ListItemCard;
