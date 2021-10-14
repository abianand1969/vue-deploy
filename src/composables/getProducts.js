import axios from "axios";
import { computed, ref } from "@vue/reactivity";
import store from "../store";

const getProducts = (filter) => {
    // console.log(filter.value)
    const products = ref([]);
    const error = ref(null);
    const uri = store.getters.getUri;

    const load = async() => {
        console.log(`${uri}/products`)
        try {
            await axios
                .get(`${uri}/products`)
                .then((res) => {
                    return res.data;
                })
                .then((data) => {
                    setTimeout(() => {
                        products.value = data;
                    }, 1000);

                })
                .catch((err) => {
                    throw Error('Unable to fetch data from Database')
                });
        } catch (error) {
            return error
        }

    };

    const filteredProducts = computed(() => {
        if (products.value.length > 0) {
            if (filter.value === "men's clothing") {
                return products.value.filter(
                    (product) => product.category === "men's clothing"
                );
            } else if (filter.value === "women's clothing") {
                return products.value.filter(
                    (product) => product.category === "women's clothing"
                );
            } else if (filter.value === "electronics") {
                return products.value.filter(
                    (product) => product.category === "electronics"
                );
            } else {
                return products.value.sort((x, y) => {
                    let a = x.title.toUpperCase(),
                        b = y.title.toUpperCase();
                    return a == b ? 0 : a > b ? 1 : -1;
                });
                // return products.value
            }
        } else {
            error.value = "Unable to Fetch Data From Database"
        }

    })

    return { products, error, filteredProducts, load }
}

export default getProducts