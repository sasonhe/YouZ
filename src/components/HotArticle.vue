<template>
<section class="border-1px margin-btm padding-body">
  <header class="title border-1px clearfix">
    <h1 class="fl">热门推荐</h1>
    <h3 class="fr"><a href="javascript:;">更多></a></h3>
  </header>
  <div class="main-wrap border-1px clearfix" v-for="item in articleInfo">
    <dl class="main fl" v-for="info in item.info">
      <dt><a href=""><img :src="info.img" alt=""></a></dt>
      <dd class="text">{{info.title}}</dd>
      <dd class="des">
        <p>{{info.des}}</p>
      </dd>
      <dd class="footer">
        <div class="icon-wrap clearfix">
          <div class="icon fl"><img class="icon" :src="info.userAvatar" alt=""></div>
          <p class="name fl">{{info.user}}</p>
        </div>
        <time class="time clearfix"><img class="time-icon fl" :src="dateImg" alt="">{{info.date}} <span> {{info.time}}</span></time>
      </dd>
    </dl>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      dateImg: require('../../static/images/img_2.png'),
      articleInfo: [{
          "name": "热门推荐",
          "info": [{
              img: require('../../static/images/youz_1.png'),
              userAvatar: require('../../static/images/img_1.png'),
              title: "分发迎来拐点",
              user: 'Admin',
              date: '08月24日',
              time: '18:30',
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            },
            {
              img: require('../../static/images/youz_2.png'),
              userAvatar: require('../../static/images/img_1.png'),
              title: "外媒：百度股价涨幅超40% 未来上升潜力巨大",
              user: 'Admin',
              date: '08月24日',
              time: '18:30',
              des: "近日，美国道琼斯旗下金融杂志《巴伦周刊》（Barron&rsquo;s）发表评论文章称，尽管今年以来百度股票已经涨幅超过40%，但未来百度股价上升潜力依然巨大"
            }
          ]
        },
        {
          "name": "热门推荐",
          "info": [{
              img: require('../../static/images/youz_3.png'),
              userAvatar: require('../../static/images/img_1.png'),
              title: "英特尔CEO致员工：未来我们要冒更多风险 移动服务商",
              user: 'Admin',
              date: '08月24日',
              time: '18:30',
              des: "英特尔首席执行官科再奇（Brian Krzanich）在本周二告诉员工，公司将承担更大的风险，变化将成为“新常态”"
            },
            {
              img: require('../../static/images/youz_4.png'),
              userAvatar: require('../../static/images/img_1.png'),
              title: "小程序会不会改变国内互联网格局 引爆下一个创业浪潮？",
              user: 'Admin',
              date: '08月24日',
              time: '18:30',
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  height: 0.79rem;
}

.title h1 {
  font-size: 0.32rem;
  font-weight: 700;
  color: #333;
  line-height: 0.8rem;
}

.title h3 a {
  font-size: 0.22rem;
  font-weight: 100;
  line-height: 0.8rem;
  color: #ff6c00;
}

.main-wrap {
  padding: 0.25rem 0;
  height: 4.14rem;
}

.main-wrap:last-child {
  border: none;
}

.main {
  width: 3.1rem;
  display: inline-block;
  margin-right: 0.4rem;
}

.main:last-child {
  margin-right: 0px;
}

.main .text {
  padding-top: 0.2rem;
  font-size: 0.28rem;
  font-weight: 600;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main .des {
  height: 0.80rem;
  padding-top: 0.18rem;
  font-size: 0.22rem;
  line-height: 0.4rem;
  color: #666;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
}

.main .footer {
  padding-top: 0.16rem;
  color: #a9a9a9;
}

.main .footer .icon-wrap {
  height: 0.25rem;
  line-height: 0.28rem;
  margin-bottom: 0.1rem;
}

.main .footer .icon {
  display: inline-block;
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 50%;
  margin-right: 0.1rem;
}

.main .footer .icon img {
  width: 0.25rem;
  height: 0.25rem;
}

.main .footer .name {
  display: inline-block;
  font-size: 0.22rem;
}

.main .footer .time {
  display: block;
  height: 0.25rem;
  line-height: 0.28rem;
  font-size: 0.22rem;
}

.main .footer .time .time-icon {
  width: 0.25rem;
  height: 0.25rem;
  margin-right: 0.1rem;
}
</style>
