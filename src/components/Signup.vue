<template>
    <div class="center">
        <img src="../assets/images/background.png" width="100%" height="100%">
        <vs-dialog prevent-close not-close blur v-model="active">
            <template #header>
                <h4 class="not-margin">
                    Создать новый аккаунт
                </h4>
            </template>


            <div class="con-form">
                <vs-input v-model="email" placeholder="Email" label-placeholder="Email"
                            v-on:focus="emailFocus=true"
                            v-on:blur="emailFocus=false">
                    <template #icon>
                        <i class="bx bx-user"></i>
                    </template>
                    <template v-if="validEmail && emailFocus" #message-success>
                        Email валиден
                    </template>
                    <template v-if="!validEmail && email !== '' && emailFocus" #message-danger>
                        Email не валиден
                    </template>
                </vs-input>
                <vs-input
                        v-model="name" placeholder="Имя"
                        label-placeholder="Имя"
                        v-on:focus="nameFocus=true"
                        v-on:blur="nameFocus=false">
                    <template #icon>
                        <i class="bx bx-credit-card-front"></i>
                    </template>
                    <template v-if="validName && nameFocus" #message-success>
                        Имя валидно
                    </template>
                    <template v-if="!validName && name !== '' && nameFocus" #message-danger>
                        Имя не валидно
                    </template>
                </vs-input>
                <vs-input
                        type="password"
                        v-model="password"
                        label-placeholder="Password"
                        :progress="getProgress"
                        :visiblePassword="hasVisiblePassword"
                        @click-icon="hasVisiblePassword = !hasVisiblePassword">
                    <template #icon>
                        <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                        <i v-else class='bx bx-hide'></i>
                    </template>
                </vs-input>
            </div>

            <template #footer>
                <div class="footer-dialog">
                    <vs-button v-on:click="sendSignUp()" block>
                        Зарегистрироваться
                    </vs-button>

                    <div class="new">
                        Есть аккаунта? <a href="#" v-on:click="$emit('update:view', 1)">Войти</a>
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
            email: '',
            password: '',
            name: '',
            hasVisiblePassword: false,
            remember: true,
            nameFocus: false,
            emailFocus: false,
        }),
        computed: {
            getProgress() {
                let progress = 0

                // at least one number

                if (/\d/.test(this.password)) {
                    progress += 20
                }

                // at least one capital letter

                if (/(.*[A-Z].*)/.test(this.password)) {
                    progress += 20
                }

                // at menons a lowercase

                if (/(.*[a-z].*)/.test(this.password)) {
                    progress += 20
                }

                // more than 5 digits

                if (this.password.length >= 6) {
                    progress += 20
                }

                // at least one special character

                if (/[^A-Za-z0-9]/.test(this.password)) {
                    progress += 20
                }

                return progress
            },
            validName() {
                return /^[а-яА-ЯёЁ]{2,30} [а-яА-ЯёЁ]{2,30}$/.test(this.name)
            },
            validEmail() {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(this.email).toLowerCase());
            },
        },
        methods: {
            checkName() {
                return /^[а-яА-ЯёЁ]{2,30} [а-яА-ЯёЁ]{2,30}$/.test(this.name)
            },

            checkEmail() {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(this.email).toLowerCase());
            },

            checkPassword() {
                let progress = 0

                // at least one number

                if (/\d/.test(this.password)) {
                    progress += 20
                }

                // at least one capital letter

                if (/(.*[A-Z].*)/.test(this.password)) {
                    progress += 20
                }

                // at menons a lowercase

                if (/(.*[a-z].*)/.test(this.password)) {
                    progress += 20
                }

                // more than 5 digits

                if (this.password.length >= 6) {
                    progress += 20
                }

                // at least one special character

                if (/[^A-Za-z0-9]/.test(this.password)) {
                    progress += 20
                }

                return progress
            },
            openDangerNotification(position = null, title, text, color) {
                this.$vs.notification({
                    color,
                    position,
                    duration: 20000,
                    title: title,
                    text: text
                })
            },
            sendSignUp() {
                if (this.checkPassword() < 80) {
                    this.openDangerNotification("top-left", "Не подходящий пароль", "Введеный Вами пароль слишком слабый", "danger")
                }
                if (!this.checkName()) {
                    this.openDangerNotification("top-left", "Не подходящее имя", "Введенное Вами имя не валидное. Имя должно состоять из двух слов написанных латиницей", "danger")
                }
                if (this.checkEmail()) {
                    this.openDangerNotification("top-left", "Не подходящая почта", "Введеная Вами почта не валидна", "danger")
                }

                this.axios.post(`http://${process.env.VUE_APP_BACKEND}/users/signup`, this.qs.stringify({
                    name: this.name.split(' ')[0],
                    surname: this.name.split(' ')[1],
                    username: this.email,
                    password: this.password,
                }), {}).then((response) => {
                    if (response.status === 200) {
                      this.$cookie.set("token", response.data.token, 1);
                      this.$emit("update:view", 3);
                    }
                })
                    .catch((error) => {
                        if (error.response.status === 409) {
                            this.openDangerNotification('top-left', "Данный логин уже занят", "К сожалению данные логин уже занят", "danger");
                        } else {
                            this.openDangerNotification('top-left', "Уппс, что-то пошло не так", "Проверьте соединение с интернетом и обратитесь в тех поддержку", "danger");
                        }
                        return false;
                    })
                    .then(function () {
                        // always executed
                    });
            }
        },
        props: {
            view: Number
        },
        name: "SignUp"
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
