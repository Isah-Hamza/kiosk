import React, { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DeleteProduct = ({ handleClose, handleDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.delete_product);

  return (
    <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
      <div className="bg-white rounded-xl p-5">
        <p className="text-center font-semibold text-lg mt-10">
          Confirm Delete !!!
        </p>
        <p className="max-w-[300px] text-sm mx-auto text-center my-3">
          Confirm that you want to delete this inventory. Note that this action
          is irrevocable.
        </p>
        <div className="mt-6 text-sm mb-10 justify-center flex items-center gap-4">
          <button
            disabled={loading}
            type="button"
            onClick={handleDelete}
            className="bg-[coral] disabled:bg-opacity-60 disabled:cursor-auto text-white px-7 py-2 rounded-lg flex items-center gap-2"
          >
            {loading && <ImSpinner2 className="animate-spin" />}
            Confirm
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="bg-green-500 text-white px-7 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
