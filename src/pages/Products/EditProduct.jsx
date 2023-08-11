import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/Buttons/CustomButton";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { udpateProductAction } from "../../store/slices/product/updateProductSlice";
import ValidationError from "../../components/Error/ValidationError";

const EditProduct = ({ setEditProduct, product_id, product }) => {
  const { loading } = useSelector((state) => state.update_product);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      sku: product.sku,
      description: product.description,
      tax: product.tax ?? 0,
    },
    validationSchema: Yup.object().shape({
      tax: Yup.number().typeError("Enter a valid number"),
    }),
    onSubmit(values) {
      values.tax = Number(values.tax);
      dispatch(
        udpateProductAction({
          setEditProduct,
          payload: values,
          dispatch,
          product_id,
        })
      );
    },
  });
  const { errors, touched, getFieldProps, handleSubmit } = formik;

  const product_type = [
    {
      label: "Physical Product",
      value: 1,
    },
    {
      label: "Digital Product",
      value: 2,
    },
  ];

  return (
    <div className="overflow-auto fixed inset-0 bg-black/60 grid place-content-center z-[10]">
      <div className="div w-full h-full ">
        <div className="mx-7 my-10 ">
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-xl w-[500px]"
          >
            <div className="border-b pb-7">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Edit Product </p>
                <button onClick={() => setEditProduct(false)}>
                  <FiPlus className="rotate-45" size={22} />
                </button>
              </div>
            </div>
            <div className="mt-7 grid gap-4">
              <CustomInput
                {...getFieldProps("sku")}
                className={"!bg-bg"}
                label={"SKU"}
                id={"sku"}
              />
              <div>
                <CustomInput
                  {...getFieldProps("tax")}
                  className={"!bg-bg"}
                  label={"Tax"}
                  id={"tax"}
                />
                {touched.tax && errors.tax && (
                  <ValidationError msg={errors.tax} />
                )}
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Description
                </label>
                <textarea
                  {...getFieldProps("description")}
                  className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                  placeholder="Short Description"
                ></textarea>
              </div>

              <div>
                <CustomButton
                  type={"submit"}
                  loading={loading}
                  disabled={loading}
                  className="w-full mt-3 text-white text-sm !px-10 !py-3 rounded-md"
                >
                  Save Changes
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
