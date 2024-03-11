import PropTypes from 'prop-types';


function List({ items, category }) {

    category;
    //fruits.sort((a,b) => a.name.localeCompare(b.name));
    //fruits.sort((a,b) => b.name.localeCompare(a.name));

    //fruits.sort((a,b) => a.calories - b.calories);
    //fruits.sort((a,b) => b.calories - a.calories);

    // const lowCalFruits = fruits.filter(f => f.calories < 100);
    // const highCalFruits = fruits.filter(f => f.calories > 100);

    const listItems = items.map(item =>
        <li key={item.id}>{item.name}:
            <b>{item.calories}</b>
        </li>);



    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">
                {listItems}
            </ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })),
};

List.defaultProps = {
    category: "Category",
    items: []

};
export default List;