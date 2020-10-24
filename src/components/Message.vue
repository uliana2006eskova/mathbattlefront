<template>
  <div class="message">
    <div class="borderd"> 
      <div class="box" v-bind:style="[
            isActive ? {'background-color': '#0062FF'} : 
            (!isRead ? {'background-color': 'rgba(0, 98, 255, 0.05)'} : {'background-color': 'rgba(255, 255, 255, 1)'})]">
        <img src="https://loremflickr.com/200/200">
        <div class="message_text">
          <div class="message_head">
            <h6 class="message_sender" v-bind:style="[
            isActive ? {'color': '#FFF'} : {}]">{{ sender }}</h6>
            <p class="time" v-bind:style="[
            isActive ? {'color': '#FFF'} : {}]">{{ time }}</p>
          </div>
          <h5 class="message_theme" v-bind:style="[
            isActive ? {'color': '#FFF'} : {}]"> {{ theme }}</h5>
          <p class="text" v-bind:style="[
            isActive ? {'color': '#B3D0FF'} : {}]"> {{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    isRead: Boolean,
    isActive: Boolean,
    sender: String,
    theme: String,
    text: String,
    time: String
  }
}
</script>

<style scoped>
  .message {
    padding-right: 15px;

    padding-left: 15px;
    
  }
  .box {
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 17px;
    padding-top: 17px;
    display: flex;
    background-color: rgba(0, 98, 255, 0.05);
    border-radius: 15px;
  }
  .borderd {
    padding-top: 10px;
    padding-bottom: 10px;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #F1F1F5;
  }
  img {
    width: 42px;
    height: 42px;
    border-color: #F1F1F5;
    border-style: solid;
    border-radius: 50%;
    border-width: 1px;
  }
  .message_head {
    display: flex;
  }
  .message_text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

  }
  .message_theme {
    margin-top: 6px;
    margin-bottom: 11px;
    font-size: 14px;
    font-weight: bold;
    color: #171725;
  }
  .message_sender {
    margin-right: auto;
    font-size: 14px;
    color: #0062FF;
  }
  .time {
    font-size: 12px;
    color: #696974;
  }
  .text {
    font-size: 14px;
    color: #92929D;
  }
</style>