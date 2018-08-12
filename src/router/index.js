import Vue from 'vue';
import Router from 'vue-router';
import Course from '@/components/Course';
import Courses from '@/components/Courses';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: () => {
        let courses = Object.keys(Vue.config.courses).filter((course) => {
          return !Vue.config.courses[course].visited;
        });
        if (courses.length === 0) {
          Object.keys(Vue.config.courses).forEach((course) => {
            Vue.config.courses[course].visited = false;
          });
          courses = Object.keys(Vue.config.courses);
        }

        courses = courses.filter((course) => {
          return course !== Vue.config.last;
        });

        return '/' + courses[Math.floor(Math.random()*courses.length)];
      },
    },
    {
      path: '/list',
      name: 'Courses',
      component: Courses,
    },
    {
      path: '/:id',
      name: 'Course',
      component: Course,
    },
  ],
});
