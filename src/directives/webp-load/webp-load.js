'use strict';
import utils from '../../libs/utils';





exports.install = function(Vue, Options) {
      var bind =function () {
        // var el=this.el;

      }
      var update =function (newValue, oldValue) {
        var newSrc='';
        if(newValue){
          if(utils.checkWebp()){
            if(newValue.indexOf('@')>-1){
                newSrc=newValue+'.webp';
            }else{
                newSrc=newValue+'@.webp';
            }
          }else{
            newSrc=newValue;
          }

              this.el.setAttribute('src', newSrc);
        }
      }
      var componentUpdated =function () {

      }
      var unbind =function () {

      }
        Vue.directive('webp', {
            bind: bind,
            update: update,
            componentUpdated: componentUpdated,
            unbind: unbind
        });
};
