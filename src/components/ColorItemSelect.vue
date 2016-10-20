

<template>

<div class="filter-child">
    <div class="title">{{title}}</div>
    <ul class="select-color">
        <li class="td6" v-for="n in list" @click="chooseItem(n)">
            <div class="option " :class="{'selected':isChosen(n)}">
                <div :style="{'background-color': n.value.code}" class="color-img" v-if="n.value.name!=='多彩色'&&n.value.name!=='其他'">
                    <i class="fa fa-check" v-show="isChosen(n)"></i>
                </div>
                <div class="color-img background_more_color" v-if="n.value.name==='多彩色'">
                    <i class="fa fa-check" v-show="isChosen(n)"></i>
                </div>
                <div class="color-img background_other_color" v-if="n.value.name==='其他'">
                    <i class="fa fa-check" v-show="isChosen(n)"></i>
                </div>
                {{n.value.name}}
            </div>
        </li>
    </ul>
</div>

</template>

<script>

export default {
    replace: true,
    props: {
        title: {
            type: String,
            required: true
        },
        list: {
            required: true
        },
        itemType: {
            type: String,
            required: true
        },
        chosenItem: {
            type: Array,
            required: true,
            default: () => {
                return []
            }
        }
    },
    methods: {
        chooseItem(item) {
                let self = this,
                    data = {
                        type: self.itemType,
                        key: item.key,
                        value: item.value.name
                    };
                self.$store.dispatch('updateNewCarChosenFilter', {
                    moreNav: data
                });
                this.chosenItem = this.$store.getters.getNewCarCacheFilterList.moreNav[this.itemType]
            },
            isChosen(item) {
                let self = this;
                for (let i of self.chosenItem) {
                    if (item.key === i.key) {
                        return true;
                    }
                }
                return false;

            }

    }
}

</script>
