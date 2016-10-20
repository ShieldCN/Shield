

<template>

<div class=" filter-box filter-sort-box" style="display: block;" v-show="activeNav.type&&activeNav.type==='sort'">
    <div class="search-sort-wrapper">
        <div class="container">
            <ul class="row-fluid nav text-center li-text-center">
                <li v-for="n in list" @click="chooseItem(n)" :class="{'selected':chosenFilters.sort.key&&chosenFilters.sort.key===n.value}">
                    <a class="row-fluid">{{n.name}}</a>
                </li>
            </ul>
            <div class="filter-box-hidden remove-overflow-hidden " @click="hide(false)">
                <i class="fa fa-angle-up"></i>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    replace: true,
    props: {
        activeNav: {
            type: Object,
            default: () => {
                return {}
            }
        },
        list: {
            required: true
        },
        chosenFilters: {
            type: Object,
            default: () => {
                return {sort:{}}
            }
        }
    },
    methods: {
        hide(isNeedUpdate = true) {
                this.$store.dispatch('updateNewCarChosenNav', {
                    isNeedUpdate: isNeedUpdate
                });
            },
            chooseItem(item) {
                let self = this,
                    data ={sort:{
                        type: 'sort',
                        key: item.value,
                        value: item.name
                    }} ;
                self.$store.dispatch('updateNewCarChosenFilter', {
                    sortNav: data
                });
                self.hide();
            }
    }
}

</script>
