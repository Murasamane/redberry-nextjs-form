import { MongoClient, ObjectId } from "mongodb";
import SpecificationDetail from "@/components/SpecificationsDetail";
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import backImage from "../../assets/images/backArrow.png";
const DetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{`${props.data.firstName} ${props.data.lastName}'s Detail Information`}</title>
        <meta
          name="description"
          content={`${props.data.firstName} ${props.data.lastName}'s Detail Information Page`}
        />
      </Head>
      <header className="detailsHeader">
        <Link href="EmployeeFormList" className="backBtn">
          <Image src={backImage} alt="back button" />
        </Link>
        <h2>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h2>
      </header>
      <SpecificationDetail data={props.data}/>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://giorgigurgenidze133:E2s8IJYgHXhVaseP@cluster0.mv9ohhm.mongodb.net/redberryForm?retryWrites=true&w=majority"
  );
  const db = client.db();
  const formsCollection = db.collection("forms");
  const form = await formsCollection.find({}, { _id: 1 }).toArray();
  console.log(form);
  await client.close();

  return {
    fallback: "blocking",
    paths: form.map((form) => ({
      params: { formId: form._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const formId = context.params.formId;
  const client = await MongoClient.connect(
    "mongodb+srv://giorgigurgenidze133:E2s8IJYgHXhVaseP@cluster0.mv9ohhm.mongodb.net/redberryForm?retryWrites=true&w=majority"
  );
  const db = client.db();
  const formsCollection = db.collection("forms");

  const selectedForm = await formsCollection.findOne({
    _id: new ObjectId(formId),
  });

  client.close();

  return {
    props: {
      data: {
        id: selectedForm._id.toString(),
        firstName: selectedForm.firstName,
        lastName: selectedForm.lastName,
        team: selectedForm.team,
        position: selectedForm.position,
        email: selectedForm.email,
        phone: selectedForm.phone,
        image: selectedForm.image,
        laptopName: selectedForm.laptopName,
        brandName: selectedForm.brandName,
        cpu: selectedForm.cpu,
        cpuCore: selectedForm.cpuCore,
        cpuThreads: selectedForm.cpuThreads,
        ram: selectedForm.ram,
        memory: selectedForm.memory,
        date: selectedForm.date,
        price: selectedForm.price,
        laptopState: selectedForm.laptopState,
      },
    },
  };
}
export default DetailsPage;
