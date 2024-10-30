const apiService = {
    async getData() {
        try {
            const response = await fetch('https://example.com/api/data');
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
};

export default apiService;
