import VueRouter from 'vue-router'
import Vue from 'vue'

//安全管理
import Login from '@/views/security/login/Login';
import AgreementPanel from '@/views/agreement/AgreementPanel';
//
import IndexTabbar from '@/views/index/IndexTabbar'
// 地图
// import MapTab from '@/views/map/MapTab'

import ProjectTab from "@/views/project/ProjectTab";
import ProjectList from "@/views/project/list/ProjectList";
import ProjectDetail from "@/views/project/detail/ProjectDetail";
import DeviceDetail from "@/views/project/detail/DeviceDetail";
import MediaDetail from "@/views/project/detail/MediaDetail";

//视频
import VideoTab from "@/views/video/VideoTab";
//设备
import DeviceTab from "@/views/device/DeviceTab";

// 建筑
// import StructureTab from '@/views/structure/StructureTab';
import StructureDetail from '@/views/structure/detail/StructureDetail';
import VideoItemDetail from '@/views/structure/detail/video/thumb/VideoItemDetail';
import StrainItemDetail from '@/views/structure/detail/strain/thumb/StrainItemDetail';
import HydrostaticItemDetail from '@/views/structure/detail/hydrostatic/thumb/HydrostaticItemDetail';
import ElasticstressItemDetail from '@/views/structure/detail/elasticstress/thumb/ElasticstressItemDetail';
import BeidouItemDetail from '@/views/structure/detail/beidou/thumb/BeidouItemDetail';
import HumitureItemDetail from '@/views/structure/detail/humiture/thumb/HumitureItemDetail';
import AnemoclinographItemDetail from '@/views/structure/detail/anemoclinograph/thumb/AnemoclinographItemDetail';
import InclinometerItemDetail from '@/views/structure/detail/inclinometer/thumb/InclinometerItemDetail';
// 报告
// import ReportTab from '@/views/report/ReportTab';
import ReportDetail from '@/views/report/detail/ReportDetail';

// 预警消息
// import AlarmMessageTab from '@/views/alarm_message/AlarmMessageTab';
import AlarmTab from "@/views/alarm/AlarmTab";

//个人中心
import CenterTab from "@/views/center/CenterTab";
import TaskPanel from '@/views/center/task/TaskPanel';
import MessagePanel from '@/views/center/message/MessagePanel';
import SettingPanel from '@/views/center/setting/SettingPanel';
import InfoEditorPanel from '@/views/center/info_editor/InfoEditorPanel';
import AboutPanel from '@/views/center/setting/AboutPanel';

// 使用VueRouter
Vue.use(VueRouter);
// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: IndexTabbar,
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '',
        redirect: '/project'
      },
      {
        path: '/project',
        component: ProjectTab,
        children: [
          {
            path: '',
            redirect: '/project/list'
          },
          {
            path: '/project/list',
            component: ProjectList
          },
          {
            path: '/project/detail',
            component: ProjectDetail
          },
          {
            path: '/project/device/detail',
            component: DeviceDetail
          },
          {
            path: '/project/media/detail',
            component: MediaDetail
          },
        ]
      },

      {
        path: '/video',
        component: VideoTab
      }, {
        path: '/device',
        component: DeviceTab
      },{
        path: '/alarm',
        component: AlarmTab
      }, {
        path: '/center',
        component: CenterTab
      }]
    // children: [
    //   {
    //     path: '',
    //     redirect: '/map'
    //   }, {
    //     path: '/map',
    //     component: MapTab
    //   }, {
    //     path: '/structure',
    //     component: StructureTab
    //   }, {
    //     path: '/report',
    //     component: ReportTab
    //   }, {
    //     path: '/alarm_message',
    //     component: AlarmMessageTab
    //   }, {
    //     path: '/center',
    //     component: CenterTab
    // }]
  },  {
    path: '/login',
    component: Login
  }, {
    path: '/agreement',
    component: AgreementPanel
  }, {
    path: '/structure/detail',
    component: StructureDetail
  }, {
    path: '/report/detail',
    component: ReportDetail,
  }, {
    path: '/center/task',
    component: TaskPanel
  }, {
    path: '/center/message',
    component: MessagePanel
  }, {
    path: '/center/setting',
    component: SettingPanel
  }, {
    path: '/center/setting/info_editor',
    component: InfoEditorPanel
  }, {
    path: '/center/setting/about',
    component: AboutPanel
  }, {
    path: '/structure/detail/anemoclinograph-item/detail',
    component: AnemoclinographItemDetail
  }, {
    path: '/structure/detail/video-item/detail',
    component: VideoItemDetail
  }, {
    path: '/structure/detail/strain-item/detail',
    component: StrainItemDetail
  }, {
    path: '/structure/detail/hydrostatic-item/detail',
    component: HydrostaticItemDetail
  }, {
    path: '/structure/detail/elasticstress-item/detail',
    component: ElasticstressItemDetail
  }, {
    path: '/structure/detail/beidou-item/detail',
    component: BeidouItemDetail
  }, {
    path: '/structure/detail/humiture-item/detail',
    component: HumitureItemDetail
  }, {
    path: '/structure/detail/inclinometer-item/detail',
    component: InclinometerItemDetail
  }

];
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode: 'hash',
  routes: routes
});

const LOGIN_PATH = '/login'
//路由判断
router.beforeEach((to,from,next)=>{
  //判断是否登录
  const token = window.localStorage.getItem("SESSION_ACCESS_TOKEN"); //存储访问access_token

  console.log('查询token')
  console.log(token);

  if (token || to.path === LOGIN_PATH) {
    console.log('继续访问')
    next();
  } else {
    console.log('没有登录')
    next({
      path: LOGIN_PATH
    });
  }
})

// 暴露接口
export default router;
