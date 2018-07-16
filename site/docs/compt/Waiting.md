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

## Waiting 交互组件

提供手机端常见的Loading/Waiting 交互

### 基本用法

应用组件，按照下面的方式看看就可以了

### demo

  <Waiting v-if="isShow"
           type="cylon" color="#ec584d" 
           :size="{ width: '60px', height: '60px' }"
           :maskStyle="{backgroundColor: 'hsla(0,0%,100%,.1)'}"
           @touchMask="touchMaskHandler"></Waiting> 
  <button @click="showMask">开启透明 Waiting</button>
#### html:
```html
  <template>
    <Waiting v-if="isShow"
             type="cylon"
             color="color"
             :size="size"
             :maskStyle="maskStyle"
             @touchMask="touchMaskHandler"></Waiting>
    <button @click="showMask">开启透明 Waiting</button>    
  </template>
```
#### javascript:
```js
  export default {
    data () {
      return {
        isShow: false,
        color: "#ec584d",
        size: {
          width: '60px',
          height: '60px'
        },
        maskStyle: {
          backgroundColor: 'hsla(0,0%,100%,.1)'
        }
      }
    },
    methods: {
      touchMaskHandler (e) {
        alert(1)
      },
      showMask () {
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, 1000)
      }
    }
  }
```
<script>
  export default {
    data () {
      return {
        isShow: false,
        color: "#ec584d",
        size: {
          width: '60px',
          height: '60px'
        },
        maskStyle: {
          backgroundColor: 'hsla(0,0%,100%,.1)'
        }
      }
    },
    methods: {
      touchMaskHandler (e) {
        alert(1)
      },
      showMask () {
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, 1000)
      }
    }
  }
</script>
