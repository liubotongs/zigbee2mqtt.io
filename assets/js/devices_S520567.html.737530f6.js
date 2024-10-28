"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[37004],{48865:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>s});var o=i(24691);const l={},n=(0,i(89260).A)(l,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"schneider-electric-s520567",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#schneider-electric-s520567"},[(0,o.Lk)("span",null,"Schneider Electric S520567")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"S520567")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Roller shutter")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"cover (state, position), lift_duration, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S520567.png",alt:"Schneider Electric S520567"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h2><ul><li>Short-press the push button (up or down) 3 times and make sure that the LED blinks amber.</li><li>Wait for a few seconds until the LED turns green. The device is joined.</li><li>If paired for the first time, don&#39;t forget to set the <code>lift duration</code> in <code>Exposes</code> tab.</li></ul><h2 id="reset" tabindex="-1"><a class="header-anchor" href="#reset"><span>Reset</span></a></h2><ul><li>Short-press the push button three times (&lt;0.5 s) and then long-press the push button once (&gt;10 s). The LED blinks red after 10 s, and then release the push button.</li><li>Upon successful reset, the LED stops blinking. Then, the device restarts and blinks green for a few seconds.</li></ul><blockquote><p>After reset, the LED turns amber indicating that it is ready for pairing.</p></blockquote><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',6)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="lift-duration-numeric" tabindex="-1"><a class="header-anchor" href="#lift-duration-numeric"><span>Lift duration (numeric)</span></a></h3><p>Duration of lift. Value can be found in the published state on the <code>lift_duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lift_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8))])}]]),s=JSON.parse('{"path":"/devices/S520567.html","title":"Schneider Electric S520567 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric S520567 control via MQTT","description":"Integrate your Schneider Electric S520567 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-31T16:51:16.000Z"},"headers":[{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":2,"title":"Reset","slug":"reset","link":"#reset","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Lift duration (numeric)","slug":"lift-duration-numeric","link":"#lift-duration-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730081265000},"filePathRelative":"devices/S520567.md"}')}}]);