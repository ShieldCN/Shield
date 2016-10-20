

<template>

<div class="filter-child">
    <div class="title">{{title}}</div>
    <ul class="select">
        <li class="td3" v-for="n in list" @click="chooseItem(n)">
            <div class="option " :class="{'selected':isChosen(n)}">{{n.value}}</div>
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
                        value: item.value
                    };
                self.$store.dispatch('updateNewCarChosenFilter', {
                    moreNav: data
                });
                this.chosenItem=this.$store.getters.getNewCarCacheFilterList.moreNav[this.itemType]
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
