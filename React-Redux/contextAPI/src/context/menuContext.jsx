import { createContext, useContext, useState } from 'react';
import data from '../assets/data';

const menuContext = createContext();

export const MenuProvider = ({ children }) => {
  return (
    <menuContext.Provider value={{ menu: data.menu }}>
      {children}
    </menuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(menuContext);
};
