<template>
 <div class="tableCom">
   <div class="top">
     <div class="banner"><img src=""></div>
     <div class="d"><a>{{bigTitle[0]}}</a>>><a>{{bigTitle[1]}}</a></div>
   </div>
   <div class="tableSide">
     <div class="d">共{{tableData.length}}条 <input type="button" :value="'创建'+bigTitle[1].replace('设置','')"></div>
     <table cellpadding="0" cellspacing="0">
       <thead>
         <tr>
           <td v-for="t in tableTitle">{{t}}</td>
         </tr>
       </thead>
       <tbody>
       <tr v-for="item in tableData">
         <td>{{item.num}}</td>
         <td>{{item.event}}</td>
         <td>{{item.name}}</td>
         <td>
           <input type="button" value="编辑">
           <input type="button" value="查看">
           <input type="button" value="删除">
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
 .tableCom{width: 100%;}
 .tableCom .top{background-color: #ffffff;width: 96%;margin: 0 auto 10px;padding: 10px;}
 .tableCom .top .banner{height: 64px;
   background: #693522;}
 .tableCom .top .d{margin-bottom: 10px;padding-top: 10px;}
 .tableCom .tableSide{background-color: #ffffff;height: 580px;width: 98%;margin: 0 auto;}
 .tableCom table{width: 100%;margin-top: 10px;background-color: #ffffff;border-right: 1px #eeeeee solid;
   border-top: 1px #eeeeee solid;padding: 10px;}
 .tableCom .tableSide .d{margin-bottom: 10px;padding-top: 10px;margin-left: 10px;}
 .tableCom .tableSide .d input{margin-left: 10px;}

 .tableCom table thead{background: #eeeeee;color: #2F323D;}
 .tableCom table thead td{border-left: 1px #ffffff solid;}
 .tableCom table tr{text-align: center;}
 .tableCom table td{line-height: 40px;border-left: 1px #eeeeee solid;border-bottom: 1px #eeeeee solid;}
 .tableCom table td:nth-child(1){width: 100px;}
 .tableCom table td:nth-child(2){width: 250px;}
 .tableCom table td:nth-child(3){width: 100px;}
 .tableCom table input[type='button']{margin-left: 10px;}
 .tableCom .el-pagination {
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
    props:['tableTitle','tableData','bigTitle'],
    methods:{
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
