import React from "react";
import { RiCarFill } from "react-icons/ri";

import hamza from "../../assets/images/hamza.jpeg";
import { GrLocation } from "react-icons/gr";
import { BsFlagFill, BsPersonCircle } from "react-icons/bs";
import { BiMobile, BiPhoneCall } from "react-icons/bi";
import AppLayoutNew from "../../layout/AppLayoutNew";
import PageHeader from "../../shared/PageHeader";

const DeliveryDetails = () => {


  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 mt-10">
        <PageHeader children={"Delivery Details"} />
      </div>
    </AppLayoutNew>
  );
};

export default DeliveryDetails;
