// vendor imports 
import 'jquery'
import 'bootstrap-webpack'

// main module import
import _module from 'module'

// service imports
import './services/shirtService'

// sub module imports
import './modules/root/rootController'
import './modules/root/root.config'

import './modules/home/homeController'
import './modules/home/home.config'

import './modules/cart/cartController'
import './modules/cart/cart.config'

//directives
import './directives/changeColor/changeColorDirective'
import './directives/layout/layoutDirective'
import './directives/shirtDisplay/shirtDisplayDirective'