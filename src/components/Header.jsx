import React from 'react';
import logo from '../img/logo.png';
import avatar from '../img/avatar.png';
import {
  AiOutlineShoppingCart,
  AiOutlineLogout,
  AiFillPlusSquare,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { useStateValue } from '../contex/StateProvider';
import { actionType } from '../contex/reducer';
import { useState } from 'react';
const Header = () => {
  const [{ user }, dispach] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispach({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispach({ type: actionType.SET_USER, user: null });
  };
  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-white'>
      {/* destop and tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8'
          >
            <li className='text-base cursor-pointer'>Home</li>
            <li className='text-base cursor-pointer'>Menu</li>
            <li className='text-base cursor-pointer'>About Us</li>
            <li className='text-base cursor-pointer'>Service</li>
          </motion.ul>
          <div className='relative flex items-center justify-center'>
            <AiOutlineShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className=' absolute -right-2 -top-2 w-6 h-6 rounded-full bg-activeText flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>
          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              alt='avtar'
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-slate-400 shadow-xl flex flex-col rounded-lg absolute top-6 right-0'
              >
                {user && user.email === 'damnjanovicgoran7@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p
                      className='px-4 py-2 flex items-center gap-3 cursor-pointer'
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <AiFillPlusSquare />{' '}
                    </p>
                  </Link>
                )}

                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer'
                  onClick={logout}
                >
                  Logout <AiOutlineLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <div className='relative flex items-center justify-center'>
          <AiOutlineShoppingCart className='text-textColor text-2xl cursor-pointer' />
          <div className=' absolute -right-2 -top-2 w-6 h-6 rounded-full bg-activeText flex items-center justify-center'>
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='relative'>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            alt='avtar'
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-slate-400 shadow-xl flex flex-col rounded-lg absolute top-6 right-0'
            >
              {user && user.email === 'damnjanovicgoran7@gmail.com' && (
                <Link to={'/createItem'}>
                  <p
                    className='px-4 py-2 flex items-center gap-3 cursor-pointer'
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <AiFillPlusSquare />{' '}
                  </p>
                </Link>
              )}
              <ul className='flex flex-col px-4 py-2 gap-8'>
                <li
                  className='text-base cursor-pointer'
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className='text-base cursor-pointer'
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className='text-base cursor-pointer'
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className='text-base cursor-pointer'
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>
              <p
                className='px-4 py-2 flex items-center justify-center gap-3 cursor-pointer'
                onClick={logout}
              >
                Logout <AiOutlineLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
