import React from 'react';

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
      <h2>{title}</h2>
      <p>문제 번호: {problemId}</p>
      <div className="description">{description}</div>
      <div className="input">
        <h3>입력</h3>
        {input}
      </div>
      <div className="output">
        <h3>출력</h3>
        {output}
      </div>
    </div>
  );
};

export default ProblemCard; 