import { useState, KeyboardEvent } from 'react';
import { getProblem } from '../api/problem';

export interface Problem {
  problemId: number;
  title: string;
  description: string;
  input: string;
  output: string;
}

const ProblemInput = () => {
  const [problemNumber, setProblemNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const validateInput = (number: string): boolean => {
    // 기본적인 입력값 체크만 수행
    if (!number.trim()) {
      setError('문제 번호를 입력해주세요');
      return false;
    }

    if (isNaN(Number(number))) {
      setError('숫자만 입력 가능합니다');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!validateInput(problemNumber)) {
      return;
    }

    setLoading(true);
    try {
      const response = await getProblem(Number(problemNumber));
      console.log('성공:', response);
      setProblemNumber(''); // 성공 시 입력값 초기화
    } catch (error: any) {
      console.error('에러:', error);
      setError(error.message || '문제 조회 중 오류가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <h2>백준 문제 분석기</h2>
      <div>
        <input
          type="text"
          value={problemNumber}
          onChange={(e) => setProblemNumber(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="문제 번호를 입력하세요"
          disabled={loading}
        />
        <button 
          onClick={() => handleSubmit()} 
          disabled={loading}
        >
          {loading ? '분석중...' : '분석하기'}
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ProblemInput; 