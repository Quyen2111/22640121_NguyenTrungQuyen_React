import './header.css'
import avatar from '../image/Avatar 35.png'
import search from '../image/search.png'
import Archivecheck from '../image/Archive check.png'
import Group9 from '../image/Group 9.png'
import Arrow from '../image/Arrow forward ios 2.png'
import avatarto from '../image/avatar.png'

function bai1Header() {
    return (
        <>
            <header>
                <div className="flex-container">
                    <img src={Group9} alt=""/> &emsp; &emsp;
                    <img src={search} alt="" />
                    <input type="text" placeholder="search" />
                    <nav className="Menu">
                        <ul>
                            <li><a href="#What to cook">What to cook</a></li>
                            <li><a href="#Recipes">Recipes</a></li>
                            <li><a href="#Ingredients">Ingredients</a></li>
                            <li><a href="#Occasions">Occasions</a></li>
                            <li><a href="#Abouts Us">About Us</a></li>
                            <li><button><img src={Archivecheck} alt="" />Your Recipe Box</button></li>
                        </ul>
                    </nav>
                    <img src={avatar} alt="" />
                </div>
            </header>

            <div class='chose'>
                <h4>home</h4>
                <img src={Arrow} alt="" />
                <p>Your Recipe Box</p>

            </div>

            <div class="Content">
                <h1>Emma Gonzalez's Recipe Box</h1>
                <div>
                     <img src={avatarto} alt="" />
                </div>
            </div>
        </>
    )
}

export default bai1Header;
