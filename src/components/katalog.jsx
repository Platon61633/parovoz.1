import React, { useMemo, useState, useContext } from 'react'
import '../CSSComponents/katalog.css'
import Filter from './filter';

const Katalog = () => {

    const [katalog, Setkatalog] = useState([
        {title: "UDN xPOD черника", price: "420р", type: "Картридж"},
        {title: "VAPORESSO XROS", price: "170p", type: "Картридж"},
        {title: "SMOANTI SANTI", price: "245р", type: "Картридж"},
        {title: "UDN S2 5000 тяг", price: "320р", type: "Картридж"},
        {title: "GEEK VAPE AEGIS 0.4 0.6.8 1.2", price: "170р", type: "Испаритель"}
      ])

        const Types = Array.from(new Set(katalog.map(e => e.type)));
  const [filter, SetFilter] = useState('')

  
  const MemoFilter = useMemo(() => {
    return filter === 'Всё' ? [...katalog]
   : [...katalog].filter(e => filter === e.type)}, 
    [filter, ...katalog]
  )

    return (
        <div>
          <Filter 
          onChange={selectedSort => SetFilter(selectedSort)}
          Types={Types}/>

          <div className='katalog'>
            {filter === ''
             ?katalog.map(e =>
        <div className='product'>
          <h1 className='name'>{e.type} {e.title}</h1>
          <span>{e.price}</span>
        </div>)
            : MemoFilter.map(e =>
                <div className='product'>
                <h1>{e.type} {e.title}</h1>
                <span>{e.price}</span>
              </div>
              )}
              </div>
        </div>
    );
};

export default Katalog