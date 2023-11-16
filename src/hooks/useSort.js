import { useState } from "react";
import {
  TiArrowUnsorted,
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/ti";

function useSort(data, config) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const chosenColumnToOrderBy = (columnToSort) => {
    if (sortBy !== columnToSort) {
      setSortOrder("asc");
      setSortBy(columnToSort);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(columnToSort);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(columnToSort);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const arrowIconForSortButton = (title, sortBy, sortOrder) => {
    if (title !== sortBy) {
      return <TiArrowUnsorted />;
    } else if (title === sortBy && sortOrder === "asc") {
      return <TiArrowSortedUp />;
    } else if (title === sortBy && sortOrder === "desc") {
      return <TiArrowSortedDown />;
    }
  };

  let sortedData = data;

  if (sortBy && sortOrder !== null) {
    const { sortValue } = config.find((header) => header.title === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const changeSortOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * changeSortOrder;
      } else {
        return (valueA - valueB) * changeSortOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    chosenColumnToOrderBy,
    arrowIconForSortButton,
    sortedData,
  };
}

export default useSort;
