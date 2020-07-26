<template>
    <div class="center">
        <img src="../assets/images/background.png" width="100%" height="100%">
        <vs-dialog prevent-close not-close blur v-model="active">
            <template #header>
                <h4 class="not-margin">
                    Добро пожаловать в <b>MathBattle</b>
                </h4>
            </template>


            <div class="con-form">
                <vs-input v-model="login" placeholder="Username" label-placeholder="Username">
                    <template #icon>
                        <i class="bx bxs-user"></i>
                    </template>
                </vs-input>
                <vs-input
                        type="password"
                        v-model="password"
                        label-placeholder="Пароль"
                        :visiblePassword="hasVisiblePassword"
                        @click-icon="hasVisiblePassword = !hasVisiblePassword">
                    <template #icon>
                        <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                        <i v-else class='bx bx-hide'></i>
                    </template>
                </vs-input>
                <div class="flex" style="padding-top: 10px;">
                    <vs-checkbox v-model="remember" style="margin-left: 3px;">Запомните меня</vs-checkbox>
                    <a href="#">Забыли пароль?</a>
                </div>
            </div>

            <template #footer>
                <div class="footer-dialog">
                    <vs-button block v-on:click="sendLogin()">
                        Войти
                    </vs-button>

                    <div class="new">
                        Нету аккаунта? <a href="#" v-on:click="$emit('update:view', 2)">Создать новый</a>
                    </div>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
    export default {
        data: () => ({
            active: true,
            login: '',
            password: '',
            hasVisiblePassword: false,
            remember: true
        }),
        props: {
            view: Number
        },
        methods: {
            openDangerNotification(position = null, title, text, color) {
                this.$vs.notification({
                    color,
                    position,
                    duration: 20000,
                    title: title,
                    text: text
                })
            },
            sendLogin() {
                var basicAuth = 'Basic ' + btoa(encodeURIComponent(this.login + ":" + this.password).replace(/%([0-9A-F]{2})/g,
                    function toSolidBytes(match, p1) {
                        return String.fromCharCode('0x' + p1);
                    }));
                console.log(this.$cookie.get("token"));
                this.axios.post("http://176.99.173.63:8080/users/login", {}, {
                    headers:
                        {'Authorization': basicAuth}
                }).then((response) => {
                    if (response.status === 200) {
                        this.$emit("update:view", 3);
                        this.$cookie.set("token", response.data.token, 1);
                    }

                    return true;
                })
                    .catch((error) => {
                        this.openDangerNotification('top-left', "Не верный пароль или логин", "Проверть написания пароля и логина. Если у Вас проблемы со входам напишите нам на почту ivan.podvorniy@yandex.ru", "danger");
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
            }
        },
        name: "Login"
    }
</script>
<style>
    .not-margin {
        margin: 0px;
        font-weight: normal;
        padding: 10px;
    }

    .con-form {
        width: 100%;
    }

    .con-form .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .con-form .flex a {
        font-size: 0.8rem;
        opacity: 0.7;
        color: var(--vs-theme-color) !important;
        text-decoration: none;
    }

    .con-form .flex a:hover {
        opacity: 1;
    }

    .con-form .vs-checkbox-label {
        font-size: 0.8rem;
    }

    .con-form .vs-input-content {
        margin: 10px 0px;
        width: calc(100%);
    }

    .con-form .vs-input-content .vs-input {
        width: 100%;
    }

    .footer-dialog {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: calc(100%);
    }

    .footer-dialog .new {
        margin: 0px;
        margin-top: 20px;
        padding: 0px;
        font-size: 0.7rem;
    }

    .footer-dialog .new a {
        color: rgba(var(--vs-primary), 1) !important;
        margin-left: 6px;
        text-decoration: none;
    }

    .footer-dialog .new a:hover {
        text-decoration: underline;
    }

    .footer-dialog .vs-button {
        margin: 0px;
    }
</style>
