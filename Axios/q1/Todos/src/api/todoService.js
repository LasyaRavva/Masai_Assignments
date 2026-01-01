import axiosInstance from './axiosInstance';

/**
 * Fetch all todos from the API
 * @returns {Promise} - Promise resolving to array of todos
 */
export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

/**
 * Fetch a specific todo by ID
 * @param {number} id - Todo ID
 * @returns {Promise} - Promise resolving to todo object
 */
export const getTodoById = async (id) => {
  try {
    const response = await axiosInstance.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching todo with id ${id}:`, error);
    throw error;
  }
};
