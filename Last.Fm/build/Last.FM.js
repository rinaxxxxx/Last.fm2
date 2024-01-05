function C(t){window.enmity.plugins.registerPlugin(t)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const T=window.enmity.modules.common.Linking;window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;var x="Last.FM",E="0.1",I="Last.fm RPC",_=[{name:"Kief",id:"757661857891876904"}],P="#f69220",i={name:x,version:E,description:I,authors:_,color:P};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground;const V=e.KeyboardAvoidingView;e.Modal,e.Pressable,e.RefreshControl;const M=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const y=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const g=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const p=e.FormInput;e.FormLabel,e.FormRadio,e.FormRow;const $=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function b(t,o,s){window.enmity.settings.set(t,o,s)}function l(t,o,s){return window.enmity.settings.get(t,o,s)}function F(t,o){return window.enmity.modules.getModule(t,o)}function B(...t){return window.enmity.modules.getByProps(...t)}window.enmity.modules.common;const{SET_ACTIVITY:N}=F(t=>typeof t.SET_ACTIVITY=="object");F(t=>typeof(t==null?void 0:t.APPLICATION_ASSETS_FETCH)=="object");function v(t){return N.handler({isSocketConnected:()=>!0,socket:{id:100,application:{id:"1052565934088405062",name:t?t.name:"Last.fm"},transport:"ipc"},args:{pid:10,activity:t}})}function d(){var t,o,s;let m={name:(t=l(i.name,"name","Last.fm"))==null?void 0:t.toString(),type:3,details:"",state:"",application_id:"1052565934088405062",assets:{},buttons:[],timestamps:{}};const u=(o=l(i.name,"key",void 0))==null?void 0:o.toString(),w=(s=l(i.name,"user",void 0))==null?void 0:s.toString();if(u&&w){const L=`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${w}&api_key=${u}&format=json&limit=1`;fetch(L).then(r=>r.json()).then(r=>{var h;if((h=r.recenttracks.track[0]["@attr"])!=null&&h.nowplaying){const a=r.recenttracks.track[0],S=a.artist["#text"],A=a.album["#text"],c=a.name;if(l(i.name,"current","")==c)return!1;const k=a.image[3]["#text"];return m.details=`${c}`,m.state=`by ${S}`,k&&(m.assets={large_image:a.image[3]["#text"],large_text:`Album: ${A}`,small_image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/512px-Youtube_Music_icon.svg.png",small_text:`Song: ${c}`}),m.buttons=[{label:"View on Last.fm",url:a.url}],m.timestamps={start:Math.floor(Date.now()/1e3)},console.log(`Currently listening to ${c} by ${S}`),b(i.name,"current",c),v(m),m.name}else{b(i.name,"current","a"),console.log("No song currently playing"),v(void 0);return}}).catch(r=>{console.error("Error:",r)})}else{v(void 0),console.log("No Last.fm key or user set");return}}function f(){return l(i.name,"key",!1)&&l(i.name,"user",!1)}var R=({settings:t})=>(n.useEffect(()=>()=>{f(),d()},[]),n.createElement(V,{behavior:"padding",style:{flex:1}},n.createElement(M,null,n.createElement($,{title:"Config"},n.createElement(p,{placeholder:"Last.fm",value:t.get("name"),title:"Name of presence",onChangeText:o=>t.set("name",o)}),n.createElement(p,{placeholder:"abc123",value:t.get("key"),title:"Last.fm API Key",onChangeText:o=>t.set("key",o)}),n.createElement(p,{placeholder:"printedwaste",value:t.get("user"),title:"Last.fm Username",onChangeText:o=>t.set("user",o)})),n.createElement(g,{style:{marginBottom:50}}),n.createElement(g,{style:{flexDirection:"column"}},n.createElement(y,{style:{textAlign:"center",color:"#fff",fontSize:12}},"Created by",n.createElement(y,{style:{color:"#7289da"},onPress:()=>T.openURL("https://printedwaste.com")},"Kief")),n.createElement(y,{style:{textAlign:"center",color:"#fff",fontSize:12,marginTop:10}},"Get a Last.fm API key",n.createElement(y,{style:{color:"#7289da"},onPress:()=>T.openURL("https://www.last.fm/api/account/create")},"here"))),n.createElement(g,{style:{marginBottom:50}}))));const K=B("AppState"),D={...i,onStart(){let t=0;const o=3,s=()=>{var m;try{t++,f()&&(d(),setInterval(()=>{d()},2e4));const{remove:u}=(m=K.AppState)==null?void 0:m.addEventListener("change",w=>{w==="active"&&f()&&d()});this.removeAppStateLister=u}catch{t<o?setTimeout(s,t*1e4):console.error(`${i.name} failed to start. Giving up.`)}};setTimeout(()=>{s()},300)},onStop(){this.removeAppStateLister&&this.removeAppStateLister()},getSettingsPanel({settings:t}){return n.createElement(R,{settings:t})}};C(D);
