import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log(data);
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-4 my-12 bg-cardOverlay scroll-smooth ${
        flag
          ? 'grid grid-cols-3 gap-4'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className='w-350 min-w-[300px] md:w-340 md:min-w-[340px] h-auto my-12 bg-gray-100 rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg cursor-pointer'
          >
            <div className='w-full flex items-center justify-between'>
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={item.imageURL}
                alt=''
                className='w-50 h-40 object-cover -py-8 drop-shadow-2xl'
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'
              >
                <MdShoppingBasket className='text-white' />
              </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end my-6'>
              <p className='text-textColor font-semibold text-base md:text-lg'>
                {item.title}
              </p>
              <p className='mt-2 text-sm text-gray-500'>
                {item.calories} Calories
              </p>
              <div className='flex items-center gap-8'>
                <p className='text-lg text-textColor font-semibold'>
                  <span className='text-sm text-red-500'>$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
