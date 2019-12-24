import * as constants from './colorSettingConstants';
import module from './colorSetting.vue';

export default {
  name: constants.NAME,
  path: constants.PATH,
  component: resolve => require(['./colorSetting.vue'], resolve),
  //component:module,
  meta: {
    title: constants.TITLE,
    requireAuth: constants.REQUIRE_AUTH
  },
  constants
};
