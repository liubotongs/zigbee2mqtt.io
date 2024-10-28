"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96373],{32582:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>o});var t=a(24691);const s={},l=(0,a(89260).A)(s,[["render",function(e,n){const a=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[n[7]||(n[7]=(0,t.Lk)("h1",{id:"tuya-zs06",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#tuya-zs06"},[(0,t.Lk)("span",null,"Tuya ZS06")])],-1)),(0,t.Lk)("table",null,[n[6]||(n[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[n[2]||(n[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"ZS06")],-1)),(0,t.Lk)("tr",null,[n[1]||(n[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,t.k6)((()=>n[0]||(n[0]=[(0,t.eW)("Tuya")]))),_:1})])]),n[3]||(n[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Universal smart IR remote control")],-1)),n[4]||(n[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"learn_ir_code, learned_ir_code, ir_code_to_send, linkquality")],-1)),n[5]||(n[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZS06.png",alt:"Tuya ZS06"})])],-1))])]),n[8]||(n[8]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>Device can learn IR codes and send already known IR codes.</p><h3 id="control" tabindex="-1"><a class="header-anchor" href="#control"><span>Control</span></a></h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can control the device:</p><h4 id="switch-to-a-learning-mode" tabindex="-1"><a class="header-anchor" href="#switch-to-a-learning-mode"><span>Switch to a learning mode</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn_ir_code&quot;</span><span class="token operator">:</span><span class="token string">&quot;ON&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command activates the orange light on the device. You have several seconds to take source IR remote, move it closer to the device and press a button. The learned IR code will be exposed as <code>learned_ir_code</code>.</p><h4 id="send-already-learned-ir-code" tabindex="-1"><a class="header-anchor" href="#send-already-learned-ir-code"><span>Send already learned IR code</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;ir_code_to_send&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;previously learned IR code&gt;&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="learn-ir-code-binary" tabindex="-1"><a class="header-anchor" href="#learn-ir-code-binary"><span>Learn ir code (binary)</span></a></h3><p>Turn on to learn new IR code. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;learn_ir_code&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> learn ir code is ON, if <code>OFF</code> OFF.</p><h3 id="learned-ir-code-text" tabindex="-1"><a class="header-anchor" href="#learned-ir-code-text"><span>Learned ir code (text)</span></a></h3><p>The IR code learned by device. Value can be found in the published state on the <code>learned_ir_code</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="ir-code-to-send-text" tabindex="-1"><a class="header-anchor" href="#ir-code-to-send-text"><span>Ir code to send (text)</span></a></h3><p>The IR code to send by device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ir_code_to_send&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),o=JSON.parse('{"path":"/devices/ZS06.html","title":"Tuya ZS06 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZS06 control via MQTT","description":"Integrate your Tuya ZS06 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-25T15:42:15.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Control","slug":"control","link":"#control","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Learn ir code (binary)","slug":"learn-ir-code-binary","link":"#learn-ir-code-binary","children":[]},{"level":3,"title":"Learned ir code (text)","slug":"learned-ir-code-text","link":"#learned-ir-code-text","children":[]},{"level":3,"title":"Ir code to send (text)","slug":"ir-code-to-send-text","link":"#ir-code-to-send-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730081265000},"filePathRelative":"devices/ZS06.md"}')}}]);