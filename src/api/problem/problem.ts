import api from '../axios';
import { ProblemResponse } from './types';

export const getProblem = async (problemNumber: number): Promise<ProblemResponse> => {
  try {
    console.log('API 요청 시작:', problemNumber);
    const response = await api.get(`/api/problems/${problemNumber}`);
    console.log('API 응답:', response.data);
    
    // 응답 데이터 구조 확인 및 변환
    const problemData = {
      problemId: response.data.problemId || problemNumber,
      title: response.data.title || '',
      description: response.data.description || '',
      input: response.data.input || '',
      output: response.data.output || '',
      timeLimit: response.data.timeLimit || '',
      memoryLimit: response.data.memoryLimit || ''
    };
    
    return {
      success: true,
      data: problemData
    };
  } catch (error: any) {
    console.error('API 에러 상세:', error.response?.data || error);
    throw new Error(error.response?.data?.message || '서버 연결에 실패했습니다');
  }
}; 