import * as constants from './homeConstants';
import module from './home.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./home.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
