<template>
    <div class="row q-my-lg bg-grey-1">
        <div v-for="reward in rewardList" :key="reward.id" class="col-4 ">
           <a class="text-decoration-none" href="#">
            <div class="row items-center">
                <img width="150" :src="require(`@/assets/starbucks-rewards/${reward?.url}`)">
                <p>{{ reward.content }}</p>
            </div>

           </a>
        </div>
    </div>

    <div class="row q-my-lg items-center">
        <div class="col-2 q-mr-lg">
            <img width="200" src="@/assets/starbucks-rewards/reward1.png" alt="">

        </div>
        
        <div class="col-9 q-ml-lg">
            <h6 class="text-bold">İyi ki Doğdun!</h6>
            <p>Yeni yaşına Starbucks®’tan ikram 1 Tall boy içecekle başla. Çünkü 15 ⭐ hediyemiz hesabında! E içimizden geldi.</p>
        </div>


    </div>

</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

import { DocumentData, collection, getDocs } from "firebase/firestore";

// @ts-ignore
import { db } from "@/firebase/index.js";


export default defineComponent({

    async created() {
        const querySnapshot = await getDocs(collection(db, "rewards"));
        querySnapshot.forEach((doc) => {

            this.rewardList.push(doc.data())

        });
    },

    setup() {

        const state = reactive({

            rewardList: [] as DocumentData[]

        })

        return { ...toRefs(state) }

    }

})


</script>