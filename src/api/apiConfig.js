const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f4ddfb3118c59cffa95d4415d960c9cc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
