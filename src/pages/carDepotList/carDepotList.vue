<template>
  <div class="carDepotList">
    <!--左边菜单栏-->
    <slideLeft></slideLeft>
    <!--右边内容区-->
    <div class="contentCenter">
      <depotList :bigTitle="bigTitle" :tableData="tableData" :tableTitle="tableTitle" :type="type"></depotList>
    </div>
  </div>
</template>
<script>
  import slideLeft from '@/components/slideLeft.vue';
  import depotList from '@/components/depotList.vue';
  import axios from 'axios'

  export default {

    components:{slideLeft,depotList},
    data() {
      return {
        type:'car',
        bigTitle:['基础配置','汽车车源库'],
        tableTitle:['序号', '品牌名称', '车辆名称', '车辆型号','颜色名称','业务类型','指导价（NGN）','创建人','状态','操作'],
        tableData: [{
          num: '1',
          brandName: '大众',
          carName: '大众-朗逸',
          carSize:'2018款 1.8L自动挡',
          color:'香槟色',
          type:'新车',
          price:'80000000.00',
          personName:'zhangsan',
          state:"正常",
          operate:'挂起'
        }, {
          num: '2',
          brandName: '大众',
          carName: '大众-朗逸',
          carSize:'2018款 1.8L自动挡',
          color:'香槟色',
          type:'新车',
          price:'80000000.00',
          personName:'zhangsan',
          state:"正常",
          operate:'挂起'
        }, {
          num: '3',
          brandName: '大众',
          carName: '大众-朗逸',
          carSize:'2018款 1.8L自动挡',
          color:'香槟色',
          type:'新车',
          price:'80000000.00',
          personName:'zhangsan',
          state:"正常",
          operate:'挂起'
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
