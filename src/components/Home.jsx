import React from 'react';
import delivery from '../img/delivery.png';
import heroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';

const Home = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={delivery}
              alt='dev'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <p className='text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide'>
          The fastest delivery in{' '}
          <span className='text-orange-500 text-[3rem] md:text-[5rem]'>
            Your City
          </span>{' '}
        </p>
        <p className='text-base text-gray-400 text-center md:text-left'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          incidunt voluptate, rem quia totam officia. Veritatis magni facilis
          recusandae laborum nesciunt ut quam saepe dolores quas, consequuntur
          accusamus quidem voluptatem ducimus temporibus aperiam obcaecati nemo!
        </p>
        <button
          type='button'
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg text-white'
        >
          Order Now !
        </button>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img
          src={heroBg}
          alt='/'
          className='ml-auto h-420 w-full lg:w-auto lg:h-600'
        />
        <div className='w-full h-full absolute top-0 left-0 grid lg:grid-cols-2 px-32 py-4 gap-10 md:grid-cols-1'>
          {heroData &&
            heroData.map((item) => (
              <div
                className='lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center'
                key={item.id}
              >
                <img
                  src={item.img}
                  alt='i1'
                  className='w-20 lg:w-40 -mt-20 rounded-md'
                />
                <p className='text-base font-semibold text-textColor'>
                  {item.name}
                </p>
                <p className='text-sm text-lighttextGray my-3'>{item.desc}</p>
                <p className='text-sm font-semibold text-gray-600'>
                  <span className='text-xs text-red-500'> $</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
