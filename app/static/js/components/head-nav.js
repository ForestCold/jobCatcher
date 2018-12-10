Vue.config.devtools = true;

var headNav = Vue.component('head-nav', {
    template: `
    <div class="navbar-fixed">
      <nav>
  			<div class="nav-wrapper grey lighten-5">
  				<a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li v-for="module in modules" v-on:click="moduleActive(module.name)" v-bind:class="{'active':(module.name === curModule)}">
              <a href="#!"><i class="material-icons" style="color:#495a6e">{{module.icon}}</i>
            </li>
          </ul>
  			</div>
  		</nav>
    </div>
    `,
    data: function(){
      return {
        'modules' : [{
          'name' : 'upload',
          'text' : 'Upload',
          'icon' : 'cloud_upload'
        },{
          'name' : 'analysis',
          'text' : 'Analysis',
          'icon' : 'pageview'
        },{
          'name' : 'recommendation',
          'text' : 'Recommendation',
          'icon' : 'sort'
        }],
        curModule : 'upload'
      }
    },
    methods: {
      moduleActive : function(name) {
        this.curModule = name;
        store.dispatch('setSelectedModule', name);
      }
    }
})