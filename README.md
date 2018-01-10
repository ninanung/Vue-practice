# Simple package made by vue-cli  

## HTML form practice  

__v-model.html :__ Write input(text) and h2 tag, when write in input tag, it change h2 same as input value.  
__v-for.html :__ Using v-bind, v-model, v-for, make simple phone book. Can insert new info.  
__computed.html :__ Using computed in vue object, make real time search function.  
__watch.html__  
__watch-fetch.html :__ Using watch property to make some table. In watch_fetch, use fetch to read json from server.  

_!!Notice!!_ - 'watch' don't need to return, 'computed' need to return.  

__v-on.html :__ Using v-on to control event. When click -> v-on:click or just @click.  
__preventDefault.html :__ Learn how to control event more in detail. In 'a'tag, there's default click event and preventDefault() will block that.  
_!!Notice!!_ - Not only preventDefault(), there's many other details. stopPropagation() will stop event propagation. Even use like this, @click.once.self.prevent.stop="mehodName"   

_!!Notice!!_ - Using with v-on:keyup : .enter, .tab, .delete, .esc, .space, .up, .down, .ctrl, .alt, .shift, .meta and .(keycode number)  

__inLineStyle.html :__ Inline style in Vue, make change with method.  
__class.html :__ Change style by v-bind:class. In Vue obj, setting style using checkbox.  
__styleExample.html :__ Make Todo List! with everything i got.  

_!!Notice!!_ - v-model.trim="something" delete whitespace.  

__props.html :__ Practice how to toss props from parent component.  
__propsAndAction.html :__ Practice using props and action in child, parent component. Using fetch for data.  
__todoComponent.html :__ Doing same function with "styleExample.html" but made by Vue component. To make "component to component communication", use '$emit' and '$on'.  

_!!Notice!!_ - While coding todolist, i find out that i forgot 'v-bind:class="createdMethod()"'form can control class. It could be usful, so don't forget.  

## Webpack project form practice  

__webpacktest :__ Test file for webpack and package config. Practice how to set webpack and packages.  
__webpacktest2 :__ Made by 'vue-cli'module with 'webpack-simple'package for webpack and vue practice.  Just project file, no contents.  
__component-example :__ Doing same function with "styleExample.html" and "todoComponent.html" but made by single file component.  

_!!Noice!!_ - If each component have same class name, just one style will applied. For prevent this, can use style tag like "<style scoped></style>". But if component have child component, scoped style affect to child. Remember this.  
_!!Notice!!_ - Also, can write style as a module like "<style module></style>", even can use like this "v-bind:class="$style.className"".  

__slottest :__ Practice for slot. Learn how to set slot in parent component.  
__scopedslottest :__ Set v-bind:name="dataName" in child component slot, and parent component use scope="name" in slot. Can make control child's slot like "{{ name.dataName }}" in parent's slot.  
 __dynamic-componenttest :__ Use "<component :is="currentView"></component>" can show component that you want. "currentView" must be imported component's name. In this test, i make method to change components.  

 _!!Notice!!_ - In dynamic component, if component have name, can use <keep-alive include="component-name, other-component-name"></keep-alive> to set components.  

 __recursive-componenttest :__ Like this file name, in child component's template, recursively call there own component. In parent component, give props to child as "array[ array[] ]" mean array in array form.  

 _!!Notice!!_ - For recursive component, you must set component name like dynamic component. Remember this!  

__axiostest :__ Made by webpack project and Axios api connecter. Practice to get, post, put(update), delete data from server using axios module. Set address for api in proxyTable part from /config/index.js file.  

_!!Notice!!_ - To use axios, install axios, import axios. In vue file, GET is "axios.get("/api/address/").then((res) => {}).catch((ex) => {})"form, can use params after address if you need. POST is "axios.post("/api/address", {data obj form}).(same with get)"form. Api address must be set in config file. PUT and DELETE is same form POST and GET. Study hard plz!  

__axiosAddressBook :__ Phone address book using api. Dynamic component, event bus, and axios are main. Using all vue skill what i got. Structure is not that complicate but CSS is pretty hard. I think i should study more CSS.

_!!Notice!!_ -  I use modal form first time, kind of popup page. In CSS, make modal page width 100%, height 100% and z-index 1(top layer anyway). Make other part dark but opacity is not 1. Funny form and i think i can use this anytime i need. So remember this!  

__vuex-todo :__ Vuex practice to make todolist. I think Vuex is similar with EventBus but don't use $emit or $on and method. Just install vuex, make store and import store in main.js file. It is ready! Can use store in any component by "this.$store".  
__list-lodash.vue :__ This file has same content with vuex-todo's component "List.vue" file but using "lodash" to make vuex easy. I can't explain how to code, just read one more this file and book.   

_!!Notice!!_ - For using vuex, must import vuex and write some code in main.js file. For using lodash, must import vuex object and lodash. _.extend({}) is used in list-lodash.vue, this method combine objects to one.  

__vuex-getter :__ Like this project's name, i use 'getter' of vuex. It is kind of computed object or DB's getter. Yeah, it is getter as you can see this name. You don't need to use getter, use when you need to. In vuex, 'mapState' and 'mapgetters' are similar, used in computed same. But getter give some more choice, can change state and move it to component. Please, see one more!  

__vuex-axios :__ I use vuex's 'action' and axios that already studied. 'action' is similar with 'mutation' but 'mutation' do only synchromous job and 'action' is not. Also, 'mutation' make change 'state' but 'action' is not. So best way is, 'action' get payload from component's dispatch and commit to 'mutation' for changing 'state'. This need some practice until be uesd to it.  

__store-function :__ How can i make up store? Or make easy to debug? So there's some structure for store. First, function structure is devided form of 'state', 'mutation', 'getter' and 'action' as each file. Easy to imagine.  
__store-module :__ Second, module structure is devide modules as each file. Each modules have their own 'state', 'mutation', 'action' and etc. That make easy to control store.  
_!!Notice!!_ - Each folders have any server or vue file. These are just practice files.  

__vuex-addressbook :__ Last practice project for Vuex module. Content is same with axiosAddressBook file but not eventbus -> store. So not much to talk about.  
_!!Notice!!_ - In some components, i use v-model to change store's state directly. But this is not a good code. So first make change component's data and then do to state is right form. To block this, in index.js file's vuex objext write 'strict: true'.  

__router-example :__ Vue-router practice webpack-simple project. Same content with dynamic component example but made by vue-router. I think it is similar with react.js router. <router-link> make <a> tag and <router-view> show component.  

__dynamic-route :__ Practice for dynamic routing. Simple content but should see "this.$route.params.something". This is way to use params, and in route, "route/to/dynamic/:number" use like this.  

__nested-route :__