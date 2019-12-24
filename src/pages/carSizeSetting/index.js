import * as constants from './carSizeSettingConstants';
import module from './carSizeSetting.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./carSizeSetting.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
