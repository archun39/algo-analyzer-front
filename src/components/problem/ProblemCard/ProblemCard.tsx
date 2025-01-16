import React from 'react';

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
<<<<<<< Updated upstream
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
=======
      <h2>[{problemId}] {title}</h2>
      <div className="section">
        <h3>제한</h3>
        <div className="limits">
          <span>시간 제한: {timeLimit}초</span>
          <span>메모리 제한: {memoryLimit}MB</span>
        </div>
      </div>
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
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default ProblemCard; 