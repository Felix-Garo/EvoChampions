function TableDisplay(props) {
  const { data, config } = props;
  const renderHeaders = config.map((heading) => {
    if (heading.sortableHeader) {
      return heading.sortableHeader;
    } else {
      return (
        <th
          key={heading.title}
          className="bg-gray-500 border-2 border-gray-400 px-5 py-2 mx-3 my-2"
        >
          {heading.title}
        </th>
      );
    }
  });

  const renderBodyCells = data.map((rowOfData) => {
    const dataMapping = config.map((bodyCell, index) => {
      return (
        <td
          key={index}
          className="border-2 border-gray-400 px-3 py-2 mx-2 my-1 text-center text-base"
        >
          {bodyCell.render(rowOfData)}
        </td>
      );
    });

    return <tr key={rowOfData.player}>{dataMapping}</tr>;
  });

  return (
    <div className="grid w-full place-items-center py-5 px-2 my-4">
      <h1 className="text-4xl mb-2 border-b-2 border-gray-600 text-gray-700">
        List of Evolution Championship Series champions:
      </h1>
      <table className="w-3/4 bg-gray-200 px-3 py-20 text-base">
        <thead>
          <tr>{renderHeaders}</tr>
        </thead>
        <tbody>{renderBodyCells}</tbody>
      </table>
    </div>
  );
}

export default TableDisplay;
