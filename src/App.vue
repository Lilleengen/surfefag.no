<template>
  <div id="app">
    <div class="top wrapper">
      <router-link class="logo" to="/">
        <img src="./assets/surfboard.svg" alt="surfboard" />
        <h1>Surfefag</h1>
      </router-link>
      <div class="list-type">
        <router-link class="type-module" to="/">
          <img src="./assets/type-module.svg" alt="view as modules" />
        </router-link>
        <router-link class="type-list" to="/list">
          <img src="./assets/type-list.svg" alt="view as list" />
        </router-link>
        </a>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Course from './components/Course.vue'

export default {
  name: 'app',
  components: {
    Course
  },
  data() {
    return {
      courses: require('./assets/fag.json')
    }
  },
}
</script>

<style>
  body{
    font-family: Muli, Helvetica, Arial, sans-serif;
    background: #8dfea0;
    background: -moz-linear-gradient(-45deg, #8dfea0 0%, #74f1bf 100%);
    background: -webkit-linear-gradient(-45deg, #8dfea0 0%,#74f1bf 100%);
    background: linear-gradient(135deg, #8dfea0 0%,#74f1bf 100%);
    background-attachment: fixed;
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8dfea0', endColorstr='#74f1bf',GradientType=1 );
    height: 100vh;
    margin: 0;
    padding: 0;
    color: #17157C;
  }
  a {
    outline : none;
  }
  .wrapper{
    width: 80%;
    margin: 0 auto;
  }
  .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 50px;
  }
  .top .list-type a{
    padding-left: 20px;
  }
  .logo{
    display: flex;
    align-items: center;
  }
  .logo h1{
    font-size: 26px;
    margin: 0;
    padding: 0;
    margin-left: 20px;
  }
  .logo {
    text-decoration: none;
  }

  .logo:active, .logo:visited {
    color: #17157C;
  }

  .middle-part{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  }
  .middle-part .about-course{
    width: 500px;
    font-size: 20px;
  }
  .middle-part .about-course span{
    display: block;
  }
  .middle-part .about-course h2{
    font-size: 48px;
  }
  .about-course a{
    color: #17157C;
    font-weight: 600;
  }
  .right-arrow{
    color: #17157C;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .right-arrow span{
    margin-right: 20px;
    margin-top: -3px;
  }

  @media only screen and (max-width: 975px) {
    .top{
      position: static;
    }
    .wrapper{
      width: 90%;
    }
    .middle-part{
      flex-direction: column;
      height: auto;
    }
    .left-arrow{
      display: none;
    }
    .right-arrow{
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .middle-part .about-course{
      width: 90%;
    }
  }

  @media only screen and (max-width: 320px){
    .logo h1{
      font-size: 20px;
    }
  }

  /* LIST STUFF */
  .table{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
    font-size: 18px;
  }
  td, th{
    min-width: 100px;
    max-width: 250px;
    text-align: left;
    padding-right: 40px;
    height: 45px;
  }
  td{
    font-weight: 300;
  }
</style>
