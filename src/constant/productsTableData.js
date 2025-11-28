export const PRODUCTS_COLUMNS  = (handleDelete, handleEdit) => [
    {
        key: 'id',
        title: 'ID',
        // render: () => ''
    },
    {
        key: 'title',
        title: 'Title',
        // render: () => ''
    },
    {
        key: 'price',
        title: 'Price',
        render: (data) => `${data.price} $`   
    },
    {
        key: 'action',
        title: 'Action',
        render: (row) => (
            <div className="btn__wrapper" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => handleDelete(row)}>Delete</button>
                <button onClick={() => handleEdit(row)}>Edit</button>
            </div>
        )
    }
]