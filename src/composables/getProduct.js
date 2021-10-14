import { ref } from '@vue/reactivity'
import axios from "axios";
import store from '../store';

const getProduct = (id) => {

    const product = ref(null);
    const error = ref(null);
    const uri = store.getters.getUri;
    const load = async() => {
        try {
            await axios
                .get(`${uri}/products/${id}`)
                .then((res) => {
                    return res.data;
                })
                .then((data) => {
                    product.value = data;
                })
                .catch((err) => {
                    throw Error("Unable to fetch data from Database");
                });
        } catch (error) {
            return error;
        }
    };

    return { product, error, load }
}

export default getProduct