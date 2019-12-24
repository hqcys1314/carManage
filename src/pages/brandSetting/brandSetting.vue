<template>
  <div class="brandSetting">
    <!--左边菜单栏-->
    <slideLeft></slideLeft>
    <!--右边内容区-->
    <div class="contentCenter">
      <tableCom :bigTitle="bigTitle" :tableData="tableData" :tableTitle="tableTitle"></tableCom>
    </div>
  </div>
</template>
<style src="./brandSetting.css"></style>
<script>
  import slideLeft from '@/components/slideLeft.vue';
  import tableCom from '@/components/tableCom.vue';
  import axios from 'axios'

  export default {

    components:{slideLeft,tableCom},
    data() {
      return {
        bigTitle:['基础配置','品牌设置'],
        tableTitle:['序号', '品牌名称', '创建人', '操作'],
        tableData: [{
          num: '1',
          event: '上海大众',
          name: '张三'
        }, {
          num: '2',
          event: '上海大众',
          name: '张三'
        }, {
          num: '3',
          event: '上海大众',
          name: '张三'
        }]
      }
    },
    created(){
      var params = {"configKey":"mobile_new_banner"};
      var qs=require('qs');
      axios.post('https://cic.facebank.cn/api/getAppConfigByKey',  params).then(function(res) {
        if(res.statusCode==200) {
          //this.tableData = res.generalModelList;
        }
      }).catch(function(err) {
        console.log(err);
      })

    },
    methods: {

    },
  }
</script>
