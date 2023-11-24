<template>
  <div id="app">
    <el-base-table
      v-loading="loading"
      border
      size="small"
      :columns="columns"
      :tableData="tableData"
      :frontPage="true"
      :pageSizes="[3, 6, 9]"
      :total="total"
    >
      <template v-slot:operate="{ row, prop }">
        <span>{{ row }}{{ prop }}</span>
      </template>
    </el-base-table>
  </div>
</template>

<script>
import ElBaseTable from './components/el-base-table/index.vue'
export default {
  name: 'App',
  components: {
    ElBaseTable
  },
  data() {
    return {
      loading: false,
      columns: [
        { attrs: { prop: 'a', label: 'a名称' } },
        {
          attrs: { prop: 'b', label: 'b名称', fixed: 'right', width: '200px' },
          slot: 'operate'
        }
      ],
      tableData: [],
      total: 0
    }
  },
  methods: {
    getData() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.total = 8
        this.tableData = [
          { a: 1, b: 2 },
          { a: 1, b: 2 },
          { a: 1, b: 2 },
          { a: 1, b: 2 },
          { a: 1, b: 333 },
          { a: 1, b: 333 },
          { a: 1, b: 333 },
          { a: 1, b: 333 }
        ]
      }, 1000)
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style></style>
