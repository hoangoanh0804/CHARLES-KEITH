const API_LINK = "http://localhost:3000";
const header = document.querySelector(".s-header");
const headerMobile = document.querySelector(".s-header_mobilebox");
const footer = document.querySelector(".s-footer");

async function getProduct(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function showSignIn() {
    document.querySelector(".s_signIn").classList.add("active");
}

// Render Header
async function renderHeader() {
    const data = await getProduct(`${API_LINK}/header`);

    data.forEach((element) => {
        header.innerHTML += `<div class="s-header_desktop">
        <div class="s_top">
            <img src="img/logo.svg" alt="" />
            <ul class="s_list">
                <li>
                    <a href="">Singapore,</a>
                    <span>SG$</span>
                </li>
    
                <li>
                    <span>English</span>
                </li>
    
                <li>
                    <i class="fa-thin fa-location-dot"></i>
                    <a href="location.html" target="_blank">Find a store</a>
                </li>
    
                <li class="s_signIn" onclick="showSignIn()">
                    <span>Sign in</span>
                    <ul class="sub-signin">
                    <h3 class="s_heading">SIGN IN</h3>
                    <p class="s_title">Password details are case sensitive.</p>
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Password" />
                    <button class="s_signin">Sign In</button>
                    <a href="">Forgot your password?</a>
                    <button class="s_create">CREATE AN ACCOUNT</button>

                   
                </ul>
                </li>
            </ul>
        </div>
    
        <div class="s_bot">
            <div class="s_left">
                <ul class="menu-link_list">
                    <li class="menu-link">
                        <a href="" class="s_heading-navbar active menu-link_prev">NEW in</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all</a></li>
                                        <li><a href="">Shoes</a></li>
                                        <li><a href="">Bags</a></li>
                                        <li><a href="">Jewellery</a></li>
                                        <li><a href="">Wallet</a></li>
                                        <li><a href="">Pre - orders</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-4">
                                    <h3 class="submenu-heading">SHOP BUY COLLECTION</h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <img src="img/submenu/img1.jpg" alt="" />
                                            <h5 class="submenu-heading2">CHARLES & KEITH x DISNEY ZOOTOPIA</h5>
                                        </div>
                                        <div class="col-md-6">
                                            <ul class="d-block submenu-link">
                                                <li><a href="">Spring Summer 2023</a></li>
                                                <li><a href="">The Bridal Collection</a></li>
                                                <li><a href="">CHARLES & KEITH Pixar Lotso Collection</a></li>
                                                <li><a href="">C-Capsule Collection</a></li>
                                                <li><a href="">both X CHARLES & KEITH</a></li>
                                                <li><a href="">The Purpose Collection</a></li>
                                                <li><a href="">Gabine Collection</a></li>
                                                <li><a href="">The Charlot Bag</a></li>
                                                <li><a href="">The Koa Collection</a></li>
                                                <li><a href="">The Petra Collection</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-4">
                                    <h3 class="submenu-heading">SHOP EDIT</h3>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <img src="img/submenu/img2.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card-submenu d-flex">
                                                        <img src="img/submenu/img3.jpg" alt="" />
                                                        <div>
                                                            <p class="submenu-heading">COLLABORATION}</p>
                                                            <h4 class="submenu-heading2">ITZ MINE x CHARLES & KEITH</h4>
                                                        </div>
                                                    </div>
                                                    <div class="card-submenu d-flex">
                                                        <img src="img/submenu/img4.jpg" alt="" />
                                                        <div>
                                                            <p class="submenu-heading">FASHION</p>
                                                            <h4 class="submenu-heading2">ITZY: Summer 2023 Collection</h4>
                                                        </div>
                                                    </div>
    
                                                    <div class="card-submenu d-flex">
                                                        <img src="img/submenu/img5.jpg" alt="" />
                                                        <div>
                                                            <p class="submenu-heading">FASHION</p>
                                                            <h4 class="submenu-heading2">Summer's Calling</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="" class="menu-link_prev2">SHOP BUY</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">CURATED CHOICES</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">Trending Now</a></li>
                                        <li><a href="">Online Excusives</a></li>
                                        <li><a href="">Back in Stock</a></li>
                                    </ul>
    
                                    <h3 class="submenu-heading mrt50">CHARLES & KEITH ICONS</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">Gabine Collection</a></li>
                                        <li><a href="">The Charlot Bag</a></li>
                                        <li><a href="">The Koa Collection</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">SHOP BUY COLLECTION</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Spring Summer 2023</a></li>
                                                        <li><a href="">ITZY x CHARLES & KEITH: ITZ MINE</a></li>
                                                        <li><a href="">The Bridal Collection</a></li>
                                                        <li><a href="">CHARLES & KEITH x DISNEY Collection</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">C-Capsule Collection</a></li>
                                                        <li><a href="">both X CHARLES & KEITH</a></li>
                                                        <li><a href="">The Purpose Collection</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">SHOP BUY TRENDs</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Barbiecore</a></li>
                                                        <li><a href="">Gifts For Her</a></li>
                                                        <li><a href="">Back To School</a></li>
                                                        <li><a href="">Trending Now: Chunky Shoes</a></li>
                                                        <li><a href="">Chain Details</a></li>
                                                        <li><a href="">Notable Neutrals</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h3 class="submenu-heading">occasions</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Keep It Casual</a></li>
                                                        <li><a href="">the party edit</a></li>
                                                        <li><a href="">the bridal edit</a></li>
                                                        <li><a href="">back to office</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <img class="images-submenu" src="img/submenu/img2.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="">SHOES</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all shoes</a></li>
                                        <li><a href="">New arrival</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">Espadrille</a></li>
                                        <li><a href="">Pumps</a></li>
                                        <li><a href="">Mules</a></li>
                                        <li><a href="">loafers</a></li>
                                        <li><a href="">kid's shoes</a></li>
                                        <li><a href="">Flats</a></li>
                                        <li><a href="">Scandals</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Spring Summer 2023</a></li>
                                                        <li><a href="">ITZY x CHARLES & KEITH: ITZ MINE</a></li>
                                                        <li><a href="">The Bridal Collection</a></li>
                                                        <li><a href="">CHARLES & KEITH x DISNEY Collection</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">C-Capsule Collection</a></li>
                                                        <li><a href="">both X CHARLES & KEITH</a></li>
                                                        <li><a href="">The Purpose Collection</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">SHOP BUY Occasion</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Barbiecore</a></li>
                                                        <li><a href="">Gifts For Her</a></li>
                                                        <li><a href="">Back To School</a></li>
                                                        <li><a href="">Trending Now: Chunky Shoes</a></li>
                                                        <li><a href="">Chain Details</a></li>
                                                        <li><a href="">Notable Neutrals</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class="col-md-8">
                                            <img class="images-submenu" src="img/submenu/img6.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="">BAGS</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all bags</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">Crossbody bags</a></li>
                                        <li><a href="">Handbags</a></li>
                                        <li><a href="">Mules</a></li>
                                        <li><a href="">Shoulder bags</a></li>
                                        <li><a href="">tote bags</a></li>
                                        <li><a href="">Mini bags</a></li>
                                        <li><a href="">Clutches</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Spring Summer 2023</a></li>
                                                        <li><a href="">ITZY x CHARLES & KEITH: ITZ MINE</a></li>
                                                        <li><a href="">The Bridal Collection</a></li>
                                                        <li><a href="">CHARLES & KEITH x DISNEY Collection</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">C-Capsule Collection</a></li>
                                                        <li><a href="">both X CHARLES & KEITH</a></li>
                                                        <li><a href="">The Purpose Collection</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">SHOP BUY Occasion</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Essential</a></li>
                                                        <li><a href="">Gifts For Her</a></li>
                                                        <li><a href="">Party</a></li>
                                                        <li><a href="">Wedding</a></li>
                                                        <li><a href="">Work wear</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class="col-md-8">
                                            <img class="images-submenu" src="img/submenu/img7.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="">WALLETS</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all Wallet</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                        <li><a href="">long wallet</a></li>
                                        <li><a href="">wristlets & Pouches</a></li>
                                        <li><a href="">card holder's</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallets</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">online exclusives</a></li>
                                                        <li><a href="">back in stock</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    
                                        <!-- <div class="col-md-6">
                                            <h3 class="submenu-heading">SHOP BUY Occasion</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                    <li><a href="">Gabine small wallets</a></li>
                                                    <li><a href="">the micro koa</a></li>
                                                    <li><a href="">petra wallet collection</a></li>
                                                    <li><a href="">trending now</a></li>
                                                    <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                    <li><a href="">online exclusives</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-12">
                                            <img class="images-submenu" src="img/submenu/img8.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="">SUNGLASSES</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                        <li><a href="">long wallet</a></li>
                                        <li><a href="">wristlets & Pouches</a></li>
                                        <li><a href="">card holder's</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallets</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">online exclusives</a></li>
                                                        <li><a href=""back in stock</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-12">
                                            <img class="images-submenu" src="img/submenu/img9.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
    
                    <li class="menu-link">
                        <a href="">ACCESSORIES</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                        <li><a href="">long wallet</a></li>
                                        <li><a href="">wristlets & Pouches</a></li>
                                        <li><a href="">card holder's</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallets</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">online exclusives</a></li>
                                                        <li><a href="">back in stock</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-12">
                                            <img class="images-submenu" src="img/submenu/img10.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
    
                    <li class="menu-link">
                        <a href="">KIDS</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                        <li><a href="">long wallet</a></li>
                                        <li><a href="">wristlets & Pouches</a></li>
                                        <li><a href="">card holder's</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallets</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">online exclusives</a></li>
                                                        <li><a href="">back in stock</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-12">
                                            <img class="images-submenu" src="img/submenu/img12.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="" class="text-danger">SALE </a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all Wallet</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallets</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-4">
                                            <img class="images-submenu" src="img/submenu/img13.jpg" alt="" />
                                            <h5 class="submenu-heading2">SHOES</h5>
                                        </div>
                                        <div class="col-md-4">
                                            <img class="images-submenu" src="img/submenu/img14.jpg" alt="" />
                                            <h5 class="submenu-heading2">BAGS</h5>
                                        </div>
                                        <div class="col-md-4">
                                            <img class="images-submenu" src="img/submenu/img15.jpg" alt="" />
                                            <h5 class="submenu-heading2">WALLETS</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="">SPRING SUMMER 2023</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                        <li><a href="">long wallet</a></li>
                                        <li><a href="">wristlets & Pouches/a></li>
                                        <li><a href="">card holder's</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallets</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                        <li><a href="">CHARLES & KEITH Pixar Losto Collection</a></li>
                                                        <li><a href="">online exclusives</a></li>
                                                        <li><a href="">back in stock</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-5">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-12">
                                            <img class="images-submenu" src="img/submenu/img16.jpg" alt="" />
                                            <h5 class="submenu-heading2">Summer 2023 Collection</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="menu-link">
                        <a href="">SUMMER VACATION</a>
                        <ul class="submenu">
                            <div class="row">
                                <li class="col-md-3">
                                    <h3 class="submenu-heading">SHOP BUY CATEGORY</h3>
                                    <ul class="d-block submenu-link">
                                        <li><a href="">View all Wallet</a></li>
                                        <li><a href="">New arrivals</a></li>
                                        <li><a href="">CHARLES & KEITH COLLECTION</a></li>
                                        <li><a href="">small wallet</a></li>
                                    </ul>
                                </li>
                                <li class="col-md-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3 class="submenu-heading">in the spotlight</h3>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <ul class="d-block submenu-link">
                                                        <li><a href="">Gabine small wallet</a></li>
                                                        <li><a href="">the micro koa</a></li>
                                                        <li><a href="">petra wallet collection</a></li>
                                                        <li><a href="">trending now</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="col-md-6">
                                    <div class="row">
                                        <!-- <div class="col-md-4"></div> -->
                                        <div class="col-md-4">
                                        <img class="images-submenu" src="img/submenu/img17.jpg" alt="" />
                                        <h5 class="submenu-heading2">SUMMER VACATION</h5>
                                        </div>
                                        <div class="col-md-4">
                                        <img class="images-submenu" src="img/submenu/img18.jpg" alt="" />
                                        <h5 class="submenu-heading2">SUMMER SCANDALS</h5>
                                        </div>
                                        <div class="col-md-4">
                                        <img class="images-submenu" src="img/submenu/img19.jpg" alt="" />
                                        <h5 class="submenu-heading2">BEACH STYLE</h5>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <!-- <li class="menu-link menu-link_next"><a href="">THE EDIT</a></li>
                    <li class="menu-link menu-link_next2"><a href="">JEWELLERY</a></li> -->
                </ul>
                <!-- 
                <div class="controls">
                    <div id="prev-btn"><i class="fa-light fa-chevron-left"></i></div>
                    <div id="next-btn"><i class="fa-light fa-chevron-right"></i></div>
                </div> -->
            </div>
    
            <div class="s_right">
                <div class="s_input">
                    <input type="text" placeholder="Search" />
                    <i class="fa-thin fa-magnifying-glass"></i>
                </div>
              
                <div class="s_icon">
                <a href="login.html"><i class="fa-thin fa-heart"></i></a>
                <a href=""><i class="fa-thin fa-bag-shopping"></i></a>
                <span>3</span>
            </div>
            </div>
        </div>
    </div>`;

        headerMobile.innerHTML += `<div class="s-header_mobile">
    <div class="s-search">
        <i class="fa-light fa-bars"></i>
        <i class="fa-thin fa-magnifying-glass"></i>
    </div>
    <div class="s-logo"><img src="img/logo.svg" alt="" /></div>

    <div class="s-user">
        <i class="fa-sharp fa-solid fa-circle-user icon"></i>
        <div class="s_icon">
            <i class="fa-thin fa-bag-shopping"></i>
            <span>3</span>
        </div>
    </div>
</div>`;
    });
}

renderHeader();

// render footer

async function renderFooter() {
    const data = await getProduct(`${API_LINK}/footer`);

    data.forEach((element) => {
        footer.innerHTML += `<div class="s_top">
        <div class="s_content text-center">
            <h4 class="s_heading">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p class="s_title">
            Keep your finger on the pulse of fashion with weekly round-ups of our latest arrivals, upcoming launches, special promotions and trend focused editorials.
            </p>

            <div class="s_input">
                <input type="text" placeholder="Enter your email address" />
                <button>Subcribe</button>
            </div>
        </div>
    </div>
    <div class="s_mid">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="s_heading-footer">SHOPPING WITH US</div>
                    <ul class="s_list mb-2">
                        <li><a href="">Gift Cards</a></li>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Shipping & Tracking</a></li>
                        <li><a href="">Returns & Exchanges</a></li>
                        <li><a href="">Promotions</a></li>
                        <li><a href="">Student Discount"</a></li>
                        <li><a href="">Size Guidet</a></li>
                    </ul>
                </div>
                <div class="col-md-3 mb-2">
                    <div class="s_heading-footer">CUSTOMER CARE</div>
                    <ul class="s_list">
                        <li><a href="">Check Order Status</a></li>
                        <li><a href="">Privilege Membership</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Counterfeit Education</a></li>
                    </ul>
                </div>

                <div class="col-md-3 mb-2">
                    <div class="s_heading-footer">ABOUT US</div>
                    <ul class="s_list">
                        <li><a href="">Brand Profile</a></li>
                        <li><a href="">CHARLES & KEITH GROUP</a></li>
                        <li><a href="">Sustainability</a></li>
                        <li><a href="">Impact Programme</a></li>
                        <li><a href="">Franchising Opportunities</a></li>
                        <li><a href="">Affiliates</a></li>
                        <li><a href="">Ambassadors</a></li>
                        <li><a href="">Virtual Store Experiencet}</a></li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <div class="s_heading-footer mb-2">FOLLOW US</div>
                    <div class="s-inner_top">
                        <ul class="s-list_social d-flex">
                            <li><i class="fa-brands fa-facebook"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-youtube"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-pinterest"></i></li>
                            <li><i class="fa-brands fa-tiktok"></i></li>
                            <li><i class="fa-brands fa-spotify"></i></li>
                            <li><i class="fa-brands fa-telegram"></i></li>
                            <li><i class="fa-brands fa-whatsapp"></i></li>
                        </ul>
                    </div>

                    <div class="s-inner_mid">
                        <div class="s_heading-footer">DOWNLOAD OUR APP</div>
                        <div class="s_list-download">
                            <img src="img/footer/download1.svg" alt="" />
                            <img src="img/footer/download2.svg" alt="" />
                        </div>
                    </div>

                    <div class="s-inner_bottom">
                        <div class="s_heading-footer">ACCEPTED PAYMENT METHODS</div>
                        <div class="s_list-payment d-flex">
                            <img src="img/footer/payment1.svg" alt="" />
                            <img src="img/footer/payment2.svg" alt="" />
                            <img src="img/footer/payment3.svg" alt="" />
                            <img src="img/footer/payment4.svg" alt="" />
                            <img src="img/footer/payment5.svg" alt="" />
                            <img src="img/footer/payment6.svg" alt="" />
                            <img src="img/footer/payment7.svg" alt="" />
                            <img src="img/footer/payment8.svg" alt="" />
                            <img src="img/footer/payment9.svg" alt="" />
                            <img src="img/footer/payment10.svg" alt="" />
                            <img src="img/footer/payment11.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="s_bottom">
        <div class="container">
            <div class="s_list-bottom">
                <ul class="d-flex">
                    <li>© CHARLES & KEITH, all rights reserved</li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Data Protection</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookies Policy</a></li>
                </ul>
            </div>
        </div>
    </div>`;
    });
}

renderFooter();
