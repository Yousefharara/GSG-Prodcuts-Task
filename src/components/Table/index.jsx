import './style.css'

const Table = ({ columns, data, onRowClick = () => "", isLoading }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        {!isLoading && (
          <tbody>
            {data.map((row) => (
              <tr key={row.id} onClick={onRowClick}>
                {columns.map((col) => (
                  <td key={col.key}>{col.render ? col.render() : row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {isLoading && <h3>Loading ...</h3>}
    </>
  );
};

export default Table;
