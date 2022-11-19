import { useState } from "react";
import ReactPaginate from "react-paginate";

export function PaginatedItems(itemsPerPage: number) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  // Invoke when user click to request another page.
  const handlePageClick = () => {

  };
  const data: any = null
  return (
    <>

    </>
  );
}
