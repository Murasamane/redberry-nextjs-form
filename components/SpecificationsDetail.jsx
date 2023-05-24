import { Fragment } from "react";
import Image from "next/image";
import placeholderImage from "../assets/images/detailPlaceholderImage.png";
import classes from "./SpecificationsDetail.module.css";
const SpecificationDetail = (props) => {
  return (
    <Fragment>
      <section className={classes.detailsSection}>
            <div className={classes.container}>
            <div className={classes.gridContainer}>
          <Image src={props.data.image} width='400' height='400' alt="detail image" />
          <div className={classes.propertyContainer}>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>სახელი:</p>
              <p className={classes.properties}>
                {props.data.firstName} {props.data.lastName}
              </p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>თიმი:</p>
              <p className={classes.properties}>{props.data.team}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>პოზიცია:</p>
              <p className={classes.properties}>{props.data.position}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>მეილი:</p>
              <p className={classes.properties}>{props.data.email}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>ტელეფონი:</p>
              <p className={classes.properties}>{props.data.phone}</p>
            </div>
          </div>
        </div>
        <div className={classes.underline}></div>

        <div className={classes.gridContainer}>
          <div className={classes.propertyContainer}>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>ლეპტოპის სახელი:</p>
              <p className={classes.properties}>{props.data.laptopName}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>ლეპტოპის ბრენდი:</p>
              <p className={classes.properties}>{props.data.brandName}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>RAM:</p>
              <p className={classes.properties}>{props.data.ram}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>მეხსიერების ტიპი:</p>
              <p className={classes.properties}>{props.data.memory}</p>
            </div>
          </div>

          <div className={classes.propertyContainer}>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>CPU:</p>
              <p className={classes.properties}>{props.data.cpu}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>CPU-ს ბირთვი:</p>
              <p className={classes.properties}>{props.data.cpuCore}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>CPU-ს ნაკადი:</p>
              <p className={classes.properties}>{props.data.cpuThreads}</p>
            </div>
          </div>
        </div>

        <div className={classes.underline}></div>

        <div className={classes.gridContainer}>
          <div className={classes.propertyContainer}>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>ლეპტოპის მდომარეობა:</p>
              <p className={classes.properties}>{props.data.laptopState}</p>
            </div>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>ლეპტოპის ფასი:</p>
              <p className={classes.properties}>{props.data.price}</p>
            </div>
          </div>

          <div className={classes.propertyContainer}>
            <div className={classes.propertiesContainers}>
              <p className={classes.properties}>შეძენის რიცხვი:</p>
              <p className={classes.properties}>{props.data.date}</p>
            </div>
          </div>
        </div>
            </div>
      </section>
    </Fragment>
  );
};

export default SpecificationDetail;
