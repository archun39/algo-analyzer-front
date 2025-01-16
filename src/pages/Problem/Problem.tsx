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
<<<<<<< Updated upstream
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
=======
          {loading ? (
            <div className="loading">로딩중...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : problem ? (
            <>
              <ProblemCard
                problemId={problem.problemId}
                title={problem.title}
                description={problem.description}
                input={problem.input}
                output={problem.output}
                timeLimit="2"
                memoryLimit="128"
              />
              <AnalysisCard
                analysis=""
                algorithmType=""
                approach=""
                timeComplexity=""
                spaceComplexity=""
              />
            </>
          ) : null}
>>>>>>> Stashed changes
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Problem; 