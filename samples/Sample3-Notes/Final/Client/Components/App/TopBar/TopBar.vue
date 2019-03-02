<template>
    <div class="topbar" >
        <div class="logo">
            <div>
                <img class="image" :src="imageUrl('TELINDUS_logo.png')" />
                <span class="light">Digital</span><span class="bold">KYC</span>
            </div>
            </a>
        </div>
        <div class="tools">
            <div class="account topBarAction" v-if="ready">
                <div @click="showAccountPopup">
                    <div style="float:right"><img height="32px" :src="imageUrl('administrator.png')" /></div>
                    <div style="float:right"class="accountUserName">{{username}}</div>
                </div>
                <div class="accountPopup topbarPopup" style="display:none;">
                    <div class="topContainer">
                        <div class="logOutButton" @click="logout">Log out</div>
                        <div class="imageAccountContainer"><img height="80px" :src="imageUrl('administrator.png')" /></div>
                        <div class="infoContainer">{{username}}</div>
                        <div class="infoContainer">{{mail}}</div>
                    </div>
                    <div class="bottomContainer" @click="gotoAccount">
                        <span>My account</span>
                    </div>
                </div>
            </div>
            <div class="notifs topBarAction">
                <div @click="showNotifsPopup" style="float:right">Notifications</div>
                <div class="notifsPopup topbarPopup" style="display:none;">
                    <div class="topContainer">
                        <ul>
                            <li>
                                <div class="notifDetail">
                                    <span class="notifTitle">A new customer is now registred</span>
                                    <span class="notifDate">12:27</span>
                                </div>
                                <span class="notifDismiss">×</span>
                            </li>
                            <li>
                                <div class="notifDetail">
                                    <span class="notifTitle">A new customer is now registred</span>
                                    <span class="notifDate">09:12</span>
                                </div>
                                <span class="notifDismiss">×</span>
                            </li>
                        </ul>
                        <div class="noOtherNotifs">No other notifications.</div>
                    </div>
                    <div class="bottomContainer">
                        <span>View all notifications</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
	import { Vue, Component, Prop, Inject } from "vue-property-decorator";
	import {UserService} from "~/Domains/Security";
	import { Login, Helpers, Shell } from "~/Framework/Core";

    @Component({ })
	export default class TopBar extends Vue {
		ready = false;
		_user = null;

	    get username() {
			if (Helpers.isEmpty(this._user)) return "";
			return this._user.name;
	    }

	    get mail(){
			if (Helpers.isEmpty(this._user)) return "";
			return this._user.email;
	    }

	    imageUrl(name) {
	        return Shell.root + "images/" + name;
	    }

	    showAccountPopup(){
	        const component = this;
            if($('.accountPopup').is(":hidden")){
	            component.closetopbarPopup();
	            $('.accountPopup').show();
	            $('.account').addClass('topBarActionGrayBg');
	        }else{
	            component.closetopbarPopup();
	        }
	    }

	    showNotifsPopup(){
	        const component = this;
	        if($('.notifsPopup').is(":hidden")){
	            component.closetopbarPopup();
	            $('.notifsPopup').show();
	            $('.notifs').addClass('topBarActionGrayBg');
	        }else{
	            component.closetopbarPopup();
	        }
	    }

	    closetopbarPopup(){
	        $('.topbarPopup').hide();
	        $('.topBarAction').removeClass('topBarActionGrayBg');
	    }

		gotoAccount() {
			const url = Shell.root + "/#/account";
			window.location.href = url.replace("//", "/");
		}

		logout() {
		    Login.signOut();
			//this.$router.push("/login");
			window.location.reload();
		}
		async created() {
			var userService = new UserService();
			this._user = await userService.get(Login.current.identity);
			this.ready = true;
		}
		async mounted(){
			const component = this;
		    $(document).click(function(e) {
		        if ( $(e.target).closest('.topBarAction').length === 0 ) {
		            component.closetopbarPopup();
		        }
		    });
		}
	}
</script>
<style lang="scss">
    @import "TopBar";
</style>
