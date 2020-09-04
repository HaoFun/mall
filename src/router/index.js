import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Cart from '../views/cart'
import Index from '../views/index'
import Product from '../views/product'
import Detail from '../views/productDetail'
import Order from '../views/order'
import OrderList from '../views/orderList'
import OrderConfirm from '../views/orderConfirm'
import OrderPayment from '../views/orderPayment'

Vue.use(VueRouter)
  const routes = [
      {
          path: '/',
          name: 'home',
          component: Home,
          redirect: '/index',
          children: [
              {
                  path: '/index',
                  name: 'index',
                  component: Index,
              },
              {
                  path: '/product/:id',
                  name: 'product',
                  component: Product,
              },
              {
                  path: '/detail/:id',
                  name: 'detail',
                  component: Detail,
              }
          ]
      },
      {
          path: '/cart',
          name: 'cart',
          component: Cart,
      },
      {
          path: '/order',
          name: 'order',
          component: Order,
          children: [
              {
                  path: '/list',
                  name: 'order-list',
                  component: OrderList,
              },
              {
                  path: '/confirm',
                  name: 'order-confirm',
                  component: OrderConfirm,
              },
              {
                  path: '/payment',
                  name: 'order-payment',
                  component: OrderPayment,
              },
          ]
      }
  ]

const router = new VueRouter({
  routes
})

export default router
