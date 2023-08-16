import moment from "moment";
import React from "react";
import { ImSpinner2 } from "react-icons/im";
import { TbRefresh } from "react-icons/tb";

const ActivityTrail = ({ loading, data }) => {
  return (
    <div className="w-full h-fit bg-white rounded-xl p-6 pt-3 mr-5">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-primary ">Activity Trails</p>
        <button className="p-3 rounded-full hover:bg-slate-100">
          <TbRefresh size={18} />
        </button>
      </div>
      <div className="max-h-[450px] overflow-y-auto">
        {loading ? (
          <div className="bg-white rounded flex-1 grid place-content-center py-20">
            <div className="flex items-center gap-1 justify-center text-sm p-2 py-10 font-medium">
              <ImSpinner2 className="animate-spin" />
              <p>Loading</p>
            </div>
          </div>
        ) : (
          <>
            {!loading && data?.length ? (
              <div>
                <div className="mt-2 pl-2">
                  {data?.map((note, idx) => (
                    <div key={idx} className="relative p-5 pt-2 pb-3 border-l">
                      <p className="text-sm ">
                        <span className="font-medium first-letter:capitalize">
                          {note?.action || "No description."}
                        </span>{" "}
                        on {moment(note?.createdDate).format("lll")}
                      </p>
                      <p className="mt-0">{note?.body}</p>
                      <p className="mt-1 text-sm italic">
                        <span className="font-semibold text-xs">by: </span>{" "}
                        {note?.performedBy?.firstName}{" "}
                        {note?.performedBy?.lastName}
                      </p>
                      <div className="absolute -left-[6px] top-[14px] h-2.5 w-2.5 rounded-full bg-primary"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex  my-3 pt-7 flex-col items-center justify-center text-center pb-10">
                <p>
                  No activities for this product at the minute. Hit the refresh
                  button to check udpate.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ActivityTrail;
