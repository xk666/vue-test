<template>
  <div class="wrapper">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <header>
      <a class="f-fl header-return" href="http://www.xiaoshouyi.com

">
        <img src="img/return_btn.png" alt="">返回</a>
      <a id="download-app" href="javascript:;" class="f-fr header-download" style="display:none;">下载</a>
    </header>
    <section>
      <div class="reg-tip">注册成功后，您将获得30天的免费试用时间</div>
    </section>
    <section>
      <h2 class="nametext">注册销售易账号</h2>
      <div class="reg-form">
        <table width="100%" border="0">
          <tbody>
          <tr>
            <td colspan="2" style="text-align:left">
              <span class="title">手机号</span>
              <span class="error" id="err_phone">请输入正确的手机号</span>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p class="input-text">
                <input id="phone-num" type="tel" placeholder="输入手机号(登录时的个人账号)"></p>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="text-align:left">
              <span class="title">校验码</span>
              <span class="error" id="err_verify">请输入正确的校验码</span>
            </td>
          </tr>
          <tr>
            <td>
              <p class="input-text">
                <input id="verify-code" type="text" placeholder="请输入右侧字符"></p>
            </td>
            <td width="130px;" valign="bottom" align="right">
              <img id="verify-img" src="" onclick="changeCaptcha()"></td>
          </tr>
          <tr>
            <td colspan="2" style="text-align:right;">
              <h3>
                <a href="javascript:void(0)" onclick="changeCaptcha()">看不清, 点图更换</a>
              </h3>
            </td>
          </tr>
          <tr style="height:30px;"></tr>
          <tr>
            <td colspan="2">
              <a id="btn-message" href="javascript:void(0);">
                <p class="areg-section-line g-mt30">
                    <span id="btn-message-span" class="areg-btn">
                      <span id="btn-message-countdown" style="display:none;">
                        <b id="countdown-num">30</b>
                      </span>
                      <span id="btn-message-text" @click="myalert">获取验证短信</span>
                    </span>
                </p>
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="text-align:left">
              <span class="title">验证码</span>
              <span class="error" id="err_captcha">验证码错误</span>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <p class="input-text">
                <input id="captcha" type="text" placeholder="请输入短信验证码"></p>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="text-align:right;">
              <h3>
                <a href="help.html">未收到短信验证码？</a>
              </h3>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="height:60px;"></td>
          </tr>
          <tr>
            <td colspan="2">
              <a href="javascript:void(0)" id="btn-next">
                <p class="areg-section-line">
                  <span class="areg-btn areg-btn-false" id="btn-next-span">下一步</span>
                </p>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <footer>
      <div class="f-fl footer-ico">
        <img alt="" src="img/weibo.png"></div>
      <div class="f-fl footer-info">
        <h2 style="padding-bottom:6px;">关注销售易CRM官方微信</h2>
        <p>微信号 ingageapp</p>
      </div>
      <div class="f-fr footer-phone">
        <a  id="phone-no" style="display:inline-block" href="javascript:void(0);" onclick="linkToPhone(this)">
          <img alt="" src="img/tel.png"></a>
      </div>
    </footer>
  </div>


</template>
<script>
  export default {
    name: 'register',
    methods:{
      myalert:function(){
        $(".nametext").css("color","red");
      }
    }
  }
</script>
