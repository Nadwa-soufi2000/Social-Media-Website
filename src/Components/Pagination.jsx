import ReactPaginate from "react-paginate";

export default function PaginatedItems({ itemsPerPage , data , setPage}) {
 const pageCount = data.length / itemsPerPage ;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={(e) => setPage(e.selected + 1) }
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center w-[60%] sm:w-[80%]"
        pageLinkClassName="w-[7px] h-[7px] sm:w-[30px] no-underline sm:h-[30px] inline-block items-center mx-2  text-gray-500 transition-[0.3s] rounded-full"
        activeLinkClassName=" text-blue-300 flex justify-center items-center"
      />
    </>
  );
}