import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TopicView from '@/views/TopicView.vue';
import ExercisesView from '@/views/ExercisesView.vue';
import ExamView from '@/views/ExamView.vue';
import ReferenceView from '@/views/ReferenceView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Plan nauki — Ekonomia' },
    },
    {
      path: '/temat/:slug',
      name: 'topic',
      component: TopicView,
      meta: { title: 'Temat wykładu — Ekonomia' },
    },
    {
      path: '/cwiczenia',
      name: 'exercises',
      component: ExercisesView,
      meta: { title: 'Ćwiczenia z wykładu — Ekonomia' },
    },
    {
      path: '/kolokwium',
      name: 'exam',
      component: ExamView,
      meta: { title: 'Strefa Kolokwium — Ekonomia' },
    },
    {
      path: '/wzory',
      name: 'reference',
      component: ReferenceView,
      meta: { title: 'Ściąga: Wzory i Definicje — Ekonomia' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return { el: to.hash, top: 84, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

router.afterEach((to) => {
  if (typeof document !== 'undefined' && typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
});

export default router;
