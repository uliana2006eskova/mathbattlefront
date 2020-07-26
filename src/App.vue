<template>
    <div id="app">
        <Login v-if="stage === 1" :view.sync="stage">

        </Login>
        <SignUp v-if="stage === 2" :view.sync="stage"></SignUp>
        <div id="main" v-if="stage === 3">
            <SideBar :view.sync="stage"></SideBar>
        </div>
    </div>
</template>

<script>
    import Login from "./components/Login";
    import SignUp from "./components/Signup";
    import SideBar from "./components/SideBar";

    export default {
        name: 'App',
        data: () => ({
            stage: 0,
        }),
        mounted() {
            console.log(this.$cookie.get("token"));
            this.axios.get("http://176.99.173.63:8080/users/me", {headers : {'Authorization' : 'Bearer ' + this.$cookie.get("token")}})
                .then((response) => {
                if (response.status === 200) {
                    this.stage = 3;
                }
                else {
                    this.stage = 1;
                }
                return true;
            }).catch(() => {
                this.stage = 1;
                return false;
            })
        },
        components: {
            SideBar,
            SignUp,
            Login,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    @font-face {
        font-family: 'Proxima Nova';
        src: url('./assets/fonts/ProximaNova-Bold.eot');
        src: local('Proxima Nova Bold'), local('ProximaNova-Bold'),
        url('./assets/fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/ProximaNova-Bold.woff') format('woff'),
        url('./assets/fonts/ProximaNova-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Proxima Nova';
        src: url('./assets/fonts/ProximaNova-Regular.eot');
        src: local('Proxima Nova Regular'), local('ProximaNova-Regular'),
        url('./assets/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/ProximaNova-Regular.woff') format('woff'),
        url('./assets/fonts/ProximaNova-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    #app {
        font-family: "Proxima Nova";
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h5, h6 {
        margin: 0;
        font-weight: normal;
    }

    h4 {
        margin: 0;
        font-weight: bold;
    }

    body {
        font-family: "Proxima Nova";
        margin: 0;
    }
</style>
