<template>
    <div>
        <div style="display: flex; align-items: center; margin-bottom: 16px">
            <h4>{{name}}</h4>
            <svg style="margin-left: auto" width="10px" height="7px" viewBox="0 0 10 7" fill-rule="evenodd" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#92929D" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
                <title>Rectangle</title>
                <desc>Created with Sketch.</desc>
                <g id="✨-Symbols" stroke="none" stroke-width="1">
                    <g id="Component/icon/ic_Dropdown" transform="translate(-3.000000, -5.000000)">
                        <path d="M5.47901419,3.98321135 L10.8452903,8.27623226 C11.0609213,8.44873704 11.095882,8.76338322 10.9233772,8.97901419 C10.9003113,9.00784654 10.8741227,9.03403519 10.8452903,9.05710107 L5.47901419,13.350122 C5.26338322,13.5226268 4.94873704,13.4876661 4.77623226,13.2720351 C4.70530704,13.1833786 4.66666667,13.0732233 4.66666667,12.9596876 L4.66666667,4.37364576 C4.66666667,4.09750338 4.89052429,3.87364576 5.16666667,3.87364576 C5.28020241,3.87364576 5.39035767,3.91228613 5.47901419,3.98321135 Z" id="Rectangle" transform="translate(8.000000, 8.666667) rotate(-270.000000) translate(-8.000000, -8.666667) "></path>
                    </g>
                </g>
            </svg>
        </div>
        <p v-for="chat in chats" v-bind:key="chat">{{chat}}</p>
    </div>
</template>

<script>
    export default {
        name: "ChatGroup",
        props : {
            name : String,
            chats: Array
        }
    }
</script>

<style scoped>
    h4 {
        font-weight: bold;
        font-size: 14px;
        color: #92929D;
        letter-spacing: 1px;
    }
    h4:hover {
        color: #000000;
    }

    p {
        font-size: 14px;
        font-weight: normal;
        letter-spacing: 0.2px;
        margin-bottom: 12px;
        margin-top: 9px;
        margin-left: 4px;
        transition: font-weight  .35s;
        -webkit-transition: font-weight .35s;
    }
    p:hover {
        font-weight: bold;
    }

</style>
