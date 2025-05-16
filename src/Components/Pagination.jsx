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
        containerClassName="flex justify-end items-center"
        pageLinkClassName="w-[30px] h-[30px] inline-block items-center mx-2  text-gray-500 transition-[0.3s] rounded-full"
        activeLinkClassName="bg-blue-400 text-white flex justify-center items-center"
      />
    </>
  );
}