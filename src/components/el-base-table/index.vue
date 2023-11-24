<template>
  <div>
    <el-table :data="resData" v-bind="$attrs" v-on="$listeners">
      <template v-for="(column, index) of columns">
        <el-table-column
          v-if="!column.slot"
          :key="index"
          v-bind="column.attrs || {}"
        ></el-table-column>
        <el-table-column v-else :key="index" v-bind="column.attrs || {}">
          <template v-slot="{ row, $index }">
            <slot
              :name="column.slot"
              :row="row"
              :prop="column.attrs.prop"
              :index="$index"
              :label="column.attrs.label"
            ></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="!hidePage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="page"
      :page-sizes="pageSizes"
      :page-size.sync="pageSize"
      :layout="pageLayout"
      :total="total"
      :background="background"
    ></el-pagination>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  props: {
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    hidePage: {
      type: Boolean,
      default: false
    },
    frontPage: {
      type: Boolean,
      default: false
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 50, 100]
      }
    },
    sizes: {
      type: Number
    },
    total: {
      type: Number,
      default: 0
    },
    pageLayout: {
      type: String,
      default: function () {
        return 'total, sizes, prev, pager, next'
      }
    },
    background: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      resData: [],
      page: 1,
      pageSize: this.sizes ? this.sizes : this.pageSizes[0]
    }
  },
  methods: {
    handleSizeChange(val) {
      this.page = 1
      if (this.frontPage) {
        this.handlePage()
      }
      this.$emit('change', { page: this.page, size: this.pageSize })
    },
    handleCurrentChange(val) {
      if (this.frontPage) {
        this.handlePage()
      }
      this.$emit('change', { page: this.page, size: this.pageSize })
    },
    handlePage() {
      const curPageSize = this.page * this.pageSize
      this.resData = this.tableData.slice(
        (this.page - 1) * this.pageSize,
        curPageSize > this.total ? this.total : curPageSize
      )
    }
  },
  watch: {
    tableData: {
      handler(val) {
        if (this.frontPage) {
          this.handlePage()
        } else {
          this.resData = this.tableData.slice()
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  a {
    color: red;
  }
}
</style>
