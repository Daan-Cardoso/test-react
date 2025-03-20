interface TableItemProps {
  cells: string[];
  clickable?: boolean;
  onClick?: () => void;
}

const TableItem: React.FC<TableItemProps> = ({ cells, onClick, clickable }) => {
  const isFirst = (index: number) => index === 0;
  const isLast = (index: number) => index === cells.length - 1;

  const roundedCorners = (index: number) => {
    if (isFirst(index)) return 'rounded-bl-lg rounded-tl-lg';

    if (isLast(index)) return 'rounded-br-lg rounded-tr-lg';

    return '';
  }

  return (
    <tr
      className={`bg-gray-200 text-xs md:text-base ${clickable ? 'cursor-pointer hover:bg-gray-300' : ''}`}
      onClick={() => clickable && onClick && onClick()}
    >
      {cells.map((cell, index) => (
        <td
          key={cell}
          className={`px-2 md:px-4 py-2 ${roundedCorners(index)}`}
        >
          {cell}
        </td>
      ))}
    </tr>
  );
};

export default TableItem;