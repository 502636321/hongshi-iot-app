<template>
  <div>
    <!--表格数据-->
    <table>
      <tr>
        <th v-for="(column,index) in columns" :key="index">
          {{ column.title }}
        </th>

      </tr>
      <tr v-for="(record, record_index) in records" :key="record_index">
        <td v-for="(column, column_index) in columns" :key="`${record_index}-${column_index}`">
          {{ record[column.dataIndex] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "DeviceItemMessageTab",
        props: ['deviceId'],
        components: {
        },
        data() {
            return {
                columns: [],
                records: [],
                loading: false,
                finished: false,
            };
        },
        methods: {
            onLoad() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }

                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            }
        },
    }
</script>

<style scoped>
</style>