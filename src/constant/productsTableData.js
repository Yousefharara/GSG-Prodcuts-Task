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
        // render: () => ''   
    },
    {
        key: 'action',
        title: 'Action',
        render: () => (
            <div className="btn__wrapper" onClick={(e) => e.stopPropagation()}>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        )
    }
]