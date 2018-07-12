if (self.CavalryLogger) { CavalryLogger.start_js(["8Q9tZ"]); }

__d("ChatSidebarComposeLink.react",["fbt","ChatOpenTabEventLogger","CurrentUser","FantaTabActions","Link.react","MessengerState.bs","React","TooltipData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){h.constructor.call(this,a)}a.prototype.render=function(){var a=g._("Nouveau message");return b("React").createElement(b("Link.react"),babelHelpers["extends"]({label:a,className:this.props.className,href:"#",onClick:this.$1},b("TooltipData").propsFor(a,"below")))};a.prototype.$1=function(a){var c=b("MessengerState.bs").createNewLocalThreadGenerateID(b("CurrentUser").getID());b("FantaTabActions").openNewMessageTab(c,"compose_link");b("ChatOpenTabEventLogger").logClickOpen("sidebar",c);a.preventDefault()};e.exports=a}),null);
__d("ChatTypeaheadWrapper.react",["cx","Arbiter","Bootloader","ChatConfig","ChatOpenTabEventLogger","ChatSidebarActions","ChatSidebarComposeLink.react","ChatSidebarDropdown.react","ChatSidebarGroupCreateButtonReact.bs","ChatSidebarSections","ChatSidebarSheet.react","ChatTypeaheadConstants","FantaTabActions","MercuryIDs","MercuryParticipantTypes","MessengerDiscoveryEntryPoint","MessengerSearchTypeahead.react","React","SidebarType","emptyFunction","getActiveElement","gkx","ifRequired"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=40,j=b("ChatConfig").get("divebar_rounded_profile",!1);function k(a){b("Arbiter").inform("sidebar/typeahead/active",a)}c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={height:0,value:this.getInitialQueryString(),isSearching:!!this.getInitialQueryString()},this.$1=function(){this.setState({isSearching:!1,value:""})}.bind(this),b}a.prototype.getInitialQueryString=function(){var a="";b("gkx")("AT6Vd8Lbi8UqLKJqQjAcfopWe5cqEOccp4eiS-V8yRxIDMKBLX2DogknGNtScECqpDmo8hLH8oHxnmHNnFmaPT0QTS-6M2LFaLgAiPg3H1wdHg")&&b("ifRequired")("ChatTypeaheadCore",function(b){a=b.getLastSearchQuery()});return a?a:""};a.prototype.componentDidMount=function(){b("gkx")("AT6Vd8Lbi8UqLKJqQjAcfopWe5cqEOccp4eiS-V8yRxIDMKBLX2DogknGNtScECqpDmo8hLH8oHxnmHNnFmaPT0QTS-6M2LFaLgAiPg3H1wdHg")&&(b("ifRequired")("ChatTypeaheadCore",function(a){a.processInteractionsQueue()}),this.getInitialQueryString()!==""&&k(!0)),this.props.isSidebar?b("Arbiter").subscribe("sidebar/resized",function(a,b){this.setState({height:b})}.bind(this)):b("Arbiter").subscribe("buddyList/resized",function(a,b){this.setState({height:b})}.bind(this))};a.prototype.UNSAFE_componentWillUpdate=function(a,b){b.isSearching!==this.state.isSearching&&k(b.isSearching)};a.prototype.render=function(){__p&&__p();var a=this.state.height!=null?Math.floor((this.state.height-i*2)/i):null;return b("React").createElement("div",{id:"chatsearch",className:j?"":"squareProfile"},b("gkx")("AT6Vd8Lbi8UqLKJqQjAcfopWe5cqEOccp4eiS-V8yRxIDMKBLX2DogknGNtScECqpDmo8hLH8oHxnmHNnFmaPT0QTS-6M2LFaLgAiPg3H1wdHg")?null:b("React").createElement(b("ChatSidebarSheet.react"),{className:"fbChatSidebarMessage",viewer:this.props.id,isSidebar:this.props.isSidebar}),b("React").createElement(b("MessengerSearchTypeahead.react"),{className:"_62it",isFacebookChat:!0,isFocused:!0,maxEntries:a,queryString:this.state.value,viewer:this.props.id,onBlur:this.$1,onChange:function(a){var c=a.target.value;b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"],function(a){a.logQueryChanged(c)},"ChatTypeaheadWrapper.react");this.setState({isSearching:c!=="",value:c})}.bind(this),onClear:b("emptyFunction"),onScrollIntoView:b("emptyFunction"),onSelect:function(a,c){__p&&__p();var d=b("getActiveElement")();d&&d.blur();if(c===b("ChatTypeaheadConstants").MEETING_ROOM_PAGE_TYPE)b("Bootloader").loadModules(["goURI"],function(c){this.setState({isSearching:!1,value:""});var d=b("MercuryIDs").getUserIDFromThreadID(a);c("/"+(d||""))}.bind(this),"ChatTypeaheadWrapper.react");else{b("FantaTabActions").openTab(a,[b("MessengerDiscoveryEntryPoint").FB_SEARCH_CHAT_SIDEBAR_TYPEAHEAD]);d=null;(!c||c===b("MercuryParticipantTypes").FRIEND||c===b("ChatTypeaheadConstants").FRIEND_TYPE||c===b("ChatTypeaheadConstants").PAGE_TYPE||c===b("ChatTypeaheadConstants").USER_TYPE)&&(b("MercuryIDs").isValidThreadID(a)&&(d=b("MercuryIDs").getUserIDFromThreadID(a)));b("ChatOpenTabEventLogger").logClickOpen(b("ChatSidebarSections").TYPEAHEAD,a,d)}}.bind(this)}),this.props.isSidebar?b("React").createElement("div",{className:"_531b"},b("React").createElement(b("ChatSidebarDropdown.react"),{sidebarType:b("SidebarType").SIDEBAR,onToggleSidebar:b("ChatSidebarActions").disable}),b("React").createElement(b("ChatSidebarComposeLink.react"),{className:"_3a-4 _5q85"}),b("React").createElement(b("ChatSidebarGroupCreateButtonReact.bs").jsComponent,null)):null)};e.exports=a}),null);