import { FaCoffee, FaHamburger, FaPizzaSlice, FaCookie, FaBirthdayCake } from 'react-icons/fa';
import { GiDonut } from 'react-icons/gi';

const size = 32;

export const categoryIcons = {
  Café: <FaCoffee size={size} />,
  Hamburguesas: <FaHamburger size={size} />,
  Pizzas: <FaPizzaSlice size={size} />,
  Donas: <GiDonut size={size} />,
  Pasteles: <FaBirthdayCake size={size} />,
  Galletas: <FaCookie size={size} />,
};