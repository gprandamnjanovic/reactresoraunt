import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './Home';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { useStateValue } from '../contex/StateProvider';
import { useState } from 'react';
import MenuContainer from './MenuContainer';

const MainContainer = () => {
  const [{ foodItems }, dispach] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <Home />
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-lighttextGray relative before:absolute before:rounded-lg before:content-none before:w-35 before:h-1 before:bottom-0 before:left-0 before:bg-orange-500'>
            Our fresh and healty fruits
          </p>
          <div className='hidden md:flex items-center gap-3'>
            <motion.div
              whileTap={{ scale: 0.7 }}
              className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer'
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className='text-base text-white' />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.7 }}
              className='w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer'
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className='text-base text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          data={foodItems?.filter((foodItem) => foodItem.category === 'fruits')}
          scrollValue={scrollValue}
        />
      </section>
      <MenuContainer />
    </div>
  );
};

export default MainContainer;
