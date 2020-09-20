<template>
    <header>
        <h6>8С Спец-мат</h6>
        <vs-input  style="width: 500px" placeholder="Поиск" block>
        </vs-input>
        <img src="../assets/icons/Bell.svg" class="bell">
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    header {
        height: 70px;
        width: calc(100vw - 80px);
        display: flex;
        align-items: center;
        position: fixed;
        margin-left: 80px;
        box-shadow: inset 0 -1px 0 0 #E2E2EA;
    }
    h6 {
        font-weight: bold;
        font-size: 18px;
        color: #171725;
        margin-left: 22px;
        margin-right: auto;
    }
    .bell {
        margin-left: auto;
        margin-right: 22px;
        height: 27px;
        width: 27px;
    }
</style>
