<template>
    <div class="body">
        <div class="navbar">
            <div class="navbar-container">
                <span style="margin-top: 5px;">logo</span>
                <div class="navbar-buttons">
                    <span style="margin-top: 5px;">Support</span>
                    <q-btn color="primary q-ml-lg" label="Primary" />
                </div>
            </div>
        </div>
        <div class="background"></div>
        <!-- <div class="background">
            <img src="../statics/Landing/background.png" />
        </div> -->
        <div class="fragment-1">
            <div class="fragment_box">
                <div class="fragment_left_box">
                    <img style="width: 100%; height: 100%;" src="../statics/Landing/iphone-img.png" />
                </div>
                <div class="fragment_right_box">
                    <div class="fragment_text">
                        <div class="fragment_text-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                        <div class="fragment_text-2">Lorem ipsum dolor sit amet consecteturs.</div>
                    </div>
                    <div class="app_download">
                        <div>
                            <img src="../statics/Landing/app-store.png" />
                        </div>
                        <div>
                            <img src="../statics/Landing/google-play.png" />
                        </div>
                    </div>
                </div>

            </div>

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
    position: relative
}

.background::before{
    content: ""; /* empty but necessary */
    background-image: url('../statics/Landing/background.png');
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: -270px;
    z-index: -1;
    transform: scale(1.2);
    overflow: hide;
}

/* .background{
    position: absolute;
    top: -260px;
    z-index: -1;
    width: 100%;
    height: 100%;
}

.background > img{
    background-position: cover;
    max-width: 100%;
    height: 100%;
    transform: rotate(-5deg);
    background-size: cover; 

} */ 

.fragment-1 {
    /* background-color: red; */
}

.fragment_box {
    /* background-color: green; */
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

.fragment_left_box {
    margin: auto;
    padding: 10px;
    margin: auto;
}

.fragment_right_box {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: auto;
    margin-top: 15%;
}

.fragment_text {
    display: flex;
    flex-direction: column;
}

.app_download {
    display: flex;
    flex-direction: row;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .fragment_text-1 {
        font-size: 18px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .fragment_box {
        flex-direction: row;
    }

    .fragment_left_box {
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .fragment_left_box {
        max-width: 70%;
        max-height: 70%;
        margin: auto;
    }
}
</style>