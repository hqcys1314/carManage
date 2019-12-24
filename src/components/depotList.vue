<template>
 <div class="depotList">
   <div class="top">
     <div class="banner"><img src=""></div>
     <div class="d"><a>{{bigTitle[0]}}</a>>><a>{{bigTitle[1]}}</a></div>
   </div>
   <div class="find">
     <input type="text" value="品牌名称">
     <input v-if="type=='car'" type="text" value="车辆名称">
     <input v-if="type=='car'" type="text" value="车辆型号">
     <input type="button" value="查询">
     <input type="button" value="批量倒入">
   </div>
   <div class="tableSide">
     <div class="d">共{{tableData.length}}条 <input type="button" value="创建车源"></div>
     <table cellpadding="0" cellspacing="0">
       <thead>
         <tr>
           <td v-for="t in tableTitle">{{t}}</td>
         </tr>
       </thead>
       <tbody>
       <tr  v-for="item in tableData" v-on:click="toDetail(type)">
         <td>{{item.num}}</td>
         <td v-if="type=='car'">{{item.brandName}}</td>
         <td v-if="type=='car'">{{item.carName}}</td>
         <td>{{item.carSize}}</td>
         <td>{{item.color}}</td>
         <td>{{item.type}}</td>
         <td>{{item.price}}</td>
         <td>{{item.personName}}</td>
         <td>{{item.state}}</td>
         <td>
           <input type="button" :value="item.operate">
         </td>
       </tr>
       </tbody>
     </table>
     <el-pagination
       background
       layout="prev, pager, next"
       :total="100">
     </el-pagination>
   </div>
 </div>
</template>
<style>
 .depotList{width: 100%;}
 .depotList .top{background-color: #ffffff;width: 96%;margin: 0 auto 10px;padding: 10px;}
 .depotList .top .banner{height: 64px;
   background: #693522;}
 .depotList .top .d{margin-bottom: 10px;padding-top: 10px;}
 .depotList .tableSide{background-color: #ffffff;height: 580px;width: 98%;margin: 0 auto;}
 .depotList table{width: 100%;margin-top: 10px;background-color: #ffffff;border-right: 1px #eeeeee solid;
   border-top: 1px #eeeeee solid;padding: 10px;}
 .depotList .tableSide .d{margin-bottom: 10px;padding-top: 10px;margin-left: 10px;}
 .depotList .tableSide .d input{margin-left: 10px;}

 .depotList .find{padding:0 10px 10px 10px;}
 .depotList .find input{line-height: 24px;margin-right: 10px;padding-left:4px; }

 .depotList table thead{background: #eeeeee;color: #2F323D;}
 .depotList table thead td{border-left: 1px #ffffff solid;}
 .depotList table tr{text-align: center;}
 .depotList table td{line-height: 40px;border-left: 1px #eeeeee solid;border-bottom: 1px #eeeeee solid;}
 .depotList table input[type='button']{margin-left: 10px;}
 .depotList .el-pagination {
   text-align: center;
   margin-top: 10px;
 }
</style>
<script>
  export default {
    data() {
      return {

      }
    },
    props:['tableTitle','tableData','bigTitle','type'],
    methods:{
      toDetail(type){
         if(type=='car'){
           this.$router.push({
             path: '/carDepotDetail',
           })
         }else {
           this.$router.push({
             path: '/motorDepotDetail',
           })
         }
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>
