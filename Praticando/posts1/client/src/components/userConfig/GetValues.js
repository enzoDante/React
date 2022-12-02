import { supabase } from "./bdConfig"

export function Services(){
    return{
        GetNome(nome){
            return supabase.from('usuarios').select('nome').eq('nome', nome)
        },
        GetUserId(nome){
            return supabase.from("usuarios").select('id_usuario').eq("nome", nome)
        },
        GetLogin(nome, senha){
            return supabase.from('usuarios').select("id_usuario, nome, imagem").match({nome: nome, senha: senha})
        },

        GetUserInfo(id){
            return 0
        }
    }
}