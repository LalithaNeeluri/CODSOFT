import API from "./api";

// get all jobs
export const getJobs = () => {
  return API.get("/jobs");
};