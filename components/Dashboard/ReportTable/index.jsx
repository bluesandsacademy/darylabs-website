const ReportTable = ({ headings = [], data = [], totalItems = 0 }) => {
  return (
    <div className="bg-white rounded-md overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-b-gray-200 text-xs text-gray-500">
            {headings.map((h, i) => (
              <td key={i} className="p-2 md:p-3">{h}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={headings.length} className="p-4 text-center text-sm text-gray-400">No data available</td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="text-xs border-b border-b-gray-200">
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2 md:p-3">{String(cell)}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      {totalItems > 0 && (
        <p className="text-xs text-gray-400 p-2">Showing {data.length} of {totalItems} entries</p>
      )}
    </div>
  );
};

export default ReportTable;
