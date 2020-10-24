<template>
    <div id="app">
        <Login v-if="stage === 1" :view.sync="stage">

        </Login>
        <SignUp v-if="stage === 2" :view.sync="stage"></SignUp>
        <div id="main" v-if="stage === 3">
            <Header></Header>
            <Messages></Messages>
        </div>

    </div>
</template>

<script>
    import Login from "./components/Login";
    import SignUp from "./components/Signup";
    import Header from "./components/Header";
    import Messages from "./components/Messages"
    export default {
        name: 'App',
        data: () => ({
            stage: 0,
        }),
        mounted() {
            console.log(process.env.VUE_APP_BACKEND)
            console.log(process.env.NODE_ENV)
            console.log(this.$cookie.get("token"));
            this.axios.get(`http://${process.env.VUE_APP_BACKEND}/users/me`, {headers : {'Authorization' : 'Bearer ' + this.$cookie.get("token")}})
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
          SignUp,
            Login,
            Header,
          Messages,
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600&display=swap');


    #app {
        font-family: 'Montserrat Alternates', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p, h1, h2, h3, h5, h6 {
        margin: 0;
        font-weight: normal;
    }

    h4 {
        margin: 0;
        font-weight: bold;
    }

    body {
        font-family: 'Roboto';
        margin: 0;
    }

    .messages {
      position: fixed;
      top: 70px;
    }
</style>
