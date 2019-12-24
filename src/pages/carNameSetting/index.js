import * as constants from './carNameSettingConstants';
import module from './carNameSetting.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./carNameSetting.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
