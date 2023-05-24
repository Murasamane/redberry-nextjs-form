import { MongoClient } from "mongodb";
import ListLayout from "@/components/Layout/ListLayout";
import ListItemCard from "@/components/ListItemCard";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import backImage from "../../assets/images/BackArrow.png";
const EmployeeFormList = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Employee Forms List</title>
        <meta name="descriptio" content="Employee Forms list" />
      </Head>
      <header className="detailsHeader">
        <Link href="/" className="backBtn">
          <Image src={backImage} alt="back button" />
        </Link>
        <h2>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</h2>
      </header>
      <ListLayout>
        {props.employeeList.map((listItem) => (
          <ListItemCard data={listItem} key={listItem.id} />
        ))}
      </ListLayout>
    </Fragment>
  );
};

export default EmployeeFormList;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://giorgigurgenidze133:E2s8IJYgHXhVaseP@cluster0.mv9ohhm.mongodb.net/redberryForm?retryWrites=true&w=majority"
  );
  const db = client.db();
  const employeeListCollection = db.collection("forms");
  const employeeList = await employeeListCollection.find().toArray();

  return {
    props: {
      employeeList: employeeList.map((item) => ({
        id: item._id.toString(),
        firstName: item.firstName,
        lastName: item.lastName,
        team: item.team,
        position: item.position,
        email: item.email,
        phone: item.phone,
        image: item.image,
        laptopName: item.laptopName,
        brandName: item.brandName,
        cpu: item.cpu,
        cpuCore: item.cpuCore,
        cpuThreads: item.cpuThreads,
        ram: item.ram,
        memory: item.memory,
        date: item.date,
        price: item.price,
        laptopState: item.laptopState,
      })),
    },
    revalidate: 1,
  };
}
