import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header/Header';
import ProblemCard from '../../components/problem/ProblemCard/ProblemCard';
import AnalysisCard from '../../components/analysis/AnalysisCard/AnalysisCard';
import Footer from '../../components/common/Footer/Footer';
import { getProblem } from '../../api/problem';
import { ProblemWithAnalysisResponseDto } from '../../api/problem/types';
import './Problem.css';

const Problem = () => {
  const { id } = useParams();
  const [problemData, setProblemData] = useState<ProblemWithAnalysisResponseDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProblem = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await getProblem(Number(id));
        if (response.success && response.data) {
          setProblemData(response.data);
        } else {
          setError('문제 데이터를 불러오는데 실패했습니다.');
        }
      } catch (err: any) {
        setError(err.message || '문제를 불러오는데 실패했습니다.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  return (
    <div className="problem-page">
      <Header />
      <main>
        <div className="content">
          {loading ? (
            <div className="loading">로딩중...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : problemData ? (
            <>
              <ProblemCard
                problemId={problemData.problemResponse.problemId}
                title={problemData.problemResponse.title}
                description={problemData.problemResponse.description}
                input={problemData.problemResponse.input}
                output={problemData.problemResponse.output}
                timeLimit={problemData.problemResponse.timeLimit}
                memoryLimit={problemData.problemResponse.memoryLimit}
              />
              <AnalysisCard
                analysis={problemData.analysisResponse}
              />  
            </>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Problem; 