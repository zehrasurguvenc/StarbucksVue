import {defineStore} from "pinia"


export const authStore = defineStore("auth",{
    state: () => ({
        user:"Zeynep RA",
    }),
    actions:{
        setUser(user){
            this.user = user
        },
        
    },
    getters:{
        isAuth(state){
            return state.user !== null
        },

        getUser(state){
            return state.user 
        }
    }
    
})