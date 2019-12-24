import * as constants from './carDepotListConstants';
import module from './carDepotList.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./carDepotList.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
