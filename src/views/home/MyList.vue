<template>
  <div>
    <el-table :data="arr">
      <el-table-column prop="id" label="文章标题"> </el-table-column>
      <el-table-column prop="title" label="作者"> </el-table-column>
      <el-table-column prop="num" label="浏览量"> </el-table-column>
      <el-table-column prop="text" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <!-- 删除 -->
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加 -->
    <el-button type="danger" class="addbtn" @click="addfn(1)">
      添加
    </el-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyList",
  data() {
    return {
      arr: null,
      form:{
          name:"",
          text:""
      }
    };
  },
  created() {
    this.addFn();
  },
  methods: {
    //   添加
    async addFn() {
      let { data } = await axios.get("/api/MyList");
      this.arr = data;
    },
    // 删除
    handleDelete(a, b) {
      console.log(a, b);
      this.$confirm("您确定删除该条信息么？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
    },
  },
};
</script>
<style scoped>
</style>