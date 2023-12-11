import { ref} from 'vue'




const addGame = () =>{

const gameId = ref('')
const errorAddGame = ref(null)


const loadAddGame = async (gameData) =>{

    const url = 'https://strikes-api.onrender.com/games'
try {
        const res = await fetch(url , {


        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(gameData)
        })
        if(!res.ok){
            error.value ='Data does not exist'
        }
        gameId.value = await res.json()
    
        
} catch (error) {
    error.value = error.message
     
}
}
return { gameId, errorAddGame, loadAddGame}  





}
export default addGame