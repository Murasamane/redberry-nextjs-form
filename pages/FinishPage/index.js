import FinishPageLayout from "@/components/Layout/FinishPageLayout";
import Image from "next/image";
import finishImage from "../../assets/images/finishImage.png";
import Link from "next/link";
const FinishPage = () => {
  return (
    <FinishPageLayout>
      <div className="finishModal">
        <Image src={finishImage} alt="finish image" />
        <h2 className="finishHeading">ჩანაწერი დამატებულია!</h2>
        <div className='finishPageLinkGroup'>
          <Link href="EmployeeFormList" className="listLink">სიაში გადაყვანა</Link>
          <Link href="/" className="mainLink">მთავარი</Link>
        </div>
      </div>
    </FinishPageLayout>
  );
};

export default FinishPage;
