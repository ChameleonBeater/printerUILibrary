<style scoped>
  .main{
    padding-left: 10px;
  }
  .inner{
    padding: 10px;
  }
  .btn{
    height: 20px;
    width: 60px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 12px;
    background-color: #ff5e51;
  }
</style>

## BottomUpShell 上滑弹层

提供手机端常见的上滑弹层容器。

### 基本用法

引用组件，外部点击调用其bottomUpShell方法，
组件内部提供插槽插入用户自定义内容。

### demo

<div class="main">
  <phone-case>
    <bottom-up-shell ref="bottomUpShell">
      <div class="inner">
        黄金榜上，偶失龙头望。<br>
        明代暂遗贤，如何向。<br>
        未遂风云便，争不恣狂荡。<br>
        何须论得丧？<br>
      </div>
    </bottom-up-shell>
  </phone-case>
  <div class="btn" @click="showShell">弹起</div>
</div>

#### html:
```html
  <template>
   <div class="main">
    <phone-case>
      <bottom-up-shell>
        黄金榜上，偶失龙头望。
        明代暂遗贤，如何向。
        未遂风云便，争不恣狂荡。
        何须论得丧？
      </bottom-up-shell>
    </phone-case>
  </div>
  </template>
```
#### javascript:
```js
  export default {
    methods: {
      showShell() {
        this.$refs.bottomUpShell.slideUpShell()
      }
    }
  }
```
<script>
  export default {
    methods: {
      showShell() {
        this.$refs.bottomUpShell.slideUpShell()
      }
    }
  }
</script>
