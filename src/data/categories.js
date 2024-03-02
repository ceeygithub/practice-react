
export const fetchCategories = async () => {
    try {
        const response = await fetch('http://localhost:3001/categories'); // Added 'http://' for proper URL format
        const data = await response.json();
        console.log(data);
        return data; // You can return the data if needed
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error if needed
    }
};

