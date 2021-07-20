import axios from "axios";

const getData = async (n) => {
    try {
        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${n}`);
        const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${n}`);
        return { user, post };
    } catch (err) {
        return err;
    }
}

export default getData;