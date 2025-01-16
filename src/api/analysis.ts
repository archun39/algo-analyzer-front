import axios from 'axios';

export const analyzeProblem = async (problemId: number) => {
  try {
    const response = await axios.post('http://localhost:8080/api/analysis/problem/analyze', {
      problem_id: problemId,
    });

    if (response.status === 200) {
      console.log('분석 결과:', response.data);
      return response.data;
    } else {
      throw new Error('분석 요청 실패');
    }
  } catch (error) {
    console.error('API 에러:', error);
    throw error;
  }
};

export {}; 