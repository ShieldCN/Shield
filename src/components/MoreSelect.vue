

<template>

<div class=" filter-more-box" style="display: block;" v-show="activeNav.type&&activeNav.type==='more'" >
    <div class="filter-term">
        <!-- 车型 -->
        <small-item-select :list="list.classification" title="车型" :chosen-item="chosenFilters.classification" item-type="classification"></small-item-select>
        <!-- 变速箱 -->
        <small-item-select :list="list.transmission" title="变速箱" :chosen-item="chosenFilters.transmission" item-type="transmission"></small-item-select>
        <!-- 风格 只有新车是显示-->
        <small-item-select :list="list.style" v-if="type==='new'" title="风格" :chosen-item="chosenFilters.style" item-type="style"></small-item-select>
        <!-- 车龄 只有二手车时显示-->
        <small-item-select :list="list.vehicleAge" v-if="type==='used'" title="车龄" :chosen-item="chosenFilters.vehicleAge" item-type="vehicleAge"></small-item-select>
        <!-- 座位 -->
        <small-item-select :list="list.seat" title="座位" :chosen-item="chosenFilters.seat" item-type="seat"></small-item-select>
        <!-- 排量 -->
        <small-item-select :list="list.displacement" title="排量" :chosen-item="chosenFilters.displacement" item-type="displacement"></small-item-select>
        <!-- 颜色 -->
        <color-item-select :list="list.color" title="颜色" :chosen-item="chosenFilters.color" item-type="color"></color-item-select>

    </div>
    <div class="btn-box" >
        <div class="close-btn remove-overflow-hidden " @click="hide(false)" >关闭</div>
        <div class="submit-btn remove-overflow-hidden" @click="search()">查看</div>
    </div>
</div>

</template>

<script>
import SmallItemSelect from './SmallItemSelect.vue';
import ColorItemSelect from './ColorItemSelect.vue';
export default {
    replace: true,
    props: {
      activeNav: {
          type: Object,
          default: ()=>{
            return {}
          }
      },
        // 变速箱 gb 风格 s 座位 z 车型 t 排量 di 颜色 c
        // transmission  style seat classification displacement color
        list: { //数据
            type: Object,
            required: true
        },
        type: { //根据type是新车或二手车
            type: String,
            required: true
        },
        chosenFilters:{
          type:Object,
          default:()=>{
            return {}
          }
        }
    },
    methods: {
        transformData() {
                let self = this,
                    list = [],
                    data = [];
                if (self.type === 'new') {
                    list = ['transmission', 'style', 'seat', 'classification', 'displacement', 'color'];
                }
                if (self.type === 'used') {
                    list = ['transmission', 'vehicleAge', 'seat', 'classification', 'displacement', 'color'];
                }

                for (let i of list) {
                    data = data.concat(self.returnChildList[i].data);
                }
                if (data.length == 0) {
                    data = null;
                }
                return data;
            },
            hide(isNeedUpdate=true) {
                this.$store.dispatch('updateNewCarChosenNav', {isNeedUpdate:isNeedUpdate});
            },
            search() {
                let self = this;
                    // data = self.transformData();
                    // self.dispatch(data);
              this.hide()
            }
    },
    components: {
      SmallItemSelect,
      ColorItemSelect
    }
}

</script>
