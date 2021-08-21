import Vue from 'vue'
import Router from 'vue-router'
import SolarRegimen from '@/components/SolarRegimen/SolarRegimen'
import Edit from '@/components/SolarRegimen/Edit'
import Add from '@/components/SolarRegimen/Add'
import SelfCare from "../components/SelfCare/SelfCare";
import AddSelfCare from "../components/SelfCare/AddSelfCare";
import main from '@/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      component: main
    },{
       path: '/',
      name: 'SolarRegimen',
      component: SolarRegimen
    },{
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },{
      path: '/Add',
      name: 'Add',
      component: Add
    },{
      path: '/SelfCare',
      name: 'SelfCare',
      component: SelfCare
    },{
      path: '/AddSelfCare',
      name: 'AddSelfCare',
      component: AddSelfCare
    }
    ]
})
