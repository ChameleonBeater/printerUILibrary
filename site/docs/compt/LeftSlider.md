<style scoped>
  .content{
    font-size: 14px;
    padding: 30px 0;
  }
  .delete{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
</style>

## 左滑组件

提供左滑组件，常见于左滑删除等等，可以通过插槽自由定制内容

### 基本用法

如下，请在浏览器的手机模式下试用demo

### demo

<div class="main">
  <phone-case>
    <left-slider ref="leftSlider">
      <div slot="lsContent" class="content">
        请向左滑动
      </div>
      <div slot="lsBottom" class="delete" @click="doDelete">
        删除
      </div>
    </left-slider>
  </phone-case>
</div>

#### html:
```html
  <template>
    <div class="main">
      <phone-case>
        <left-slider ref="leftSlider">
          <div slot="lsContent" class="content">
            请向左滑动
          </div>
          <div slot="lsBottom" class="delete" @click="doDelete">
            删除
          </div>
        </left-slider>
      </phone-case>
    </div>
  </template>
```
#### javascript:
```js
  export default {
    methods: {
      doDelete() {
        alert('delete!')
      }
    }
  }
```
<script>
  export default {
    methods: {
      doDelete() {
        alert('delete!')
      }
    }
  }
</script>
