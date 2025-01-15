export interface ProblemData {
  problemId: number;
  title: string;
  description: string;
  input: string;
  output: string;
}

export interface ProblemResponse {
  success: boolean;
  message?: string;
  data?: ProblemData;
} 