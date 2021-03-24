<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name">
        <img src="./img/icon1.png" />违规人员名单
      </div>
      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: 'BottomRightTable1',
  data () {
    return {
      config: {
        data: [
          ['张三', '违规次数：4次'],
          ['李四', '违规次数：3次'],
          ['王五', '违规次数：3次'],
          ['赵六', '违规次数：3次'],
          ['钱七', '违规次数：2次'],
          ['孙八', '违规次数：2次'],
          ['杨九', '违规次数：2次'],
          ['吴十', '违规次数：2次'],
          ['李雷', '违规次数：2次'],
          ['韩梅梅', '违规次数：2次']
        ],
        index: true,
        columnWidth: [100, 70],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)'
      }
    }
  }
}
</script>

<style lang="less">
.bottom-right-table-1 {
  width: 100%;
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
