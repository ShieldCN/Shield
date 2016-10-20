

<template>

<ul class="search-filter-bar grid" style="position: static;width:100%" id="slect-nav-id">
    <template v-for="(n,index) in list">
        <li id="filter_brand" @click="toggleSelect(n)" class=" search-filter-open" :style="{color:activeNav.type===n.type?'#ff3300':'#222'}">{{n.name}}
            <i class=" fa fa-angle-up" v-show="activeNav.type===n.type"></i>
            <i class="fa fa-angle-down" v-show="activeNav.type!==n.type"></i>
            <p></p>
        </li><span class="line" v-if="index<list.length-1"></span>
    </template>
</ul>

</template>

<script>

export default {
    replace: true,
    props: {
        list: {
            type: Array,
            required: true
        },
        chosenFilters: {
            type: Object,
            default: ()=>{
              return {}
            }
        },
        activeNav:{
          type: Object,
          default: ()=>{
            return {}
          }
        }
    },
    methods: {
        toggleSelect(item) {
            let self = this;
            if (!self.activeNav.type || self.activeNav.type !== item.type) {
                self.$store.dispatch('updateNewCarChosenNav', item);
            } else {
                self.$store.dispatch('updateNewCarChosenNav', {});
            }
        }

    }
}

</script>
