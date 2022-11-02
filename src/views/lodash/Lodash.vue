<template>
  <div>
    <div v-for="item in dataList.data.config" :key="item.id">
      {{ item.id }}--{{ item.name }}
    </div>
  </div>
</template>

<script>
import { cloneDeep, difference } from '@/utils/lodash.js'
export default {
  data() {
    return {
      dataList: {
        code: 0,
        message: 'success',
        data: {
          id: '618b6d2651790304e37d3453',
          name: '测试select-radio和checkbox',
          key: '22222222222222',
          level: 'app',
          config: [
            {
              name: '11111',
              key: 'aaaaaa',
              type: 'string[]',
              default: 'a',
              input_type: 'radio',
              input_items: ['1', '2', '3'],
              is_required: 0,
              is_search: 1,
              is_diff: 0
            },
            {
              name: '22222',
              key: 'bbbbbb',
              type: 'int[]',
              default: 'b',
              input_type: 'input',
              is_required: 1,
              is_search: 1,
              is_diff: 0
            },
            {
              name: '33333',
              key: 'ccccccc',
              type: 'collection[]',
              is_required: 1,
              is_search: 0,
              is_diff: 0,
              sub_document: [
                {
                  name: '44444',
                  key: 'dddddd',
                  type: 'int[]',
                  default: 'c',
                  input_type: 'input',
                  is_search: 1,
                  is_diff: 0,
                  is_required: 1
                },
                {
                  name: '55555',
                  key: 'eeeee',
                  type: 'int[]',
                  default: 'd',
                  input_type: 'input',
                  is_search: 1,
                  is_diff: 0,
                  is_required: 1
                }
              ]
            }
          ],
          limit: 12,
          state: 1,
          create_time: 1636527398,
          update_time: 1636535853
        }
      },
      res: {
        aaaaaa: ['3'],
        bbbbbb: [1],
        ccccccc: [{ dddddd: [1], eeeee: 'eeeee' }]
      }
    }
  },
  created() {
    const copy = cloneDeep(this.dataList)
    console.log(copy, 'copy')
    const arr = [1, 3, 4]
    const res = difference(arr, [1, 5, 6], [3])
    console.log(res)
    // this.matchData(this.dataList.data.config, this.res)
    // console.log(this.dataList.data.config)
  },
  methods: {
    matchData(target, source) {
      target.forEach((item) => {
        console.log('编辑回显', item)
        if (source[item.key]) {
          if (item.type === 'string[]') {
            item.value = source[item.key][0]
          } else if (item.type === 'collection[]') {
            item.value = this.matchData(item.sub_document, source[item.key][0])
          } else {
            item.value = cloneDeep(source[item.key])
          }
        }
      })
    }
  }
}
</script>

<style></style>
