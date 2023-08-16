import React from "react";
import { ImSpinner2 } from "react-icons/im";

const PageLoading = () => {
  return (
    <div className="flex h-screen items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
      <ImSpinner2 className="animate-spin" />
      <p>Loading</p>
    </div>
  );
};

export default PageLoading;
