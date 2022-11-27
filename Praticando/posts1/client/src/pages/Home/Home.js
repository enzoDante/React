import { StyledHome } from "./StyledHome";
import {Link} from 'react-router-dom'

export default function Home(){

    return(
        <StyledHome>
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