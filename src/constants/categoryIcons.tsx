import { LiaHamburgerSolid } from 'react-icons/lia';
import { LuCakeSlice, LuCoffee, LuCookie, LuDonut, LuPizza } from 'react-icons/lu';

const size = 36;

export const categoryIcons = {
  Café: <LuCoffee size={size} />,
  Hamburguesas: <LiaHamburgerSolid size={size} />,
  Pizzas: <LuPizza size={size} />,
  Donas: <LuDonut size={size} />,
  Pasteles: <LuCakeSlice size={size} />,
  Galletas: <LuCookie size={size} />,
};