import "./nav.scss";

function Navbar() {
  return (
    <>
        <div className="col-3">
          <div className="lala">
            <nav>
              <div className="topdetiels">
                <div>
                  <div className="image_div">
                  <img
                    className="imgmy"
                    src="https://th.bing.com/th/id/OIP.QJExGdmw4J2XJVBYeOtc4AAAAA?rs=1&pid=ImgDetMain"
                    alt=""
                  />

                  </div>
                  <div className="myName" >Navneeth H M</div>
                  <div className="social_media_link ">
                    <a href="https://www.linkedin.com/in/navneeth-h-m-279352279/" target="blank"><i class="fa-brands fa-linkedin-in"> </i></a>
                  <a href="https://x.com/hm_navneethhm"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="https://github.com/NavneethHM" target="blank"><i class="fa-brands fa-github"></i></a>
  
                  </div>
                </div>
              </div>
              <div className="icon_div">

              <li className="icon"> <i class="fa-solid fa-house"> </i>  Home</li>
              <li className="icon" > <i class="fa-solid fa-user"></i> About </li>
              <li className="icon" > <i class="fa-solid fa-file"></i> Resume</li>
              <li className="icon" > <i class="fa-solid fa-folder-open"></i> Portfolio</li>
              </div>
            </nav>
          </div>
        </div>
        
    </>
  );
}
export default Navbar;
