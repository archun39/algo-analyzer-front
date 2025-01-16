import { ProblemAnalysisResponseDto } from '../../api/analysis/types';

export interface ProblemResponseDto {
  problemId: number;
  title: string;
  description: string;
  input: string;
  output: string;
  timeLimit: string;
  memoryLimit: string;
  tags: string[];
}

export interface ProblemWithAnalysisResponseDto {
  problemResponse: ProblemResponseDto;
  analysisResponse: ProblemAnalysisResponseDto;
}

export interface ProblemResponse {
  success: boolean;
  message?: string;
  data?: ProblemWithAnalysisResponseDto;
} 