
const Logo =  ()=> (// way 2 to 

    <img className = "logo"  src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>

);  

export const Header = function() {
    return (
    <div className = "header">
        <Logo />
        <div className="nav-items">
            <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}