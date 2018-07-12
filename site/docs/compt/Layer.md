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

## Layer 提示层

提供手机端常见的确认，提示弹框交互

### 基本用法

引入组件进行配置吧

### demo

  <Layer :showDialog="showDialog" 
         :dialogTextConfig="contextConf"
         @dialogSure="showDialog = false"
         @dialogCancle="showDialog = false"></Layer>
  <button @click="showDialog = true">弹出信息</button>
#### html:
```html
  <template>
    <Layer :showDialog="showDialog" 
       :dialogTextConfig="contextConf"
       @dialogSure="showDialog = false"
       @dialogCancle="showDialog = false"></Layer>
    <button @click="showDialog = true">弹出信息</button>
  </template>
```
#### javascript:
```js
  export default {
    data() {
      return {
        showDialog: false,
        contextConf: {
          mainTitle: '标题提示',
          dialogText: '文案文字很多很多很多很多',
          cancleText: '取消',
          sureText: '确认'
        }
      };
    },
    methods: {
      confirmHandler () {
        alert('点了确认')
      },
      cancelHandler () {
        alert('点了取消')
      }
    }
  }
```
<script>
  export default {
    data() {
      return {
        showDialog: false,
        contextConf: {
          mainTitle: '标题提示',
          dialogText: '文案文字很多很多很多很多',
          cancleText: '取消',
          sureText: '确认'
        }
      };
    },
    methods: {
      confirmHandler () {
        alert('点了确认')
      },
      cancelHandler () {
        alert('点了取消')
      }
    }
  }
</script>
