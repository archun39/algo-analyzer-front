import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProblemSearch.css';

const ProblemSearch = () => {
  const [problemId, setProblemId] = useState<string>('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problemId.trim()) {
      navigate(`/problem/${problemId}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setProblemId(value);
  };

  const handleInputClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="input-container" onClick={handleInputClick}>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          value={problemId}
          onChange={handleInputChange}
          placeholder="문제 번호를 입력하세요"
          maxLength={5}
        />
      </div>
      <button 
        className="search-button" 
        type="submit"
        disabled={!problemId.trim()}
      >
        분석하기
      </button>
    </form>
  );
};

export default ProblemSearch; 