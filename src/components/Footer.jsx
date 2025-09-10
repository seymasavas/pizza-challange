export function Footer({ className = "" }) {
  return (
    <footer className={`footer ${className}`}>
     <div className="footer-container">
        <div className="footer-left">
            <h1>Teknolojik Yemekler</h1>
            <p><img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Adres"/> 341 Londonderry Road, Istanbul Türkiye</p>
            <p><img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email"/> aciktim@teknolojikyemekler.com</p>
            <p><img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Telefon"/> +90 216 123 45 67</p>
        </div>
        <div className="footer-middle">
            <h2>Hot Menu</h2>
            <ul>
                <li>Terminal Pizza </li>
                <li>5 Kişilik Hackathlon Pizza </li>
                <li>useEffect Tavuklu Pizza</li>
                <li>Beyaz Console Frosty </li>
                <li>Testler Geçti Mutlu Burger </li>
                <li>Position Absolute Acı Burger </li>
            </ul>
            </div>
        <div className="footer-right">
            <h2>Instagram</h2>
              <div className="footer-right-container">
                <img src="/images/iteration-2-images/footer/insta/li-0.png"/>
                <img src="/images/iteration-2-images/footer/insta/li-1.png"/>
                <img src="/images/iteration-2-images/footer/insta/li-2.png"/>
                <img src="/images/iteration-2-images/footer/insta/li-3.png"/>
                <img src="/images/iteration-2-images/footer/insta/li-4.png"/>
                <img src="/images/iteration-2-images/footer/insta/li-5.png"/>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2025 Teknolojik Yemekler. </p>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7108 5.83381C16.7222 5.9937 16.7222 6.15363 16.7222 6.31352C16.7222 11.1904 13.0103 16.8097 6.22601 16.8097C4.1359 16.8097 2.19429 16.2043 0.561035 15.1536C0.858 15.1879 1.1435 15.1993 1.45189 15.1993C3.17648 15.1993 4.76407 14.6168 6.03184 13.6232C4.41001 13.5889 3.05087 12.5267 2.58259 11.0648C2.81104 11.099 3.03945 11.1219 3.27932 11.1219C3.61052 11.1219 3.94177 11.0762 4.25012 10.9963C2.55977 10.6536 1.29197 9.16884 1.29197 7.3757V7.33003C1.78307 7.60414 2.35418 7.77546 2.95946 7.79827C1.96581 7.13582 1.31482 6.00513 1.31482 4.72593C1.31482 4.04067 1.49753 3.4125 1.81734 2.86427C3.63334 5.10284 6.36305 6.56475 9.42393 6.72467C9.36683 6.45056 9.33255 6.16505 9.33255 5.87952C9.33255 3.8465 10.9772 2.19043 13.0216 2.19043C14.0838 2.19043 15.0432 2.63586 15.7171 3.3554C16.5508 3.19551 17.3503 2.88712 18.0584 2.46454C17.7843 3.32116 17.2018 4.0407 16.4366 4.49752C17.179 4.41761 17.8986 4.21198 18.561 3.92648C18.0585 4.65741 17.4303 5.3084 16.7108 5.83381Z" fill="white"/>
            </svg>
            </div>
        </div>
    </footer>
  );
}
