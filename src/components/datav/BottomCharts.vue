<template>
  <div class="bottom-charts">
    <div class="bc-chart-item">
      <div class="bcci-header">一车间</div>
      <dv-active-ring-chart :config="config1" />
      <Label-Tag :config="labelConfig" />
    </div>
    <dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">二车间</div>
      <dv-active-ring-chart :config="config2" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">三车间</div>
      <dv-active-ring-chart :config="config3" />
      <Label-Tag :config="labelConfig" />
    </div>

    <dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;" />

    <div class="bc-chart-item">
      <div class="bcci-header">四车间</div>
      <dv-active-ring-chart :config="config4" />
      <Label-Tag :config="labelConfig" />
    </div>

  </div>
</template>

<script>
import LabelTag from './LabelTag'

export default {
  name: 'BottomCharts',
  components: {
    LabelTag
  },
  data () {
    return {
      config1: {
        data: [
          {
            name: '戴头盔人数',
            value: 75
          },
          {
            name: '未戴人数',
            value: 25
          }
        ],
        color: ['#00baff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      config2: {
        data: [
          {
            name: '戴头盔人数',
            value: 67
          },
          {
            name: '未戴人数',
            value: 23
          }
        ],
        color: ['#00baff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      config3: {
        data: [
          {
            name: '戴头盔人数',
            value: 87
          },
          {
            name: '未戴人数',
            value: 13
          }
        ],
        color: ['#00baff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      config4: {
        data: [
          {
            name: '戴头盔人数',
            value: 54
          },
          {
            name: '未戴人数',
            value: 46
          }
        ],
        color: ['#00baff', '#ffc530'],
        radius: '65%',
        activeRadius: '70%'
      },

      labelConfig: {
        data: ['已戴', '未戴人数']
      }
    }
  }
}
</script>

<style lang="less">
.bottom-charts {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;

  .bc-chart-item {
    width: 25%;
    height: 100%;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .bcci-header {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }

  .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }

  .label-tag {
    height: 30px;
  }

  .active-ring-name {
    font-size: 18px !important;
  }

  .decoration-1, .decoration-2, .decoration-3 {
    display: absolute;
    left: 0%;
  }
}
</style>
