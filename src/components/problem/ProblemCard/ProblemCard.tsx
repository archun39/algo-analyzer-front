import React from 'react';
import './ProblemCard.css';

interface ProblemCardProps {
  problemId: number;
  title: string;
  description: string;
  input: string;
  output: string;
}

const ProblemCard = ({ problemId, title, description, input, output }: ProblemCardProps) => {
  return (
    <div className="problem-card">
      <h2>[{problemId}] {title}</h2>
      <div className="section">
        <h3>문제</h3>
        <div className="section-content">{description}</div>
      </div>
      <div className="section">
        <h3>입력</h3>
        <div className="section-content">{input}</div>
      </div>
      <div className="section">
        <h3>출력</h3>
        <div className="section-content">{output}</div>
      </div>
    </div>
  );
};

export default ProblemCard; 