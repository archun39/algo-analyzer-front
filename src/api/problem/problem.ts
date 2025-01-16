import api from '../axios';
import { ProblemResponse } from './types';

export const getProblem = async (problemNumber: number): Promise<ProblemResponse> => {
  try {
    const response = await api.get(`/api/problems/${problemNumber}`);
    
    const problemData = {
      problemResponse: {
        problemId: response.data.problemResponse.problemId || problemNumber,
        title: response.data.problemResponse.title || '',
        description: response.data.problemResponse.description || '',
        input: response.data.problemResponse.input || '',
        output: response.data.problemResponse.output || '',
        timeLimit: response.data.problemResponse.timeLimit || '',
        memoryLimit: response.data.problemResponse.memoryLimit || '',
        tags: response.data.problemResponse.tags || []
      },
      analysisResponse: response.data.analysisResponse || {}
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