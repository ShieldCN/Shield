

<template>

<div class="search-filter-result" :style="{'visibility':visibility}">
    <div class="search-filter-right" @click="reset">
        <a><span class="filter-result" >重置</span></a>
    </div>
    <div class="search-filter-container clearfixnew">
        <!-- <span v-for="(value, key) in list">{{value.value}}<i class="filter-close fa fa-times" @click="deleteItem(value)"></i></span> -->
        <span v-for="(n, index) in list">{{n.value}}<i class="filter-close fa fa-times" @click="deleteItem(n)"></i></span>
    </div>
</div>

</template>

<script>

import isArray from 'lodash.isarray';

export default {
    replace: true,
    props: {
        chosenFilters: {
            type: Object,
            default: ()=>{
              return {}
            }
        }
    },
    computed: {
        list() {
                let self=this,
                list=[];
                for(let key in self.chosenFilters){
                  for(let i in self.chosenFilters[key]){
                    if(isArray(self.chosenFilters[key][i])){
                      self.chosenFilters[key][i].forEach((item)=>{
                        list.push(item)
                      })
                    }else{
                      list.push(self.chosenFilters[key][i])
                    }
                  }
                }
                return list
            },
            visibility() {
                let self = this;
                if (isArray(self.list) && self.list.length > 0) {
                    return 'visible'
                }
                return 'hidden';
            }
    },
    methods: {
        reset() {
                let self = this;
                self.$store.dispatch('resetNewCarChosenFilter');
            },
            deleteItem(item) {
                let self = this;
                self.$store.dispatch('deleteNewCarChosenFilter', item);

            }
    }
}

</script>
