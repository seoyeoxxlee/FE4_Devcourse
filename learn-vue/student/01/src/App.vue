<script>
import Lv101 from './components/Practice_Lv1/Level1-1.vue';
import Lv102 from './components/Practice_Lv1/Level1-2.vue';
import Lv103 from './components/Practice_Lv1/Level1-3.vue';
import Lv104 from './components/Practice_Lv1/Level1-4.vue';
import Lv105 from './components/Practice_Lv1/Level1-5.vue';
import Lv106 from './components/Practice_Lv1/Level1-6.vue';
import Lv107 from './components/Practice_Lv1/Level1-7.vue';
import Lv108 from './components/Practice_Lv1/Level1-8.vue';

import Lv201 from './components/Practice_Lv2/Level2-1.vue';
import Lv202 from './components/Practice_Lv2/Level2-2.vue';
import Lv203 from './components/Practice_Lv2/Level2-3.vue';
import Lv204 from './components/Practice_Lv2/Level2-4.vue';
import Lv205 from './components/Practice_Lv2/Level2-5.vue';
import Lv206 from './components/Practice_Lv2/Level2-6.vue';

import Lv301 from './components/Practice_Lv3/Level3-1.vue';
import Lv302 from './components/Practice_Lv3/Level3-2.vue';
import Lv303 from './components/Practice_Lv3/Level3-3.vue';
import Lv304 from './components/Practice_Lv3/Level3-4.vue';
import Lv305 from './components/Practice_Lv3/Level3-5.vue';
import Lv306 from './components/Practice_Lv3/Level3-6.vue';
import Lv307 from './components/Practice_Lv3/Level3-7.vue';
import Lv308 from './components/Practice_Lv3/Level3-8.vue';
import Lv309 from './components/Practice_Lv3/Level3-9.vue';
import Lv310 from './components/Practice_Lv3/Level3-10.vue';

import Lv401 from './components/Practice_Lv4/Level4-1.vue';
import Lv402 from './components/Practice_Lv4/Level4-2.vue';
import Lv403 from './components/Practice_Lv4/Level4-3.vue';
import Lv404 from './components/Practice_Lv4/Level4-4.vue';
import Lv405 from './components/Practice_Lv4/Level4-5.vue';



export default {
  name: "App",
  data() {
    return {
      current: "01",
    };
  },
  computed: {
    currentComponent() {
      switch (this.current) {
        case "101":
          return Lv101;
        case "102":
          return Lv102;
        case "103":
          return Lv103;
        case "104":
          return Lv104;
        case "105":
          return Lv105;
        case "106":
          return Lv106; 
        case "107":
          return Lv107; 
        case "108":
          return Lv108; 
        case "201":
          return Lv201;
        case "202":
          return Lv202;
        case "203":
          return Lv203;
        case "204":
          return Lv204;
        case "205":
          return Lv205;
        case "206":
          return Lv206; 
        case "301":
          return Lv301;
        case "302":
          return Lv302;
        case "303":
          return Lv303;
        case "304":
          return Lv304;
        case "305":
          return Lv305;
        case "306":
          return Lv306; 
        case "307":
          return Lv307; 
        case "308":
          return Lv308; 
        case "309":
          return Lv309;
        case "310":
          return Lv310;
        case "401":
          return Lv401;
        case "402":
          return Lv402;
        case "403":
          return Lv403;
        case "404":
          return Lv404;
        case "405":
          return Lv405;
        default:
          return null;
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>연습문제 - 필수 개념 문법</h2>
    <select v-model="current">
      <option disabled value="">연습문제</option>
      <option value="101">Lv.1-1</option>
      <option value="102">Lv.1-2</option>
      <option value="103">Lv.1-3</option>
      <option value="104">Lv.1-4</option>
      <option value="105">Lv.1-5</option>
      <option value="106">Lv.1-6</option>
      <option value="107">Lv.1-7</option>
      <option value="108">Lv.1-8</option>
      
      <option value="201">Lv.2-1</option>
      <option value="202">Lv.2-2</option>
      <option value="203">Lv.2-3</option>
      <option value="204">Lv.2-4</option>
      <option value="205">Lv.2-5</option>
      <option value="206">Lv.2-6</option>

      <option value="301">Lv.3-1</option>
      <option value="302">Lv.3-2</option>
      <option value="303">Lv.3-3</option>
      <option value="304">Lv.3-4</option>
      <option value="305">Lv.3-5</option>
      <option value="306">Lv.3-6</option>
      <option value="307">Lv.3-7</option>
      <option value="308">Lv.3-8</option>
      <option value="309">Lv.3-9</option>
      <option value="310">Lv.3-10</option>

      <option value="401">Lv.4-1</option>
      <option value="402">Lv.4-2</option>
      <option value="403">Lv.4-3</option>
      <option value="404">Lv.4-4</option>
      <option value="405">Lv.4-5</option>
    </select>

    <component :is="currentComponent" />
  </div>
</template>


