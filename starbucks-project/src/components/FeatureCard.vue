<template>
    <q-card flat v-for="feature in featureCardList" :key="feature.id">
        <div class="row flex justify-between q-my-md">
            <div class="col">
                <img style="width: 95%;" :src="require(`@/assets/features/${feature.url}`)" />
            </div>
            <div class="col-6 ">
                <h6 class="text-weight-bold">{{ feature?.title }}</h6>
                <p>
                    {{ feature?.content }}
                </p>
            </div>
        </div>
    </q-card>
</template>

<script lang="ts">
import FeatureCardItem from '@/types/FeatureCardItem';
import { defineComponent, reactive, toRefs } from 'vue';

import { collection, getDocs } from "firebase/firestore";

// @ts-ignore
import { db } from "../firebase/index.js";

export default defineComponent({

    async created() {
        const querySnapshot = await getDocs(collection(db, "features"));
        querySnapshot.forEach((doc) => {

            this.featureCardList.push(doc.data() as FeatureCardItem)

        });
    },


    setup() {

        const state = reactive({
            featureCardList: [] as FeatureCardItem[],
        })

        return { ...toRefs(state) }
    },

})
</script>