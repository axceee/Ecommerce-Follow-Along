import PropTypes from 'prop-types';

const ProductCard = ({ image, name, price, description, _id, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-900 text-white border border-purple-500">
      <img 
        className="w-full h-48 object-cover object-center"
        src={image || 'https://via.placeholder.com/400x300'} 
        alt={name}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-purple-400">{name}</h2>
        <p className="text-gray-300 text-base mb-4">
          {description}
        </p>
        <p className="text-purple-300 text-xl font-bold">
          ${price}
        </p>
      </div>
      <div className="px-6 py-4 flex gap-2">
        <button
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onEdit(_id)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(_id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProductCard;