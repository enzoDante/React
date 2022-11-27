import { StyledHome } from "./StyledHome";
import {Link} from 'react-router-dom'

export default function Home(){

    return(
        <StyledHome>
            <div className="post">
                <div className="userP">
                    {/* ====================== envolve o back-end ====================== */}
                    {/* visitar perfil do usuario q publicou */}
                    <Link to="/Perfil" className="imgperfil"><img src="/images/profile.jpg" alt="" /></Link>
                    {/* página do post */}
                    <Link><h2>Titulo</h2></Link>
                    {/* ====================== envolve o back-end ====================== */}
                </div>
                <div className="img"><img src="/images/posts/a.jpg" alt="" /></div>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam magnam modi reprehenderit commodi quas excepturi minus, vel assumenda voluptate rerum, dolor quos, esse quam officiis quod molestiae cumque id voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, impedit eligendi quam unde aspernatur, vero saepe tempora facere dolorum temporibus dolore sint recusandae maxime sunt voluptatibus totam quas! Non, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic praesentium soluta sint! Veritatis nemo nihil dolore voluptatibus tempore, odit aspernatur voluptate impedit alias perspiciatis, sunt sit suscipit cum eaque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aliquam beatae, repudiandae cupiditate sequi sapiente rerum, fugit sunt itaque earum, architecto quisquam obcaecati numquam ullam porro recusandae! Ratione, tenetur atque.</p>
                </div>
            </div>
            
            
            <div className="post">
                <div className="userP">
                    <Link to="/Perfil" className="imgperfil"><img src="/images/profile.jpg" alt="" /></Link>
                    <Link><h2>Titulo</h2></Link>
                </div>
                <div className="img"><img src="/images/posts/a.jpg" alt="" /></div>
                <div className="content">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam magnam modi reprehenderit commodi quas excepturi minus, vel assumenda voluptate rerum, dolor quos, esse quam officiis quod molestiae cumque id voluptatum.</p>
                </div>
            </div>
            
        </StyledHome>
    )
}