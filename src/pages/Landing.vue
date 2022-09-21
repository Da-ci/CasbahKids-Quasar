<template>
    <div class="body">
        <div class="navbar">
            <div class="navbar-container">
                <div class="logo">
                    <img src="../statics/logo.png" />
                </div>
                <div class="navbar-buttons">
                    <span style="margin-top: 10px; margin-right: 20px;">Support</span>
                    <q-btn color="primary q-ml-lg" label="Se connecter" to="/login" />
                </div>
            </div>
        </div>
        <!-- <div class="background-1"></div> -->
        <div class="background-1">
            <div class="background-1-container">
                <img class="img-1" src="../statics/Landing/background.png" />
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
                            <img style="width: 100%; height: 60px;" src="../statics/Landing/app-store.png" />
                        </div>
                        <div>
                            <img style="width: 100%; height: 60px;" src="../statics/Landing/google-play.png" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="fragment-2">
            <div class="fragment_box">
                <div class="fragment_image_box">
                    <img class="img-example" src="../statics/Landing/example-1.png" />
                </div>
                <div class="fragment_text_box">
                    <!-- <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <q-btn key="button" color="secondary" icon="mail" label="Email" />
                    </transition> -->
                    <div class="fragment_text" transition-show="jump-down" transition-hide="jump-up">
                        <div class="fragment_text-example-1">Découvrez des centaines d'histoires!</div>
                        <div class="fragment_text-example-2">Des histoires venu du coeur de la Casbah</div>
                    </div>
                </div>
            </div>
        </div>



        <div class="fragment-2">
            <div class="fragment_box fragment_box_reverse">
                <div class="fragment_text_box">
                    <div class="fragment_text" transition-show="flip-up" transition-hide="flip-down">
                        <div class="fragment_text-example-1">Découvrez des centaines d'histoires!</div>
                        <div class="fragment_text-example-2">Des histoires venu du coeur de la Casbah</div>
                    </div>
                </div>
                <div class="fragment_image_box">
                    <img class="img-example" src="../statics/Landing/example-3.png" />
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
                    <img class="img-example" src="../statics/Landing/example-2.png" />
                </div>
            </div>
        </div>

        <div class="background-2">
            <div class="background-2-container">
                <img class="img-2" src="../statics/Landing/background.png" />
            </div>
        </div>

        <div class="fragment-3">
            <div class="fragment_box ">
                <div class="fragment-3_title">
                    <span>Les auditeurs aiment CasbahKids!</span>
                </div>
            </div>

            <div class="commentary_container">

                <div>
                    <div class="commentary_box">
                        <div class="commentary_text">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor sit quaerat alias
                            perspiciatis omnis
                            illo nulla dolor sit neque pariatur sit amet."
                        </div>
                        <div class="commentary_info">
                            <div class="img_container">
                                <img style="width: 100%; height: 100%;" src="../statics/avatar.png" />
                            </div>
                            <div class="info_container">
                                <span class="info_container-text-1">Yacine Loldj</span>
                                <span class="info_container-text-2"> Utilisateurs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="commentary_box">
                        <div class="commentary_text">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor sit quaerat alias
                            perspiciatis omnis
                            illo nulla dolor sit neque pariatur sit amet."
                        </div>
                        <div class="commentary_info">
                            <div class="img_container">
                                <img style="width: 100%; height: 100%;" src="../statics/avatar.png" />
                            </div>
                            <div class="info_container">
                                <span class="info_container-text-1">Yacine Loldj</span>
                                <span class="info_container-text-2"> Utilisateurs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="commentary_box">
                        <div class="commentary_text">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor sit quaerat alias
                            perspiciatis omnis
                            illo nulla dolor sit neque pariatur sit amet."
                        </div>
                        <div class="commentary_info">
                            <div class="img_container">
                                <img style="width: 100%; height: 100%;" src="../statics/avatar.png" />
                            </div>
                            <div class="info_container">
                                <span class="info_container-text-1">Yacine Loldj</span>
                                <span class="info_container-text-2"> Utilisateurs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="commentary_box" transition-show="jump-down" transition-hide="jump-up">
                        <div class="commentary_text">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor sit quaerat alias
                            perspiciatis omnis
                            illo nulla dolor sit neque pariatur sit amet."
                        </div>
                        <div class="commentary_info">
                            <div class="img_container">
                                <img style="width: 100%; height: 100%;" src="../statics/avatar.png" />
                            </div>
                            <div class="info_container">
                                <span class="info_container-text-1">Yacine Loldj</span>
                                <span class="info_container-text-2"> Utilisateurs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="commentary_box">
                        <div class="commentary_text">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor sit quaerat alias
                            perspiciatis omnis
                            illo nulla dolor sit neque pariatur sit amet."
                        </div>
                        <div class="commentary_info">
                            <div class="img_container">
                                <img style="width: 100%; height: 100%;" src="../statics/avatar.png" />
                            </div>
                            <div class="info_container">
                                <span class="info_container-text-1">Yacine Loldj</span>
                                <span class="info_container-text-2"> Utilisateurs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="commentary_box">
                        <div class="commentary_text">
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima dolor sit quaerat alias
                            perspiciatis omnis
                            illo nulla dolor sit neque pariatur sit amet."
                        </div>
                        <div class="commentary_info">
                            <div class="img_container">
                                <img style="width: 100%; height: 100%;" src="../statics/avatar.png" />
                            </div>
                            <div class="info_container">
                                <span class="info_container-text-1">Yacine Loldj</span>
                                <span class="info_container-text-2"> Utilisateurs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="fragment-4">
            <div class="frag-4_title">
                IL EST TEMPS DE TÉLÉCHARGER L'APPLICATION
            </div>
            <div class="frag-4_content">
                Rejoignez plus de 2000 utilisateurs satisfaits et partagez votre histoire !
            </div>

            <div class="app_download" style="margin: auto;">
                <div class="q-mr-md">
                    <img style="width: 100%; height: 60px;" src="../statics/Landing/app-store.png" />
                </div>
                <div>
                    <img style="width: 100%; height: 60px;" src="../statics/Landing/google-play.png" />
                </div>
            </div>

        </div>

        <div class="footer_container">
            <div class="footer">
                <div class="logo">
                    <img src="../statics/logo.png" />
                </div>
                <div class="footer_buttons">
                    <span>A propos</span>
                    <span>Carriere</span>
                    <span>Recrutement</span>
                    <span>Exemple</span>
                </div>
                <div class="footer_copyright">
                    © Meteor Dash 2022 All right reserved.
                </div>
            </div>

        </div>

    </div>
</template>

<script>

</script>

<style scoped>
.fragment_text-1,
.fragment_text-example-1,
.frag-4_title,
.frag-4_content {
    color: #1f1f1f;
}

.fragment_text-2,
.frag-4_title {
    color: #222f3f;
}


.body {
    width: 100%;
    height: 100vh;
}

.navbar {
    padding: 20px;
    max-width: 100%;
    background-1-color: transparent;
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
    height: 30px;
    margin-top: 25px;
}

.background-1 {
    position: absolute;
    z-index: -1;
    overflow: clip;
    width: 100%;
    height: 100%;
    top: 0px;
}

.background-1-container {
    transform: scale(2.4);
}

.img-1 {
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
    filter: drop-shadow(0px 30px 20px rgb(0 0 0 / 8%));
}

.fragment_text_box {
    display: flex;
    flex-direction: column;
    padding: 15px;
    /* background-1-color: red; */
}

.fragment_text {
    display: flex;
    flex-direction: column;
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

.fragment-3 {
    margin: auto;
    max-width: 1400px;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

.background-2-container {
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.img-2 {
    width: 100%;
    /* height: 100%; */
    transform: scale(1.5);
    margin-bottom: 150px;
}

.fragment-3_title {
    margin: auto;
    font-weight: 600;
}

.commentary_box {
    /* width: 100%; */
    height: 340px;
    background-color: white;
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 14%);

}

.commentary_text {
    font-weight: 400;
    font-size: 20px;
    width: 100%;
    height: 180px;
}

.commentary_info {
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 260px;
    /* background-color: red; */
}

.img_container {
    margin-top: 25px;
    width: 50px;
    height: 50px;
}

.img-example {
    filter: drop-shadow(0px 10px 20px rgb(0 0 0 / 5%));
}

.info_container {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: 10px;
}

.info_container-text-1 {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
}

.info_container-text-2 {
    font-size: 14px;
    margin-top: 4px;
}

.commentary_container {
    display: grid;
    grid-gap: 15px;
    padding: 15px;
}

.fragment-4 {
    max-width: 800px;
    margin: auto;
    text-align: center;
    margin-bottom: 100px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}

.frag-4_title {
    font-size: 14px;
    font-weight: 600;
    color: #666666;
    letter-spacing: 2px;
}

.frag-4_content {
    font-size: 56px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 50px;
}

.footer_container {
    width: 100%;
    max-width: 1250px;
    height: 90px;
    margin: auto;
    border-top: 1px solid #dee2e6;

}

.footer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer_buttons {
    width: 350px;
    display: flex;
    justify-content: space-between;
    /* transform: translateX(+100px); */
    font-weight: 600;
    color: #333333;


}

.footer_copyright {
    margin-right: 30px;
    font-weight: 500;
    color: #666666;
}

.logo {
    width: 80px;
    height: 80px;
}

.logo>img {
    height: 100%;
    width: 100%;
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

    .fragment-1 {
        margin-bottom: 50px;
    }

    .fragment-2 {
        height: auto;
        margin-bottom: 80px;
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

    .fragment_box_reverse {
        flex-direction: column-reverse;
    }

    .fragment-3 {
        margin-bottom: 20px;
        padding-bottom: 20px;
    }

    .fragment-3_title {
        margin-top: 10px;
        font-size: 25px;
    }

    .img-2 {
        height: 400px;
    }

    .frag-4_title {
        font-size: 14px;
    }

    .frag-4_content {
        font-size: 40px;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .footer_container {
        height: 160px;
        width: 80%;
    }

    .footer {
        flex-direction: column;
    }

    .footer_buttons {
        transform: none;
    }

    .footer_copyright {
        margin: 0px;
        margin-bottom: 5px;
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

    .fragment-1 {
        margin-bottom: 100px;
    }

    .fragment-2 {
        margin-bottom: 100px;
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

    .fragment-3_title {
        margin-top: 45px;
        margin-bottom: 35px;
        font-size: 40px;
    }

    .commentary_container {
        grid-template-columns: 1fr 1fr;
    }

    .commentary_text {
        font-size: 19px;
    }

    .img-2 {
        height: 730px;
    }

    .footer_container {
        height: 160px;
        width: 80%;

    }

    .footer {
        flex-direction: column;
    }

    .footer_buttons {
        transform: none;
    }

    .footer_copyright {
        margin: 0px;
        margin-bottom: 10px;
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

    .fragment-1 {
        margin-bottom: 250px;
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

    .fragment-3_title {
        margin-top: 55px;
        margin-bottom: 40px;
        font-size: 45px;
    }

    .footer_container {
        height: 120px;
        width: 90%;

    }

    .footer {
        flex-direction: row;
    }

    .footer_buttons {
        transform: translateX(5%);
        flex-wrap: wrap;
        width: 300px;
    }

    .footer_copyright {
        margin-right: 30px;
        margin-bottom: 10px;
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

    .fragment-3_title {
        margin-top: 65px;
        margin-bottom: 45px;
        font-size: 50px;
    }

    .commentary_container {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .footer_container {
        height: 120px;
    }

    .footer {
        flex-direction: row;
    }

    .footer_buttons {
        transform: translateX(+70px);
    }

    .footer_copyright {
        margin-right: 30px;
        margin-bottom: 10px;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
</style>