<template>
    <div class="row justify-center">
        <div class="col-2 text-center" v-for="product in productList" :key="product?.id">
            <a class="text-decoration-none" href="#">
                <div class="q-my-lg q-pa-sm">
                    <div class="col">
                        <div class="photo-section">
                            <img class="q-mx-auto" :src="require(`@/assets/products/${product?.url}`)">
                        </div>
                        <div class="col content-section q-mx-lg q-my-md">
                            <p>{{ product?.title }}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Product from '@/types/ProductItem';
import { defineComponent, reactive, toRefs } from 'vue';

import { collection, getDocs } from "firebase/firestore";

// @ts-ignore
import { db } from "../firebase/index.js";

export default defineComponent({

    async created() {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {

            this.productList.push(doc.data() as Product)

        });
    },

    setup() {

        const state = reactive({

            productList: [] as Product[]
        })

        return { ...toRefs(state) }

    },

    props: ["product"]
})
</script>