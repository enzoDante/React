import { StyledPerfUser } from "./StyledPerfilUser";
import {Link} from 'react-router-dom'
// import { Services } from "../../components/userConfig/GetValues";
import { useEffect, useState } from "react";
import { supabase } from "../../components/userConfig/bdConfig";



export default function PerfilUser(){
    // const service = Services()
    const [usu, setUsu] = useState({nome: '', img: ''})
    
    function init(){
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('user')
        console.log(id)
        supabase.from('usuarios').select('id_usuario, nome, imagem').eq('user', id).then((e) => {
            console.log(e)
            e.data.forEach((el) => {
                setUsu({nome: el.nome, img: el.imagem})
                console.log(el)
            })
        })
        console.log('carregou')
    }
    useEffect(() => {
        init()
    }, [])
    return(
        <StyledPerfUser>
            <div id="userlogs">
                <div className="imgperfil">
                    {/* "/images/profile.jpg" */}
                    <img src={usu.img} alt="" />
                </div>
                <h1>{usu.nome}</h1>
            </div>
            {/* corpo */}
            <article>
                <div className="post">
                    <div className="header"><h2><Link to='/post'>titulo 1</Link></h2></div>
                    <div className="img"><img src="/images/posts/a.jpg" alt="" /></div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat, deleniti est voluptatibus vero cumque? Vel et voluptate ad cum sint, tenetur consequuntur. Accusamus deserunt nesciunt porro reiciendis fugiat eos.</p>
                    </div>
                </div>


                <div className="post">
                    <div className="header"><h2><Link to='/post'>outro valor</Link></h2></div>
                    <div className="img"><img src="/images/posts/a.jpg" alt="" /></div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat, deleniti est voluptatibus vero cumque? Vel et voluptate ad cum sint, tenetur consequuntur. Accusamus deserunt nesciunt porro reiciendis fugiat eos.</p>
                    </div>
                </div>



                <div className="post">
                    <div className="header"><h2><Link to='/post'>valor terceiro</Link></h2></div>
                    <div className="img"><img src="/images/posts/a.jpg" alt="" /></div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat, deleniti est voluptatibus vero cumque? Vel et voluptate ad cum sint, tenetur consequuntur. Accusamus deserunt nesciunt porro reiciendis fugiat eos.</p>
                    </div>
                </div>


                <div className="post">
                    <div className="header"><h2><Link to='/post'>quarto titulo</Link></h2></div>
                    <div className="img"><img src="/images/posts/a.jpg" alt="" /></div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat, deleniti est voluptatibus vero cumque? Vel et voluptate ad cum sint, tenetur consequuntur. Accusamus deserunt nesciunt porro reiciendis fugiat eos.</p>
                    </div>
                </div>

                <div className="post">
                    <div className="header"><h2><Link to='/post'>quarto titulo</Link></h2></div>
                    <div className="texto">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat, deleniti est voluptatibus vero cumque? Vel et voluptate ad cum sint, tenetur consequuntur. Accusamus deserunt nesciunt porro reiciendis fugiat eos.</p>
                    </div>
                </div>
            </article>
        </StyledPerfUser>
    )
}