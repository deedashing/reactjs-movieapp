const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '27489dd89dfa6b409e4312c4efac04b6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;