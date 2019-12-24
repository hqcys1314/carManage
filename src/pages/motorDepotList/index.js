import * as constants from './motorDepotListConstants';
import module from './motorDepotList.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./motorDepotList.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
