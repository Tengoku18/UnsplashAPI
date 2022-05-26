import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: " Client-ID iMUz8DTSs7pAyYv4OGHnKLcoOBnHSEieMIQn0UNtXWY",
  },
});
