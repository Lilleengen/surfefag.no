<template>
  <div class="middle-part wrapper">
    <div class="table">
      <table>
        <tr>
          <th>Emnekode</th>
          <th>Navn</th>
          <th>Semester</th>
          <th>Eksamen</th>
          <th>Strykprosent</th>
        </tr>
        <tr v-for="courseId in Object.keys(courses)" v-bind:key="courseId">
          <td>{{ courseId }}</td>
          <td>{{ courses[courseId].name }}</td>
          <td>{{ courses[courseId].semester }}</td>
          <td>{{ courses[courseId].exam }}</td>
          <td>{{ courses[courseId].failPercent }}%</td>
          <td><router-link class="right-arrow" :to="'/' + courseId"><img src="../assets/right-arrow.svg" alt="arrow down"></router-link></td>
          <td><a :href="courses[courseId].url">Emneside</a></td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import Vue from 'vue';

export default {
  name: 'Courses',
  data() {
    return {
      courses: Vue.config.courses,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
