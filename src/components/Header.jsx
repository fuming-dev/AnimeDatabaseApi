import './header.css'

const Header = () => {
    return (
        <div className='header-container'>
            
            <div className="img-container">
                <img src="https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="picture" />
            </div>

            <div className="img__container-content">
                <h2>Watch animes with your friends</h2>
                <p>START YOUR 30 DAYS FREE TRIAL</p>
                <button>Sign up or Join Now</button>
            </div>
     
            
            
        </div>
    )
}

export default Header
