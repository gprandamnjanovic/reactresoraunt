import React, { useEffect, useState } from 'react';
import { IoFastFood } from 'react-icons/io';
import { MdFastfood } from 'react-icons/md';
import { categories } from '../utils/data';

import RowContainer from './RowContainer';
import { useStateValue } from '../contex/StateProvider';
const MenuContainer = () => {
  const [filter, setFilter] = useState('chicken');
  const [{ foodItems }, dispach] = useStateValue();
  return (
    <section className='w-full my-6 flex' id='menu'>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl font-semibold capitalize text-lighttextGray relative before:absolute before:rounded-lg before:content-none before:w-35 before:h-1 before:bottom-0 before:left-0 before:bg-orange-500 mr-auto'>
          Our Hot Dishes
        </p>
        <div className='w-full flex items-center justify-center lg:justify-center gap-8 py-6 flex-wrap'>
          {categories &&
            categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setFilter(category.urlParamsName)}
                className={`group ${
                  filter === category.urlParamsName ? 'bg-red-500' : 'bg-white'
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center hover:bg-red-600`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === category.urlParamsName ? 'bg-card' : 'bg-red-600'
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <MdFastfood
                    className={`${
                      filter === category.urlParamsName
                        ? 'bg-card'
                        : 'bg-red-600'
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamsName
                      ? 'tetx-white'
                      : 'text-cartBg'
                  } text-textColor group-hover:text-white`}
                >
                  {category.name}
                </p>
              </div>
            ))}
        </div>
        <div className='w-full'>
          <RowContainer
            flag={false}
            data={foodItems.filter((foodItem) => foodItem.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
