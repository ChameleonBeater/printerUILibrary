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

## Sticky 吸顶插件

提供手机端常见的下滑吸顶插件

### 基本用法

应用组件，或者直接应用插件即可实现功能

### demo
<Sticky :stickyConfig="stickyConfig">
  <template slot="stickySolt">
    <h1>Here might be a page title</h1>
  </template>
</Sticky>


#### html:
```html
  <template>
    <Sticky :stickyConfig="stickyConfig">
      <template slot="stickySolt">
        <h1>Here might be a page title</h1>
      </template>
    </Sticky>
  </template>
```
#### javascript:
```js
  export default {
    data () {
      return {
        stickyConfig: {
          zIndex: 10,
          stickyTop: 0
        }
      }
    },
    methods: {}
  }
```
<script>
  export default {
    data () {
      return {
        stickyConfig: {
          zIndex: 10,
          stickyTop: 0
        }
      }
    },
    methods: {}
  }
</script>
