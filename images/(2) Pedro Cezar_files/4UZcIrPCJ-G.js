if (self.CavalryLogger) { CavalryLogger.start_js(["C9yNC"]); }

__d("PagesIntegrityLoggingAdminDidNotSubmitAfterFakeNewsDialogShownAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingAdminDidNotSubmitAfterUnpublishedContentBankWarningDialogShownAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingAdminDidSubmitAfterFakeNewsDialogShownAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingAdminDidSubmitAfterUnpublishedContentBankWarningDialogShownAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingFakeNewsDialogShownAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"FAKE_NEWS_DIALOG_SHOWN");e.exports=a}),null);
__d("PagesIntegrityLoggingInitialLoadAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"INITIAL_LOAD");e.exports=a}),null);
__d("PagesIntegrityLoggingUnpublishedContentBankWarningDialogShownAction",["AdsDataAction"],(function(a,b,c,d,e,f){"use strict";a=b("AdsDataAction").create([],"UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN");e.exports=a}),null);
__d("ProgressBar.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.$1=function(){"use strict";var a=this.props,b=a.min,c=a.max;a=a.value;a=Math.min(Math.max((a-b)/(c-b)*100,0),100);return a};a.prototype.$2=function(){"use strict";return this.props.label!=null&&this.props.size!=="small"};a.prototype.$3=function(){"use strict";return this.$2()&&this.props.typesetting==="float"};a.prototype.$4=function(){"use strict";return!this.$2()?null:this.props.label};a.prototype.$5=function(){"use strict";return this.$3()?b("React").createElement("div",{className:"_6a"}," "):null};a.prototype.$6=function(){"use strict";var a=Math.round(this.$1()),c="_5e4k"+(a===0?" _5e2d":"")+(a===100?" _5e4j":""),d=this.$4();d&&(d=b("React").createElement("span",{className:"_5e2h"},d));return b("React").createElement("div",{className:c,style:{width:a+"%"}},this.$5(),d)};a.prototype.$7=function(){"use strict";__p&&__p();var a=this.$4();if(!a)return null;a=b("React").createElement("span",{className:"_5e2h _5e2n"},a);if(this.$3()){var c=this.$1();c={left:c+"%",width:c+"%"};c=b("React").createElement("div",{className:"_5e2g",style:c},this.$5(),a);return c}return a};a.prototype.render=function(){"use strict";var a="_5e4h"+(this.$3()?"":" _5e2k")+(this.$3()?" _5e2j":"")+(this.props.size==="small"?" _5e2l":"")+(this.props.isRounded===!0?" _5e2m":"");if(this.$3())return b("React").createElement("div",babelHelpers["extends"]({},this.props,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.$1(),className:b("joinClasses")(this.props.className,a)}),b("React").createElement("div",{className:"_5e2k"},this.$7(),this.$6()));else return b("React").createElement("div",babelHelpers["extends"]({},this.props,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.$1(),className:b("joinClasses")(this.props.className,a)}),this.$7(),this.$6())};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={min:0,max:100,size:"large",typesetting:"inline",isRounded:!1};e.exports=a}),null);
__d("OptimisticVideoPostUtils",["AsyncRequest"],(function(a,b,c,d,e,f){a={shouldShowOptimisticPost:function(a){return a.isScheduledPost||a.isHiddenFromTimeline||a.isSecret||!a.isPageToPage&&!a.isToUserProfile||a.isDraft?!1:!0},checkVideoStatus:function(a,c,d,e){new(b("AsyncRequest"))().setURI("/ajax/video/encode/feedback/ping/").setData({video_id:a}).setHandler(function(b){var f=b.getPayload();b.error||f.error?d(a,b):f.is_ready?c(a):e(a)}).send()}};e.exports=a}),null);
__d("PagesIntegrityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:PagesIntegrityLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setPageAdminNotified=function(a){this.$1.page_admin_notified=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.setPageSurface=function(a){this.$1.page_surface=a;return this};a.prototype.setPostSessionUuid=function(a){this.$1.post_session_uuid=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={event:!0,page_admin_notified:!0,page_id:!0,page_surface:!0,post_session_uuid:!0,vc:!0};e.exports=a}),null);
__d("ProfileVideoWWWFrontendActionTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ProfileVideoWWWFrontendActionLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setSessionID=function(a){this.$1.session_id=a;return this};a.prototype.setUploadError=function(a){this.$1.upload_error=a;return this};c={event:!0,session_id:!0,upload_error:!0};e.exports=a}),null);
__d("PagePostActionButtonActionTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PUBLISH:"PUBLISH",SAVE_DRAFT:"SAVE_DRAFT",SCHEDULE:"SCHEDULE",BACKDATE:"BACKDATE",ADS_POST:"ADS_POST"})}),null);
__d("PagesComposerUnpublishedPostsStore",["PagePostActionButtonActionTypes","PagesComposerActionsTypes","ReactComposerStoreBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={isDraft:!1,scheduledPublishTime:null,backdateConfig:null,isAdsPost:!1,isReviewableBrandedContent:!1,stopFeedDistributionDate:null,isOfferUpsellShown:!1,isOfferUpsellAbandoned:!1,offerConfig:null};c=babelHelpers.inherits(a,b("ReactComposerStoreBase"));g=c&&c.prototype;function a(){__p&&__p();var a;g.constructor.call(this,function(){return Object.assign({},h)},function(c){__p&&__p();switch(c.type){case b("PagesComposerActionsTypes").BACKDATE:a&&a.$PagesComposerUnpublishedPostsStore1(c);break;case b("PagesComposerActionsTypes").SET_DRAFT:a&&a.$PagesComposerUnpublishedPostsStore2(c);break;case b("PagesComposerActionsTypes").SCHEDULE:a&&a.$PagesComposerUnpublishedPostsStore3(c);break;case b("PagesComposerActionsTypes").SET_ADS_POST:a&&a.$PagesComposerUnpublishedPostsStore4(c);break;case b("PagesComposerActionsTypes").SHOW_OFFER_UPSELL:a&&a.$PagesComposerUnpublishedPostsStore5(c);break;case b("PagesComposerActionsTypes").ABANDON_OFFER_UPSELL:a&&a.$PagesComposerUnpublishedPostsStore6(c);break;case b("PagesComposerActionsTypes").SET_IS_REVIEWABLE_BRANDED_CONTENT:a&&a.$PagesComposerUnpublishedPostsStore7(c);break;case b("PagesComposerActionsTypes").CLEAR_COMPOSER_DATA:a&&a.$PagesComposerUnpublishedPostsStore8(c);break;case b("PagesComposerActionsTypes").PUBLISH_NOW:a&&a.$PagesComposerUnpublishedPostsStore9(c);break}});a=this}a.prototype.getPostActionType=function(a){if(this.getIsDraft(a))return b("PagePostActionButtonActionTypes").SAVE_DRAFT;else if(this.getBackdateConfig(a)!==null)return b("PagePostActionButtonActionTypes").BACKDATE;else if(this.getScheduledPublishTime(a)!==null||this.getStopFeedDistributionTime(a)!==null)return b("PagePostActionButtonActionTypes").SCHEDULE;else return b("PagePostActionButtonActionTypes").PUBLISH};a.prototype.getBackdateConfig=function(a){return this.getComposerData(a).backdateConfig};a.prototype.getIsDraft=function(a){return this.getComposerData(a).isDraft};a.prototype.getIsReviewableBrandedContent=function(a){return this.getComposerData(a).isReviewableBrandedContent};a.prototype.getScheduledPublishTime=function(a){return this.getComposerData(a).scheduledPublishTime};a.prototype.getStopFeedDistributionTime=function(a){return this.getComposerData(a).stopFeedDistributionDate};a.prototype.getIsAdsPost=function(a){return this.getComposerData(a).isAdsPost};a.prototype.getIsOfferUpsellShown=function(a){return this.getComposerData(a).isOfferUpsellShown};a.prototype.getIsOfferUpsellAbandoned=function(a){return this.getComposerData(a).isOfferUpsellAbandoned};a.prototype.getOfferConfig=function(a){return this.getComposerData(a).offerConfig};a.prototype.$PagesComposerUnpublishedPostsStore1=function(a){var b=this.getComposerData(a.composerID);b.backdateConfig={year:a.year,month:a.month,day:a.day,hideFromNewsFeed:a.hideFromNewsFeed};b.scheduledPublishTime=null;b.stopFeedDistributionDate=null;b.isDraft=!1;this.emitChange(a.composerID)};a.prototype.$PagesComposerUnpublishedPostsStore3=function(a){var b=this.getComposerData(a.composerID);b.scheduledPublishTime=a.scheduleDate;b.stopFeedDistributionDate=a.stopFeedDistributionDate;b.backdateConfig=null;b.isDraft=!1;this.emitChange(a.composerID)};a.prototype.$PagesComposerUnpublishedPostsStore2=function(a){var b=this.getComposerData(a.composerID);b.isDraft=!0;b.scheduledPublishTime=null;b.stopFeedDistributionDate=null;b.backdateConfig=null;this.emitChange(a.composerID)};a.prototype.$PagesComposerUnpublishedPostsStore4=function(a){a=this.getComposerData(a.composerID);a.isAdsPost=!0};a.prototype.$PagesComposerUnpublishedPostsStore5=function(a){a=this.validateAction(a,["composerID","config"]);var b=a[0];a=a[1];var c=this.getComposerData(b);c.offerConfig=a;c.isOfferUpsellShown=!0;this.emitChange(b)};a.prototype.$PagesComposerUnpublishedPostsStore6=function(a){a=this.getComposerData(a.composerID);a.isOfferUpsellAbandoned=!0};a.prototype.$PagesComposerUnpublishedPostsStore7=function(a){a=this.getComposerData(a.composerID);a.isReviewableBrandedContent=!0};a.prototype.$PagesComposerUnpublishedPostsStore8=function(a){this.clearComposerData(a.composerID)};a.prototype.$PagesComposerUnpublishedPostsStore9=function(a){var b=this.getComposerData(a.composerID);b.isDraft=!1;b.scheduledPublishTime=null;b.stopFeedDistributionDate=null;b.backdateConfig=null;this.emitChange(a.composerID)};e.exports=new a()}),null);
__d("PagesIntegrityLoggingActionType",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({INITIAL_LOAD:null,FAKE_NEWS_DIALOG_SHOWN:null,ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:null,ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:null,UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null,ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null,ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:null})}),null);
__d("PagesIntegrityLoggingActions",["PagesIntegrityLoggingAdminDidNotSubmitAfterFakeNewsDialogShownAction","PagesIntegrityLoggingAdminDidNotSubmitAfterUnpublishedContentBankWarningDialogShownAction","PagesIntegrityLoggingAdminDidSubmitAfterFakeNewsDialogShownAction","PagesIntegrityLoggingAdminDidSubmitAfterUnpublishedContentBankWarningDialogShownAction","PagesIntegrityLoggingFakeNewsDialogShownAction","PagesIntegrityLoggingInitialLoadAction","PagesIntegrityLoggingUnpublishedContentBankWarningDialogShownAction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){b("PagesIntegrityLoggingInitialLoadAction").dispatch({pageID:a})};c=function(){b("PagesIntegrityLoggingAdminDidNotSubmitAfterFakeNewsDialogShownAction").dispatch({})};d=function(){b("PagesIntegrityLoggingAdminDidSubmitAfterFakeNewsDialogShownAction").dispatch({})};f=function(){b("PagesIntegrityLoggingFakeNewsDialogShownAction").dispatch({})};var g=function(){b("PagesIntegrityLoggingAdminDidNotSubmitAfterUnpublishedContentBankWarningDialogShownAction").dispatch({})},h=function(){b("PagesIntegrityLoggingAdminDidSubmitAfterUnpublishedContentBankWarningDialogShownAction").dispatch({})},i=function(){b("PagesIntegrityLoggingUnpublishedContentBankWarningDialogShownAction").dispatch({})};e.exports={initializeLoggingStore:a,logFakeNewsDialogShown:f,logFakeNewsSubmitted:d,logFakeNewsNotSubmitted:c,logUnpublishedContentBankMatchNotSubmitted:g,logUnpublishedContentBankMatchSubmitted:h,logUnpublishedContentWarningDialogShown:i}}),null);
__d("PagesIntegrityLoggerEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN:"FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN",FAKE_NEWS_LINK_SHARED_BY_ADMIN:"FAKE_NEWS_LINK_SHARED_BY_ADMIN",FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN:"FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN",FAKE_NEWS_LINK_SHARE_NOTIFICATION_SENT_TO_ADMIN:"FAKE_NEWS_LINK_SHARE_NOTIFICATION_SENT_TO_ADMIN",FAKE_NEWS_LINK_URI_TO_PAGE_NOTIFICATION_SENT_TO_ADMIN:"FAKE_NEWS_LINK_URI_TO_PAGE_NOTIFICATION_SENT_TO_ADMIN",UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:"UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN",UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN:"UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN",UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN:"UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN",CONTEXT_EVERYWHERE_SHOWN_ON_DYNAMIC_HOVERCARD:"CONTEXT_EVERYWHERE_SHOWN_ON_DYNAMIC_HOVERCARD",USER_VIEWED_PAGE_TRANSPARENCY_UNIT:"USER_VIEWED_PAGE_TRANSPARENCY_UNIT"})}),null);
__d("PagesIntegrityLoggerSurfaces",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({COMPOSER:"COMPOSER"})}),null);
__d("PagesIntegrityLoggingStore",["AdsDataAtom","FluxReduceStore","PagesIntegrityLoggerEvent","PagesIntegrityLoggerSurfaces","PagesIntegrityLoggingActionType","PagesIntegrityTypedLogger","immutable","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;g=babelHelpers.inherits(i,b("immutable").Record({composerPostSessionUUID:null,pageID:null}));g&&g.prototype;function i(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new i()};a.prototype.reduce=function(a,c){__p&&__p();c=c.action;switch(c.type){case b("PagesIntegrityLoggingActionType").INITIAL_LOAD:c=c.pageID;return a.set("composerPostSessionUUID",b("uuid")()).set("pageID",c);case b("PagesIntegrityLoggingActionType").FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").FAKE_NEWS_LINK_SHARE_WARNING_DIALOG_SHOWN,a,!1);case b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").FAKE_NEWS_LINK_NOT_SHARED_BY_ADMIN,a,!0);case b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_FAKE_NEWS_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").FAKE_NEWS_LINK_SHARED_BY_ADMIN,a,!0);case b("PagesIntegrityLoggingActionType").UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN,a,!1);case b("PagesIntegrityLoggingActionType").ADMIN_DID_NOT_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").UNPUBLISHED_CONTENT_BANK_MATCH_NOT_POSTED_BY_ADMIN,a,!0);case b("PagesIntegrityLoggingActionType").ADMIN_DID_SUBMIT_AFTER_UNPUBLISHED_CONTENT_BANK_WARNING_DIALOG_SHOWN:return this.$PagesIntegrityLoggingStore1(b("PagesIntegrityLoggerEvent").UNPUBLISHED_CONTENT_BANK_MATCH_POSTED_BY_ADMIN,a,!0);default:return a}};a.prototype.$PagesIntegrityLoggingStore1=function(event,a,c){new(b("PagesIntegrityTypedLogger"))().setEvent(event).setPageID(a.get("pageID")).setPostSessionUuid(a.get("composerPostSessionUUID")).setPageSurface(b("PagesIntegrityLoggerSurfaces").COMPOSER).log();return c?a.set("composerPostSessionUUID",b("uuid")()):a};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("XControllerWithPageTokenURIUpdater",[],(function(a,b,c,d,e,f){a={updateURI:function(a){window.history&&window.history.replaceState(window.history.state,null,a)}};e.exports=a}),null);
__d("XAfterPartyWWWController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ads/afterparty/www/",{page_id:{type:"Int",required:!0},scrolling_offset:{type:"Int",defaultValue:0}})}),null);
__d("XUnpublishedPostSuccessController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/unpublished_posts/post_success/",{type:{type:"String",required:!0}})}),null);
__d("PagesComposer",["csx","ActorURI","AdsDataAtom","Arbiter","AsyncRequest","Bootloader","ComposerXMarauderLogger","ComposerXStore","DOM","PagesComposerUnpublishedPostsStore","PagesIntegrityLoggingActions","PagesIntegrityLoggingStore","Parent","ReactComposerFocusStore","ReactPagesComposerGlobalFlags","ReloadPage","Run","XAfterPartyWWWController","XUnpublishedPostSuccessController","$","getObjectValues","goURI","ifRequired"],(function(a,b,c,d,e,f,g){__p&&__p();var h=500,i=20,j=58,k,l;function m(){b("ComposerXMarauderLogger").logCompleted(k.id)}function n(a){__p&&__p();if(a.hidePost){var c=b("ComposerXStore").getAllForComposer(a.composer_id);if(!b("getObjectValues")(c).length){c=null;b("PagesComposerUnpublishedPostsStore").getIsDraft(a.composer_id)&&(c="draft");b("PagesComposerUnpublishedPostsStore").getScheduledPublishTime(a.composer_id)&&(c="scheduled");if(c){c=b("XUnpublishedPostSuccessController").getURIBuilder().setString("type",c).getURI();c=b("ActorURI").create(c,l);new(b("AsyncRequest"))().setURI(c).send()}}m();return}if(a.redirect){c=b("ComposerXStore").getAllForComposer(a.composer_id);b("getObjectValues")(c).forEach(function(a){a.reset&&a.reset(a)});b("goURI")(a.redirect);m();return}if(!a.streamStory){c=p();if(c||a.shouldNotReload)return;b("ReloadPage").now();return}if(a.backdatedTime){b("Bootloader").loadModules(["PagesStoryPublisher"],function(b){b.publish(a)},"PagesComposer");m();return}c=q.renderStory(k,a.streamStory);b("Arbiter").inform("TimelineComposer/on_after_publish",c,b("Arbiter").BEHAVIOR_PERSISTENT);if(l){c=b("XAfterPartyWWWController").getURIBuilder().setInt("page_id",l);o(c,0)}m()}function o(a,c){!b("ReactComposerFocusStore").isComposerFocused(k.id)?(c>0&&a.setInt("scrolling_offset",j),new(b("AsyncRequest"))().setURI(a.getURI()).send()):c<i&&setTimeout(o.bind(this,a,c+1),h)}function p(){var a=!1;b("Bootloader").loadModules(["ReactComposerTaggerStore","ReactComposerTaggerType"],function(b,c){var d=b.getTaggerData(k.id,c.SPONSOR);b=b.getTaggersConfig(k.id,c.SPONSOR);d&&d.sponsors&&d.sponsors.length>0&&b&&b.showBCMPPostPostModal&&(a=!0)},"PagesComposer");b("ifRequired")("AdsUEditorAdgroupPagePostField.react",function(){a=!0});return a}var q={init:function(a,c){__p&&__p();k=b("$")(a);l=c;var d=b("Arbiter").subscribe("composer/publish",function(event,a){n(a)}),e=b("Arbiter").subscribe("LitestandComposer/publishTemp",function(b,c){n({composer_id:a,streamStory:c.markup})});b("Run").onLeave(d.unsubscribe.bind(d));b("Run").onLeave(e.unsubscribe.bind(e));b("ReactPagesComposerGlobalFlags").setIsPagesComposer(!0);b("AdsDataAtom").explicitlyRegisterStore(b("PagesIntegrityLoggingStore"));b("PagesIntegrityLoggingActions").initializeLoggingStore(c)},renderStory:function(a,c){a=b("Parent").bySelector(a,"#pagelet_timeline_main_column");if(!a)return;a=b("DOM").scry(a,"._5sem")[0];var d=b("DOM").insertAfter(a,c)[0];b("Bootloader").loadModules(["Animation"],function(a){new a(d).from("backgroundColor","#fff8dd").to("backgroundColor","#fff").duration(2e3).ease(a.ease.both).go()},"PagesComposer")},replaceByID:function(a,c){b("DOM").replace(b("$")(a),c)}};e.exports=a.PagesComposer||q}),null);
__d("ScheduledLiveTimeStringUtil",["fbt","DateStrings","React","formatDate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=24*60*60*1e3;a={getStr:function(a,c){return c?b("React").createElement("span",null,this.getUppercaseDateStr(a)):b("React").createElement("span",null,this.getDateStr(a)," ",g._("{date}",[g._param("date",b("formatDate")(a,"g:ia"))]))},getDateStr:function(a){var c=new Date(a),d=new Date(Date.now()),e=new Date(Date.now()+h),f=new Date(Date.now()+2*h),i=new Date(Date.now()+3*h);d.toDateString()===c.toDateString()?d=g._("Aujourd\u2019hui \u00e0"):e.toDateString()===c.toDateString()?d=g._("Demain \u00e0"):f.toDateString()===c.toDateString()||i.toDateString()===c.toDateString()?d=this._renderDayOfWeekString(c.getDay()):d=b("formatDate")(a,"F d");return d},getUppercaseDateStr:function(a){var c=new Date(a),d=new Date(Date.now()),e=new Date(Date.now()+h),f=new Date(Date.now()+2*h),i=new Date(Date.now()+3*h),j=b("formatDate")(a,"g:iA");d.toDateString()===c.toDateString()?d=g._("TODAY AT {time of day}",[g._param("time of day",j)]):e.toDateString()===c.toDateString()?d=g._("TOMORROW AT {time of day}",[g._param("time of day",j)]):f.toDateString()===c.toDateString()||i.toDateString()===c.toDateString()?d=this._renderUppercaseDayOfWeekString(c.getDay(),a):d=b("formatDate")(a,"F d");return d},_renderUppercaseDayOfWeekString:function(a,c){if(a>=0&&a<=6){c=b("formatDate")(c,"g:iA");return g._("{day of week} \u00e0 {time of day}",[g._param("day of week",b("DateStrings").getUppercaseWeekdayName(a)),g._param("time of day",c)])}return null},_renderDayOfWeekString:function(a){switch(a){case 0:return g._("Dimanche \u00e0");case 1:return g._("Lundi \u00e0");case 2:return g._("Mardi \u00e0");case 3:return g._("Mercredi \u00e0");case 4:return g._("Jeudi \u00e0");case 5:return g._("Vendredi \u00e0");case 6:return g._("Samedi \u00e0")}return null}};e.exports=a}),null);
__d("ScheduledLiveStoryVideoPreview.react",["ix","cx","fbt","BackgroundImage.react","Image.react","React","ScaledImage.react","ScheduledLiveTimeStringUtil","XUIButton.react","XUIText.react","fbglyph"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=a.URL||a.webkitURL||{};j=babelHelpers.inherits(c,b("React").Component);j&&j.prototype;c.prototype.render=function(){var a=b("React").createElement("div",{className:"_ary"});return b("React").createElement("div",{className:"_ar_"},this.$1(),a,this.$2())};c.prototype.$1=function(){return this.props.backgroundImage.imageURL&&this.props.backgroundImage.width&&this.props.backgroundImage.height?b("React").createElement(b("ScaledImage.react"),{width:600,height:300,className:"_as0",src:this.props.backgroundImage.imageURL,imageSize:{width:this.props.backgroundImage.width,height:this.props.backgroundImage.height}}):null};c.prototype.$3=function(){var a=this.props.customProfileImage,c=this.props.customProfileImagePosition;c=c?""+c.x*100+"% "+c.y*100+"%":"50% 50%";if(a!=null)return b("React").createElement(b("BackgroundImage.react"),{backgroundSize:"coverinside",backgroundPosition:c,className:"_as4",height:88,src:k.createObjectURL(a),width:88});return this.props.previousCustomImage!=null?b("React").createElement(b("Image.react"),{className:"_as4",src:this.props.previousCustomImage}):b("React").createElement(b("Image.react"),{className:"_as4",src:this.props.profileImageURL})};c.prototype.$2=function(){var a=this.$3(),c=b("React").createElement("div",{className:"_as5"},b("React").createElement(b("XUIText.react"),{size:"header4",weight:"bold"},b("ScheduledLiveTimeStringUtil").getStr(this.props.plannedStartTime))),d=this.props.isPremiere?i._("{broadcaster_name} pr\u00e9voit de sortir une vid\u00e9o.",[i._param("broadcaster_name",this.props.profileName)]):i._("{broadcaster_name} pr\u00e9voit de diffuser en direct.",[i._param("broadcaster_name",this.props.profileName)]);d=b("React").createElement("div",{className:"_as5"},b("React").createElement(b("XUIText.react"),{size:"header4"},d));var e=b("React").createElement(b("XUIButton.react"),{size:"medium",className:"_as6",label:i._("Recevoir un rappel"),image:b("React").createElement(b("Image.react"),{src:g("114508")})});return b("React").createElement("div",null,b("React").createElement("div",null,a),b("React").createElement("div",{className:"_as7"},c,d,e))};function c(){j.apply(this,arguments)}e.exports=c}),null);
__d("ScheduledLiveStoryVideoPreviewV2.react",["ix","cx","fbt","BackgroundImage.react","Image.react","React","ScaledImage.react","ScheduledLiveTimeStringUtil","XUIButton.react","XUICardSection.react","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=a.URL||a.webkitURL||{};j=babelHelpers.inherits(c,b("React").Component);j&&j.prototype;c.prototype.render=function(){return b("React").createElement("div",null,this.$1())};c.prototype.$2=function(){return this.props.backgroundImage.imageURL&&this.props.backgroundImage.width&&this.props.backgroundImage.height?this.props.customProfileImage?this.$3():b("React").createElement(b("ScaledImage.react"),{width:500,height:280,src:this.props.backgroundImage.imageURL,imageSize:{width:this.props.backgroundImage.width,height:this.props.backgroundImage.height}}):null};c.prototype.$3=function(){var a=this.props.customProfileImage,c=this.props.customProfileImagePosition;c=c?c.x*100+"% "+c.y*100+"%":"50% 50%";if(a!=null)return b("React").createElement(b("BackgroundImage.react"),{backgroundSize:"coverinside",backgroundPosition:c,height:280,src:k.createObjectURL(a),width:500});return this.props.previousCustomImage!=null?b("React").createElement(b("Image.react"),{className:"_as4",src:this.props.previousCustomImage}):b("React").createElement(b("Image.react"),{className:"_as4",src:this.props.profileImageURL})};c.prototype.$1=function(){var a=this.props.isPremiere?g("591214"):g("595518");a=b("React").createElement("div",{className:"_6lz _6mb _1t62"},b("React").createElement(b("XUIText.react"),{className:"_6d27"},b("React").createElement(b("Image.react"),{src:a,className:"_6cfz"}),b("ScheduledLiveTimeStringUtil").getStr(this.props.plannedStartTime,!0)));var c=b("React").createElement("div",{className:"_6m6 _2cnj _fwx _6etm"},b("React").createElement(b("XUIText.react"),{size:"body1"},this.props.previewTitle)),d=b("React").createElement(b("XUIText.react"),{color:"secondary",className:"_20l4 _svw"},i._("Tune in to watch live")),e=b("React").createElement("div",{className:"_44af _2e6- _6fh0"},b("React").createElement(b("XUIButton.react"),{size:"medium",label:i._("Int\u00e9ress\u00e9(e)"),image:b("React").createElement(b("Image.react"),{src:g("492370")})}));return b("React").createElement("div",null,b("React").createElement(b("XUICardSection.react"),{className:"_6dw8"},this.$2()),b("React").createElement(b("XUICardSection.react"),{className:"_64lx _3eqz _pmm _267a _66cd _6d28 _2v9b"},b("React").createElement("div",{className:"_44ae _651x"},b("React").createElement("div",{className:"_59tj _2iau _oq1 _6m3 _--6 _4dhn"},a,c,d),e)))};function c(){j.apply(this,arguments)}e.exports=c}),null);
__d("StoryProfile.react",["cx","BackgroundImage.react","FBProfilePhotoShadow.react","Image.react","ImageBlock.react","InlineBlock.react","Link.react","PrivacyConst","React","XUIGrayText.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$1=function(){var a=null;if(this.props.privacyIndicator)a=this.props.privacyIndicator;else if(this.props.privacySetting){var c=this.props.privacySetting==b("PrivacyConst").BaseValue.EVERYONE,d=this.props.privacySetting==b("PrivacyConst").BaseValue.ALL_FRIENDS;a=b("React").createElement(b("BackgroundImage.react"),{width:13,height:12,"data-hover":"tooltip","data-tooltip-content":this.props.privacyTooltip,className:"_14g-"+(c?" _14g_":"")+(d?" _5qhp":"")+(!d&&!c?" _14h0":"")})}return!a?null:b("React").createElement("span",null,b("React").createElement(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},"\xa0\xb7\xa0"),a)}.bind(this),this.$2=function(){__p&&__p();var a,c;if(this.props.profileURL){var d;this.props.openProfileURLInNewPage&&(d="_blank");c="bold";a=b("React").createElement(b("Link.react"),{href:this.props.profileURL,target:d},this.props.username)}else a=this.props.username;if(this.props.description)return b("React").createElement("div",null,b("React").createElement(b("XUIText.react"),{className:"_14gz",size:"header4",weight:c},a)," ",this.props.description);else return b("React").createElement(b("XUIText.react"),{className:"_14gz",size:"header4",weight:c,display:"block"},a)}.bind(this),this.$3=function(){return this.props.additionalLinks?b("React").createElement(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},this.props.additionalLinks.map(function(a,c){return b("React").createElement("span",{key:c},"\xa0\xb7\xa0",b("React").createElement(b("Link.react"),{href:a.URL,target:"_blank"},a.text))})):null}.bind(this),c}a.prototype.render=function(){"use strict";return b("React").createElement(b("ImageBlock.react"),{spacing:"medium",className:b("joinClasses")(this.props.className,"_56-3")},this.props.profilePicture?b("React").createElement(b("FBProfilePhotoShadow.react"),null,b("React").createElement(b("Image.react"),{className:"_56-4",src:this.props.profilePicture})):b("React").createElement("span",null),b("React").createElement(b("InlineBlock.react"),{alignv:"middle",height:40,fullWidth:!0},this.$2(),b("React").createElement("div",null,b("React").createElement(b("XUIGrayText.react"),{shade:"light",size:"meta1",display:"inline"},this.props.uploadTime),this.$1(),this.$3())))};a.propTypes={privacySetting:c.number,privacyIndicator:c.object,profilePicture:c.string,privacyTooltip:c.node,username:c.string.isRequired,uploadTime:c.node.isRequired,profileURL:c.string,openProfileURLInNewPage:c.bool,additionalLinks:c.arrayOf(c.shape({URL:c.string,text:c.node})),description:c.node};a.defaultProps={openProfileURLInNewPage:!1};e.exports=a}),null);
__d("XLiveScheduleStoryPreviewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live/schedule/preview/",{target_id:{type:"FBID"},broadcast_id:{type:"FBID"}})}),null);
__d("ScheduledLiveStoryPreview.react",["cx","fbt","AsyncRequest","React","ScheduledLiveStoryVideoPreview.react","ScheduledLiveStoryVideoPreviewV2.react","StoryProfile.react","XLiveScheduleStoryPreviewController","XUICard.react","XUICardSection.react","XUIText.react","gkx"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j="/images/silhouettes/person_50x50.png";c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){"use strict";i.constructor.call(this,a),this.$1=function(a){a=a.getPayload();this.setState({profileName:a.profileName,profileImageURL:a.profileImageURL,profileURL:a.profileURL,backgroundImage:a.backgroundImage,previousCustomImage:a.previousCustomImage})}.bind(this),this.state={profileName:"",profileImageURL:j,profileURL:"",backgroundImage:{},previousCustomImage:null}}a.prototype.componentDidMount=function(){"use strict";var a=b("XLiveScheduleStoryPreviewController").getURIBuilder().setFBID("target_id",this.props.targetID).setFBID("broadcast_id",this.props.broadcastID).getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setHandler(this.$1).send()};a.prototype.render=function(){"use strict";var a=b("gkx")("AT4YnQs3_vOhjFdtEu76WrOuuPyqQ6iAFo7l4V8WmpDqhcwWfgiOTZw46omrY-fwHLpPOSm_hWClu0_RurI1MOFs")?b("React").createElement(b("ScheduledLiveStoryVideoPreviewV2.react"),{backgroundImage:this.state.backgroundImage,customProfileImage:this.props.customProfileImage,customProfileImagePosition:this.props.customProfileImagePosition,isPremiere:this.props.isPremiere,plannedStartTime:this.props.plannedStartTime,previousCustomImage:this.state.previousCustomImage,profileImageURL:this.state.profileImageURL,profileName:this.state.profileName,previewTitle:this.props.previewTitle}):b("React").createElement(b("ScheduledLiveStoryVideoPreview.react"),{backgroundImage:this.state.backgroundImage,customProfileImage:this.props.customProfileImage,customProfileImagePosition:this.props.customProfileImagePosition,isPremiere:this.props.isPremiere,plannedStartTime:this.props.plannedStartTime,previousCustomImage:this.state.previousCustomImage,profileImageURL:this.state.profileImageURL,profileName:this.state.profileName});return b("React").createElement(b("XUICard.react"),null,b("React").createElement(b("XUICardSection.react"),null,this.$2(),this.$3()),a)};a.prototype.$2=function(){"use strict";var a=this.props.isPremiere?h._("compte sortir une vid\u00e9e."):h._("pr\u00e9voit de diffuser en direct.");return b("React").createElement("div",{className:"_3-8j"},b("React").createElement(b("StoryProfile.react"),{profilePicture:this.state.profileImageURL,profileURL:this.state.profileURL,username:this.state.profileName,uploadTime:h._("\u00c0 l\u2019instant"),description:a}))};a.prototype.$3=function(){"use strict";return b("React").createElement(b("XUIText.react"),{className:"_as3",display:"block",size:"header4"},this.props.description)};e.exports=a}),null);
__d("VideoUploadProgressUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=99.8;a={isEncodingFinished:function(a){return a==="finish"},getOptimizedProgress:function(a,b,c,d,e){__p&&__p();if(!e)return{progress:Math.max(b,a.progress),progressWithoutFake:a.progressWithoutFake};e={progress:b,progressWithoutFake:a.progressWithoutFake};var f=a.progress+b;if(!(b>0)||d>0&&f>d){e.progress=-1;return e}f=Number(f.toFixed(1));c==="finish"||c==="notify"?f=100:f>=100&&(f=a.progress<100?a.progress:g);e.progress=f;e.progressWithoutFake=f;return e},getUpdatedProgress:function(a,b){var c={progress:b.progress,progressWithoutFake:b.progressWithoutFake};a.obj.cached_progress&&b.progress<a.obj.cached_progress&&(c={progress:a.obj.cached_progress,progressWithoutFake:a.obj.cached_progress});b=this.getOptimizedProgress(c,a.obj.progress,a.obj.stage,a.obj.max_percent?a.obj.max_percent:0,a.obj.sve_report);b.progress!==-1&&(c.progress=b.progress);c.progressWithoutFake=b.progressWithoutFake;return c}};e.exports=a}),null);
__d("XVideoGenerateStoryController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/generate_story/",{video_id:{type:"Int"},feed_location:{type:"Enum",enumType:0},timeline_identifier:{type:"String"}})}),null);