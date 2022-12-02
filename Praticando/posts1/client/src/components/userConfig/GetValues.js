import { supabase } from "./bdConfig"

export function Services(){
    return{
        GetNome(nome){
            return supabase.from('usuarios').select('nome').eq('nome', nome)
        }
    }
}