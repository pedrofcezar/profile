if (self.CavalryLogger) { CavalryLogger.start_js(["daArW"]); }

__d("ReactComposerPlayWithFriendsSproutContainer.react",["ExtensibleSproutsItemType","InstantGamesFeedEvent","InstantGamesFeedEventSection","InstantGamesFeedTypedLogger","React","ReactComposerContextTypes","ReactComposerSproutsDefaultUIConfig","ReactComposerStore","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.componentDidMount=function(){var a=b("ReactComposerStore").getTargetType(this.context.composerID);new(b("InstantGamesFeedTypedLogger"))().setEvent(b("InstantGamesFeedEvent").PLAY_WITH_FRIENDS_COMPOSER_SPROUT_SHOWN).setUISurface(b("InstantGamesFeedEventSection").PLAY_WITH_FRIENDS_ATTACHMENT).setGroupID(a=="group"?this.context.targetID:null).setPosterID(a=="feed"?this.context.targetID:null).log()};a.prototype.render=function(){return b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").PLAY_WITH_FRIENDS})};function a(){g.apply(this,arguments)}a.contextTypes=b("ReactComposerContextTypes");a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").PLAY_WITH_FRIENDS]};e.exports=a}),null);
__d("ServiceWorkerNub",["DOM","pageLoadedViaSWCache"],(function(a,b,c,d,e,f){a={addNub:function(a,c,d){b("DOM").setContent(a,b("pageLoadedViaSWCache")()?c:d)}};e.exports=a}),null);