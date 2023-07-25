export interface EnvironmentConfig {
    REACT_APP_API_URL: string;
  }
  
  export const environmentConfig: EnvironmentConfig = {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'https://nodejs-task-be.vercel.app',
  };