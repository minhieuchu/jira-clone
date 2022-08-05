import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: `https://firestore.googleapis.com/v1/projects/jira-b106a/databases/(default)/documents/`,
};

const JiraApiInstance: AxiosInstance = axios.create(config);

export { JiraApiInstance };
