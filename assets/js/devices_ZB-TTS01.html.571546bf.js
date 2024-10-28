"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[39103],{68339:(t,e,a)=>{a.r(e),a.d(e,{comp:()=>l,data:()=>i});var s=a(24691);const d={},l=(0,a(89260).A)(d,[["render",function(t,e){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[e[7]||(e[7]=(0,s.Lk)("h1",{id:"easyiot-zb-tts01",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#easyiot-zb-tts01"},[(0,s.Lk)("span",null,"easyiot ZB-TTS01")])],-1)),(0,s.Lk)("table",null,[e[6]||(e[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[e[2]||(e[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"ZB-TTS01")],-1)),(0,s.Lk)("tr",null,[e[1]||(e[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(a,{to:"/supported-devices/#v=easyiot"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.eW)("easyiot")]))),_:1})])]),e[3]||(e[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"This is a Simplified Chinese (GB2312) TTS converter that can convert GB2312 encoded text to speech")],-1)),e[4]||(e[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"last_received_status, send_tts, linkquality")],-1)),e[5]||(e[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB-TTS01.png",alt:"easyiot ZB-TTS01"})])],-1))])]),e[8]||(e[8]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="输入内容" tabindex="-1"><a class="header-anchor" href="#输入内容"><span>输入内容</span></a></h3><table><thead><tr><th></th><th>格式</th><th>备注</th></tr></thead><tbody><tr><td>普通文本</td><td>中文-GB2312编码 英文-26个英文字母 数字-0~9</td><td>例：“谢谢使用”</td></tr><tr><td>调节音量</td><td>[v*]</td><td>*代表数字0~9，比如设置音量为5发送内容为：[v5]，下发必须包含小写方括号</td></tr><tr><td>调节语速</td><td>[s*]</td><td>参考调节音量</td></tr><tr><td>调节语调</td><td>[t*]</td><td>参考调节音量</td></tr><tr><td>播放内置铃声</td><td>ring_*</td><td>*代表数字1-5，比如ring_1</td></tr><tr><td>信息提示音</td><td>message_*</td><td>*代表数字1-5，比如message _1</td></tr><tr><td>警示音</td><td>alert_*</td><td>*代表数字1-5，比如alert _1</td></tr></tbody></table><h3 id="_1-1-文本标记功能" tabindex="-1"><a class="header-anchor" href="#_1-1-文本标记功能"><span>1.1 文本标记功能</span></a></h3><p>智能解析常见标点符号，常见多音字、数字。支持常用英文单位（需小写）、特殊数字发音。单句无停顿标点符号句子长度超过50 字将自动切断。</p><h3 id="_1-2-文本分析功能" tabindex="-1"><a class="header-anchor" href="#_1-2-文本分析功能"><span>1.2 文本分析功能</span></a></h3><p>支持文本标记，可标记多音字发音、数字发音、短停顿。</p><h4 id="_1-2-1-多音字标记方式" tabindex="-1"><a class="header-anchor" href="#_1-2-1-多音字标记方式"><span>1.2.1 多音字标记方式</span></a></h4><p>[=*] 标记前一汉字的拼音</p><p>例：空调[=tiao2]调[=tiao2]到三十度</p><p>汉字拼音解析为：kong1 tiao2 tiao2 dao4 san1 shi2 du4</p><p>其中，拼音格式为拼音+声调，声调数值范围1-5，分别代表（1:阴平2:阳平3:上声4:去声5:轻声）。拼音中ü用字母v 代替，字母均为小写</p><h4 id="_1-2-2-数字标记方式" tabindex="-1"><a class="header-anchor" href="#_1-2-2-数字标记方式"><span>1.2.2 数字标记方式</span></a></h4><p>[n*]，指定该标记后的数字发音方式，*为1时按数字发音，*为2时按数值发音，*为3时按电话号码格式发音。该标记后必须跟数字才能有效转换</p><table><thead><tr><th>标记文本</th><th>播放效果</th></tr></thead><tbody><tr><td>共消费[n2]100元</td><td>共消费一百元</td></tr><tr><td>请拨打电话[n1]95511</td><td>请拨打电话九五五一一</td></tr><tr><td>手机号码[n3]18812341121</td><td>手机号码幺八八幺二三四幺幺二幺</td></tr></tbody></table><h4 id="_1-2-3-短停标记方式" tabindex="-1"><a class="header-anchor" href="#_1-2-3-短停标记方式"><span>1.2.3 短停标记方式</span></a></h4><p>[w0]，指定该位置做短暂停顿。</p><p>例：欢迎使用[w0]深圳市知易科技有限公司的语音喇叭。</p><p>If you have additional technical problems, please email Technical support at support@easyiot.tech</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="last-received-status-text" tabindex="-1"><a class="header-anchor" href="#last-received-status-text"><span>Last received status (text)</span></a></h3><p>status. Value can be found in the published state on the <code>last_received_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="send-tts-text" tabindex="-1"><a class="header-anchor" href="#send-tts-text"><span>Send tts (text)</span></a></h3><p>Please enter text. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;send_tts&quot;: NEW_VALUE}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26))])}]]),i=JSON.parse('{"path":"/devices/ZB-TTS01.html","title":"easyiot ZB-TTS01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"easyiot ZB-TTS01 control via MQTT","description":"Integrate your easyiot ZB-TTS01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-11T16:23:11.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"输入内容","slug":"输入内容","link":"#输入内容","children":[]},{"level":3,"title":"1.1 文本标记功能","slug":"_1-1-文本标记功能","link":"#_1-1-文本标记功能","children":[]},{"level":3,"title":"1.2 文本分析功能","slug":"_1-2-文本分析功能","link":"#_1-2-文本分析功能","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Last received status (text)","slug":"last-received-status-text","link":"#last-received-status-text","children":[]},{"level":3,"title":"Send tts (text)","slug":"send-tts-text","link":"#send-tts-text","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730081265000},"filePathRelative":"devices/ZB-TTS01.md"}')}}]);