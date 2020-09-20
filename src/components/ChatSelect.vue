<template>
    <div class="left-bar">
        <div class="dashboard">
            <img src="../assets/icons/dashboard.svg" width="20px" height="20px" style="margin-right: 20px">
            <h6>Доска информации</h6>
        </div>
        <ChatGroup :name="'ИНФОРМАЦИЯ'" :chats="['# Условия', '# Разборы', '# Расписание']" style="margin-top: 30px"></ChatGroup>
        <ChatGroup :name="'ОБСУЖДЕНИЯ'" :chats="['# Комбинаторика. Кот', '# Комбинаторика. Заяц', '# Геометрия. Собака', '# Геометрия. Волк', '# Алгебра. Лиса']" style="margin-top: 30px"></ChatGroup>

    </div>
</template>

<script>
    import ChatGroup from "./ChatGroup";
    export default {
        name: "ChatSelect",
        components: {
            ChatGroup,
        }
    }
</script>

<style scoped>
    .left-bar {
        position: fixed;
        margin-left: 80px;
        margin-top: 70px;
        width: 260px;
        height: 100vh;
        background: #FFFFFF;
        box-shadow: inset -1px 0 0 0 #E2E2EA;
        padding-left: 20px;
        padding-right: 20px;
    }
    .dashboard {
        display: flex;
        margin-top: 15px;
        padding-top: 14px;
        padding-bottom: 1px;
    }
    h6 {
        margin-top: 1px;
        font-size: 14px;
        font-weight: bold;
        color: #171725;
        letter-spacing: 0.1px;
    }
</style>
