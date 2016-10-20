import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue'
import NewCarList from '../views/NewCarList.vue'
import UsedCar from '../views/UsedCar.vue'
import UserCenter from '../views/UserCenter.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import collect from '../components/collect.vue'
import personcenter from '../views/usercenter/personcenter.vue'
import personmodify from '../views/usercenter/personData/personmodify.vue'
import persondata from '../views/usercenter/personData/persondata.vue'
import Incomedail from '../views/usercenter/account/income/Incomedail.vue'
import IncomeList from '../views/usercenter/account/income/list.vue'
import Reflect_details from '../views/Reflect_details.vue'
import BankCardList from '../views/usercenter/account/bankcard/list.vue'
import BankCardAdd from '../views/usercenter/account/bankcard/add.vue'
import NewCarDetails from '../components/NewCarDetails.vue'
import CustomerList from '../views/usercenter/customer/list.vue'
import Information from '../views/usercenter/customer/information.vue'
import NewSpecification from '../components/NewSpecification.vue'

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [ {
        path: '/home',
        component: Home
    },  {
        path: '/newcar',
        component: NewCarList
    }, {
        path: '/usedcar',
        component: UsedCar
    }, {
        path: '/usercenter',
        component: UserCenter
    }, {
        path: '/collect',
        component: collect
    },{
        path: '/personcenter',
        compontent: personcenter
    },{
        path: '/persondata',
        component: persondata
    },{
        path: '/personmodify',
        component:personmodify
    },{
         path: '/Incomedail',
        component: Incomedail
    },{
        path: '/login',
        component: Login
    }, {
        path: '/register',
        component: Register
    },{
        path: '/incomelist',
        component: IncomeList
    },{
        path: '/reflect_details',
        component: Reflect_details
    },{
        path: '/newCarDetails',
        component: NewCarDetails
    },
    {
        path: '/bankCard',
        component: BankCardList
    },
    {
        path:'/customerlist',
        component:CustomerList
    },{
        path: '/bankCard/add',
        component: BankCardAdd
    },
    {
        path:'/information',
        component:Information
    },
    {   
        path: '/NewSpecification',
        component: NewSpecification
    },
    {
        path: '*',
        redirect: '/home'
    }, ]
})
