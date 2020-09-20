<template>
    <aside>
        <img src="../assets/images/Profile.png" class="burger">
        <vs-avatar badge badge-color="danger" badge-position="top-right" class="avatar center">
            <template #text>
                8C
            </template>
            <template #badge>
                3
            </template>
        </vs-avatar>
        <vs-avatar badge-color="danger" badge-position="top-right" class="avatar center">
            <template #text>
                7C
            </template>
            <template #badge>

            </template>
        </vs-avatar>
        <div class="plus">
            <img src="../assets/icons/plus.svg">
        </div>
    </aside>
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
        margin-top: 18px;
        margin-bottom: 6px;
        width: 41px;
        height: 41px;
    }
    .avatar {
        font-weight: bold;
        margin: 0;
        margin-top: 20px;
    }
    .plus {
        opacity: 0.5;
        border-width: 1px;
        border-color: #ffffff;
        border-style: dashed;
        border-radius: 35%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 41px;
        height: 41px;
        margin-top: auto;
        margin-bottom: 20px;
        transition: .35s ease-in-out;
    }
    .plus:hover {
        transform: rotate(180deg);
    }

</style>
