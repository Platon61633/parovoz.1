import React from 'react'
import '../CSSComponents/katalog.css'

const Filter = ({Types, onChange, filter, SetFilter}) => {

    return (
        <div>
            <select value={filter} className='selFilter'
            onChange={e => onChange(e.target.value)}>
            <option>Всё</option>
            {Types.map(e =>
              <option
              key={e}
              value={e}>{e}</option>)}
          </select>
        </div>
    );
};

export default Filter;