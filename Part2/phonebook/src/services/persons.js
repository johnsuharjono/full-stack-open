import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
	const res = await axios.get(baseUrl);
	return res.data;
};

const create = async (newObject) => {
	return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
	return axios.put(`${baseUrl}/${id}`, newObject);
};

export default {
	getAll,
	create,
	update,
};
