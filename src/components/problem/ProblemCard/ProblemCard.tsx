import React from 'react';
import './ProblemCard.css';

interface ProblemCardProps {
  problemId: number;
  title: string;
  description: string;
  input: string;
  output: string;
  timeLimit: string;
  memoryLimit: string;
}

const ProblemCard = ({ problemId, title, description, input, output, timeLimit, memoryLimit }: ProblemCardProps) => {
  return (
    <div className="problem-card">
      <h2>[{problemId}] {title}</h2>
      <div className="thin-divider"></div>
      <div className="section">
        <h3 className="blue-underline">문제</h3>
        <div className="section-content">{description}</div>
      </div>
      <div className="section">
        <h3 className="blue-underline">입력</h3>
        <div className="section-content">{input}</div>
      </div>
      <div className="section">
        <h3 className="blue-underline">출력</h3>
        <div className="section-content">{output}</div>
      </div>
      <div className="section">
        <h3 className="blue-underline">제한</h3>
        <div className="section-content">
          시간 제한: {timeLimit}초<br />
          메모리 제한: {memoryLimit}MB
        </div>
      </div>
    </div>
  );
};

export default ProblemCard; 