import React from 'react';
import ProblemSearch from '../../components/problem/ProblemSearch/ProblemSearch';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <ProblemSearch />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 