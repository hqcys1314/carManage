<template>
  <div class="carDepotDetail">
    <!--左边菜单栏-->
    <slideLeft></slideLeft>
    <!--右边内容区-->
    <div class="contentCenter">
      <div class="motorTop">
        <div class="d"><a>车源库列表</a>>><a>车源详情</a></div>
      </div>
      <div class="tableSide">
        <table cellpadding="0" cellspacing="0">
          <thead>
          <tr>
            <td colspan="4">车源信息表</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>品牌名称</td>
            <td>
              <select name="" id="">
                <option value="">请选择</option>
              </select>
            </td>
            <td>车辆名称</td>
            <td><select name="" id="">
              <option value="">请选择</option>
            </select></td>
          </tr>
          <tr>
            <td>车辆型号</td>
            <td>
              <select name="" id="">
                <option value="">请选择</option>
              </select>
            </td>
            <td>颜色名称</td>
            <td><select name="" id="">
              <option value="">请选择</option>
            </select></td>
          </tr>
          <tr>
            <td>业务类型</td>
            <td>
              <input type="radio">新车
              <input type="radio">二手
            </td>
            <td>指导价（NGN</td>
            <td>
              <input type="text">
            </td>
          </tr>
          </tbody>
        </table>
        <div class="sumbit" >
          <input type="button" value="提交">
        </div>
      </div>
    </div>

  </div>
</template>
<style>
  .motorTop{}
  .motorTop {background-color: #ffffff;width: 96%;margin: 0 auto 10px;padding: 10px;}
  .carDepotDetail .tableSide{background-color: #ffffff;height: 580px;width: 98%;margin: 0 auto;}
  .carDepotDetail table{width: 100%;margin-top: 10px;background-color: #ffffff;border-right: 1px #eeeeee solid;
    border-top: 1px #eeeeee solid;padding: 10px;}
  .carDepotDetail .tableSide .d{margin-bottom: 10px;padding-top: 10px;margin-left: 10px;}
  .carDepotDetail .tableSide .d input{margin-left: 10px;}
  .carDepotDetail .d{margin-bottom: 10px;padding-top: 10px;}
  .carDepotDetail table thead{background: #eeeeee;color: #2F323D;}
  .carDepotDetail table thead td{border-left: 1px #ffffff solid;}
  .carDepotDetail table tr{text-align: center;}
  .carDepotDetail table td{line-height: 40px;border-left: 1px #eeeeee solid;border-bottom: 1px #eeeeee solid;}
  .carDepotDetail table input[type='button']{margin-left: 10px;}
  .sumbit input{width: 100px;color: #ffffff;
    height: 32px;-webkit-appearance: none;-moz-appearance:none;appearance:none;background-color: #548AFF;display: inline-block;border: 0;outline: 0;font-family: 'Microsoft YaHei',arial,'Hiragino Sans GB',sans-serif,"宋体";}

  .sumbit{
    margin: 40px auto;
    text-align: center;}
</style>
<script>
  import slideLeft from '@/components/slideLeft.vue';

  export default {
    data(){
      return {

      }
    },
    components:{slideLeft},
    created(){

    },
    methods:{
    }

  }
</script>
