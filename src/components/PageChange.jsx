import React from "react";
import { Pagination } from "@mui/material";
const PageChange = ({
  paginationChange,
  totalPage,
  setCurrentPage,
  currentPage,
}) => {
  const onChange = (e) => {
    setCurrentPage(e.target.value);
    if (e.target.value > totalPage) {
      setCurrentPage(totalPage);
    } else if (e.target.value < 1) {
      setCurrentPage(1);
    }
  };
  return (
    <div className="pt-5 w-full flex justify-start px-2 sm:px-10">
      <div className="xs:w-fit bg-[#fafafab4] py-2 px-1 xs:px-4 rounded-md xs:flex-row flex-col flex ss:items-center gap-x-10 gap-y-3 items-start w-full">
        <Pagination
          count={totalPage}
          variant="outlined"
          color="primary"
          shape="rounded"
          onChange={paginationChange}
        />
        <input
          type="number"
          className="w-[50px] ss:w-[100px] py-1 px-2 rounded-sm outline-none border border-gray-400 sm:mt-0 ml-auto"
          placeholder={currentPage}
          value={currentPage}
          onChange={onChange}
          min={1}
          max={totalPage}
        />
      </div>
    </div>
  );
};

export default PageChange;
