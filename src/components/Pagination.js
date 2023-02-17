import React, { useReducer, useEffect } from "react";
import "../styles/home.css";
import { useSelector,useDispatch } from "react-redux";
import { updateCurrentPage } from "../redux/action/variableAction";


const Pagination = () => {
   
  const variables = useSelector((state)=> state.variableReducer);
  const currentPage = variables.current_page;
  const totalPage = variables.total_page;
 
  const dispatch = useDispatch();

  // const INC = "INC";
  // const DEC = "DEC";

  // const reducer = (value, action) => {
  //   switch (action.type) {
  //     case INC:
  //       value = value + 1;
  //       return value;
  //     case DEC:
  //       value = value - 1;
  //       return value;
  //     default:
  //       return value;
  //   }
  // };

  // const [currentPage, changeCurrentPage] = useReducer(reducer, 1);


  return (
    <>
      <div className="pagination-sec">
        <button
          onClick={() => dispatch(updateCurrentPage(currentPage-1))}
          disabled={currentPage <= 1 ? true : false}
          className="pagination-btn"
        >
          {" "}
          PREV{" "}
        </button>
        <p className="pagination-text">
          {currentPage} of {totalPage}
        </p>
        <button
          onClick={() => dispatch(updateCurrentPage(currentPage+1))}
          disabled={currentPage >= totalPage ? true : false}
          className="pagination-btn"

        >
          {" "}
          NEXT{" "}
        </button>
      </div>
    </>
  );
};

export default Pagination;
