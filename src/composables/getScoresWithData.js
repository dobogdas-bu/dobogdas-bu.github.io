import {ref} from 'vue'

const baseUrl=process.env.VUE_APP_BASEURL


const getScoresWithData =()=>{

const scores = ref([])

const error = ref(null)

const load = async()=> {
    
    const url = baseUrl+'scores'
    try {
        const res = await fetch(url)
        if(!res.ok){
            error.value ='Data does not exist'
        }
        
        scores.value = await res.json()
        
    } catch(err){
        error.value = err.message
        
    }

}


return {scores, error, load}

}

export default getScoresWithData
