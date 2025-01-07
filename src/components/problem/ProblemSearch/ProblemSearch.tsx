import React, { useState } from 'react';

const ProblemSearch = () => {
  const [problemId, setProblemId] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={problemId}
        onChange={(e) => setProblemId(e.target.value)}
        placeholder="문제 번호를 입력하세요"
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default ProblemSearch; 