<template>
    <header>
        <h6>8С Спец-мат</h6>
        <img src="../assets/images/Profile.png" alt="">
        <h4>Иван Подворный</h4>
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Component/icon/ic_Dropdown</title>
          <g id="Component/icon/ic_Dropdown" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M5.47901419,3.98321135 L10.8452903,8.27623226 C11.0609213,8.44873704 11.095882,8.76338322 10.9233772,8.97901419 C10.9003113,9.00784654 10.8741227,9.03403519 10.8452903,9.05710107 L5.47901419,13.350122 C5.26338322,13.5226268 4.94873704,13.4876661 4.77623226,13.2720351 C4.70530704,13.1833786 4.66666667,13.0732233 4.66666667,12.9596876 L4.66666667,4.37364576 C4.66666667,4.09750338 4.89052429,3.87364576 5.16666667,3.87364576 C5.28020241,3.87364576 5.39035767,3.91228613 5.47901419,3.98321135 Z" id="Rectangle" fill="#92929D" transform="translate(8.000000, 8.666667) rotate(-270.000000) translate(-8.000000, -8.666667) "></path>
          </g>
        </svg>
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
        width: 100vw;
        display: flex;
        align-items: center;
        position: fixed;
        box-shadow: inset 0 -1px 0 0 #E2E2EA;
    }
    h6 {
        font-weight: bold;
        font-size: 24px;
        color: #171725;
        margin-left: 20px;
        margin-right: auto;
    }
    h6 {
      font-weight: bold;
      font-size: 20px;
      color: #171725;
    }

    img {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
    svg {
      margin-left: 18px;
      margin-right: 20px;
    }

</style>
