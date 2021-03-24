<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left"></div>
        <div class="mh-middle">头盔检测系统</div>
        <div class="mh-right">
          <dv-border-box-2 style="width: 120px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;">
            综合管理台
          </dv-border-box-2>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <Left-Table-1 />
        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
              <Center-Cmp />
            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">
                <Right-Chart-1 />
              </dv-border-box-3>
              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Top-Right />
              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">
            <Bottom-Charts />
          </dv-border-box-4>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
  import LeftTable1 from '../components/datav/LeftTable1'
  import TopRight from '../components/datav/TopRight'
  import CenterCmp from '../components/datav/CenterCmp'
  import RightChart1 from '../components/datav/RightChart1'
  import BottomCharts from '../components/datav/BottomCharts'

  export default {
    name: 'DataView',
    components: {
      LeftTable1,
      CenterCmp,
      RightChart1,
      BottomCharts,
      TopRight
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  #data-view {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;

    #dv-full-screen-container {
      background-image: url('../components/datav/img/bg.png');
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      display: flex;
      flex-direction: column;
    }

    .main-header {
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .mh-left {
        font-size: 20px;
        color: rgb(1, 134, 187);

        a:visited {
          color: rgb(1, 134, 187);
        }
      }

      .mh-middle {
        font-size: 30px;
      }

      .mh-left,
      .mh-right {
        width: 450px;
      }
    }

    .main-container {
      height: calc(~"100% - 80px");

      .border-box-content {
        padding: 20px;
        box-sizing: border-box;
        display: flex;
      }
    }

    .left-chart-container {
      width: 22%;
      padding: 10px;
      box-sizing: border-box;

      .border-box-content {
        flex-direction: column;
      }
    }

    .right-main-container {
      width: 78%;
      padding-left: 5px;
      box-sizing: border-box;
    }

    .rmc-top-container {
      height: 65%;
      display: flex;
    }

    .rmctc-left-container {
      width: 65%;
    }

    .rmctc-right-container {
      width: 35%;
    }

    .rmc-bottom-container {
      height: 35%;
    }

    .rmctc-chart-1,
    .rmctc-chart-2 {
      height: 50%;
    }
  }
</style>
