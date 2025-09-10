import { Banner } from "./Banner";
import { Header } from "./Header";
import "../App.css";
import { Footer } from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <Header />
      </div>

      <div>
        <Banner />
      </div>

      <div className="homepage-container">
        <div className="cta-card1">
          <img src="/images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus" />
          <h1 className="card1">Özel</h1>
          <h1 className="card2">Lezzetus</h1>
          <p>Position: Absolute Acı Burger</p>
          <Link to="/order">
            <button>SİPARİŞ VER</button>
          </Link>
        </div>


        <div className="cta-card2">
          <div className="cta-card-item1">
            <img src="/images/iteration-2-images/cta/kart-2.png" alt="Hackathlon" />
            <p className="item1">Hackathlon</p>
            <p className="item2">Burger Menü</p>
            <Link to="/order">
              <button>SİPARİŞ VER</button>
            </Link>
          </div>
          <div className="cta-card-item2">
            <img src="/images/iteration-2-images/cta/kart-3.png" alt="Çoook hızlı" />
            <p className="item3"> <span className="highlight">Çoooook</span> hızlı</p>            
            <p className="item4">npm gibi kurye</p>
            <Link to="/order">
              <button>SİPARİŞ VER</button>
            </Link>
          </div>
        </div>
        <div className="featured-text">
          <p>en çok paketlenen menüler</p>
          <h1>Acıktıran Kodlara Doyuran Lezzetler</h1>
        </div>
        <div className="dish">
          <button>
            <img src="/images/iteration-2-images/icons/1.svg" alt="Ramen" />Ramen</button>
          <button>
            <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
            Pizza
          </button>
          <button>
            <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
            Burger
          </button>
          <button>
            <img src="/images/iteration-2-images/icons/4.svg" alt="French fries" />
            French fries
          </button>
          <button>
            <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" />
            Fast food
          </button>
          <button>
            <img src="/images/iteration-2-images/icons/6.svg" alt="Soft Drink" />
            Soft Drink
          </button>
        </div>
        
        <div className="menu-container">
          <div className="menu-card1">
            <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza"/>
            <p>Terminal Pizza</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span> 4.9</span>
                <span>(200)</span>
                <span style={{ fontWeight: 'bold' }}>60 ₺</span>
              </div>
          </div>

          <div className="menu-card2">
            <img src="/images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza"/>
            <p>Position Absolute Acı Pizza</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span> 4.9</span>
                <span>(200)</span>
                <span style={{ fontWeight: 'bold' }}>60 ₺</span>
              </div>
          </div>

          <div className="menu-card3">
            <img src="/images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger"/>
            <p>useEffect Tavuklu Burger</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span> 4.9</span>
                <span>(200)</span>
                <span style={{ fontWeight: 'bold' }}>60 ₺</span>
              </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}