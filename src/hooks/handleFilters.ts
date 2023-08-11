import React, { useState, useEffect, createContext, useContext } from "react";

export const filterContext = createContext([]);

export const FiltersProvider = ( children: any ) => {
  const [filters, setfilters] = useState([]);

  return (
    <filterContext.Provider value={{ filters }}>
      {children}
    </filterContext.Provider>
  );
};

export function useFilters() {
  const context = useContext(filterContext);

  return context;
}
