import React, { useEffect, useState } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import CustomButton from "../../components/Buttons/CustomButton";
import { FaEdit } from "react-icons/fa";
import { BiCheck, BiShare } from "react-icons/bi";
import UpdateStock from "./UpdateStock";
import EditProduct from "./EditProduct";
import PageHeader from "../../shared/PageHeader";
import ShareProduct from "./ShareProduct";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { ImCheckmark2, ImSpinner2 } from "react-icons/im";
import { TbRefresh } from "react-icons/tb";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { udpateSellingPriceAction } from "../../store/slices/product/updateSellingPriceSlice";
import { udpateCostPriceAction } from "../../store/slices/product/updateCostPriceSlice";
import { getProductAction } from "../../store/slices/product/getProductSlice";
import { deleteProductAction } from "../../store/slices/product/deleteProductSlice";
import DeleteProduct from "./DeleteProduct";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading: deleting_product } = useDispatch(
    (state) => state.delete_product
  );
  const { loading: loadingSellingPrice } = useSelector(
    (state) => state.update_selling_price
  );
  const { loading: loadingCostPrice } = useSelector(
    (state) => state.update_cost_price
  );
  const { data: product, loading: loading_product } = useSelector(
    (state) => state.get_product
  );
  const [updateStock, setUpdateStock] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [shareProduct, setShareProduct] = useState(false);

  const [editSellingPrice, setEditSellingPrice] = useState(false);
  const [editCostPrice, setEditCostPrice] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleShowDeleteModal = () => setShowDeleteModal(!showDeleteModal);

  const {
    data: { id },
  } = useLocation().state;
  const activityLoading = false;
  const activities = [
    {
      title: "Product Created",
      createdDate: "07 Aug, 2023",
      user: {
        firstName: "Isah",
        lastName: "Hamza",
      },
    },
    {
      title: "Stock Updated",
      createdDate: "07 Aug, 2023",
      user: {
        firstName: "John",
        lastName: "Doe",
      },
    },
  ];

  const [sPrice, setSPrice] = useState(product?.sellingPrice);
  const [cPrice, setCPrice] = useState(product?.costPrice);

  const toggleEditSellingPrice = () => setEditSellingPrice(!editSellingPrice);
  const toggleEditCostPrice = () => setEditCostPrice(!editCostPrice);

  const submitSellingPrice = () => {
    const payload = {
      amount: sPrice,
    };
    dispatch(
      udpateSellingPriceAction({ product_id: id, payload, dispatch })
    ).then(() => toggleEditSellingPrice());
  };

  const submitCostPrice = () => {
    const payload = {
      amount: cPrice,
    };
    dispatch(udpateCostPriceAction({ product_id: id, payload, dispatch })).then(
      () => toggleEditCostPrice()
    );
  };

  const handleDelete = () => {
    dispatch(deleteProductAction({ product_id: id, navigate }));
  };

  useEffect(() => {
    dispatch(getProductAction(id));
  }, []);

  return (
    <AppLayoutNew noHeader={true}>
      {loading_product ? (
        <>
          <div className="flex h-screen items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
            <ImSpinner2 className="animate-spin" />
            <p>Loading</p>
          </div>
        </>
      ) : (
        <div className="mx-4 sm:mx-7 my-10">
          <PageHeader title={"Product Details"} />
          <div className="grid md:grid-cols-[8fr,4fr] gap-5">
            <div className="bg-dimmed_white p-5 rounded-xl mt-5 min-h-[200px]">
              <div className=" text-center md:text-left flex flex-col md:flex-row sm:items-center gap-7">
                <div>
                  <img
                    src={shoppingBag}
                    alt="shoppingbag"
                    className="w-48 m-auto md:m-[unset]"
                  />
                </div>
                <div className="text-sm grid sm:grid-cols-2 sm:gap-10 flex-1 max-w-[600px]">
                  <div className="mt-7">
                    <p className="text-lg font-medium text-gray-700">
                      {product.name}
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      {!editSellingPrice ? (
                        <p className="font-medium text-lg">
                          ₦{product.sellingPrice?.toFixed(2)}
                        </p>
                      ) : (
                        <div className="relative">
                          <div className="span absolute left-1.5 top-1/2 -translate-y-1/2 text-lg">
                            <PiCurrencyNgnLight />{" "}
                          </div>
                          <input
                            value={sPrice}
                            onChange={(e) => setSPrice(e.target.value)}
                            type="text"
                            className="!bg-bg w-20 rounded border outline-none h-full px-2 pl-6 py-1 text-sm placeholder:text-sm"
                          />
                        </div>
                      )}
                      {!editSellingPrice ? (
                        <FaEdit
                          onClick={toggleEditSellingPrice}
                          className="cursor-pointer text-primary"
                        />
                      ) : (
                        <>
                          {!loadingSellingPrice ? (
                            <div className="flex items-center gap-1">
                              <GrClose
                                color="red"
                                size={17}
                                onClick={toggleEditSellingPrice}
                                className="text-[tomato] cursor-pointer"
                              />
                              <BiCheck
                                size={30}
                                className="text-green-950 cursor-pointer"
                                onClick={submitSellingPrice}
                              />
                            </div>
                          ) : (
                            <ImSpinner2 size={17} className="animate-spin" />
                          )}
                        </>
                      )}
                    </div>
                    <p className="mt-3 mb-1">
                      Total Value: ₦
                      {(product?.sellingPrice * product?.stock)?.toFixed(2)}
                    </p>
                    <p className="mb-1">{product.unit} total units</p>
                    <p className="mb-1">
                      {product.unit - product.stock} units sold
                    </p>
                  </div>
                  <div className="mt-7">
                    <div
                      className={`flex gap-3 items-center justify-center sm:justify-start mb-2.5 ${
                        editCostPrice && "items-center sm:items-end"
                      }`}
                    >
                      <p
                        className={`flex items-center gap-3 ${
                          editCostPrice && "sm:grid items-end"
                        }`}
                      >
                        <span className="font-medium opacity-70">
                          Cost Price:{" "}
                        </span>
                        {!editCostPrice ? (
                          <p className="">₦{product.costPrice?.toFixed(2)}</p>
                        ) : (
                          <div className="relative">
                            <div className="span absolute left-1.5 top-1/2 -translate-y-1/2 text-lg">
                              <PiCurrencyNgnLight />{" "}
                            </div>
                            <input
                              value={cPrice}
                              onChange={(e) => setCPrice(e.target.value)}
                              type="text"
                              className="!bg-bg w-20 rounded border outline-none h-full px-2 pl-6 py-1 text-sm placeholder:text-sm"
                            />
                          </div>
                        )}
                      </p>
                      {!editCostPrice ? (
                        <FaEdit
                          onClick={toggleEditCostPrice}
                          className="cursor-pointer text-primary"
                        />
                      ) : (
                        <>
                          {!loadingCostPrice ? (
                            <div className="flex items-center gap-1">
                              <GrClose
                                color="red"
                                size={17}
                                onClick={toggleEditCostPrice}
                                className="text-[tomato] cursor-pointer"
                              />
                              <BiCheck
                                size={30}
                                className="text-green-950 cursor-pointer"
                                onClick={submitCostPrice}
                              />
                            </div>
                          ) : (
                            <ImSpinner2
                              size={17}
                              className="animate-spin sm:mb-2"
                            />
                          )}
                        </>
                      )}
                    </div>
                    <p className="mb-2.5">
                      <span className="font-medium opacity-70">Type: </span>
                      {product.brand} Product
                    </p>
                    <p className="mb-2.5">
                      <span className="font-medium opacity-70">Tags: </span>
                      School, Students, Classroom
                    </p>
                    <p className="mb-2.5">
                      <span className="font-medium opacity-70">SKU: </span>
                      No Sku
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-y py-3 mt-5 flex justify-between">
                <CustomButton
                  clickHandler={() => setShareProduct(true)}
                  className={
                    "hidden sm:flex items-center gap-2 !bg-transparent border !px-7 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                  }
                >
                  {" "}
                  <BiShare />
                  Share Product
                </CustomButton>
                <div className="w-full sm:w-[unset] flex flex-col sm:flex-row gap-3">
                  <CustomButton
                    clickHandler={() => setUpdateStock(true)}
                    className={
                      "w-full sm:w-[unset] !bg-transparent border !px-7 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg"
                    }
                  >
                    {" "}
                    Update Stock
                  </CustomButton>
                  <CustomButton
                    clickHandler={() => setEditProduct(true)}
                    className={
                      "flex gap-1 justify-center items-center !bg-[rgba(0,158,170,0.3)] !px-7 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg"
                    }
                  >
                    <FaEdit />
                    Edit Product
                  </CustomButton>
                </div>
              </div>
              <div className="text-sm mt-10 mb-3">
                <div>
                  <p className="font-medium">Product url link</p>
                  <p className="text-blue-500">
                    {product.link ??
                      "www.ridiculousguy.glowbiz.com/products/123"}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="font-medium">Product description</p>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="border-t py-6 pb-3">
                <p className="text-lg font-semibold text-primary ">
                  Danger Zone
                </p>
                <p className="mt-1 mb-3 text-sm">
                  Thread safely. Any action taken here is irreversible.
                </p>
                <CustomButton
                  loading={deleting_product}
                  disabled={deleting_product}
                  clickHandler={toggleShowDeleteModal}
                  className={
                    "!bg-[#eb57571a]  disabled:!bg-[#f3ecec1a] !text-[#eb5757] border !border-[#eb5757] font-bold !py-2.5 rounded-lg"
                  }
                >
                  Delete This Inventory Item
                </CustomButton>
              </div>
            </div>
            <div className="w-full h-fit bg-white rounded-xl p-6 md:mt-5 pt-3 mr-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-primary ">Activity Trails</p>

                <button className="p-3 rounded-full hover:bg-slate-100">
                  <TbRefresh
                    // onClick={() =>
                    //   dispatch(
                    //     workorderActivityAction({ id: state?.workOrderId })
                    //   )
                    // }
                    size={18}
                  />
                </button>
              </div>
              <div className="max-h-[450px] overflow-y-auto">
                {activityLoading ? (
                  <div className="bg-white rounded flex-1 grid place-content-center py-20">
                    <div className="flex items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
                      <ImSpinner2 className="animate-spin" />
                      <p>Loading</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {activities?.length ? (
                      <div>
                        <div className="mt-5 pl-2">
                          {activities?.map((note, idx) => (
                            <div
                              key={idx}
                              className="relative p-5 pb-3 border-l"
                            >
                              <p className="text-sm font-semibold text-primary">
                                {note?.title} on{" "}
                                {moment(note?.createdDate).format("lll")}
                              </p>
                              <p className="mt-0">{note?.body}</p>
                              <p className="mt-2">
                                <span className="font-semibold">By </span>{" "}
                                {note?.user?.firstName} {note?.user?.lastName}
                              </p>
                              <div className="absolute -left-[6px] top-[26px] h-2.5 w-2.5 rounded-full bg-primary"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // <div className="flex  my-3 pt-7 flex-col items-center justify-center text-center pb-10">
                      //   <img className="w-40" src={empty} alt="empty" />
                      //   <p>
                      //     No activities associated with this <br /> workorder at
                      //     the minute.
                      //   </p>
                      // </div>
                      "Nothing here"
                    )}
                  </>
                )}
              </div>
              {!activityLoading && (
                <div className="flex w-full justify-end">
                  <button
                    // disabled={workOrder?.workOrderStepType.value === 5}
                    // onClick={() => setAddComment(true)}
                    className="disabled:bg-opacity-75 text-white text-sm bg-primary px-5 py-2 rounded mt-5 ml-auto"
                  >
                    Add Comment{" "}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {updateStock ? (
        <UpdateStock {...{ setUpdateStock, id, stock: product.stock }} />
      ) : null}
      {editProduct ? <EditProduct {...{ setEditProduct }} /> : null}
      {shareProduct ? <ShareProduct {...{ setShareProduct }} /> : null}
      {showDeleteModal ? (
        <DeleteProduct {...{ handleClose: toggleShowDeleteModal,  }} />
      ) : null}
    </AppLayoutNew>
  );
};

export default ProductDetails;
