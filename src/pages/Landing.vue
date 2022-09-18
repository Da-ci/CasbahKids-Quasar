<template>
    <div class="body" >
        <div class="navbar">
            <div class="navbar-container">
                <span style="margin-top: 5px;">logo</span>
                <div class="navbar-buttons">
                    <span style="margin-top: 5px;">Support</span>
                    <q-btn color="primary q-ml-lg" label="Se connecter" to="/login" />
                </div>
            </div>
        </div>
        <!-- <div class="background"></div> -->
        <div class="background">
            <div class="background-container">
                <img class="img" src="../statics/Landing/background.png" />
            </div>
        </div>
        <div class="fragment-1">
            <div class="fragment_box">
                <div class="fragment_image_box">
                    <img style="width: 100%; height: 100%;" src="../statics/Landing/iphone-img.png" />
                </div>
                <div class="fragment_text_box">
                    <div class="fragment_text">
                        <div class="fragment_text-1">Découvrez des centaines d'histoires!</div>
                        <div class="fragment_text-2">Des histoires venu du coeur de la Casbah</div>
                    </div>
                    <div class="app_download">
                        <div class="q-mr-md">
                            <img style="width: 100%; height: 100%;" src="../statics/Landing/app-store.png" />
                        </div>
                        <div>
                            <img style="width: 100%; height: 100%;" src="../statics/Landing/google-play.png" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="fragment-2">
            <div class="fragment_box">
                <div class="fragment_image_box">
                    <img class="img-example" src="../statics/Landing/example-3.png" />
                </div>
                <div class="fragment_text_box">
                    <div class="fragment_text">
                        <div class="fragment_text-example-1">Découvrez des centaines d'histoires!</div>
                        <div class="fragment_text-example-2">Des histoires venu du coeur de la Casbah</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fragment-2">
            <div class="fragment_box fragment_box_reverse">
                <div class="fragment_text_box">
                    <div class="fragment_text">
                        <div class="fragment_text-example-1">Découvrez des centaines d'histoires!</div>
                        <div class="fragment_text-example-2">Des histoires venu du coeur de la Casbah</div>
                    </div>
                </div>
                <div class="fragment_image_box">
                    <img class="img-example" src="../statics/Landing/example-3.png" />
                </div>
            </div>
        </div>

        <div class="fragment-2" style="margin-bottom: 500px;">
            <div class="fragment_box">
                <div class="fragment_image_box">
                    <img class="img-example" src="../statics/Landing/example-3.png" />
                </div>
                <div class="fragment_text_box">
                    <div class="fragment_text">
                        <div class="fragment_text-example-1">Découvrez des centaines d'histoires!</div>
                        <div class="fragment_text-example-2">Des histoires venu du coeur de la Casbah</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fragment-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti voluptatum tempore exercitationem quidem amet veniam minus, esse ex dolorum sit totam itaque provident praesentium iusto. Earum ullam deleniti corporis.
        </div>
    </div>
</template>

<style scoped>
.body {
    width: 100%;
    height: 100vh;
}

.navbar {
    padding: 20px;
    max-width: 100%;
    background-color: transparent;
}

.navbar-container {
    max-width: 1200px;
    width: 85%;
    margin: auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}

.navbar-buttons {
    display: flex;
    flex-direction: row;
}

.background {
    position: absolute;
    z-index: -1;
    overflow: clip;
    width: 100%;
    height: 100%;
    top: 0px;
}

.background-container {
    transform: scale(2.4);
}

.img {
    margin-top: 100px;
    max-width: 100%;
    height: 330px;
    transform: rotate(-10deg);
}

.fragment_box {
    max-width: 1400px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.fragment_image_box {
    margin: auto;
    padding: 10px;
    /* background-color: blue; */
}

.fragment_text_box {
    display: flex;
    flex-direction: column;
    padding: 15px;
    /* background-color: red; */
}

.fragment_text {
    display: flex;
    flex-direction: column;
    /* background-color: cyan; */
}

.fragment_text-1 {
    margin-bottom: 10px;
    font-weight: 600;
    color: #1f1f1f;
}

.fragment_text-2 {
    margin-bottom: 15px;
    font-weight: 300;
    color: #666666;
}

.app_download {
    display: flex;
    flex-direction: row;
}

.fragment-2 {
    max-width: 1400px;
    margin: auto;
    /* margin-bottom: 100px; */
    /* margin-top: 350px; */
    overflow: hidden;
    border-bottom: 1px solid #dee2e6;

}

.fragment_text-example-1 {
    margin-bottom: 10px;
    font-weight: 600;
    color: #1f1f1f;
}

.fragment_text-example-2 {
    margin-bottom: 15px;
    font-weight: 300;
    color: #666666;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .fragment_image_box {
        width: 100%;
    }

    .fragment_text-1 {
        font-size: 30px;
    }

    .fragment_text-2 {
        font-size: 18px;
    }

    .fragment-2 {
        height: auto;
    }

    .img-example {
        width: 70%;
        height: 70%;
        transform: translateX(-50%);
        margin-left: 50%;
    }

    .fragment_text-example-1 {
        font-size: 30px;
    }

    .fragment_text-example-2 {
        font-size: 18px;
    }

    .fragment_box_reverse{
        flex-direction: column-reverse;
    }

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .fragment_image_box {
        width: 450px;
    }

    .fragment_text_box {
        width: 450px;
        margin: auto;
    }

    .fragment_text-1 {
        font-size: 32px;
    }

    .fragment_text-2 {
        font-size: 20px;
    }

    .img-example {
        width: 75%;
        height: 75%;
        transform: translateX(-50%);
        margin-left: 50%;
    }

    .fragment_text-example-1 {
        font-size: 32px;
    }

    .fragment_text-example-2 {
        font-size: 20px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .fragment_image_box {
        width: 50%;
    }

    .fragment_text_box {
        width: 50%;
        margin: auto;
    }

    .fragment_text-1 {
        font-size: 52px;
    }

    .fragment_text-2 {
        font-size: 24px;
    }

    .img-example {
        width: 80%;
        height: 80%;
        transform: translateX(-50%);
        margin-left: 50%;
    }

    .fragment_text-example-1 {
        font-size: 46px;
    }

    .fragment_text-example-2 {
        font-size: 24px;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .fragment_box {
        flex-direction: row;
    }

    .fragment_image_box {
        width: 50%;
    }

    .fragment_text_box {
        margin-top: 100px;
    }

    .fragment_text,
    .app_download {
        margin-left: 80px;
    }

    .fragment-2 {
        height: 600px;
    }

    .img-example {
        width: 75%;
        height: 75%;
        transform: translateX(-50%);
        margin-left: 50%;
    }
    

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
</style>