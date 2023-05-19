import Head from "next/head";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import redberryLogo from "../assets/images/RedBerryLogo.png";
import landingPageImage from "../assets/images/LandingPageImage.png";
import Button from "@/components/Button";
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>RedBerry Employee's Tech Support Form</title>
        <meta
          name="description"
          content="RedBerry Employee's technical support"
        />
      </Head>
      <header className="landingHeader">
        <Image src={redberryLogo} alt="RedBerry company logo" />
      </header>
      <section className="landingNavigationSection">
        <Image src={landingPageImage} alt="Landing Image" />
        <div className="LandingNavigationLinkGroup">
        <Button className='landingBtn'>
          <Link href="/EmployeeForm">ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Link>
        </Button>
        <Button className='landingBtn'>
          <Link href="EmployeeFormList">ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</Link>
        </Button>
        </div>
      </section>
    </Fragment>
  );
}
