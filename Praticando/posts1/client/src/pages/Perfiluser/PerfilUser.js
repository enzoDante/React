import { StyledPerfUser } from "./StyledPerfilUser";
import {Link} from 'react-router-dom'
import { Services } from "../../components/userConfig/GetValues";



export default function PerfilUser(){
    const service = Services()

    const carregar = e => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('user')
        console.log(id)
        service.GetUserInfo(id)
    }

    return(
        <StyledPerfUser>
            <div id="userlogs" onLoad={carregar}>
                <div className="imgperfil">
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <h1>nome usuario</h1>
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