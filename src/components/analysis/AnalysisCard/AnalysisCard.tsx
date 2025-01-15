import React from 'react';

interface AnalysisCardProps {
  analysis: string;
  algorithmType: string;
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
}

const AnalysisCard = ({ analysis, algorithmType, approach, timeComplexity, spaceComplexity }: AnalysisCardProps) => {
  return (
    <div className="analysis-card">
      <h2>문제 분석</h2>
      <div className="analysis-content">
        <h3>분석 결과</h3>
        <p>{analysis}</p>
        <h3>알고리즘 유형</h3>
        <p>{algorithmType}</p>
        <h3>접근 방법</h3>
        <p>{approach}</p>
        <h3>시간 복잡도</h3>
        <p>{timeComplexity}</p>
        <h3>공간 복잡도</h3>
        <p>{spaceComplexity}</p>
      </div>
    </div>
  );
};

export default AnalysisCard; 