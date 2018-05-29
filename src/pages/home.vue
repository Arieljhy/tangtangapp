<template>
    <div class="home-view">

      <f7-swiper pagination style="margin-top: 1px; margin-bottom: 0px;">
        <f7-swiper-slide >
        <img src="../assets/img/main/IMG_1.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../assets/img/main/IMG_2.png"/>
        </f7-swiper-slide>
        <f7-swiper-slide>
        <img src="../assets/img/main/IMG_3.png"/>
        </f7-swiper-slide>
      </f7-swiper>


          

    
 <!-- 糖糖发展历程 -->
<div class="block-title" style="font-size: 20px;text-align: center; margin-top: 10px;background-color: white;"><img src="../assets/img/main/1.png" style="width: 20px;height: 20px;"/><span style="margin: 10px;">糖糖发展历程</span><img src="../assets/img/main/1.png" style="width: 20px;height: 20px;"/></div>

<div class="timeline timeline-sides"  style="background-color:#f7f8fa; margin-top: 1px;">
  <div class="timeline-item">
    <div class="timeline-item-date" >2013<small style="color: blue;">July</small></div>
    <div class="timeline-item-divider" style="color: blue;"></div>
    <div class="timeline-item-content" style="color: #e21945;">
      <div class="timeline-item-inner">糖糖成立</div>
    </div>
  </div>
  
  
  <div class="timeline-item">
    <div class="timeline-item-date">22 <small style="color: blue;">Sept</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner"style="color: #e21945;">获得 创新工场 和 三诺 联合天使投资</div>
    </div>
  </div>
  
  
  <div class="timeline-item">
    <div class="timeline-item-date">2014 <small style="color: blue;">Feb</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner"style="color: #e21945;">糖糖手机血糖仪+APP 获得国家食品药品监督管理局审批</div>
    </div>
  </div>
  
  
  <div class="timeline-item">
    <div class="timeline-item-date">24 <small style="color: blue;">Apr</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner"style="color: #e21945;">App 上线各应用商店</div>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-item-date">2015<small style="color: blue;">Feb</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner"style="color: #e21945;">完成A轮融资</div>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-item-date">2016 <small style="color: blue;">Otc</small></div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner"style="color: #e21945;">糖糖用户突破200万</div>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-item-date"></div>
    
    <div class="timeline-item-content">
      
    </div>
  </div>
  
  
</div>

      
        
    <!-- 企业简介 -->
     <f7-list style="margin: 0px; text-align: center;font-size: 16px;">
          <f7-list-item title="企业简介" group-title></f7-list-item>          
     </f7-list>
     
     <div style="background: white; margin-top: 0px;">
     	<span>
     	<p style="font-size: 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span  style="font-size: 15px;">糖糖科技有限公司，2013年7月成立于北京，是一家专注于糖尿病管理技术的移动互联网公司。以“APP+设备+服务”模式，依托智能医疗设备、应用软件、健康服务以及基于大数据构建的智能决策支持系统IDSS，致力于为糖尿病患者提供专业的自我管理工具，帮助患者提高自我管理能力和管理意愿，提高血糖达标率、提高生活质量。</span>
     		<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
糖护士致力于利用智能医疗设备和移动互联技术手段，帮助糖尿病人轻松实现简单方便的血糖监测、数据存储、数据分析分享及远程问诊、生活行为习惯及药物提醒和建议、医患和患患社交。主张以移动互联网的社交、娱乐的理念和工具来帮助糖尿病患者改变生活行为习惯。
同时，通过大数据技术，基于海量监测数据，致力于为糖尿病的预防、诊断和治疗提供具有重要医学参考价值的医用数据库，帮助医疗机构和保险公司降低控制并发症发生的费用支出，实现低成本高效率的医疗资源增量。</span>
     	</p>
     	</span>
     	
     </div>    
        
        
        
        
        
        <f7-list-group class="goods-group">
          <f7-list-item title="企业理念" group-title></f7-list-item>
          
          
          
       
       
       

        </f7-list-group>
      </f7-list>
</div>
</template>

<style lang="less">
  @import "../assets/styles/mixins.less";
  .home-view{
    .swiper-container {
      height: 140px;
    }
    .swiper-slide {
      background:#fff;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide span {
      text-align:center;
      display:block;
      margin:20px;
      font-size:21px;
    }
    .timeline-item{
    	
    	
    }
  }
</style>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      timeline: state => state.timeline,
    })
  },
  mounted() {
    this.$nextTick(_ => {
      this.$f7.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        paginationType: 'bullets',
        direction: 'horizontal',
        loop: true,
        autoplay: 1500
      })
    })
  },
  methods: {
    routeToPost(data) {
      this.$f7.mainView.router.load({url: `/post/?mid=${data.id}`})
    }
  },
  components: {
  }
}
</script>