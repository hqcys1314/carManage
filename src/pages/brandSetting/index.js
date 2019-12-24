import * as constants from './brandSettingConstants';
import module from './brandSetting.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./brandSetting.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
