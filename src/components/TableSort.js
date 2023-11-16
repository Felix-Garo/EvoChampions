import TableDisplay from "./TableDisplay";
import useSort from "../hooks/useSort";

function TableSort(props) {
  const { data, config } = props;

  const {
    sortBy,
    sortOrder,
    chosenColumnToOrderBy,
    arrowIconForSortButton,
    sortedData,
  } = useSort(data, config);

  const headerKeyValidator = config.map((column) => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        sortableHeader: (
          <th
            key={column.title}
            className="bg-gray-500 border-2 border-gray-400 whitespace-nowrap px-5 py-2 mx-3 my-2"
          >
            {column.title}
            <button
              onClick={() => {
                chosenColumnToOrderBy(column.title);
              }}
              className="bg-gray-700 hover:bg-blue-500 text-white font-bold py-1 px-1 my-1 ml-2 rounded-full"
            >
              {arrowIconForSortButton(column.title, sortBy, sortOrder)}
            </button>
          </th>
        ),
      };
    }
  });

  return (
    <TableDisplay {...props} config={headerKeyValidator} data={sortedData} />
  );
}

export default TableSort;
