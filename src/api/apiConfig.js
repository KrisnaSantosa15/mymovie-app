const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "58aab96676496367e7aa1ec09ce98562",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
