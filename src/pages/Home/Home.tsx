import React from 'react';
import ProblemSearch from '../../components/problem/ProblemSearch/ProblemSearch';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <div className="search-container">
          <h2 className="title">백준 문제 분석기</h2>
          <p className="description">
            문제 번호를 입력하시면 해당 문제에 대한 상세한 분석 결과를 제공해드립니다.
          </p>
          <ProblemSearch />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 