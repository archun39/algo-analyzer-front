import React from 'react';
import { ProblemAnalysisResponseDto } from '../../../api/analysis/types';
import './AnalysisCard.css';

interface AnalysisCardProps {
  analysis: ProblemAnalysisResponseDto;
}

const AnalysisCard = ({ analysis }: AnalysisCardProps) => {
  return (
    <div className="analysis-card">
      <h2>문제 분석</h2>
      <div className="analysis-content">
        <div className="section">
          <h3 className="blue-underline">시간 복잡도</h3>
          <div className="section-content">
            <p>{analysis.timeComplexity}</p>
            <p>{analysis.timeComplexityReasoning}</p>
          </div>
        </div>
        <div className="section">
          <h3 className="blue-underline">공간 복잡도</h3>
          <div className="section-content">
            <p>{analysis.spaceComplexity}</p>
            <p>{analysis.spaceComplexityReasoning}</p>
          </div>
        </div>
        <div className="section">
          <h3 className="blue-underline">알고리즘 유형</h3>
          <div className="section-content">
            <p>{analysis.algorithmType}</p>
            <p>{analysis.algorithmTypeReasoning}</p>
          </div>
        </div>
        <div className="section">
          <h3 className="blue-underline">자료구조</h3>
          <div className="section-content">
            <p>{analysis.dataStructures}</p>
            <p>{analysis.dataStructuresReasoning}</p>
          </div>
        </div>
        <div className="section">
          <h3 className="blue-underline">구현 로직</h3>
          <div className="section-content">
            <p>{analysis.solutionImplementation}</p>
            <p>{analysis.solutionImplementationReasoning}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisCard; 