import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
      <h2>ОШИБКА 404. ТАКАЯ СТРАНИЦА НЕ НАЙДЕНА</h2>
      <p>
        <Link to="/">GO HOME</Link>
      </p>
    </div>
);

export default NotFound;
