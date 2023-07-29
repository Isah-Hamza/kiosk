import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { FaAddressCard, FaEdit, FaUsers } from "react-icons/fa";
import CustomSelect from "../../components/CustomInput/Select";
import { allStateAction } from "../../store/slices/appData/allStateSlice";
import { useDispatch, useSelector } from "react-redux";
import { partnerSubGroupAction } from "../../store/slices/appData/partnerSubGroupSlice";
import { partnerGroupAction } from "../../store/slices/appData/partnerGroupSlice";
import ValidationError from "../../components/Error/ValidationError";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createPartnerAction } from "../../store/slices/partner/createPartnerSlice";

const CreateBusiness = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState([{ label: "Select State", value: 0 }]);
  const [partnerId, setPartnerId] = useState();

  const { loading } = useSelector((state) => state.create_partner);
  const { data: all_states } = useSelector((state) => state.all_states);
  const { data: partner_group } = useSelector((state) => state.partner_group);
  const { data: partner_subgroup } = useSelector(
    (state) => state.partner_subgroup
  );

  const [category, setCategory] = useState([
    {
      value: 0,
      label: "Select Category",
    },
  ]);

  const handleChangeCategory = (value) => setPartnerId(value);

  const [subCategory, setSubCategory] = useState([
    {
      value: 0,
      label: "Select Sub Category",
    },
  ]);

  // Create Business Formik
  const bizFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      category: partnerId,
      name: "",
      address: "",
      description: "",
      email: "",
      phoneNumber: "",
      partnerSubGroupId: "",
      stateId: "",
    },
    validationSchema: Yup.object().shape({
      category: Yup.string().required("Select category"),
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      description: Yup.string().required("Description is required"),
      email: Yup.string()
        .email("Please supply a valid email")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      partnerSubGroupId: Yup.string().required("Select subcategory"),
      stateId: Yup.string().required("Please select a state"),
    }),
    onSubmit(values) {
      delete values.category;
      values.deviceToken = "test_token";
      dispatch(createPartnerAction({ data: values, navigate }));
    },
  });

  const {
    errors: biz_errors,
    touched: biz_touched,
    handleSubmit: biz_handleSubmit,
    getFieldProps: biz_getFieldProps,
    setFieldValue,
  } = bizFormik;

  const handleChangeSubCategory = (value) =>
    setFieldValue("partnerSubGroupId", Number(value));

  const handleChangeState = (value) => setFieldValue("stateId", Number(value));

  useEffect(() => {
    dispatch(allStateAction());
    dispatch(partnerGroupAction());
  }, []);

  useEffect(() => {
    const formattedPartner = partner_group.map((group) => ({
      value: group.id,
      label: group.name,
    }));
    formattedPartner.unshift({ value: 0, label: "Select Business Category" });
    setCategory(formattedPartner);
  }, [partner_group]);

  useEffect(() => {
    const formatted = all_states.map((state) => ({
      value: state.id,
      label: state.name,
    }));
    formatted.unshift({ value: 0, label: "Select State" });
    setState(formatted);
  }, [all_states]);

  useEffect(() => {
    if (partnerId) dispatch(partnerSubGroupAction(partnerId));
  }, [partnerId]);

  useEffect(() => {
    const formattedPartner = partner_subgroup.map((group) => ({
      value: group.id,
      label: group.name,
    }));
    formattedPartner.unshift({ value: 0, label: "Select Sub Category" });
    setSubCategory(formattedPartner);
  }, [partner_subgroup]);

  return (
    <div className="w-full py-20">
      <div className="w-[500px] m-auto min-h-[500px]">
        <div className="text-center">
          <p className="text-lg font-semibold opacity-80">
            Create a New Business
          </p>
          <p className="text-sm  mt-3 w-[90%] m-auto">
            Empower your business aspirations today! Seamlessly create a new
            business venture with our robust, user-friendly tools for
            unparalleled growth and prosperity.
          </p>
        </div>
        <div className="border mt-10">
          <div className="bg-[#f5f8fd] text-sm w-full h-40 grid place-content-center text-center">
            <img className="w-32 m-auto" src={logo} alt="logo" />
            <p className="text-center mt-3">
              Drag or Drop Company / Business Logo Here
            </p>
            <button className="m-auto flex items-center gap-1 text-blue-900 font-semibold">
              <span>
                <FaEdit />
              </span>
              <span>Browse File</span>
            </button>
          </div>
          <div className="p-7">
            <form onSubmit={biz_handleSubmit} className="w-full mt-7">
              <div className="grid sm:grid-cols-2 gap-4 gap-y-5 sm:gap-y-7">
                <div>
                  <CustomSelect
                    onChange={handleChangeCategory}
                    options={category}
                  />
                  {biz_touched.category && biz_errors.category && (
                    <ValidationError msg={biz_errors.category} />
                  )}
                </div>
                <div>
                  <CustomSelect
                    options={subCategory}
                    onChange={handleChangeSubCategory}
                  />
                  {biz_touched.partnerSubGroupId &&
                    biz_errors.partnerSubGroupId && (
                      <ValidationError msg={biz_errors.partnerSubGroupId} />
                    )}
                </div>
                <div className="sm:col-span-2 ">
                  <CustomInput
                    className={"!h-[50px]"}
                    type={"text"}
                    placeholder={"Company Name"}
                    id={"company_name"}
                    hasIcon
                    Icon={FaUsers}
                    {...biz_getFieldProps("name")}
                  />
                  {biz_touched.name && biz_errors.name && (
                    <ValidationError msg={biz_errors.name} />
                  )}
                </div>
                <div>
                  <CustomInput
                    className={"!h-[50px]"}
                    type={"email"}
                    placeholder="Business Email"
                    id={"partner_email"}
                    {...biz_getFieldProps("email")}
                  />{" "}
                  {biz_touched.email && biz_errors.email && (
                    <ValidationError msg={biz_errors.email} />
                  )}
                </div>
                <div>
                  <CustomInput
                    className={"!h-[50px]"}
                    type={"busisness_phone"}
                    placeholder="Business Phone Number"
                    id={"partner_phone"}
                    {...biz_getFieldProps("phoneNumber")}
                  />{" "}
                  {biz_touched.phoneNumber && biz_errors.phoneNumber && (
                    <ValidationError msg={biz_errors.phoneNumber} />
                  )}
                </div>
                <div className="sm:col-span-2">
                  <CustomInput
                    className={"!h-[50px]"}
                    type={"text"}
                    placeholder={"Company Address"}
                    id={"company_address"}
                    hasIcon
                    Icon={FaAddressCard}
                    {...biz_getFieldProps("address")}
                  />{" "}
                  {biz_touched.address && biz_errors.address && (
                    <ValidationError msg={biz_errors.address} />
                  )}
                </div>
                <div className="sm:col-span-2">
                  <CustomSelect options={state} onChange={handleChangeState} />
                  {biz_touched.stateId && biz_errors.stateId && (
                    <ValidationError msg={biz_errors.stateId} />
                  )}
                </div>
                <div className="sm:col-span-2">
                  <CustomInput
                    className={"!h-[50px]"}
                    type={"text"}
                    placeholder={"Business Description"}
                    id={"business_description"}
                    {...biz_getFieldProps("description")}
                  />{" "}
                  {biz_touched.description && biz_errors.description && (
                    <ValidationError msg={biz_errors.description} />
                  )}
                </div>
              </div>
              <div className="mt-14 my-10 flex justify-end">
                <CustomButton
                
                  loading={loading}
                  disabled={loading}
                  type={"submit"}
                  className={"w-full "}
                  children={"Submit Information"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBusiness;