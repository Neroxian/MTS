import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
      meta: { title: 'Home', icon : 'mdi mdi-home-outline' }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: loadView('About'),
    //   meta: { title: 'About', icon : 'mdi mdi-information-variant' }
    // },
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
      meta: { title: 'Login', lang: 'mr', icon : 'mdi mdi-account' }
    },
    // {
    //   path: '/registration',
    //   name: 'registration',
    //   component: loadView('Registration'),
    //   meta: { title: 'Registration', lang: 'mr', icon : 'mdi mdi-account-edit' }
    // },
    // {
    //   path: '/mqlRequestDemo',
    //   name: 'mqlRequestDemo',
    //   component: loadView('MQLRequestDemo'),
    //   meta: { title: 'MQLRequestDemo', icon : 'mdi mdi-presentation-play' }
    // },
    // {
    //   path: '/i18Demo',
    //   name: 'i18Demo',
    //   component: loadView('I18Demo'),
    //   meta: { title: 'Language Demo' , icon : 'mdi mdi-eject-outline'}
    // },
    // {
    //   path: '/validator',
    //   name: 'validator',
    //   component: loadView('Validator'),
    //   meta: { title: 'Validator', icon : 'mdi mdi-check-all' }
    // },
    // {
    //   path: '/encryption',
    //   name: 'encryption',
    //   component: loadView('Encryption'),
    //   meta: { title: 'Encrypt', icon : 'mdi mdi-laptop' }
    // },
    // {
    //   path: '/cdnUpload',
    //   name: 'cdnUpload',
    //   component: loadView('CdnUpload'),
    //   meta: { title: 'Cdn Upload' , icon : 'mdi mdi-upload'}
    // },
    // {
    //   path: '/tableDemo',
    //   name: 'tableDemo',
    //   component: loadView('TableDemo'),
    //   meta: { title: 'Table Demo', icon : 'mdi mdi-file-table-outline' }
    // },
    // {
    //   path: '/veuMetaExample/:title',
    //   name: 'veuMetaExample',
    //   component: loadView('VeuMetaExample'),
    //   meta: { title: 'veuMetaExample', icon : 'mdi mdi-arrow-expand' }
    // },
    // {
    //   path: '/MqlAssetFDBDemo',
    //   name: 'MqlAssetFDBDemo',
    //   component: loadView('MqlAssetFDBDemo'),
    //   meta: { title: 'Mql Request For Asset FDB Demo', icon : 'mdi mdi-database-plus' }
    // },
    {
      path: '/vendorHome',
      name: 'VendorHome',
      component: loadView('VendorHome'),
      meta: { title: 'Vendor Homepage', icon : 'mdi mdi-store' }
    },
    {
      path: '/vendorAdd',
      name: 'VendorAdd',
      component: loadView('VendorAdd'),
      meta: { title: 'Add Vendor page', icon : 'mdi mdi-store' }
    },
    {
      path: '/vendorEdit/:idx',
      name: 'VendorEdit',
      component: loadView('VendorEdit'),
      meta: { title: 'Edit Vendor details', icon : 'mdi mdi-store' }
    },
    {
      path: '/addVendor',
      name: 'VendorAdd',
      component: loadView('VendorAdd'),
      meta: { title: 'Add Vendor', icon : 'mdi mdi-store' }
    },
    {
      path: '/editVendor',
      name: 'VendorEdit',
      component: loadView('VendorEdit'),
      meta: { title: 'Edit Vendor', icon : 'mdi mdi-store' }
    },
    {
      path: '/receiveMaterial',
      name: 'ReceiveMaterialHome',
      component: loadView('ReceiveMaterialHome'),
      meta: { title: 'Receive Material Details add', icon : 'mdi-call-received' }
    },
    {
      path: '/login',
      name: 'Login',
      component: loadView('Login'),
      meta: { title: 'Login page', icon : 'mdi-account-key' }
    },
    {
      path: '/matcat',
      name: 'Matcat',
      component: loadView('MaterialCategory'),
      meta: { title: 'Material Category', icon : 'mdi-account-key' }
    },
    {
      path: '/packaging',
      name: 'Packaging',
      component: loadView('PackagingPattern'),
      meta: { title: 'Material Category', icon : 'mdi-account-key' }
    }
  ]
})
