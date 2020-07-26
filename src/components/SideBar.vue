<template>
    <div class="center">
        <p v-on:click="logOut()">Press to logout</p>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        props: ["view"],
        methods: {
            logOut() {
                this.$cookie.delete("token");
                this.$emit("update:view", 1);
            }
        }
    }
</script>

<style scoped>
    aside {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 0;
        padding-left: 19px;
        padding-right: 19px;
        width: 42px;
        height: 100vh;
        position: fixed;
        background: rgba(var(--vs-primary),1);
    }
    .center {
        display: inline-flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .burger {
        margin-top: 19px;
        margin-bottom: 10px;
        width: 32px;
        height: 32px;
    }
    .avatar {
        font-weight: bold;
        margin: 0;
        margin-top: 20px;
    }
</style>
