import { useState } from "react";
import LogIn from "./LogIn";

export default function Nav() {

  const [isShown, setIsShown] = useState(false)


  return (
    <header>
      <div className="head">
        <div className="account">
          <div id="profile" onMouseOver={()=> setIsShown(true)} onMouseOut={()=> setIsShown(false)}>{isShown && (<LogIn/>)}</div>
          
        </div>
        <div className="logo">
          <svg
            alt="NET-A-PORTER Logo"
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 20"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M0 0h140v20H0z"></path>
              <path
                fill="#fff"
                fillRule="nonzero"
                d="M84.5 4.7c3 0 5.5 2.3 5.5 5.4 0 2.9-2.5 5.2-5.5 5.2-3.1 0-5.5-2.4-5.5-5.4 0-3 2.6-5.2 5.5-5.2zM98 5c1.8 0 2.9 1.1 2.9 2.9 0 1.352-.62 2.309-1.691 2.701.735.54 1.274 1.442 1.891 2.499.4.7.9 1.3 1.6 1.9h-1.9l-1.4-2c-1.3-2-1.9-2.2-2.7-2.2h-2.4V15h-1.5V5zm29.3 10h-1.5V5h5.2c1.8 0 2.9 1.1 2.9 2.9 0 1.352-.62 2.309-1.691 2.701.735.54 1.274 1.442 1.891 2.499.4.7.9 1.3 1.6 1.9h-1.9l-1.4-2c-1.3-2-1.9-2.2-2.7-2.2h-2.4V15zM73.9 5c1.8 0 3 1.1 3 2.9 0 1.8-1.1 2.9-2.9 2.9h-4.4V15h-1.5V5zm38.2 0v1.5h-3.5V15h-1.5V6.5h-3.5V5h8.5zM34.9 5v1.5h-3.5V15H30V6.5h-3.6V5h8.5zM5.4 5l6 7.6V5h1.5v10h-1.5L5.5 7.4h-.1V15H4V5h1.4zm46.2 0L56 15h-1.6l-1.2-2.9h-4.8L47 15h-1.6L50 5h1.6zM23.9 5v1.5h-5.7v2.8h4.9v1.4h-4.9v2.9h5.7V15h-7.2V5h7.2zm98.2 0v1.5h-5.7v2.8h4.9v1.4h-4.9v2.9h5.7V15h-7.2V5h7.2zM84.5 6.3c-2.3 0-4.1 1.6-4.1 3.8 0 2.1 1.9 3.7 4.1 3.7 2.2 0 4-1.7 4.1-3.7 0-2.2-1.9-3.8-4.1-3.8zm-20.1 3v1.5h-6.1V9.3h6.1zm-21.2 0v1.5h-6.1V9.3h6.1zm7.6-2.5L49 10.7h3.5l-1.7-3.9zm23.1-.3h-4.3v2.8h4.3c1 0 1.5-.5 1.5-1.4 0-1-.5-1.4-1.5-1.4zm24.1 0h-3.7v2.8H98c.9 0 1.5-.5 1.5-1.4 0-1-.5-1.4-1.5-1.4zm33 0h-3.7v2.8h3.7c.9 0 1.5-.5 1.5-1.4 0-1-.5-1.4-1.5-1.4z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="shop"></div>
      </div>
      <nav className="nav">
        <ul>
          <li>New In</li>
          <li>Shop By</li>
          <li>Designers</li>
          <li className="active">Clothing</li>
          <li>Shoes</li>
          <li>Bags</li>
          <li>Jewelry &amp; Watches</li>
          <li>Accessories</li>
          <li>Lingerie</li>
          <li>Beauty</li>
          <li>Home &amp; Gifts</li>
        </ul>
      </nav>
    </header>
  );
}
