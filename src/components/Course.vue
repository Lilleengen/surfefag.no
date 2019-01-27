<template>
  <div class="middle-part wrapper">
    <a class="left-arrow" @click.prevent="$router.go(-1)" href="#">
        <img src="../assets/left-arrow.svg" />
    </a>
    <div class="about-course">
      <h2>{{ this.$route.params.id }}</h2>
      <div class="detailed">
        <span><strong>{{ courses[this.$route.params.id].name }}</strong></span>
        <span>Obligatoriske innleveringer: <strong>{{ courses[this.$route.params.id].mandetoryExersices }}</strong></span>
        <span>Forelesninger i uka: <strong>{{ courses[this.$route.params.id].numberOfLecturesAWeek }}</strong></span>
        <span>Eksamen <strong>{{ courses[this.$route.params.id].exam }}</strong></span>
        <span>Strykprosent: <strong>{{ courses[this.$route.params.id].failPercent }}%</strong> ({{ courses[this.$route.params.id].failPercentYear }})</span>
      </div>
      <p>{{ courses[this.$route.params.id].description }}</p>
      <a :href="courses[this.$route.params.id].url">Emneside</a>
    </div>
    <router-link class="right-arrow" to="/">
      <span>Surf videre</span>
      <img src="../assets/right-arrow.svg" />
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Course',
  data() {
    return {
      courses: Vue.config.courses,
    };
  },
  created() {
    Vue.config.courses[this.$route.params.id].visited = true;
    Vue.config.last = this.$route.params.id;
  },
  watch: {
    '$route.params.id': (id) => {
      Vue.config.courses[id].visited = true;
      Vue.config.last = id;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
