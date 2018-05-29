import { name,state } from '../store/index'
const getters={
 name:state => state.user.name,  
 token:state => state.user.token  
}  
