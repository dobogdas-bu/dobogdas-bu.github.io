import {ref} from 'vue'

const getGames =()=>{

const games = ref([])

const errorGames = ref(null)

const loadGames = async()=> {

const url = 'https://strikes-api.onrender.com/games'
    try {
        const res = await fetch('url')
        if(!res.ok){
            error.value ='Data does not exist'
        }
        games.value = await res.json()
        // scores.value.sort((a,b)=> parseInt(b.score)-parseInt(a.score))
    } catch(err){
        errorGames.value = err.message
        console.log(errorPlayers.value)
    }

}


return {games, errorGames, loadGames}

}

export default getGames