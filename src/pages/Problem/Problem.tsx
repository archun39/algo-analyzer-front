import React from 'react';
import Header from '../../components/common/Header/Header';
import ProblemCard from '../../components/problem/ProblemCard/ProblemCard';
import AnalysisCard from '../../components/analysis/AnalysisCard/AnalysisCard';
import Footer from '../../components/common/Footer/Footer';

const Problem = () => {
  return (
    <div className="problem-page">
      <Header />
      <main>
        <div className="content">
          <ProblemCard
            problemId={0}
            title=""
            description=""
            input=""
            output=""
          />
          <AnalysisCard
            analysis=""
            algorithmType=""
            approach=""
            timeComplexity=""
            spaceComplexity=""
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Problem; 