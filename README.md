# el-base-table
Public table component based on el-element

项目是基于vue2，是element-ui的el-table的进一步封装，支持前端分页和后端分页。

#### 安装
确保项目已经安装了element-ui
```
npm install el-base-table
```
#### 自有属性列表
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 示例 |
| --- | --- | --- | --- | --- | --- |
|columns|表格的表头数据，及配置；attrs属性里面的值同el-table的Table-column Attributes一致；slot属性不是必须写的，自定义columns时才用到，不同的slot对应不同的slot-name，可参考下面的demo。|Array|-|-| [{attrs:{prop:'',label:''},slot:'slot-name'}]
|tableData|table数据|Array|-|[]|参考示例demo
|hidePage|是否要隐藏分页，默认是自带分页的|boolean| false/true | false |-|
|frontPage|需要前端分页是设置true，默认是false后端分页|boolean| false/true | false | - |
|自有属性|分页相关，如下→
|pageLayout|同el-page的layout属性一致|string|参考el-page的layout|默认：'total, sizes, prev, pager, next'|-|
|pageSizes|同el-page的page-sizes属性一致|Array|参考el-page的page-sizes|默认：[10, 50, 100]|-|
|total|同el-page的total属性一致|number|参考el-page的total|默认：0|-|

#### 自有事件
|方法名|说明|参数|
|-|-|-|
|change|修改分页时发出的事件|获取参数是{page，pageSize}


#### 示例demo

##### 1. 前端分页：一次性获取全量数据，实例demo
```vue
<template>
  <div id="app">
    <el-base-table
      v-loading="loading"
      border
      size="small"
      :columns="columns"
      :tableData="tableData"
      :frontPage="true"
      :pageSizes="[5, 10, 15]"
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
      tableData: []
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
```

##### 2. 后端分页：实例demo
```vue

<template>
  <div id="app">
    <el-base-table
      v-loading="loading"
      border
      size="small"
      :columns="columns"
      :tableData="tableData"
      :pageSizes="[5, 10, 15]"
      :total="total"
      @change="change"
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
      tableData: []
    }
  },
  methods: {
    change(val) {
      console.log(val)
      this.getData()
    },
    getData() {
      this.total = 35
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.tableData = [
          { a: 1, b: 2 },
          { a: 1, b: 2 },
          { a: 1, b: 2 },
          { a: 1, b: 2 }
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


```

