<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="item in tabsData" :key="item.label" :label="item.name" :name="item.name">{{item.label}}</el-tab-pane>
  </el-tabs>
  <router-view />
</template>
<script>
import { useRoute } from "vue-router"
  export default {
    mounted(){
      const route = useRoute(); // 第一步
      console.log(this.$router)
      console.log(route)
      let path = this.$router.currentRoute.value.path
      console.log(path)
      if(path.length>1){
        this.activeName = path.substring(1)
      }else{
        this.activeName = 'Demo1'
      }

    },
    data() {
      return {
        tabsData:[
          {label:'画布',name:'Demo1'},
          {label:'画矩形',name:'Demo2'},
          {label:'矩形染色',name:'Demo3'},
          {label:'矩形染色',name:'Demo4'},
          {label:'矩形染色',name:'Demo5'},
          {label:'矩形染色',name:'Demo6'},
          {label:'矩形染色',name:'Demo7'},
          {label:'3D旋转立方体',name:'Demo8'},



        ],
        activeName:''
      };
    },
    methods: {
      handleClick(tab, event) {
        this.$router.push({path:this.activeName})
      }
    }
  };
</script>