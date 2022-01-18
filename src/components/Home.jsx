import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
      <main>
        <h2>Приветики конфетики в чатике</h2>
        <p>Тест роутинга</p>
        <p>ЭТО КОМПОНЕНТ HOME</p>
      </main>
      <nav>
        <Link to="/login">LOGIN FORM</Link>
      </nav>
    </>
);

export default Home;
