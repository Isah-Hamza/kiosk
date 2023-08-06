import React, { useEffect } from "react";
import AppLayoutNew from "../../layout/AppLayoutNew";
import hamza from "../../assets/images/hamza.jpeg";
import shoppingBag from "../../assets/images/image-shopping-bag-dd0f7627.svg";
import { useNavigate } from "react-router-dom";
import TableTop from "../../components/Table/TableTop";
import PageHeader from "../../shared/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getInventoryAction } from "../../store/slices/product/getInventorySlice";
import { ImSpinner2 } from "react-icons/im";
import moment from "moment";

const Products = () => {
  const { data, loading } = useSelector((state) => state.get_inventory);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products_summary = [
    { title: "Items", value: data?.totalCount },
    { title: "Total Units", value: 42 },
    { title: "Total Value", value: "₦12,000" },
  ];

  useEffect(() => {
    dispatch(getInventoryAction());
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 sm:mx-7 my-10">
        <PageHeader title={"Products"} />
        <div className="bg-dimmed_white p-5 rounded-xl mt-5">
          <div className="flex justify-between items-center ">
            <div className="w-full flex gap-4">
              <TableTop
                addHandler={() => navigate("/add-product")}
                what_to_add={"Add Product"}
                what_to_import={"Import Orders"}
              />
            </div>
          </div>
          <div className="mt-2 w-full">
            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full table-auto border-separate border-spacing-y-3 ">
                <thead className="">
                  <tr className="!text-left !opacity-70 !font-semibold">
                    <th className="text-sm py-3 border-y !font-semibold pl-3 w-[52%]">
                      Product Details
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      Selling Price
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Available Stock
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      {" "}
                      Total Value
                    </th>
                    <th className="text-sm py-3 border-y !font-semibold">
                      Updated{" "}
                    </th>
                  </tr>
                </thead>
                {!loading && data.data?.length ? (
                  <tbody>
                    <tr>
                      <td
                        className="px-3 font-semibold  py-5 pt-1 border-b opacity-80"
                        colSpan={5}
                      >
                        Items
                      </td>
                    </tr>
                    <>
                      {data.data &&
                        data?.data?.map((item, idx) => (
                          <tr
                            onClick={() =>
                              navigate("/product/details", {
                                state: { data: item },
                              })
                            }
                            className="cursor-pointer pt-3 transition-all duration-300 shadow-sm hover:shadow-md bg-white mb-2"
                            key={idx}
                          >
                            <td className="text-sm py-2 pl-4 flex items-center gap-1">
                              <img
                                className="w-16 rounded-full"
                                src={shoppingBag}
                                alt="user image"
                              />
                              <span> {item.name}</span>
                            </td>
                            <td className="text-sm pl-2 py-2">
                              ₦{item.sellingPrice.toFixed(2)}
                            </td>
                            <td className="text-sm pl-10 py-2">{item.stock}</td>
                            <td className="text-sm pl-2 py-2">
                              ₦{(item.stock * item.sellingPrice).toFixed(2)}
                            </td>
                            <td className="text-sm pl-2 py-2">
                              {moment(item.createdDate).format("ll")}
                            </td>
                          </tr>
                        ))}
                    </>
                  </tbody>
                ) : null}
              </table>
              {!loading && !data.data?.length ? (
                <p className="py-10 font-medium  flex justify-center">
                  No data found{" "}
                </p>
              ) : null}
              {loading && (
                <div className="flex items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
                  <ImSpinner2 className="animate-spin" />
                  <p>Loading</p>
                </div>
              )}
            </div>
            {!loading && data.data?.length ? (
              <div className="flex justify-center mt-2">
                <div className="w-8 h-8 grid place-content-center rounded-md bg-bg">
                  <span className="font-semibold text-primary">1</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 mt-5">
          {products_summary.map((item, idx) => (
            <div
              className="text-center grid place-content-center bg-white/90 rounded-xl p-5 h-24"
              key={idx}
            >
              {loading ? (
                <div className="flex items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
                  <ImSpinner2 className="animate-spin" />
                  <p>Loading</p>
                </div>
              ) : (
                <>
                  <p className="text-xl font-semibold opacity-80">
                    {" "}
                    {item.value}
                  </p>
                  <p className="opacity-75 text-sm font-medium ">
                    {item.title}{" "}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </AppLayoutNew>
  );
};

export default Products;
