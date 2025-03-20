import { ReactNode } from 'react';

interface TableRootProps {
  children: ReactNode;
  columns: string[];
}

const TableRoot = ({ columns, children }: TableRootProps) => {
    return (
        <table className='table-auto w-full border-separate border-spacing-y-2'>
            <thead>
                <tr className='text-xs md:text-base'>
                    { columns.map((column) => (
                        <th key={column} className='text-left p-2 md:p-4'>{column}</th>
                    )) }
                </tr>
            </thead>
            <tbody>
              { children }
            </tbody>
        </table>
    )
}

export default TableRoot