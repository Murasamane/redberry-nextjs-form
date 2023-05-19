import Link from "next/link";
import Image from "next/image";
import classes from "./MainHeader.module.css";
import BackArrow from "../assets/images/BackArrow.png";
import { useRouter } from "next/router";
const MainHeader = () => {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.backBtn}>
        <Image src={BackArrow} alt="Back button" />
      </Link>
      <nav className={classes.mainNavigation}>
        <ul className={classes.mainNavigationlist}>
          <li className={classes.mainNavItem}>
            <Link
              href="/EmployeeForm"
              className={`${pathname === "EmployeeForm" ? classes.active : ''}`}
            >
              თანამშრომლის ინფო
            </Link>
          </li>
          <li className={classes.mainNavItem}>
            <Link
              href="/SpecificationForm"
              className={`${pathname === "SpecificationForm" ? classes.active : ''}`}
            >
              ლეპტოპის მახასიათებლები
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
