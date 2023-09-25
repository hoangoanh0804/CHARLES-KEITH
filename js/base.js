const banner = document.querySelector(".s-banner");

// async function getProduct(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// render banner

async function renderBanner() {
    // const data = await getProduct(`http://localhost:3000/banner`);

    // data.forEach((element) => {
    banner.innerHTML += `<div id="demo" class="carousel slide overflowXHidden" data-bs-ride="carousel">
        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="img/banner/banner1.jpg" alt="Los Angeles" class="d-block" />
                <div class="carousel-caption s_content">
                    <div class="s_inner text-center">
                        <div class="s-headline">
                            <h3 class="s_heading cl-black">The Canvas Capsule</h3>
                            <p class="s_title cl-black">Stylish and functional at once</p>
                            <a href="canvas.html" target="_blank"  class="s_link cl-black">SHOP THE STORY</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="img/banner/banner2.jpg" alt="Los Angeles" class="d-block" />
                <div class="carousel-caption s_content">
                    <div class="s_inner text-center">
                        <div class="s-headline">
                            <h3 class="s_heading">The Canvas Capsule</h3>
                            <p class="s_title">Stylish and functional at once</p>
                            <a href="canvas.html" target="_blank"  class="s_link">SHOP THE STORY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon rounded-circle"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon rounded-circle"></span>
        </button>
    </div>`;
    //     });
}

renderBanner();
