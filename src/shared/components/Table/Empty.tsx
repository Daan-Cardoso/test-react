interface TableEmptyProps {
  colSpan?: number;
  children: React.ReactNode;
}

const TableEmpty: React.FC<TableEmptyProps> = ({ colSpan, children }) => {
  return (
    <tr className="bg-gray-200 text-xs md:text-base rounded-lg">
      <td colSpan={colSpan} className="px-2 md:px-4 py-2">
        { children }
      </td>
    </tr>
  );
};

export default TableEmpty;
