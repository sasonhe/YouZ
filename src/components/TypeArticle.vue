<template>
<div>
  <section class="border-1px margin-btm padding-body" v-for="item in articleInfo">
    <header class="title border-1px clearfix">
      <h1 class="fl">{{item.name}}</h1>
      <h3 class="fr"><a href="javascript:;">更多></a></h3>
    </header>
    <div class="main-list border-1px clearfix" v-for="items in item.info">
      <div class="fl text">
        <p>{{items.des}}</p>
      </div>
      <div class="fr">
        <img :src="items.img" alt="" class="pic">
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      articleInfo: [{
          "name": "运营推广",
          "info": [{
              img: require('../../static/images/youz_1.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            },
            {
              img: require('../../static/images/youz_2.png'),
              des: "近日，美国道琼斯旗下金融杂志《巴伦周刊》（Barron&rsquo;s）发表评论文章称，尽管今年以来百度股票已经涨幅超过40%，但未来百度股价上升潜力依然巨大"
            },
            {
              img: require('../../static/images/youz_3.png'),
              des: "英特尔首席执行官科再奇（Brian Krzanich）在本周二告诉员工，公司将承担更大的风险，变化将成为“新常态”"
            },
            {
              img: require('../../static/images/youz_4.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            }
          ]
        },
        {
          "name": "UI设计",
          "info": [{
              img: require('../../static/images/youz_1.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            },
            {
              img: require('../../static/images/youz_2.png'),
              des: "近日，美国道琼斯旗下金融杂志《巴伦周刊》（Barron&rsquo;s）发表评论文章称，尽管今年以来百度股票已经涨幅超过40%，但未来百度股价上升潜力依然巨大"
            },
            {
              img: require('../../static/images/youz_3.png'),
              des: "英特尔首席执行官科再奇（Brian Krzanich）在本周二告诉员工，公司将承担更大的风险，变化将成为“新常态”"
            },
            {
              img: require('../../static/images/youz_4.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            }
          ]
        },
        {
          "name": "WEB前端",
          "info": [{
              img: require('../../static/images/youz_1.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            },
            {
              img: require('../../static/images/youz_2.png'),
              des: "近日，美国道琼斯旗下金融杂志《巴伦周刊》（Barron&rsquo;s）发表评论文章称，尽管今年以来百度股票已经涨幅超过40%，但未来百度股价上升潜力依然巨大"
            },
            {
              img: require('../../static/images/youz_3.png'),
              des: "英特尔首席执行官科再奇（Brian Krzanich）在本周二告诉员工，公司将承担更大的风险，变化将成为“新常态”"
            },
            {
              img: require('../../static/images/youz_4.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            }
          ]
        },
        {
          "name": "程序设计",
          "info": [{
              img: require('../../static/images/youz_1.png'),
              des: "作为移动互联网的重要入口，移动应用分发市场现已进入消费升级时代。这一时期，用户对手机应用的追求，已经从单一的功能性需求，演变成对品质、情感等深度诉求。那么，针对用户需求的转变，移动应用分发市场该如何顺应时势，跟上应用分发市场变化的脚步？"
            },
            {
              img: require('../../static/images/youz_2.png'),
              des: "近日，美国道琼斯旗下金融杂志《巴伦周刊》（Barron&rsquo;s）发表评论文章称，尽管今年以来百度股票已经涨幅超过40%，但未来百度股价上升潜力依然巨大"
            },
            {
              img: require('../../static/images/youz_3.png'),
              des: "英特尔首席执行官科再奇（Brian Krzanich）在本周二告诉员工，公司将承担更大的风险，变化将成为“新常态”"
            },
            {
              img: require('../../static/images/youz_4.png'),
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

.main-list {
  padding: 0.26rem 0px;
  height: 0.98rem;
}

.main-list:last-child {
  border: none;
}

.main-list .text {
  width: 4.6rem;
  padding-right: 0.3rem;
  font-size: 0.28rem;
  line-height: 0.53rem;
  color: #333;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.main-list .pic {
  width: 1.7rem;
  height: 0.98rem;
}
</style>
