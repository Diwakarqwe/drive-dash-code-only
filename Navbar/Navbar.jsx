import React from 'react';
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import {Link } from 'react-router-dom';
import LogoBrand1 from '../Assets/drive dash logo.jpg';
const Navbar=()=>{
  
  const [isHamburger , setIsHamburger]=useState(false);
    const [isHome, setIsHome] = useState(false);
    const [isInventory , setIsInventory]=useState(false);
    const [isPages , setIsPages]=useState(false);
    const [isPages1 , setIsPages1]=useState(false);
    const [isPages2 , setIsPages2]=useState(false);
    const [isPages3 , setIsPages3]=useState(false);
    const [isPages4 , setIsPages4]=useState(false);
    const [isPages5 , setIsPages5]=useState(false);
    const [isPages6 , setIsPages6]=useState(false);
    const [isShop , setIsShop]=useState(false);
    const [isBlog , setIsBlog]=useState(false);
    const [isSearch , setIsSearch]=useState(false);


    const toggleHamburger = () =>{
      setIsHamburger(!isHamburger);
    };

    const toggleDropdownHome = () => {
      setIsHome(!isHome);
    };

    const toggleDropdown1 = () =>{
      setIsInventory(!isInventory);
    };

    const toggleDropdown2 = () =>{
      setIsPages(!isPages);
    };

    const toggleDropdownPages1 = () =>{
      setIsPages1(!isPages1);
    };

    const toggleDropdownPages2 = () =>{
      setIsPages2(!isPages2);
    };

    const toggleDropdownPages3 = () =>{
      setIsPages3(!isPages3);
    };

    const toggleDropdownPages4 = () =>{
      setIsPages4(!isPages4);
    };

    const toggleDropdownPages5 = () =>{
      setIsPages5(!isPages5);
    };

    const toggleDropdownPages6 = () =>{
      setIsPages6(!isPages6);
    };

    const toggleDropdownShop = () =>{
      setIsShop(!isShop);
    };

    const toggleDropdownBlog = () =>{
      setIsBlog(!isBlog);
    };

    const toggleSearch = () =>{
      setIsSearch(!isSearch);
    }

    const [NavbarSubmitData, setNavbarSubmitData] = useState({
      nsubmit: ''
  });


  const NavbarSubmitChange = (e) => {
    const { name, value } = e.target;
    setNavbarSubmitData({ ...NavbarSubmitData, [name]: value });
};


const NavbarSubmit = (e) => {
    e.preventDefault();
    
    if (nSubmitForm()) {
        // You can submit the form or perform other actions here
    }
};

const nSubmitForm = () => {
     if (NavbarSubmitData.nsubmit === "" || NavbarSubmitData.nsubmit===null){
        alert("Enter Your Search")
    }
    else{
      alert('Your Search Is Under Process')
    }
  } 

      return(
        <>        
          
            <div>
              <nav className='navbar Navbar__one'>
                <div className='container-fluid'>
                  <div className='navbar-header'>
                    <button type='button' className='navbar-toggle hamburger__click' data-toggle='collapse' data-target='#mynavbar1' onClick={toggleHamburger}>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a className='navbar-brand' href='/'><img src={LogoBrand1} alt=''className='img-responsive logobrand'/> </a>
                  </div>
                  
                  <div className={`collapse navbar-collapse${isHamburger ? ' in' : ''}`} id='mynavbar1'>
                    <ul className='nav navbar-nav MainLI'>
                 
                      <li className='Navbar__two'>  
                        <div id='dropdownMenuButton'> <a href='#'>home<span className='caret'></span> </a>
                        <div id='shoow'>
                        <ul className='StyleRemove'>
                          <li> <Link to='/'>home page 01</Link> </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          <li> <a href='/'>home page 02</a> </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          <li> <a href='/'>home page 03</a> </li>
                        </ul>
                        </div>
                        </div>
                      </li>
                      
                      <li className='DirectLI'> <Link to='/about'>about</Link> </li>

                      <li className='Navbar__two'>
                        <div id='dropdownMenuButton'> <a href='#'>inventory<span className='caret'></span> </a>
                        <div id="shoow"> 
                          <ul className='StyleRemove'>
                            <li><Link to='/inventory'>inventory grid</Link> </li>
                            <hr style={{margin:"10px 0 10px 0"}}/>
                            <li><a href='/'>inventory list</a></li>
                            <hr style={{margin:"10px 0 10px 0"}}/>
                            <li><a href='/'>inventory single</a></li>
                          </ul>  
                        </div>
                        </div>
                      </li>
                      
                      <li className='Navbar__two'>
                        <div id='dropdownMenuButton'> <a  href='#'>pages<span className='caret'></span> </a>
                        <div id='shoow'>
                        <ul className='StyleRemove'>

                          <li className='DirectLI'> <Link to='/about'>about us</Link> </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>

                          <li className='Navbar__two'>
                            <div id='dropdownMenuButton'> <a href='#'>car listing<span className='caret'></span> </a> 
                            <div id='shoow'>
                              <ul className='StyleRemove'>
                                <li><a href='/'>listing grid</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>listing list</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>listing single</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>compare</a></li>
                              </ul>
                            </div>
                            </div>
                          </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
 
                          <li className='Navbar__two'>
                            <div id='dropdownMenuButton'> <a href='#'>my account<span className='caret'></span> </a> 
                            <div id='shoow'>                          
                              <ul className='StyleRemove'>
                                <li><Link to='/dashboard'>dashboard</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li ><Link to='/my profile'>my profile</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li ><Link to='/my listing'>my listing</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li ><Link to='/add listing'>add listing</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>my favourites</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>messages</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>settings</a></li>
                              </ul>
                            </div>
                            </div>
                          </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          
                          <li className='Navbar__two'>
                            <div id='dropdownMenuButton'> <a href='#'>authentication<span className='caret'></span> </a> 
                            <div id='shoow'>
                              <ul className='StyleRemove'>
                                <li><Link to='/login'>login</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li> <Link to='/register'>register</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li> <Link to='/forgot password'>forgot password</Link> </li>
                              </ul>
                            </div>
                            </div>
                          </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>

                          <li className='Navbar__two'>
                            <div id='dropdownMenuButton'> <a  href='#'>service<span className='caret'></span> </a> 
                            <div id='shoow'>
                              <ul className='StyleRemove'>
                                <li> <Link to='/services'>services</Link> </li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>service single</a></li>
                              </ul>
                            </div>
                            </div>
                          </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>

                          <li className='Navbar__two'>
                            <div id='dropdownMenuButton'> <a  href='#'>dealer<span className='caret'></span> </a> 
                            <div id='shoow'>
                              <ul className='StyleRemove'>
                                <li><a href='/'>dealer</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>dealer single</a></li>
                              </ul>
                            </div>
                            </div>  
                          </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>

                          <li className='Navbar__two'>
                            <div id='dropdownMenuButton'> <a  href='#'>extra pages<span className='caret'></span> </a> 
                            <div id='shoow'>
                              <ul className='StyleRemove'>
                                <li><a href='/'>404 error</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>coming soon</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/' >terms of services</a></li>
                                <hr style={{margin:"10px 0 10px 0"}}/>
                                <li><a href='/'>privacy policy</a></li>
                              </ul>
                            </div>
                            </div>  
                          </li>
                          <hr style={{margin:"10px 0 10px 0"}}/>

                          <li><a  href='/'>our team</a></li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          <li><a  href='/'>pricing plan</a></li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          <li><a  href='/'>calculator</a></li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          <li><a  href='/'>FAQ</a></li>
                          <hr style={{margin:"10px 0 10px 0"}}/>
                          <li><a  href='/'>testimonials</a></li>
                        </ul>
                        </div>
                        </div>
                      </li>

                      <li className='Navbar__two'>
                        <div id='dropdownMenuButton'> <a href='#'>shop<span className='caret'></span></a> 
                        <div id='shoow'>
                          <ul className='StyleRemove'>
                            <li><Link to='/shop'>shop</Link> </li>
                            <hr style={{margin:"10px 0 10px 0"}}/>
                            <li><a href='/'>shop cart</a></li>
                            <hr style={{margin:"10px 0 10px 0"}}/>
                            <li><Link to='/shop checkout'>shop checkout</Link> </li>
                            <hr style={{margin:"10px 0 10px 0"}}/>
                            <li><a href='/'>shop single</a></li>
                          </ul>      
                        </div>
                        </div>  
                      </li>

                      <li className='Navbar__two'>
                        <div id='dropdownMenuButton'> <a href='/'>blog<span className='caret'></span></a> 
                        <div id='shoow'>
                          <ul className='StyleRemove'>
                            <li> <Link to='/blog'>blog</Link> </li>
                            <hr style={{margin:"10px 0 10px 0"}}/>
                            <li> <Link to='/blog single'>blog single</Link> </li>
                          </ul>
                        </div>
                        </div>
                      </li>

                      <li className='DirectLI'> <Link to='/contact'>contact</Link> </li>
                      
                    </ul>
                    
                    <button type='button' className='dropdown-toggle Navbar__Search' data-toggle='dropdown' onClick={toggleSearch}> <IoIosSearch/> </button>
                    <form onSubmit={NavbarSubmit} style={{display:"inline-block"}}>
                    <input type='text' placeholder='Search' name='nsubmit' onChange={NavbarSubmitChange} value={NavbarSubmitData.nsubmit} className={`dropdown-menu Navbar__drop${isSearch ? ' show' : ''}`} /> 
                    <button type='submit'   className={`dropdown-menu Navbar__submit${isSearch ? ' show' : ''}`}><IoIosSearch/></button>
                    </form>
                    <span className='Navbar__Shopping'> <Link to='/shop'> <MdOutlineShoppingCart/> </Link>   </span>
                    <button type='button' className='Navbar__btn'> <Link to='/add listing'> <span> <IoMdAddCircleOutline/></span> Add Listing</Link> </button>

                  </div>
                </div>
              </nav>
            </div>

            <hr style={{color:"black"}}/>
      </>      
      )
}
export default Navbar;