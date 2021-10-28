import PropTypes from "prop-types";

const CartListItem = ({ name, price, amount, increase, decrease }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{name}</div>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price * amount)}
      </div>
      <div>
        <div className="fw-bold text-center">{amount}</div>
        <span onClick={decrease} className="btn btn-sm">
          -
        </span>
        <span onClick={increase} className="btn btn-sm btn-primary">
          +
        </span>
      </div>
    </li>
  );
};

CartListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  increase: PropTypes.func,
  decrease: PropTypes.func,
};

CartListItem.defaultProps = {
  increase: function () {
    console.log("");
  },

  decrease: function () {
    console.log("");
  },
};

export default CartListItem;