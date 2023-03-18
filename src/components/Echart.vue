<template>
  <div class="bbox-ad">
    <div class="title-ad">数据可视化图表</div>
    <div class="b-ad" id="b1-ad"></div>
    <div class="b-ad" id="b2-ad"></div>
    <div class="b-ad" id="recent-ad">
      <div
        style="font-size: 25px; color: #4c4c4c; padding-left: 1%"
        class="el-icon-time"
      >
        最近更新
      </div>
      <div>
        <ul>
          <li
            v-for="(list, index) in list"
            :key="index"
            style="list-style: none"
            class="list-li-ad"
          >
            <div class="ul-ad">
              <router-link to="/bookdetail"
                ><img
                  class="r-img-ad"
                  v-lazy="list.imgFix"
                  :key="list.imgFix"
                  @click="goBook(list)"
              /></router-link>
            </div>
            <router-link to="/bookdetail" class="r-name-ad"
              ><div class="r-name-overflow-ad" @click="goBook(list)">
                {{ list.name }}
              </div></router-link
            >
            <div class="r-author-ad">{{ list.author }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="b-ad" id="b3-ad"></div>
    <div class="b-ad" id="b4-ad"></div>
  </div>
</template>

<script>
import request from "../api/request";
import cheerio from "cheerio";
import * as echarts from "echarts";
import "echarts-wordcloud";
import { useStore } from "@/store/index";
export default {
  name: "echart",
  components: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async ec1() {
      let myChart = echarts.init(document.getElementById("b1-ad"));
      // let count = await request.get('/base/echart/3');
      // let values = [];
      // let names = [];
      //  for (let key of count.data) {
      //   values.push(key.value)
      //   names.push(key.name)
      //  }
      let option = {
        title: {
          text: "图书总标签玫瑰图",
          left: "center",
          color: "#4c4c4c",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          //names下面的几个图标名
          data: [
            "经济管理",
            "科学技术",
            "生活时尚",
            "暂缺分类",
            "文学艺术",
            "教育/教材/教辅",
            "工具书",
            "少儿",
            "古籍/国学",
            "人文社科",
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],
            center: ["25%", "50%"],
            roseType: "radius",
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            //count.data//数组对象
            data: [
              {
                value: 284052,
                name: "经济管理",
              },
              {
                value: 648781,
                name: "科学技术",
              },
              {
                value: 152145,
                name: "生活时尚",
              },
              {
                value: 97382,
                name: "暂缺分类",
              },
              {
                value: 511303,
                name: "文学艺术",
              },
              {
                value: 401370,
                name: "教育/教材/教辅",
              },
              {
                value: 15147,
                name: "工具书",
              },
              {
                value: 118219,
                name: "少儿",
              },
              {
                value: 22063,
                name: "古籍/国学",
              },
              {
                value: 420705,
                name: "人文社科",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
    async ec2() {
      // let row =await request.get('/base/echart/1')
      // let rows = []
      // let column =await request.get('/base/echart/2')
      // let columns = []
      // for (let key of row.data) {
      //   rows.push(key.row)
      // }
      // for (let key of column.data) {
      //   columns.push(((key.coulmn)+',').match(/,/g).length)
      // }
      // console.log(column);
      // console.log(row);
      // console.log(columns);
      // console.log(rows);
      //如果要从数据库获取,line数据为columns,row数据为rows
      //数字经过slice筛选,因为前面日子书太少
      let myChart = echarts.init(document.getElementById("b2-ad"));
      let option = {
        title: {
          text: "图书储量分析",
          textStyle: {
            color: "#4c4c4c", //坐标的字体颜色
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["书籍储量"],
          textStyle: {
            color: "#4c4c4c", //坐标的字体颜色
          },
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {
              show: true,
              readOnly: false,
            },
            magicType: {
              show: true,
              type: ["bar"],
            },
            restore: {
              show: true,
            },
            saveAsImage: {
              show: true,
            },
          },
        },
        calculable: true,
        xAxis: [
          {
            axisLine: {
              lineStyle: {
                color: "white", //坐标轴的颜色
              },
            },
            type: "category",
            //rows
            data: [
              1855, 1876, 1878, 1879, 1880, 1882, 1884, 1888, 1898, 1899, 1900,
              1901, 1905, 1911, 1912, 1913, 1915, 1916, 1919, 1920, 1921, 1922,
              1923, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934,
              1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945,
              1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956,
              1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967,
              1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978,
              1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
              1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
              2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
              2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
              2023,
            ].slice(47, 122),
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "书籍储量",
            min: 0,
            max: 180553,
            interval: 10,
            axisName: {
              textStyle: {
                color: "#4c4c4c", //坐标的字体颜色
              },
              formatter: "{value} ",
            },
            axisLine: {
              lineStyle: {
                color: "#4c4c4c", //坐标轴的颜色
              },
            },
          },
        ],
        color: ["#7cb17b"],
        series: [
          {
            name: "书籍储量",
            type: "bar",
            //columns
            data: [
              1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 27955, 212, 6, 9, 1, 1, 1, 1, 1, 1,
              1, 3, 3, 3, 1, 3, 3, 9, 6, 3, 4, 12, 6, 8, 13, 20, 8, 7, 2, 4, 5,
              3, 4, 6, 9, 14, 23, 319, 1503, 2043, 1364, 1760, 2177, 2815, 3916,
              3628, 5024, 3553, 2272, 1264, 1447, 1886, 1802, 1999, 865, 290,
              257, 342, 1562, 1049, 1954, 2668, 3177, 3707, 3270, 3988, 5661,
              8152, 9684, 10963, 11323, 11098, 11938, 13623, 15786, 18990,
              20958, 17423, 15739, 16295, 19494, 22193, 20881, 21377, 22281,
              25059, 25339, 28832, 34726, 39532, 41169, 28168, 6836, 5204, 6635,
              14281, 97776, 134587, 151199, 162285, 177363, 180553, 173050,
              174348, 160323, 138606, 124074, 113308, 104587, 81284, 54779,
              3115,
            ].slice(47, 122),
          },
        ],
      };
      myChart.setOption(option);
    },
    async ec3() {
      let myChart = echarts.init(document.getElementById("b3-ad"));
      // let count = await request.get('/base/echart/4');
      // console.log(count.data);
      //data1里面count.data即可
      var data1 = [
        {
          value: 2,
          name: "龟兔赛跑",
        },
        {
          value: 2,
          name: "龙文鞭影",
        },
        {
          value: 2,
          name: "黑骏马",
        },
        {
          value: 4,
          name: "黄帝内经",
        },
        {
          value: 2,
          name: "鸡产蛋下降综合征的诊断识别与综合防治",
        },
        {
          value: 6,
          name: "鲁滨逊漂流记",
        },
        {
          value: 2,
          name: "鲁滨孙飘流记",
        },
        {
          value: 2,
          name: "鲁滨孙漂流记",
        },
        {
          value: 2,
          name: "魔科传奇",
        },
        {
          value: 2,
          name: "鬼谷子",
        },
        {
          value: 2,
          name: "高频电子线路",
        },
        {
          value: 2,
          name: "高职体育与健康",
        },
        {
          value: 2,
          name: "高考重点复习教程",
        },
        {
          value: 10,
          name: "高考胜券在握第一轮复习用书",
        },
        {
          value: 5,
          name: "高考真题超详解",
        },
        {
          value: 3,
          name: "高考模拟",
        },
        {
          value: 2,
          name: "高考复习攻略",
        },
        {
          value: 4,
          name: "高考冲刺卷",
        },
        {
          value: 4,
          name: "高考三卷汇编",
        },
        {
          value: 5,
          name: "高级财务会计",
        },
        {
          value: 2,
          name: "高等数学应试模拟（专科起点升本科 2008年全国各类成人高考）",
        },
        {
          value: 3,
          name: "高等数学学习指导",
        },
        {
          value: 2,
          name: "高等数学同步练习册",
        },
        {
          value: 7,
          name: "高等数学（下册）",
        },
        {
          value: 2,
          name: "高等数学（下）",
        },
        {
          value: 4,
          name: "高等数学（上册）",
        },
        {
          value: 2,
          name: "高等数学（上下册）",
        },
        {
          value: 3,
          name: "高等数学（上）",
        },
        {
          value: 2,
          name: "高等数学：理工类",
        },
        {
          value: 2,
          name: "高等数学 下册",
        },
        {
          value: 15,
          name: "高等数学",
        },
        {
          value: 2,
          name: "高等应用数学",
        },
        {
          value: 2,
          name: "高智商的鸟",
        },
        {
          value: 2,
          name: "高效沟通",
        },
        {
          value: 2,
          name: "高中语文基础知识",
        },
        {
          value: 2,
          name: "高中语文（北大绿卡）",
        },
        {
          value: 2,
          name: "高中英语完形填空300篇",
        },
        {
          value: 3,
          name: "高中英语同步词汇",
        },
        {
          value: 2,
          name: "高中物理实验册",
        },
        {
          value: 2,
          name: "高中新课标同步攻略：选修",
        },
        {
          value: 2,
          name: "高中文言文完全解读",
        },
        {
          value: 3,
          name: "高中总复习完全考卷",
        },
        {
          value: 2,
          name: "高中总复习优化设计（A版）",
        },
        {
          value: 2,
          name: "高中必背古诗文+高中英语单词",
        },
        {
          value: 2,
          name: "高中地理（北大绿卡）",
        },
        {
          value: 2,
          name: "高中地理",
        },
        {
          value: 4,
          name: "高中同步测控优化训练（选修）",
        },
        {
          value: 15,
          name: "高中同步测控优化训练（必修）",
        },
        {
          value: 2,
          name: "高中历史大事年表",
        },
        {
          value: 2,
          name: "高中全程学习方略（必修）",
        },
        {
          value: 2,
          name: "高中全程学习方略",
        },
        {
          value: 3,
          name: "高中全程学习夺冠方略（必修）",
        },
        {
          value: 3,
          name: "高中全易通（必修）",
        },
        {
          value: 5,
          name: "骑鹅旅行记",
        },
        {
          value: 5,
          name: "骆驼祥子",
        },
        {
          value: 2,
          name: "骆驼王子",
        },
        {
          value: 4,
          name: "马克思主义哲学原理",
        },
        {
          value: 2,
          name: "馬克白",
        },
        {
          value: 2,
          name: "饭店管理概论",
        },
        {
          value: 2,
          name: "餵故事書長大的孩子",
        },
        {
          value: 2,
          name: "食品营养学",
        },
        {
          value: 2,
          name: "飞鸟集",
        },
        {
          value: 2,
          name: "颜色形状",
        },
        {
          value: 6,
          name: "颜氏家训",
        },
        {
          value: 2,
          name: "预防医学（二）",
        },
        {
          value: 3,
          name: "预防医学",
        },
        {
          value: 2,
          name: "音乐鉴赏",
        },
        {
          value: 4,
          name: "音乐理论练习",
        },
        {
          value: 3,
          name: "音乐",
        },
        {
          value: 2,
          name: "革命故事",
        },
        {
          value: 4,
          name: "非常1+1",
        },
        {
          value: 2,
          name: "静物素描",
        },
        {
          value: 4,
          name: "青鸟",
        },
        {
          value: 4,
          name: "青蛙王子",
        },
        {
          value: 2,
          name: "青花瓷的故事",
        },
        {
          value: 3,
          name: "青春的风采（藏文）",
        },
        {
          value: 18671,
          name: "青春",
        },
        {
          value: 4,
          name: "雾都孤儿",
        },
        {
          value: 6,
          name: "雷锋的故事",
        },
        {
          value: 2,
          name: "零起点大学英语基础教程",
        },
        {
          value: 2,
          name: "雪孩子",
        },
        {
          value: 2,
          name: "離人：太宰治的人生絮語",
        },
        {
          value: 5869,
          name: "集部",
        },
        {
          value: 2,
          name: "雅思名师真题精讲笔记",
        },
        {
          value: 2,
          name: "随堂优化训练（必修）",
        },
        {
          value: 2,
          name: "阿拉丁",
        },
        {
          value: 2,
          name: "阿凡提的故事",
        },
        {
          value: 2,
          name: "阅读理解与完形填空",
        },
        {
          value: 3,
          name: "阅读与作文周计划",
        },
        {
          value: 4,
          name: "闪闪的红星",
        },
        {
          value: 2,
          name: "银行管理（初级）",
        },
        {
          value: 2,
          name: "银行会计学",
        },
        {
          value: 3,
          name: "铅笔头和小铁皮历险记",
        },
        {
          value: 3,
          name: "铁道游击队",
        },
        {
          value: 2,
          name: "铁道概论",
        },
        {
          value: 15,
          name: "钢铁是怎样炼成的",
        },
        {
          value: 2,
          name: "钢结构设计原理",
        },
        {
          value: 2,
          name: "钢结构",
        },
        {
          value: 8,
          name: "钢琴考级作品（汉英对照）",
        },
        {
          value: 2,
          name: "金银岛",
        },
        {
          value: 2,
          name: "金融风险管理",
        },
        {
          value: 3,
          name: "金融统计与分析",
        },
        {
          value: 2,
          name: "金融科技概论",
        },
        {
          value: 2,
          name: "金融市场学",
        },
        {
          value: 4,
          name: "金融学",
        },
        {
          value: 2,
          name: "金牌教练",
        },
        {
          value: 2,
          name: "金牌学案（选修）",
        },
        {
          value: 5,
          name: "金牌学案（必修）",
        },
        {
          value: 2,
          name: "金牌学案 英语八年级下册",
        },
        {
          value: 2,
          name: "金牌学案 英语五年级下册",
        },
        {
          value: 2,
          name: "金牌学案 英语三年级下册",
        },
        {
          value: 13,
          name: "金点·问题导学新课堂",
        },
        {
          value: 2,
          name: "金斧头",
        },
        {
          value: 2,
          name: "金工实习",
        },
        {
          value: 3,
          name: "金属工艺学",
        },
        {
          value: 5,
          name: "金卷1号",
        },
        {
          value: 2,
          name: "量子物理学 下：从时间相关动力学到多体物理和量子混沌",
        },
        {
          value: 2,
          name: "量子物理学 上：从基础到对称性和微扰论",
        },
        {
          value: 2,
          name: "野生动物",
        },
        {
          value: 2,
          name: "野性的呼喚",
        },
        {
          value: 4,
          name: "野性的呼唤",
        },
        {
          value: 2,
          name: "重力选煤",
        },
        {
          value: 2,
          name: "采煤机司机",
        },
        {
          value: 2,
          name: "醒世恒言",
        },
        {
          value: 2,
          name: "郑天翔司法文存",
        },
        {
          value: 2,
          name: "邻居",
        },
        {
          value: 5,
          name: "邓小平的故事（藏文）",
        },
        {
          value: 2,
          name: "邓小平的故事：藏文",
        },
        {
          value: 2,
          name: "邓小平理论和三个代表重要思想概论",
        },
        {
          value: 2,
          name: "遥远的祖先",
        },
        {
          value: 2,
          name: "遠方",
        },
        {
          value: 2,
          name: "道路交通事故处理",
        },
        {
          value: 2,
          name: "道德经",
        },
        {
          value: 7,
          name: "速写",
        },
        {
          value: 3,
          name: "通用规范汉字字典",
        },
        {
          value: 2,
          name: "远大前程",
        },
        {
          value: 2,
          name: "这是我的！",
        },
        {
          value: 2,
          name: "运筹学基础",
        },
        {
          value: 2,
          name: "运筹学",
        },
        {
          value: 4,
          name: "过关冲刺100分",
        },
        {
          value: 2,
          name: "躲貓貓",
        },
        {
          value: 2,
          name: "躲在树上的雨",
        },
        {
          value: 2,
          name: "身為職業小說家",
        },
        {
          value: 2,
          name: "路基工程",
        },
        {
          value: 2,
          name: "跬步集",
        },
        {
          value: 4,
          name: "跨境电子商务",
        },
        {
          value: 2,
          name: "趣味数学",
        },
        {
          value: 2,
          name: "趣味化学（盲文）",
        },
        {
          value: 4,
          name: "超级动植物大乐园",
        },
        {
          value: 2,
          name: "超人家族",
        },
        {
          value: 2,
          name: "赖世雄美语从头学",
        },
        {
          value: 7,
          name: "资治通鉴",
        },
        {
          value: 2,
          name: "资产评估学",
        },
        {
          value: 2,
          name: "贵族之家",
        },
        {
          value: 5,
          name: "财经法规与会计职业道德",
        },
        {
          value: 2,
          name: "财政学",
        },
        {
          value: 2,
          name: "财务管理实务（第二版）",
        },
        {
          value: 12,
          name: "财务管理",
        },
        {
          value: 3,
          name: "财务会计",
        },
        {
          value: 6,
          name: "贞观政要",
        },
        {
          value: 2,
          name: "豌豆公主",
        },
        {
          value: 2,
          name: "谁是最可爱的人",
        },
        {
          value: 2,
          name: "课时练（必修）",
        },
        {
          value: 3,
          name: "课时提优计划",
        },
        {
          value: 2,
          name: "课时学案作业本",
        },
        {
          value: 6,
          name: "课堂过关8分钟",
        },
        {
          value: 6,
          name: "课堂小作业",
        },
        {
          value: 2,
          name: "课堂完全解读",
        },
        {
          value: 22,
          name: "读点经典（盲文）",
        },
        {
          value: 2,
          name: "读写译教程",
        },
        {
          value: 3,
          name: "说文解字",
        },
        {
          value: 2,
          name: "语言社会艺术",
        },
        {
          value: 2,
          name: "语文撞上心理学",
        },
        {
          value: 2,
          name: "语文学习好帮手：智趣多功能学生字典",
        },
        {
          value: 2,
          name: "语文学习好帮手：学生万用成语词典",
        },
        {
          value: 5,
          name: "语文",
        },
        {
          value: 3,
          name: "话说历史的江：图们江（朝鲜文）",
        },
        {
          value: 8,
          name: "诗经",
        },
        {
          value: 2,
          name: "词汇与语法分层突破",
        },
        {
          value: 3,
          name: "诊断学",
        },
        {
          value: 3,
          name: "识字",
        },
        {
          value: 2,
          name: "证据法学",
        },
        {
          value: 2,
          name: "证券投资理论与实务（第三版）",
        },
        {
          value: 2,
          name: "证券投资学（第3版）",
        },
        {
          value: 3,
          name: "证券投资学",
        },
        {
          value: 2,
          name: "设计色彩",
        },
        {
          value: 3,
          name: "设计素描",
        },
        {
          value: 8,
          name: "论语",
        },
        {
          value: 2,
          name: "认识蔬菜",
        },
        {
          value: 2,
          name: "认识昆虫",
        },
        {
          value: 2,
          name: "计算机辅助设计与制造",
        },
        {
          value: 2,
          name: "计算机网络技术",
        },
        {
          value: 3,
          name: "计算机网络基础",
        },
        {
          value: 2,
          name: "计算机组装与维护",
        },
        {
          value: 2,
          name: "计算机组装与维修",
        },
        {
          value: 12,
          name: "计算机文化基础",
        },
        {
          value: 2,
          name: "计算机应用技术基础实验指导",
        },
        {
          value: 2,
          name: "计算机应用基础案例教程",
        },
        {
          value: 8,
          name: "计算机应用基础教程",
        },
        {
          value: 2,
          name: "计算机应用基础实验教程",
        },
        {
          value: 2,
          name: "计算机应用基础实验指导",
        },
        {
          value: 3,
          name: "计算机应用基础实训教程",
        },
        {
          value: 4,
          name: "计算机应用基础实训指导",
        },
        {
          value: 2,
          name: "计算机应用基础学习指导",
        },
        {
          value: 44,
          name: "计算机应用基础",
        },
        {
          value: 198,
          name: "计算机工具书",
        },
        {
          value: 8,
          name: "计算机基础教程",
        },
        {
          value: 2,
          name: "计算机基础",
        },
        {
          value: 137603,
          name: "计算机/网络",
        },
        {
          value: 3,
          name: "論語",
        },
        {
          value: 2,
          name: "說故事的人",
        },
        {
          value: 2,
          name: "說出好聽力",
        },
        {
          value: 2,
          name: "設計師沒告訴你的省錢裝修術",
        },
        {
          value: 2,
          name: "設計師不傳的私房秘技：廚房設計500",
        },
        {
          value: 2,
          name: "設計師不傳的私房秘技：客廳設計500",
        },
        {
          value: 2,
          name: "解不开的谜团",
        },
        {
          value: 2,
          name: "西顿动物故事",
        },
        {
          value: 2,
          name: "西游记（上下）",
        },
        {
          value: 17,
          name: "西游记",
        },
        {
          value: 4,
          name: "西方经济学",
        },
        {
          value: 2,
          name: "装配式建筑概论",
        },
        {
          value: 2,
          name: "行政职业能力测验冲刺预测试卷",
        },
        {
          value: 6,
          name: "行政职业能力测验",
        },
        {
          value: 2,
          name: "行政法与行政诉讼法学",
        },
        {
          value: 3,
          name: "行书",
        },
        {
          value: 2,
          name: "蟬",
        },
        {
          value: 2,
          name: "虫虫世界",
        },
        {
          value: 2,
          name: "藤原克也攝影之道",
        },
        {
          value: 2,
          name: "藏族文学史（藏文）",
        },
        {
          value: 2,
          name: "蒙古民族通史（蒙古文）",
        },
        {
          value: 2,
          name: "葡萄酒品鉴与侍酒服务",
        },
        {
          value: 2,
          name: "落花生",
        },
        {
          value: 2,
          name: "营养与膳食指导",
        },
        {
          value: 2,
          name: "萌翻了，米尼诺. 上月球",
        },
        {
          value: 4,
          name: "菜根谭",
        },
        {
          value: 2,
          name: "菊与刀（增订版）",
        },
        {
          value: 4,
          name: "莫泊桑短篇小说选",
        },
        {
          value: 2,
          name: "荷塘月色",
        },
        {
          value: 2,
          name: "药理学实验教程",
        },
        {
          value: 4,
          name: "药理学",
        },
        {
          value: 3,
          name: "药物制剂技术",
        },
        {
          value: 2,
          name: "药学练习题集",
        },
        {
          value: 3,
          name: "药学精选习题解析",
        },
        {
          value: 3,
          name: "药学模拟试卷",
        },
        {
          value: 4,
          name: "草原的逻辑（蒙古文）",
        },
        {
          value: 3,
          name: "荀子",
        },
        {
          value: 2,
          name: "茶馆",
        },
        {
          value: 6,
          name: "茶花女",
        },
        {
          value: 2,
          name: "茶艺师（基础知识）",
        },
        {
          value: 2,
          name: "英雄少年",
        },
        {
          value: 3,
          name: "英语教师教学用书",
        },
        {
          value: 2,
          name: "英语写作",
        },
        {
          value: 13,
          name: "英语",
        },
        {
          value: 2,
          name: "英汉酒店酒楼餐厅手册",
        },
        {
          value: 2,
          name: "英汉汉英小词典",
        },
        {
          value: 2,
          name: "英汉小词典",
        },
        {
          value: 4,
          name: "苦儿流浪记",
        },
        {
          value: 2,
          name: "花木兰",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：高中英语必修5",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：高中英语必修1",
        },
        {
          value: 3,
          name: "芝麻开花-王后雄状元考案：高中物理必修1",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：高中地理必修1",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：高中历史必修3",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：高中历史必修1",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：八年级英语上",
        },
        {
          value: 3,
          name: "芝麻开花-王后雄状元考案：八年级物理上",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：九年级物理全一册",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：九年级数学上",
        },
        {
          value: 2,
          name: "芝麻开花-王后雄状元考案：七年级数学上",
        },
        {
          value: 2,
          name: "艾青诗集",
        },
        {
          value: 3,
          name: "艺术教师教学用书",
        },
        {
          value: 138,
          name: "艺术工具书",
        },
        {
          value: 2,
          name: "艺术即经验",
        },
        {
          value: 154089,
          name: "艺术",
        },
        {
          value: 5,
          name: "色彩构成",
        },
        {
          value: 13722,
          name: "航空、航天",
        },
        {
          value: 3,
          name: "舞蹈",
        },
        {
          value: 2,
          name: "舆情观察",
        },
        {
          value: 2,
          name: "臺語生活句典",
        },
        {
          value: 81695,
          name: "自然科学",
        },
        {
          value: 2,
          name: "自然",
        },
        {
          value: 50438,
          name: "自我实现/励志",
        },
        {
          value: 2,
          name: "脑筋急转弯",
        },
        {
          value: 2,
          name: "胡桃鉗",
        },
        {
          value: 11,
          name: "胜券在握",
        },
        {
          value: 3,
          name: "背影",
        },
        {
          value: 2,
          name: "肿瘤学",
        },
        {
          value: 35144,
          name: "育儿/成长",
        },
        {
          value: 5,
          name: "聪明宝宝学英语挂图",
        },
        {
          value: 2,
          name: "职业道德与法律",
        },
        {
          value: 2,
          name: "职业生涯规划",
        },
        {
          value: 2,
          name: "聊斋志异（套装共4册）",
        },
        {
          value: 4,
          name: "聊斋志异",
        },
        {
          value: 54154,
          name: "考试",
        },
        {
          value: 2,
          name: "老年护理学",
        },
        {
          value: 3,
          name: "老子",
        },
        {
          value: 11,
          name: "老人与海",
        },
        {
          value: 15275,
          name: "美食",
        },
        {
          value: 5,
          name: "美术教学参考",
        },
        {
          value: 2,
          name: "美术",
        },
        {
          value: 2,
          name: "美德少年",
        },
        {
          value: 2,
          name: "美德",
        },
        {
          value: 4,
          name: "美国8大名案（盲文）",
        },
        {
          value: 4,
          name: "美丽中国",
        },
        {
          value: 3,
          name: "羊脂球",
        },
        {
          value: 3,
          name: "罪與罰",
        },
        {
          value: 2,
          name: "罪与罚",
        },
        {
          value: 3,
          name: "罗密欧与朱丽叶",
        },
        {
          value: 2,
          name: "罗大里故事精选（注音彩绘版）",
        },
        {
          value: 2,
          name: "网页设计与制作教程",
        },
        {
          value: 7,
          name: "绿野仙踪",
        },
        {
          value: 5,
          name: "绿山墙的安妮",
        },
        {
          value: 2,
          name: "绿太阳",
        },
        {
          value: 2710,
          name: "综合读物",
        },
        {
          value: 2,
          name: "综合英语教师用书",
        },
        {
          value: 2,
          name: "综合素质导学练（国家教师资格考试）",
        },
        {
          value: 2,
          name: "综合应用创新题典中典（必修2 新课标配人教版）",
        },
        {
          value: 2,
          name: "绣襦记",
        },
        {
          value: 2,
          name: "统计学基础",
        },
        {
          value: 5,
          name: "统计学原理",
        },
        {
          value: 4,
          name: "统计学",
        },
        {
          value: 2,
          name: "给青年的十二封信",
        },
        {
          value: 1115,
          name: "经部",
        },
        {
          value: 5,
          name: "经纶学典",
        },
        {
          value: 603,
          name: "经管工具书",
        },
        {
          value: 8,
          name: "经济法概论",
        },
        {
          value: 3,
          name: "经济法",
        },
        {
          value: 3,
          name: "经济数学",
        },
        {
          value: 5,
          name: "经济学基础",
        },
        {
          value: 2,
          name: "经济学原理",
        },
        {
          value: 129020,
          name: "经济",
        },
        {
          value: 2,
          name: "经典常谈",
        },
        {
          value: 3,
          name: "组织学与胚胎学",
        },
        {
          value: 2,
          name: "线装藏书馆（套装1-4册）",
        },
        {
          value: 2,
          name: "线装经典",
        },
        {
          value: 3,
          name: "线性代数学习指导",
        },
        {
          value: 2,
          name: "线性代数及其应用",
        },
        {
          value: 3,
          name: "线性代数（第三版）",
        },
        {
          value: 15,
          name: "线性代数",
        },
        {
          value: 3,
          name: "纪念毛主席光辉著作《在延安文艺座谈会上的讲话》发表三十周年",
        },
        {
          value: 2,
          name: "约翰-克利斯朵夫（共四册）",
        },
        {
          value: 2,
          name: "红色少年的故事",
        },
        {
          value: 17,
          name: "红楼梦",
        },
        {
          value: 6,
          name: "红与黑",
        },
        {
          value: 2,
          name: "繁星·春水",
        },
        {
          value: 2,
          name: "綠野仙蹤",
        },
        {
          value: 2,
          name: "經絡養生活用術",
        },
        {
          value: 2777,
          name: "索引/目录",
        },
        {
          value: 2,
          name: "素描头像",
        },
        {
          value: 3,
          name: "素描",
        },
        {
          value: 2,
          name: "素书",
        },
        {
          value: 2,
          name: "紐約的窗景，我的故事",
        },
        {
          value: 2,
          name: "系统解剖学（第2版）",
        },
        {
          value: 2,
          name: "精緻典雅的平面藝術紙雕",
        },
        {
          value: 2,
          name: "精神科护理学",
        },
        {
          value: 2,
          name: "精神病学",
        },
        {
          value: 2,
          name: "篮球",
        },
        {
          value: 2,
          name: "管理沟通",
        },
        {
          value: 2,
          name: "管理数量方法与分析",
        },
        {
          value: 3,
          name: "管理学原理",
        },
        {
          value: 5,
          name: "管理学",
        },
        {
          value: 2,
          name: "管理创新",
        },
        {
          value: 2,
          name: "管理信息系统",
        },
        {
          value: 6,
          name: "管理会计",
        },
        {
          value: 104275,
          name: "管理",
        },
        {
          value: 2,
          name: "管子",
        },
        {
          value: 2,
          name: "简笔画",
        },
        {
          value: 4,
          name: "简爱",
        },
        {
          value: 4,
          name: "简·爱",
        },
        {
          value: 2,
          name: "简-爱",
        },
        {
          value: 3,
          name: "第十二届河南省美术作品展览作品集",
        },
        {
          value: 2,
          name: "第二性",
        },
        {
          value: 2,
          name: "符號 初文與字母：漢字樹",
        },
        {
          value: 4,
          name: "笠翁对韵",
        },
        {
          value: 508,
          name: "童话世界",
        },
        {
          value: 10,
          name: "童年",
        },
        {
          value: 2,
          name: "窗下的树皮小屋",
        },
        {
          value: 5,
          name: "稻草人",
        },
        {
          value: 3,
          name: "税法",
        },
        {
          value: 2,
          name: "税务会计",
        },
        {
          value: 2,
          name: "移动营销",
        },
        {
          value: 2,
          name: "秧歌（新版）",
        },
        {
          value: 5,
          name: "秘密花园",
        },
        {
          value: 13176,
          name: "科普读物",
        },
        {
          value: 12323,
          name: "科普文化",
        },
        {
          value: 1268,
          name: "科技工具书",
        },
        {
          value: 2,
          name: "科学有趣（藏汉对照）",
        },
        {
          value: 2,
          name: "科学家的故事",
        },
        {
          value: 3,
          name: "科学好玩（藏汉对照）",
        },
        {
          value: 2,
          name: "种试验田常识",
        },
        {
          value: 2,
          name: "私募股权投资基金基础知识（新）",
        },
        {
          value: 2,
          name: "禮物",
        },
        {
          value: 4,
          name: "福尔摩斯探案集",
        },
        {
          value: 2,
          name: "神话故事",
        },
        {
          value: 22,
          name: "神话传说",
        },
        {
          value: 2,
          name: "神笔马良",
        },
        {
          value: 2,
          name: "神秘的宇宙",
        },
        {
          value: 5,
          name: "神秘岛",
        },
        {
          value: 2,
          name: "神奇的野生动物",
        },
        {
          value: 2,
          name: "神农尝百草",
        },
        {
          value: 208,
          name: "社科工具书",
        },
        {
          value: 82096,
          name: "社会科学",
        },
        {
          value: 2,
          name: "社会主义核心价值观青少年读本",
        },
        {
          value: 5,
          name: "礼记",
        },
        {
          value: 2,
          name: "礼乐渊薮",
        },
        {
          value: 2,
          name: "石狐",
        },
        {
          value: 2,
          name: "知识产权法",
        },
        {
          value: 2,
          name: "瞬間反射式英文造句力：流利說寫就差這一步",
        },
        {
          value: 3,
          name: "睡美人",
        },
        {
          value: 4,
          name: "睡前故事",
        },
        {
          value: 2,
          name: "真的假的啊？",
        },
        {
          value: 3,
          name: "看图识字",
        },
        {
          value: 2,
          name: "盒仔檔",
        },
        {
          value: 2,
          name: "皮肤性病学",
        },
        {
          value: 2,
          name: "皇帝的新装",
        },
        {
          value: 2,
          name: "皇帝的新衣",
        },
        {
          value: 1330,
          name: "百科全书",
        },
        {
          value: 3,
          name: "百年孤独",
        },
        {
          value: 6,
          name: "百家姓",
        },
        {
          value: 5,
          name: "白雪公主",
        },
        {
          value: 2,
          name: "病理生理学",
        },
        {
          value: 2,
          name: "病理学与病理生理学",
        },
        {
          value: 4,
          name: "病理学",
        },
        {
          value: 2,
          name: "病毒的故事",
        },
        {
          value: 2,
          name: "病原生物学与免疫学",
        },
        {
          value: 2,
          name: "畫出創造力與思考力",
        },
        {
          value: 3,
          name: "电路分析基础",
        },
        {
          value: 2,
          name: "电磁兼容性原理",
        },
        {
          value: 2,
          name: "电气控制技术",
        },
        {
          value: 2,
          name: "电工电子技术基础",
        },
        {
          value: 4,
          name: "电工电子技术",
        },
        {
          value: 2,
          name: "电工技术及应用",
        },
        {
          value: 2,
          name: "电工基础",
        },
        {
          value: 2,
          name: "电子技术基础与技能",
        },
        {
          value: 2,
          name: "电子技术",
        },
        {
          value: 4,
          name: "电子商务概论",
        },
        {
          value: 2,
          name: "电子商务案例分析",
        },
        {
          value: 2,
          name: "电子商务创业",
        },
        {
          value: 2,
          name: "电子之星：池袋西口公园4",
        },
        {
          value: 3,
          name: "电力电子技术",
        },
        {
          value: 6,
          name: "申论",
        },
        {
          value: 5,
          name: "生理学",
        },
        {
          value: 2,
          name: "生物法庭",
        },
        {
          value: 2,
          name: "生物实验册 七年级下册",
        },
        {
          value: 2,
          name: "生物学",
        },
        {
          value: 2,
          name: "生物化学（第2版）",
        },
        {
          value: 5,
          name: "生物化学",
        },
        {
          value: 3,
          name: "生物信息学",
        },
        {
          value: 2,
          name: "生活顾问",
        },
        {
          value: 2,
          name: "生活簡單就是享受",
        },
        {
          value: 14,
          name: "生活知识",
        },
        {
          value: 2,
          name: "生活小窍门",
        },
        {
          value: 11,
          name: "生态文明  美丽湖南",
        },
        {
          value: 4,
          name: "生命中不能承受之轻",
        },
        {
          value: 2,
          name: "生命中不能承受之輕",
        },
        {
          value: 2,
          name: "甜點女王的百變咕咕霍夫：用點心模做出鬆軟綿密的蛋糕與慕斯",
        },
        {
          value: 2,
          name: "瓦工",
        },
        {
          value: 2,
          name: "瓊美卡隨想錄",
        },
        {
          value: 2,
          name: "瑜伽是最好的医药",
        },
        {
          value: 2,
          name: "班长大人",
        },
        {
          value: 2,
          name: "现代篮球战术",
        },
        {
          value: 2,
          name: "现代礼仪",
        },
        {
          value: 2,
          name: "现代汉语小词典",
        },
        {
          value: 2,
          name: "现代汉语",
        },
        {
          value: 4,
          name: "现代教育技术",
        },
        {
          value: 2,
          name: "现代教育信息技术",
        },
        {
          value: 2,
          name: "现代心理学",
        },
        {
          value: 3,
          name: "现代企业管理",
        },
        {
          value: 15604,
          name: "环境科学、安全科学",
        },
        {
          value: 2,
          name: "环境保护概论",
        },
        {
          value: 2,
          name: "环境保护",
        },
        {
          value: 2,
          name: "玩具总动员",
        },
        {
          value: 2,
          name: "王牌兵器",
        },
        {
          value: 3,
          name: "王尔德童话",
        },
        {
          value: 2,
          name: "玉台新咏",
        },
        {
          value: 2,
          name: "猫头鹰",
        },
        {
          value: 2,
          name: "猪疾病防治技术",
        },
        {
          value: 2,
          name: "猎人笔记",
        },
        {
          value: 2,
          name: "猎人海力布",
        },
        {
          value: 2,
          name: "狼王洛波",
        },
        {
          value: 2,
          name: "狼和七只小羊",
        },
        {
          value: 2,
          name: "狮子王",
        },
        {
          value: 3,
          name: "狐狸打猎人",
        },
        {
          value: 2,
          name: "物理法庭",
        },
        {
          value: 4,
          name: "物理实验册",
        },
        {
          value: 3,
          name: "物理化学实验",
        },
        {
          value: 2,
          name: "物理之美：費曼與你談物理",
        },
        {
          value: 3,
          name: "物理",
        },
        {
          value: 2,
          name: "物流管理",
        },
        {
          value: 2,
          name: "物流信息技术与信息系统",
        },
        {
          value: 2,
          name: "牡丹亭",
        },
        {
          value: 2,
          name: "牛虻",
        },
        {
          value: 2,
          name: "父与子全集",
        },
        {
          value: 6,
          name: "父与子",
        },
        {
          value: 12,
          name: "爱的教育",
        },
        {
          value: 4,
          name: "爱丽丝漫游奇境记",
        },
        {
          value: 6,
          name: "爱丽丝漫游奇境",
        },
        {
          value: 2,
          name: "爨龙颜碑",
        },
        {
          value: 2,
          name: "煤矿地质与矿图",
        },
        {
          value: 3,
          name: "点击职业英语",
        },
        {
          value: 2,
          name: "灰色的彼得潘：池袋西口公園6",
        },
        {
          value: 2,
          name: "灰姑娘",
        },
        {
          value: 2,
          name: "激光原理与技术",
        },
        {
          value: 2,
          name: "漫畫孫子兵法上",
        },
        {
          value: 2,
          name: "演讲与口才",
        },
        {
          value: 2,
          name: "湯姆歷險記",
        },
        {
          value: 2,
          name: "湘行散记",
        },
        {
          value: 10056,
          name: "游戏乐园",
        },
        {
          value: 2,
          name: "游乐场",
        },
        {
          value: 2,
          name: "渔夫和金鱼的故事",
        },
        {
          value: 2,
          name: "渔夫和金鱼",
        },
        {
          value: 2,
          name: "混凝土结构平法识图",
        },
        {
          value: 2,
          name: "混凝土结构与砌体结构设计",
        },
        {
          value: 2,
          name: "淮南子",
        },
        {
          value: 2,
          name: "淘气包比比扬历险记",
        },
        {
          value: 2,
          name: "液压与气压传动（第4版）",
        },
        {
          value: 3,
          name: "液压与气压传动",
        },
        {
          value: 3,
          name: "海蒂",
        },
        {
          value: 7,
          name: "海的女儿",
        },
        {
          value: 2,
          name: "海洋（精）",
        },
        {
          value: 13,
          name: "海底两万里",
        },
        {
          value: 4,
          name: "浮士德",
        },
        {
          value: 3,
          name: "浙江省公路里程地图册",
        },
        {
          value: 2,
          name: "洛克王国故事美绘本",
        },
        {
          value: 2,
          name: "洋葱头历险记",
        },
        {
          value: 8,
          name: "泰戈尔诗选",
        },
        {
          value: 2,
          name: "泰戈尔抒情诗选",
        },
        {
          value: 2,
          name: "法律基础概论",
        },
        {
          value: 77899,
          name: "法律",
        },
        {
          value: 3,
          name: "法国革命史",
        },
        {
          value: 2,
          name: "法兴寺宋塑十二菩萨",
        },
        {
          value: 2,
          name: "汽车电工电子技术",
        },
        {
          value: 2,
          name: "汽车机械识图（共2册第2版）",
        },
        {
          value: 2,
          name: "汽车机械基础（第2版）",
        },
        {
          value: 3,
          name: "汽车机械基础",
        },
        {
          value: 2,
          name: "汽车机械制图",
        },
        {
          value: 2,
          name: "汽车文化",
        },
        {
          value: 2,
          name: "汽车底盘构造与维修",
        },
        {
          value: 3,
          name: "汽车市场营销",
        },
        {
          value: 2,
          name: "汽车发动机构造与维修",
        },
        {
          value: 2,
          name: "汤姆索亚历险记",
        },
        {
          value: 3,
          name: "汤姆叔叔的小屋",
        },
        {
          value: 2,
          name: "汤姆历险记",
        },
        {
          value: 3,
          name: "汤姆·索亚历险记",
        },
        {
          value: 4,
          name: "汤姆-索亚历险记",
        },
        {
          value: 2,
          name: "池袋西口公園",
        },
        {
          value: 4,
          name: "江苏高考深度复习",
        },
        {
          value: 5,
          name: "汉语拼音",
        },
        {
          value: 2,
          name: "汉语成语词典",
        },
        {
          value: 2,
          name: "汉语成语小词典",
        },
        {
          value: 852,
          name: "汉语工具书",
        },
        {
          value: 2,
          name: "汉译世界学术名著丛书",
        },
        {
          value: 3,
          name: "汉字描红",
        },
        {
          value: 2,
          name: "水滸傳",
        },
        {
          value: 3,
          name: "水浒传（上下）",
        },
        {
          value: 16,
          name: "水浒传",
        },
        {
          value: 5,
          name: "水果蔬菜",
        },
        {
          value: 2,
          name: "水彩、水粉",
        },
        {
          value: 2,
          name: "水工设计手册",
        },
        {
          value: 3,
          name: "水孩子",
        },
        {
          value: 2,
          name: "水墨宝宝成长奇遇绘本：小萝卜浇浇",
        },
        {
          value: 3,
          name: "气球上的五星期",
        },
        {
          value: 3,
          name: "民法",
        },
        {
          value: 2,
          name: "民国时期西南边疆档案资料汇编",
        },
        {
          value: 2,
          name: "毛泽东的故事（藏文）",
        },
        {
          value: 2,
          name: "每秒的永恆：達人私傳的風景攝影筆記",
        },
        {
          value: 2,
          name: "每天进步一点点",
        },
        {
          value: 2,
          name: "每个人的进化",
        },
        {
          value: 2,
          name: "欧卡装饰地图",
        },
        {
          value: 2,
          name: "欧也妮·葛朗台",
        },
        {
          value: 3,
          name: "欧也妮-葛朗台 高老头",
        },
        {
          value: 2,
          name: "欧也妮-葛朗台",
        },
        {
          value: 2,
          name: "欧也妮 葛朗台",
        },
        {
          value: 2,
          name: "欧·亨利短篇小说精选",
        },
        {
          value: 5,
          name: "模拟电子技术基础",
        },
        {
          value: 3,
          name: "模拟电子技术",
        },
        {
          value: 2,
          name: "模块化研究：现代标准化前沿",
        },
        {
          value: 2,
          name: "概率论与数理统计（第2版）",
        },
        {
          value: 11,
          name: "概率论与数理统计",
        },
        {
          value: 2,
          name: "概率论",
        },
        {
          value: 3,
          name: "楚辞",
        },
        {
          value: 2,
          name: "植物王国",
        },
        {
          value: 2,
          name: "森林报：冬",
        },
        {
          value: 2,
          name: "森林报 春",
        },
        {
          value: 2,
          name: "森林报 夏",
        },
        {
          value: 2,
          name: "森林报",
        },
        {
          value: 3,
          name: "梦溪笔谈",
        },
        {
          value: 2,
          name: "桃花扇",
        },
        {
          value: 3,
          name: "格言联璧",
        },
        {
          value: 2,
          name: "格林童话精选",
        },
        {
          value: 3,
          name: "格林童话全集",
        },
        {
          value: 2,
          name: "格林童话（精）",
        },
        {
          value: 14,
          name: "格林童话",
        },
        {
          value: 15,
          name: "格列佛游记",
        },
        {
          value: 4,
          name: "格兰特船长的儿女",
        },
        {
          value: 951,
          name: "标准规范",
        },
        {
          value: 10,
          name: "柳林风声",
        },
        {
          value: 3,
          name: "柳公权玄秘塔碑",
        },
        {
          value: 2,
          name: "果醬女王",
        },
        {
          value: 4,
          name: "林元春小说选集（朝鲜文）",
        },
        {
          value: 2,
          name: "极地阅读",
        },
        {
          value: 4,
          name: "极地大冒险",
        },
        {
          value: 2,
          name: "杨家将",
        },
        {
          value: 3,
          name: "材料力学",
        },
        {
          value: 2,
          name: "李爾王",
        },
        {
          value: 2,
          name: "机械设计基础（第四版）",
        },
        {
          value: 7,
          name: "机械设计基础",
        },
        {
          value: 2,
          name: "机械工程控制基础",
        },
        {
          value: 4,
          name: "机械基础",
        },
        {
          value: 2,
          name: "机械原理",
        },
        {
          value: 2,
          name: "机械制图习题集（第2版）",
        },
        {
          value: 3,
          name: "机械制图习题集",
        },
        {
          value: 2,
          name: "机械制图与计算机绘图",
        },
        {
          value: 2,
          name: "机械制图（非机类）",
        },
        {
          value: 7,
          name: "机械制图",
        },
        {
          value: 2,
          name: "机务常识",
        },
        {
          value: 2,
          name: "朱自清散文精选",
        },
        {
          value: 2,
          name: "朱德的故事（藏文）",
        },
        {
          value: 3,
          name: "朱子读书法",
        },
        {
          value: 2,
          name: "朱丹溪医学全书",
        },
        {
          value: 3,
          name: "未知秘密大破译",
        },
        {
          value: 13,
          name: "木偶奇遇记",
        },
        {
          value: 7,
          name: "期末冲刺夺100分突破卷",
        },
        {
          value: 2,
          name: "朝花夕拾·呐喊",
        },
        {
          value: 6,
          name: "朝花夕拾",
        },
        {
          value: 3,
          name: "有机化学实验",
        },
        {
          value: 4,
          name: "有机化学",
        },
        {
          value: 2,
          name: "月光下的肚肚狼",
        },
        {
          value: 2,
          name: "月亮與六便士",
        },
        {
          value: 2,
          name: "最糟也最棒的書店",
        },
        {
          value: 2,
          name: "最精彩的探案故事全集（朝鲜文）",
        },
        {
          value: 2,
          name: "最童话",
        },
        {
          value: 2,
          name: "最新通俗美语词典",
        },
        {
          value: 2,
          name: "最好的時光",
        },
        {
          value: 3,
          name: "曾国藩家书",
        },
        {
          value: 2,
          name: "暴風雨",
        },
        {
          value: 4,
          name: "智能学习卡",
        },
        {
          value: 2,
          name: "智圆行方",
        },
        {
          value: 2,
          name: "智囊（套装共4卷）",
        },
        {
          value: 3,
          name: "景观设计",
        },
        {
          value: 2,
          name: "景璧集",
        },
        {
          value: 2,
          name: "普通高中课程标准实验教科书配套教学资源阅读训练（必修）",
        },
        {
          value: 2,
          name: "普通高中课程标准实验教科书：思想政治选修3 国家和国际组织常识（教师教学用书）",
        },
        {
          value: 3,
          name: "普通话教程",
        },
        {
          value: 3,
          name: "普希金诗选",
        },
        {
          value: 2,
          name: "晏子春秋",
        },
        {
          value: 2,
          name: "晋祠圣母殿宋塑",
        },
        {
          value: 2,
          name: "時間的故事",
        },
        {
          value: 2,
          name: "星空",
        },
        {
          value: 2,
          name: "星之声",
        },
        {
          value: 2,
          name: "易经的智慧",
        },
        {
          value: 16,
          name: "昆虫记",
        },
        {
          value: 2,
          name: "时间机器",
        },
        {
          value: 2,
          name: "时代楷模",
        },
        {
          value: 2,
          name: "早期阅读：小班上（共2册）",
        },
        {
          value: 2,
          name: "早期阅读：中班上（共2册）",
        },
        {
          value: 2,
          name: "日日便當手帖：由217道日常美味，進化的83款便當提案",
        },
        {
          value: 3,
          name: "无机化学实验",
        },
        {
          value: 2,
          name: "无敌高考数学@总复习",
        },
        {
          value: 6,
          name: "无敌高中要点双拼",
        },
        {
          value: 2,
          name: "无图拼音",
        },
        {
          value: 2,
          name: "无名的裘德",
        },
        {
          value: 2,
          name: "旅行社经营管理",
        },
        {
          value: 5,
          name: "旅游心理学",
        },
        {
          value: 2,
          name: "旅游市场营销",
        },
        {
          value: 22600,
          name: "旅游",
        },
        {
          value: 2,
          name: "方框視界：風景攝影",
        },
        {
          value: 2,
          name: "新课标数学天天练口算",
        },
        {
          value: 2,
          name: "新课标怎么教：语文",
        },
        {
          value: 2,
          name: "新课标怎么教：数学",
        },
        {
          value: 2,
          name: "新课标名师大课堂：高中生物",
        },
        {
          value: 2,
          name: "新课标单元测试卷",
        },
        {
          value: 2,
          name: "新课标·小学生英汉词典（彩色版）",
        },
        {
          value: 2,
          name: "新譯老子讀本",
        },
        {
          value: 2,
          name: "新视角高职高专英语综合教程",
        },
        {
          value: 2,
          name: "新英汉学习大词典（第2版）",
        },
        {
          value: 2,
          name: "新英汉大词典（第2版）",
        },
        {
          value: 2,
          name: "新英汉多功能大词典（第2版）",
        },
        {
          value: 2,
          name: "新聞中的公民與社會",
        },
        {
          value: 2,
          name: "新职业英语",
        },
        {
          value: 2,
          name: "新编应用写作",
        },
        {
          value: 2,
          name: "新编小学生全功能字典",
        },
        {
          value: 2,
          name: "新编学生汉语词典",
        },
        {
          value: 2,
          name: "新编学生字典",
        },
        {
          value: 2,
          name: "新编一千零一夜",
        },
        {
          value: 2,
          name: "新知识词典",
        },
        {
          value: 2,
          name: "新时代交互英语",
        },
        {
          value: 10,
          name: "新教材完全解读",
        },
        {
          value: 4,
          name: "新教材完全考卷",
        },
        {
          value: 7,
          name: "新教材全练",
        },
        {
          value: 2,
          name: "新快乐英语",
        },
        {
          value: 2,
          name: "新型机械化采掘装备及工艺创新与实践",
        },
        {
          value: 2,
          name: "新世纪小学英语",
        },
        {
          value: 2,
          name: "新·英汉多功能词典",
        },
        {
          value: 2,
          name: "新·学生实用英汉词典",
        },
        {
          value: 4,
          name: "文艺学习资料",
        },
        {
          value: 2,
          name: "文艺复兴",
        },
        {
          value: 2,
          name: "文艺创作学习资料",
        },
        {
          value: 2,
          name: "文心雕龙",
        },
        {
          value: 13,
          name: "文学工具书",
        },
        {
          value: 44730,
          name: "文学天地",
        },
        {
          value: 175248,
          name: "文学",
        },
        {
          value: 29091,
          name: "文化",
        },
        {
          value: 3,
          name: "数控加工技术",
        },
        {
          value: 2,
          name: "数据库技术及应用",
        },
        {
          value: 2,
          name: "数据库技术与应用",
        },
        {
          value: 2,
          name: "数据库原理与应用",
        },
        {
          value: 4,
          name: "数学教师教学用书",
        },
        {
          value: 2,
          name: "数学应试模拟（高中起点升本专科 2008年全国各类成人高考）",
        },
        {
          value: 6,
          name: "数学",
        },
        {
          value: 4,
          name: "数字电子技术基础",
        },
        {
          value: 3,
          name: "数字信号处理",
        },
        {
          value: 2,
          name: "数列与不等式",
        },
        {
          value: 127075,
          name: "教辅",
        },
        {
          value: 2,
          name: "教育示范剧：基训 剧本 表演",
        },
        {
          value: 3,
          name: "教育学原理",
        },
        {
          value: 5,
          name: "教育学",
        },
        {
          value: 32033,
          name: "教育",
        },
        {
          value: 4,
          name: "教材解读",
        },
        {
          value: 2,
          name: "教材快线（必修）",
        },
        {
          value: 2,
          name: "教材快线 化学九年级上册",
        },
        {
          value: 8,
          name: "教材快线",
        },
        {
          value: 2,
          name: "教材微解读：高中数学",
        },
        {
          value: 9,
          name: "教材全析",
        },
        {
          value: 79934,
          name: "教材",
        },
        {
          value: 2,
          name: "教师语言",
        },
        {
          value: 2,
          name: "教师职业道德与专业发展",
        },
        {
          value: 2,
          name: "教师专业发展",
        },
        {
          value: 2,
          name: "教出好兒子",
        },
        {
          value: 2,
          name: "教你讀懂文學的27堂課",
        },
        {
          value: 2,
          name: "政治经济学概论",
        },
        {
          value: 2,
          name: "政治经济学原理",
        },
        {
          value: 2,
          name: "政治经济学",
        },
        {
          value: 2,
          name: "政治学概论",
        },
        {
          value: 2,
          name: "政治学",
        },
        {
          value: 60949,
          name: "政治",
        },
        {
          value: 2,
          name: "政府与非营利组织会计",
        },
        {
          value: 2,
          name: "攝影達人全能養成術：從器材到技巧，一本搞定",
        },
        {
          value: 2,
          name: "擁抱",
        },
        {
          value: 3,
          name: "搜神记",
        },
        {
          value: 2,
          name: "插畫最前線",
        },
        {
          value: 7,
          name: "提升训练",
        },
        {
          value: 2,
          name: "探究导学",
        },
        {
          value: 2,
          name: "捣蛋鬼日记",
        },
        {
          value: 2,
          name: "捕捉精彩瞬間的拍照技巧",
        },
        {
          value: 2,
          name: "按摩",
        },
        {
          value: 2,
          name: "挂枝儿 山歌",
        },
        {
          value: 4,
          name: "拼音描红",
        },
        {
          value: 3,
          name: "拼音",
        },
        {
          value: 2,
          name: "拖拉机",
        },
        {
          value: 6,
          name: "拇指姑娘",
        },
        {
          value: 2,
          name: "护理礼仪",
        },
        {
          value: 2,
          name: "护理心理学",
        },
        {
          value: 3,
          name: "护理学练习题集",
        },
        {
          value: 3,
          name: "护理学精选习题解析",
        },
        {
          value: 3,
          name: "护理学模拟试卷",
        },
        {
          value: 3,
          name: "护理学应试考题精练及全真模拟",
        },
        {
          value: 2,
          name: "护理学基础",
        },
        {
          value: 2,
          name: "投资学",
        },
        {
          value: 2,
          name: "技术经济学",
        },
        {
          value: 2,
          name: "打造HTML5+CSS3網頁設計法則：jQuery行動加碼",
        },
        {
          value: 5136,
          name: "才艺课堂",
        },
        {
          value: 3,
          name: "房間",
        },
        {
          value: 2,
          name: "戰爭與和平（下）",
        },
        {
          value: 2,
          name: "戰爭與和平（上）",
        },
        {
          value: 2,
          name: "战国策",
        },
        {
          value: 2,
          name: "我與DSLR的生活日記簿",
        },
        {
          value: 2,
          name: "我看我攝我征服：國民鏡也能拍出好相片",
        },
        {
          value: 2,
          name: "我的身体",
        },
        {
          value: 2,
          name: "我的水彩繪本",
        },
        {
          value: 2,
          name: "我的大学",
        },
        {
          value: 2,
          name: "我的中国梦",
        },
        {
          value: 2,
          name: "我的中国我的梦",
        },
        {
          value: 3,
          name: "我爱玩贴纸",
        },
        {
          value: 2,
          name: "我爱我家",
        },
        {
          value: 2,
          name: "我是你流浪过的一个地方",
        },
        {
          value: 2,
          name: "我妹妹",
        },
        {
          value: 2,
          name: "我会看时间",
        },
        {
          value: 2,
          name: "我们的母亲叫中国",
        },
        {
          value: 2,
          name: "成语故事（彩绘注音版）",
        },
        {
          value: 3,
          name: "成语故事",
        },
        {
          value: 2,
          name: "成本核算与管理",
        },
        {
          value: 2,
          name: "成本会计学",
        },
        {
          value: 2,
          name: "成本会计（第5版）",
        },
        {
          value: 7,
          name: "成本会计",
        },
        {
          value: 2,
          name: "成功天书",
        },
        {
          value: 2,
          name: "戀愛副本魔法插班生04",
        },
        {
          value: 2,
          name: "愉快的書法：進入書法的24個練習",
        },
        {
          value: 2,
          name: "情緒分子的奇幻世界",
        },
        {
          value: 2,
          name: "情景导学 英语四年级上册",
        },
        {
          value: 2,
          name: "情景导学 英语三年级上册",
        },
        {
          value: 2,
          name: "悲惨世界",
        },
        {
          value: 2,
          name: "恐龙新发现",
        },
        {
          value: 2,
          name: "恐龙世界",
        },
        {
          value: 4,
          name: "恐龙",
        },
        {
          value: 2,
          name: "性心理学",
        },
        {
          value: 2,
          name: "思想道德修养",
        },
        {
          value: 2,
          name: "思想品德新课程教学设计精选",
        },
        {
          value: 2,
          name: "快速阅读",
        },
        {
          value: 6,
          name: "快速提升儿童IQ的大脑训练101题",
        },
        {
          value: 2,
          name: "快乐英语",
        },
        {
          value: 2,
          name: "快乐生活一点通（朝鲜文）",
        },
        {
          value: 2,
          name: "快乐王子",
        },
        {
          value: 2,
          name: "快乐旅程",
        },
        {
          value: 3,
          name: "忏悔录",
        },
        {
          value: 2,
          name: "心语",
        },
        {
          value: 3,
          name: "心理学",
        },
        {
          value: 2,
          name: "心理健康教育",
        },
        {
          value: 2,
          name: "德伯家的苔丝",
        },
        {
          value: 2,
          name: "微观经济学",
        },
        {
          value: 2,
          name: "微笑的瞬間：人像攝影實戰寶典",
        },
        {
          value: 2,
          name: "微生物学与免疫学基础",
        },
        {
          value: 2,
          name: "微型计算机原理及应用",
        },
        {
          value: 2,
          name: "徬徨少年時",
        },
        {
          value: 2,
          name: "復活",
        },
        {
          value: 2,
          name: "御制耕织图（影印本）",
        },
        {
          value: 2,
          name: "御制耕织图",
        },
        {
          value: 2,
          name: "從黎明到衰頹：五百年來的西方文化生活",
        },
        {
          value: 3,
          name: "徐霞客游记",
        },
        {
          value: 2,
          name: "彼得兔的故事",
        },
        {
          value: 3,
          name: "彷徨",
        },
        {
          value: 2,
          name: "彩色圖解中學生必懂英語文法",
        },
        {
          value: 3,
          name: "形势与政策",
        },
        {
          value: 2,
          name: "当代大学体育教程",
        },
        {
          value: 6,
          name: "当代中青年书法家创作档案",
        },
        {
          value: 2,
          name: "張步桃解讀傷寒論：方劑篇",
        },
        {
          value: 2,
          name: "张宇高等数学18讲",
        },
        {
          value: 2,
          name: "张宇线性代数9讲",
        },
        {
          value: 2,
          name: "张宇概率论与数理统计9讲",
        },
        {
          value: 10,
          name: "弟子规",
        },
        {
          value: 3,
          name: "引人入胜的探险故事（朝鲜文）",
        },
        {
          value: 7,
          name: "开卷8分钟",
        },
        {
          value: 2,
          name: "建设法规",
        },
        {
          value: 4,
          name: "建设工程项目管理",
        },
        {
          value: 2,
          name: "建设工程经济",
        },
        {
          value: 3,
          name: "建设工程法规及相关知识",
        },
        {
          value: 2,
          name: "建筑设备工程",
        },
        {
          value: 3,
          name: "建筑结构",
        },
        {
          value: 2,
          name: "建筑的故事",
        },
        {
          value: 2,
          name: "建筑材料与检测",
        },
        {
          value: 2,
          name: "建筑施工技术",
        },
        {
          value: 2,
          name: "建筑工程测量",
        },
        {
          value: 3,
          name: "建筑力学",
        },
        {
          value: 2,
          name: "康乐之友",
        },
        {
          value: 2,
          name: "应用文写作教程",
        },
        {
          value: 5,
          name: "应用文写作",
        },
        {
          value: 2,
          name: "应用数学基础",
        },
        {
          value: 3,
          name: "应用数学",
        },
        {
          value: 2,
          name: "应用写作",
        },
        {
          value: 2,
          name: "庄子选译",
        },
        {
          value: 7,
          name: "庄子",
        },
        {
          value: 2,
          name: "广告设计",
        },
        {
          value: 2,
          name: "广东英语阅读理解分层突破",
        },
        {
          value: 2,
          name: "广东英语语法填空与完形填空分层突破",
        },
        {
          value: 2,
          name: "广东英语词汇与语法分层突破",
        },
        {
          value: 2,
          name: "广东英语完形填空与阅读理解分层突破",
        },
        {
          value: 2,
          name: "广东学导练（全一册）",
        },
        {
          value: 3,
          name: "广东名师伴我学（选修）",
        },
        {
          value: 5,
          name: "广东名师伴我学（必修）",
        },
        {
          value: 2,
          name: "广东初中总复习优化设计",
        },
        {
          value: 2,
          name: "幼小衔接紧密课程：语言2",
        },
        {
          value: 2,
          name: "幼小衔接紧密课程：拼音2",
        },
        {
          value: 2,
          name: "幼学琼林",
        },
        {
          value: 3,
          name: "幼儿识字阶梯训练",
        },
        {
          value: 6,
          name: "幼儿神奇贴纸",
        },
        {
          value: 2,
          name: "幼儿学话启蒙读物",
        },
        {
          value: 2,
          name: "幼儿园领域课程资源",
        },
        {
          value: 2,
          name: "幼儿园课程",
        },
        {
          value: 2,
          name: "幼儿园探究式活动课程（教师用书 小班上）",
        },
        {
          value: 3,
          name: "幼儿启蒙练习本（共3册）",
        },
        {
          value: 807,
          name: "年鉴年刊",
        },
        {
          value: 4,
          name: "平面构成",
        },
        {
          value: 3,
          name: "帮你学数学练习册（盲文）",
        },
        {
          value: 3,
          name: "帮你学数学口算练习册（盲文）",
        },
        {
          value: 2,
          name: "希腊神话故事",
        },
        {
          value: 3,
          name: "希腊神话",
        },
        {
          value: 2,
          name: "市民科普丛书（共5册）",
        },
        {
          value: 6,
          name: "市场调查与预测",
        },
        {
          value: 2,
          name: "市场营销策划",
        },
        {
          value: 2,
          name: "市场营销实务",
        },
        {
          value: 7,
          name: "市场营销学",
        },
        {
          value: 4,
          name: "市场营销",
        },
        {
          value: 9,
          name: "巴黎圣母院",
        },
        {
          value: 2,
          name: "巴朗行业词典（汉、英）",
        },
        {
          value: 2,
          name: "巴啦啦小魔仙百变拼描",
        },
        {
          value: 2,
          name: "巨人的花园",
        },
        {
          value: 2,
          name: "巧克力CHOCOLATE",
        },
        {
          value: 2,
          name: "左传",
        },
        {
          value: 4,
          name: "工程造价管理",
        },
        {
          value: 2,
          name: "工程财务管理",
        },
        {
          value: 2,
          name: "工程测量",
        },
        {
          value: 5,
          name: "工程流体力学",
        },
        {
          value: 2,
          name: "工程材料与热处理",
        },
        {
          value: 2,
          name: "工程数学",
        },
        {
          value: 2,
          name: "工程建设法规",
        },
        {
          value: 7,
          name: "工程力学",
        },
        {
          value: 2,
          name: "工程制图习题集（第2版）",
        },
        {
          value: 5,
          name: "工程制图习题集",
        },
        {
          value: 5,
          name: "工程制图",
        },
        {
          value: 4,
          name: "工业机器人操作与编程",
        },
        {
          value: 214328,
          name: "工业技术",
        },
        {
          value: 3,
          name: "巅峰训练",
        },
        {
          value: 2,
          name: "崇庆寺宋塑十八罗汉",
        },
        {
          value: 3,
          name: "岳飞传",
        },
        {
          value: 2,
          name: "山西省地图（最新版）",
        },
        {
          value: 6,
          name: "山海经",
        },
        {
          value: 3,
          name: "居里夫人自传",
        },
        {
          value: 2,
          name: "屁屁超人",
        },
        {
          value: 7,
          name: "尼尔斯骑鹅旅行记",
        },
        {
          value: 2,
          name: "尤利西斯（下）",
        },
        {
          value: 2,
          name: "尤利西斯（上）",
        },
        {
          value: 4,
          name: "尚书",
        },
        {
          value: 13,
          name: "尖子生学案",
        },
        {
          value: 2,
          name: "少林寺第八銅人 卷十三：大明之死",
        },
        {
          value: 2,
          name: "少林寺第八銅人 卷九：末路英雄",
        },
        {
          value: 2,
          name: "少年维特的烦恼",
        },
        {
          value: 2,
          name: "少年维特之烦恼",
        },
        {
          value: 2,
          name: "少年維特的煩惱",
        },
        {
          value: 3,
          name: "小鹿斑比",
        },
        {
          value: 98181,
          name: "小说",
        },
        {
          value: 2,
          name: "小蝌蚪找妈妈",
        },
        {
          value: 2,
          name: "小英雄雨来",
        },
        {
          value: 4,
          name: "小红帽",
        },
        {
          value: 3,
          name: "小窗幽记",
        },
        {
          value: 16,
          name: "小王子",
        },
        {
          value: 3,
          name: "小熊维尼",
        },
        {
          value: 2,
          name: "小橘灯",
        },
        {
          value: 5,
          name: "小故事大道理",
        },
        {
          value: 2,
          name: "小布头奇遇记",
        },
        {
          value: 5,
          name: "小小车故事",
        },
        {
          value: 2,
          name: "小小莫扎特操作包",
        },
        {
          value: 4,
          name: "小宝贝学画",
        },
        {
          value: 2,
          name: "小学语文新课标必读丛书（名师审阅版）",
        },
        {
          value: 2,
          name: "小学语文",
        },
        {
          value: 5,
          name: "小学生阅读与写作高效训练",
        },
        {
          value: 2,
          name: "小学生近义词反义词词典（彩绘版）",
        },
        {
          value: 2,
          name: "小学生词典（单色插图本）",
        },
        {
          value: 2,
          name: "小学生获奖作文大全",
        },
        {
          value: 2,
          name: "小学生英语示范作文",
        },
        {
          value: 2,
          name: "小学生英汉词典（彩绘版）",
        },
        {
          value: 2,
          name: "小学生考场作文大全",
        },
        {
          value: 3,
          name: "小学生满分作文",
        },
        {
          value: 4,
          name: "小学生毛笔书法课",
        },
        {
          value: 2,
          name: "小学生数学词典（彩绘版）",
        },
        {
          value: 2,
          name: "小学生成语词典（彩绘版）",
        },
        {
          value: 2,
          name: "小学生成语词典",
        },
        {
          value: 2,
          name: "小学生必背古诗词80首",
        },
        {
          value: 2,
          name: "小学生必背古诗词",
        },
        {
          value: 2,
          name: "小学生多功能词语词典",
        },
        {
          value: 2,
          name: "小学生多功能词典（彩绘版）",
        },
        {
          value: 2,
          name: "小学生多功能英汉词典（彩色版）",
        },
        {
          value: 3,
          name: "小学生同步毛笔字帖",
        },
        {
          value: 6,
          name: "小学生同步写字课",
        },
        {
          value: 2,
          name: "小学生同义词近义词反义词多音多义字词典（双色版）",
        },
        {
          value: 2,
          name: "小学生创新作文",
        },
        {
          value: 2,
          name: "小学生分类作文大全",
        },
        {
          value: 3,
          name: "小学生全功能字典",
        },
        {
          value: 2,
          name: "小学生作文起步",
        },
        {
          value: 2,
          name: "小学生优秀作文一本通",
        },
        {
          value: 3,
          name: "小学生优秀作文",
        },
        {
          value: 2,
          name: "小学数学",
        },
        {
          value: 5,
          name: "小学教材完全解读",
        },
        {
          value: 5,
          name: "小学教材完全考卷",
        },
        {
          value: 2,
          name: "小坡的生日",
        },
        {
          value: 2,
          name: "小兔乖乖",
        },
        {
          value: 2,
          name: "導演功課",
        },
        {
          value: 3,
          name: "封神演义",
        },
        {
          value: 2,
          name: "封建论",
        },
        {
          value: 3,
          name: "导游实务",
        },
        {
          value: 2,
          name: "导游业务",
        },
        {
          value: 2,
          name: "导学全程练",
        },
        {
          value: 173,
          name: "寓言幽默",
        },
        {
          value: 3,
          name: "寓言300则（朝鲜文）",
        },
        {
          value: 2,
          name: "寒山子诗集",
        },
        {
          value: 2,
          name: "寂静的春天",
        },
        {
          value: 2,
          name: "容斋随笔",
        },
        {
          value: 2,
          name: "家庭医学大百科（朝鲜文）",
        },
        {
          value: 12561,
          name: "家居",
        },
        {
          value: 2,
          name: "室内设计原理",
        },
        {
          value: 2,
          name: "室内设计",
        },
        {
          value: 3,
          name: "审计学",
        },
        {
          value: 2,
          name: "审计",
        },
        {
          value: 2,
          name: "实验寄生虫学",
        },
        {
          value: 2,
          name: "实用经济法",
        },
        {
          value: 2,
          name: "实用组网技术",
        },
        {
          value: 2,
          name: "宝钢文化经典故事",
        },
        {
          value: 3,
          name: "宝宝猜谜语",
        },
        {
          value: 2,
          name: "宝宝全脑开发书",
        },
        {
          value: 13357,
          name: "宗教",
        },
        {
          value: 2,
          name: "宏观经济学",
        },
        {
          value: 2,
          name: "完形填空与阅读理解分层突破",
        },
        {
          value: 5,
          name: "宋词三百首",
        },
        {
          value: 2,
          name: "宋词",
        },
        {
          value: 5,
          name: "安徒生童话精选",
        },
        {
          value: 19,
          name: "安徒生童话",
        },
        {
          value: 2,
          name: "安徒生童話選",
        },
        {
          value: 2,
          name: "安娜-卡列尼娜",
        },
        {
          value: 3,
          name: "安妮日记",
        },
        {
          value: 3,
          name: "安全教育",
        },
        {
          value: 2,
          name: "守望",
        },
        {
          value: 2,
          name: "宇宙超人",
        },
        {
          value: 2,
          name: "孫子兵法",
        },
        {
          value: 3,
          name: "学科教学论",
        },
        {
          value: 2,
          name: "学生英汉详解词典",
        },
        {
          value: 2,
          name: "学生成语词典",
        },
        {
          value: 2,
          name: "学生实用新编字典（最新版）",
        },
        {
          value: 2,
          name: "学术研究与论文写作",
        },
        {
          value: 3,
          name: "学拼音",
        },
        {
          value: 3,
          name: "学唐诗",
        },
        {
          value: 2,
          name: "学前儿童语言教育",
        },
        {
          value: 2,
          name: "学前儿童美术教育",
        },
        {
          value: 2,
          name: "学前儿童数学教育",
        },
        {
          value: 2,
          name: "学前儿童健康教育",
        },
        {
          value: 6,
          name: "学习资料",
        },
        {
          value: 3,
          name: "学习材料",
        },
        {
          value: 5,
          name: "学习文选",
        },
        {
          value: 2,
          name: "学习与评价（必修）",
        },
        {
          value: 2,
          name: "学习与评价：英语六年级下册",
        },
        {
          value: 3,
          name: "学习与评价：必修",
        },
        {
          value: 2,
          name: "学习与评价 英语四年级下册",
        },
        {
          value: 3,
          name: "孟子",
        },
        {
          value: 2,
          name: "孙悟空在我们村里",
        },
        {
          value: 3,
          name: "孙子兵法",
        },
        {
          value: 2,
          name: "孔融让梨",
        },
        {
          value: 2,
          name: "孔子家语",
        },
        {
          value: 1317,
          name: "子部",
        },
        {
          value: 2,
          name: "子不语",
        },
        {
          value: 2,
          name: "嫦娥奔月",
        },
        {
          value: 4138,
          name: "婚恋/性",
        },
        {
          value: 15206,
          name: "娱乐时尚",
        },
        {
          value: 4,
          name: "威尼斯商人",
        },
        {
          value: 2,
          name: "妊然心动：孕期心理音乐处方",
        },
        {
          value: 4,
          name: "妇产科护理学",
        },
        {
          value: 3,
          name: "妇产科学",
        },
        {
          value: 2,
          name: "如願",
        },
        {
          value: 2,
          name: "如果我可以許一個願望",
        },
        {
          value: 5,
          name: "好题巧解小学数学应用题",
        },
        {
          value: 2,
          name: "好父母教育孩子必須注意的50個細節",
        },
        {
          value: 2,
          name: "好奇宝宝科学绘本",
        },
        {
          value: 3,
          name: "好兵帅克",
        },
        {
          value: 2,
          name: "奧瑟羅",
        },
        {
          value: 3,
          name: "奥秘世界大探索",
        },
        {
          value: 2,
          name: "奥德赛",
        },
        {
          value: 2,
          name: "契诃夫短篇小说选",
        },
        {
          value: 2,
          name: "太阳升起",
        },
        {
          value: 2,
          name: "天线与电波传播",
        },
        {
          value: 2,
          name: "天方夜谭",
        },
        {
          value: 3,
          name: "天工开物",
        },
        {
          value: 6,
          name: "天天练",
        },
        {
          value: 2,
          name: "大阅读周周练",
        },
        {
          value: 8,
          name: "大学语文",
        },
        {
          value: 5,
          name: "大学计算机应用基础",
        },
        {
          value: 2,
          name: "大学计算机基础实验教程",
        },
        {
          value: 3,
          name: "大学计算机基础实验指导",
        },
        {
          value: 3,
          name: "大学计算机基础实践教程",
        },
        {
          value: 2,
          name: "大学计算机基础实训教程",
        },
        {
          value: 25,
          name: "大学计算机基础",
        },
        {
          value: 4,
          name: "大学计算机",
        },
        {
          value: 2,
          name: "大学英语综合教程1",
        },
        {
          value: 3,
          name: "大学英语综合技能实践教程",
        },
        {
          value: 2,
          name: "大学英语快速阅读教程",
        },
        {
          value: 2,
          name: "大学英语分级测试",
        },
        {
          value: 3,
          name: "大学生职业生涯规划",
        },
        {
          value: 2,
          name: "大学生心理健康教育（第二版）",
        },
        {
          value: 6,
          name: "大学生心理健康教育",
        },
        {
          value: 2,
          name: "大学生心理健康",
        },
        {
          value: 3,
          name: "大学生就业指导",
        },
        {
          value: 4,
          name: "大学生安全教育",
        },
        {
          value: 2,
          name: "大学生创新创业基础",
        },
        {
          value: 2,
          name: "大学生创业教育教程",
        },
        {
          value: 2,
          name: "大学生健康教育",
        },
        {
          value: 2,
          name: "大学生体育与健康",
        },
        {
          value: 2,
          name: "大学物理实验教程",
        },
        {
          value: 14,
          name: "大学物理实验",
        },
        {
          value: 2,
          name: "大学物理（上）",
        },
        {
          value: 3,
          name: "大学物理",
        },
        {
          value: 2,
          name: "大学文科数学",
        },
        {
          value: 2,
          name: "大学数学",
        },
        {
          value: 2,
          name: "大学思辨英语教程",
        },
        {
          value: 2,
          name: "大学化学实验",
        },
        {
          value: 2,
          name: "大学信息技术基础",
        },
        {
          value: 2,
          name: "大学体育理论与实践教程",
        },
        {
          value: 5,
          name: "大学体育教程",
        },
        {
          value: 3,
          name: "大学体育与健康教程",
        },
        {
          value: 2,
          name: "大学体育与健康",
        },
        {
          value: 8,
          name: "大学体育",
        },
        {
          value: 2,
          name: "大学 中庸",
        },
        {
          value: 2,
          name: "大学",
        },
        {
          value: 2,
          name: "大卫·科波菲尔",
        },
        {
          value: 2,
          name: "大亨小傳",
        },
        {
          value: 2,
          name: "夜空黑暗之谜",
        },
        {
          value: 3,
          name: "多媒体技术与应用",
        },
        {
          value: 962,
          name: "外语工具书",
        },
        {
          value: 107888,
          name: "外语",
        },
        {
          value: 2,
          name: "外科护理学",
        },
        {
          value: 5,
          name: "外科学",
        },
        {
          value: 2,
          name: "外国童话精选",
        },
        {
          value: 2,
          name: "外傭：住在家中的陌生人",
        },
        {
          value: 6,
          name: "复活",
        },
        {
          value: 3,
          name: "复变函数与积分变换",
        },
        {
          value: 3,
          name: "备考便携本",
        },
        {
          value: 4,
          name: "声律启蒙",
        },
        {
          value: 2,
          name: "墨子",
        },
        {
          value: 3,
          name: "增广贤文",
        },
        {
          value: 2,
          name: "堂吉诃德（上下册）",
        },
        {
          value: 5,
          name: "堂吉诃德",
        },
        {
          value: 2,
          name: "堂吉訶德（上下）",
        },
        {
          value: 3,
          name: "基础化学实验",
        },
        {
          value: 3,
          name: "基础化学",
        },
        {
          value: 2,
          name: "基础会计模拟实训",
        },
        {
          value: 2,
          name: "基础会计实训",
        },
        {
          value: 2,
          name: "基础会计学",
        },
        {
          value: 8,
          name: "基础会计",
        },
        {
          value: 2,
          name: "基督山伯爵",
        },
        {
          value: 2,
          name: "培根随笔",
        },
        {
          value: 2,
          name: "培根论人生",
        },
        {
          value: 3,
          name: "城南旧事",
        },
        {
          value: 2,
          name: "型男大主廚4",
        },
        {
          value: 2,
          name: "坚定的锡兵",
        },
        {
          value: 2,
          name: "坎特伯雷故事（下）",
        },
        {
          value: 2,
          name: "坎特伯雷故事（上）",
        },
        {
          value: 2,
          name: "地震",
        },
        {
          value: 2,
          name: "地理学思想史",
        },
        {
          value: 8067,
          name: "地理",
        },
        {
          value: 2,
          name: "地球感冒了",
        },
        {
          value: 2,
          name: "地球",
        },
        {
          value: 3,
          name: "地心游记",
        },
        {
          value: 2,
          name: "土木工程材料",
        },
        {
          value: 2,
          name: "土木工程专业英语",
        },
        {
          value: 2,
          name: "土地改革法学习资料",
        },
        {
          value: 2,
          name: "土力学与地基基础",
        },
        {
          value: 2,
          name: "圖解學習障礙 有效提升孩子學習力",
        },
        {
          value: 2,
          name: "國語小辭典",
        },
        {
          value: 2,
          name: "國寶",
        },
        {
          value: 2,
          name: "图形创意设计",
        },
        {
          value: 2,
          name: "国际金融",
        },
        {
          value: 2,
          name: "国际贸易理论与政策",
        },
        {
          value: 6,
          name: "国际贸易理论与实务",
        },
        {
          value: 3,
          name: "国际贸易实务",
        },
        {
          value: 2,
          name: "国际贸易",
        },
        {
          value: 2,
          name: "国际商务英语",
        },
        {
          value: 3,
          name: "国语",
        },
        {
          value: 2,
          name: "国民经济核算教程",
        },
        {
          value: 2,
          name: "国宝之谜（盲文）",
        },
        {
          value: 4590,
          name: "国学著作",
        },
        {
          value: 3443,
          name: "国学入门",
        },
        {
          value: 4,
          name: "围炉夜话",
        },
        {
          value: 6,
          name: "围城",
        },
        {
          value: 2,
          name: "园林景观设计",
        },
        {
          value: 3,
          name: "回家",
        },
        {
          value: 3,
          name: "四库全书精华",
        },
        {
          value: 3,
          name: "四库全书",
        },
        {
          value: 2,
          name: "善本书所见录",
        },
        {
          value: 2,
          name: "商品学基础",
        },
        {
          value: 2,
          name: "商品学",
        },
        {
          value: 2,
          name: "商君书",
        },
        {
          value: 2,
          name: "商务谈判",
        },
        {
          value: 2,
          name: "商务礼仪",
        },
        {
          value: 2,
          name: "商业银行业务与经营",
        },
        {
          value: 2,
          name: "唐诗三百首精选",
        },
        {
          value: 9,
          name: "唐诗三百首",
        },
        {
          value: 5,
          name: "唐诗",
        },
        {
          value: 2,
          name: "唐璜",
        },
        {
          value: 2,
          name: "唐文·小学生多功能字词典（双色版）",
        },
        {
          value: 2,
          name: "唐文·学生新字典（双色版）",
        },
        {
          value: 2,
          name: "唐吉诃德",
        },
        {
          value: 80,
          name: "哲学宗教工具书",
        },
        {
          value: 2,
          name: "哲学与人生",
        },
        {
          value: 52950,
          name: "哲学",
        },
        {
          value: 3,
          name: "哈姆雷特",
        },
        {
          value: 2,
          name: "哈姆莱特",
        },
        {
          value: 2,
          name: "哀傷紀",
        },
        {
          value: 2,
          name: "咖啡究極講座",
        },
        {
          value: 2,
          name: "和谐人机环境",
        },
        {
          value: 6,
          name: "呼啸山庄",
        },
        {
          value: 4,
          name: "呼兰河传",
        },
        {
          value: 2,
          name: "周易",
        },
        {
          value: 3,
          name: "周恩来的故事（藏文）",
        },
        {
          value: 5,
          name: "呐喊",
        },
        {
          value: 4,
          name: "吹牛大王历险记",
        },
        {
          value: 16887,
          name: "启蒙认知",
        },
        {
          value: 3,
          name: "吕氏春秋",
        },
        {
          value: 3,
          name: "名牌小学学前阶梯训练",
        },
        {
          value: 2,
          name: "名牌小学入学准备：数学",
        },
        {
          value: 2,
          name: "名牌小学入学准备：拼音",
        },
        {
          value: 2,
          name: "名师面对面（必修）",
        },
        {
          value: 2,
          name: "名师面对面",
        },
        {
          value: 2,
          name: "名师现场批改",
        },
        {
          value: 5,
          name: "名人传",
        },
        {
          value: 2,
          name: "同步测练（必修）",
        },
        {
          value: 2,
          name: "同步导学过关测评",
        },
        {
          value: 2,
          name: "同义反义多音多义组词造句词典",
        },
        {
          value: 2,
          name: "司马光砸缸",
        },
        {
          value: 2145,
          name: "史部",
        },
        {
          value: 5,
          name: "史记",
        },
        {
          value: 2,
          name: "台风",
        },
        {
          value: 2,
          name: "可爱的中国",
        },
        {
          value: 2,
          name: "古诗文课外阅读",
        },
        {
          value: 2,
          name: "古汉语常用字字典",
        },
        {
          value: 2,
          name: "古文观止鉴赏辞典",
        },
        {
          value: 5,
          name: "古文观止",
        },
        {
          value: 3,
          name: "古代汉语词典",
        },
        {
          value: 2,
          name: "古代汉语三百题",
        },
        {
          value: 2,
          name: "受戒",
        },
        {
          value: 2,
          name: "双城记",
        },
        {
          value: 243,
          name: "历史地理工具书",
        },
        {
          value: 80467,
          name: "历史",
        },
        {
          value: 7,
          name: "卖火柴的小女孩",
        },
        {
          value: 2,
          name: "单片机原理及应用",
        },
        {
          value: 20,
          name: "单元练测卷",
        },
        {
          value: 2,
          name: "单元同步训练测试题",
        },
        {
          value: 3,
          name: "千家诗",
        },
        {
          value: 6,
          name: "千字文",
        },
        {
          value: 2,
          name: "十年",
        },
        {
          value: 2,
          name: "十字路口",
        },
        {
          value: 2,
          name: "十二生肖的故事",
        },
        {
          value: 4,
          name: "十万个为什么（藏汉对照）",
        },
        {
          value: 3,
          name: "十万个为什么（套装全4册）",
        },
        {
          value: 2,
          name: "十万个为什么",
        },
        {
          value: 2,
          name: "医用化学",
        },
        {
          value: 2,
          name: "医学细胞生物学",
        },
        {
          value: 2,
          name: "医学机能实验学",
        },
        {
          value: 3,
          name: "医学机能学实验教程",
        },
        {
          value: 4,
          name: "医学心理学",
        },
        {
          value: 2,
          name: "医学微生物学",
        },
        {
          value: 239,
          name: "医学工具书",
        },
        {
          value: 2,
          name: "医学免疫学",
        },
        {
          value: 2,
          name: "医学伦理学",
        },
        {
          value: 95045,
          name: "医学",
        },
        {
          value: 2,
          name: "北京京剧百部经典剧情简介标准译本（汉匈对照）",
        },
        {
          value: 2,
          name: "化学",
        },
        {
          value: 2,
          name: "包法利夫人",
        },
        {
          value: 2,
          name: "動畫場景大師的水彩寫生課",
        },
        {
          value: 2,
          name: "動物",
        },
        {
          value: 2,
          name: "動漫達人修煉術：完全素描自學手冊",
        },
        {
          value: 2,
          name: "動漫達人修煉術：奇幻角色表現技法",
        },
        {
          value: 2,
          name: "動漫達人修煉術：人物個性風格素描技法",
        },
        {
          value: 6132,
          name: "励志与成长",
        },
        {
          value: 2,
          name: "动画设计",
        },
        {
          value: 2,
          name: "动物泡泡贴",
        },
        {
          value: 2,
          name: "动物宝宝",
        },
        {
          value: 3,
          name: "动物乐园",
        },
        {
          value: 5,
          name: "动物世界",
        },
        {
          value: 13636,
          name: "动漫世界",
        },
        {
          value: 20589,
          name: "动漫",
        },
        {
          value: 2,
          name: "办公自动化教程",
        },
        {
          value: 2,
          name: "制度的力量",
        },
        {
          value: 3,
          name: "初级会计电算化",
        },
        {
          value: 2,
          name: "初中英语基础知识手册",
        },
        {
          value: 2,
          name: "初中英语同步阅读训练",
        },
        {
          value: 2,
          name: "初中文言文完全解读",
        },
        {
          value: 2,
          name: "初中化学教材全解：化学",
        },
        {
          value: 2,
          name: "创新思维",
        },
        {
          value: 3,
          name: "创新创业基础",
        },
        {
          value: 2,
          name: "创意美劳教室（一上）",
        },
        {
          value: 2,
          name: "刘胡兰",
        },
        {
          value: 8,
          name: "列那狐的故事",
        },
        {
          value: 4,
          name: "列子",
        },
        {
          value: 2,
          name: "分析化学实验",
        },
        {
          value: 5,
          name: "分析化学",
        },
        {
          value: 2,
          name: "出走",
        },
        {
          value: 2,
          name: "凤栖梧桐",
        },
        {
          value: 3,
          name: "几何",
        },
        {
          value: 2,
          name: "冷暖色での配色手帖",
        },
        {
          value: 3,
          name: "农民一定要知道的365个自然常识（朝鲜文）",
        },
        {
          value: 48782,
          name: "农业科学",
        },
        {
          value: 15298,
          name: "军事",
        },
        {
          value: 3,
          name: "内科护理学",
        },
        {
          value: 3,
          name: "内科学",
        },
        {
          value: 2,
          name: "兽医临床诊疗技术",
        },
        {
          value: 2,
          name: "典故300则（朝鲜文）",
        },
        {
          value: 3955,
          name: "其他工具书",
        },
        {
          value: 2,
          name: "兰亭序",
        },
        {
          value: 2,
          name: "六朝怪談",
        },
        {
          value: 3,
          name: "公司理财",
        },
        {
          value: 2,
          name: "公共经济学",
        },
        {
          value: 2,
          name: "公共基础知识",
        },
        {
          value: 2,
          name: "公共关系理论与实务",
        },
        {
          value: 8,
          name: "八十天环游地球",
        },
        {
          value: 7,
          name: "全科王",
        },
        {
          value: 2,
          name: "全科医学概论",
        },
        {
          value: 2,
          name: "全方位日本語N4（1）",
        },
        {
          value: 2,
          name: "全国职称英语等级考试专项突破与综合训练（综合类）",
        },
        {
          value: 2,
          name: "全国职称英语等级考试专项突破与综合训练（理工类）",
        },
        {
          value: 2,
          name: "全国职称英语等级考试专项突破与综合训练（卫生类）",
        },
        {
          value: 6,
          name: "全国各省市高考试卷汇编",
        },
        {
          value: 2,
          name: "全优课堂（选修）",
        },
        {
          value: 5,
          name: "全优课堂（必修）",
        },
        {
          value: 2,
          name: "入学必备专项练",
        },
        {
          value: 2,
          name: "兒童行為解碼",
        },
        {
          value: 5,
          name: "克雷洛夫寓言",
        },
        {
          value: 2,
          name: "光影先決：光線攝影的演繹與趣味",
        },
        {
          value: 2,
          name: "儿童趣味科学（藏文）",
        },
        {
          value: 2,
          name: "儿童趣味科学：藏文",
        },
        {
          value: 3,
          name: "儿科学",
        },
        {
          value: 2,
          name: "儿歌三百首",
        },
        {
          value: 5,
          name: "儒林外史",
        },
        {
          value: 2,
          name: "傅雷译文集（全十五册）",
        },
        {
          value: 2,
          name: "健康评估",
        },
        {
          value: 3,
          name: "健康科学数学",
        },
        {
          value: 27485,
          name: "健康",
        },
        {
          value: 5,
          name: "假如给我三天光明",
        },
        {
          value: 2,
          name: "信息资源管理",
        },
        {
          value: 2,
          name: "信息检索教程",
        },
        {
          value: 3,
          name: "信息检索与利用",
        },
        {
          value: 4,
          name: "信息技术试题题解",
        },
        {
          value: 2,
          name: "信息技术应用基础",
        },
        {
          value: 3,
          name: "信息技术基础",
        },
        {
          value: 5,
          name: "信号与系统",
        },
        {
          value: 3,
          name: "保险学",
        },
        {
          value: 2,
          name: "保卫马克思",
        },
        {
          value: 2,
          name: "供应链管理",
        },
        {
          value: 2,
          name: "你没学到的巴菲特：股神默默在做的事",
        },
        {
          value: 5,
          name: "作文课堂",
        },
        {
          value: 2,
          name: "体验英语少儿阅读文库14年新包装",
        },
        {
          value: 2,
          name: "体能训练理论与方法",
        },
        {
          value: 14,
          name: "体育与健康",
        },
        {
          value: 19661,
          name: "体育",
        },
        {
          value: 289,
          name: "低幼读物",
        },
        {
          value: 2,
          name: "伴你成长最新上海名师导学：语文",
        },
        {
          value: 44035,
          name: "传记",
        },
        {
          value: 3078,
          name: "传统文化",
        },
        {
          value: 3,
          name: "传统人物画谱",
        },
        {
          value: 2,
          name: "传播学概论",
        },
        {
          value: 3,
          name: "传习录",
        },
        {
          value: 2,
          name: "会飞的教室",
        },
        {
          value: 3,
          name: "会计电算化",
        },
        {
          value: 3,
          name: "会计学原理",
        },
        {
          value: 5,
          name: "会计学",
        },
        {
          value: 9,
          name: "会计基础",
        },
        {
          value: 2,
          name: "优秀蒙古文文学作品翻译出版工程",
        },
        {
          value: 2,
          name: "优秀教师的批评艺术",
        },
        {
          value: 2,
          name: "休闲体育概论",
        },
        {
          value: 15,
          name: "伊索寓言",
        },
        {
          value: 2,
          name: "企业财务报告分析",
        },
        {
          value: 6,
          name: "企业战略管理",
        },
        {
          value: 2,
          name: "仲夏夜之夢",
        },
        {
          value: 2,
          name: "今天的台灣英雄",
        },
        {
          value: 2,
          name: "什么是什么（精装）",
        },
        {
          value: 2,
          name: "人體工程學：我的丈夫李建軍",
        },
        {
          value: 2,
          name: "人间词话（精）",
        },
        {
          value: 6,
          name: "人间词话",
        },
        {
          value: 2,
          name: "人物速写",
        },
        {
          value: 3,
          name: "人教金学典同步练习册",
        },
        {
          value: 2,
          name: "人力资源管理（第五版）",
        },
        {
          value: 3,
          name: "人力资源管理",
        },
        {
          value: 2,
          name: "人体工程学",
        },
        {
          value: 2,
          name: "人体寄生虫学",
        },
        {
          value: 2,
          name: "人体奥秘",
        },
        {
          value: 28644,
          name: "交通运输",
        },
        {
          value: 7,
          name: "交通工具",
        },
        {
          value: 2,
          name: "五星红旗",
        },
        {
          value: 2,
          name: "二刻拍案惊奇",
        },
        {
          value: 3,
          name: "了凡四训",
        },
        {
          value: 2,
          name: "了不起的科学家（4级 英语注释）",
        },
        {
          value: 2,
          name: "书籍装帧",
        },
        {
          value: 2,
          name: "书法•八年级（上册）",
        },
        {
          value: 2,
          name: "乡村记忆",
        },
        {
          value: 2,
          name: "九年义务教育新课程辅助教材：钢笔写字",
        },
        {
          value: 2,
          name: "乒乓球",
        },
        {
          value: 3,
          name: "乌合之众：大众心理研究",
        },
        {
          value: 4,
          name: "义务教育音乐课程标准实验教科书（教师用书CD套装）",
        },
        {
          value: 5,
          name: "义务教育音乐课程标准实验教科书（教师用书 CD套装）",
        },
        {
          value: 2,
          name: "义务教育课程标准实验教科书 写字：毛笔字临帖",
        },
        {
          value: 6,
          name: "义务教育教科书音乐教师用书套装",
        },
        {
          value: 2,
          name: "义务教育教科书音乐教师用书：七年级下册",
        },
        {
          value: 2,
          name: "义务教育教科书音乐教师用书：一年级下册",
        },
        {
          value: 3,
          name: "义务教育教科书美术教学参考用书",
        },
        {
          value: 2,
          name: "义务教育教科书数学教师教学用书",
        },
        {
          value: 2,
          name: "义务教育教科书教师教学用书 数学七年级下册",
        },
        {
          value: 9,
          name: "义务教育教科书教师教学用书",
        },
        {
          value: 2,
          name: "义务教育教科书",
        },
        {
          value: 2,
          name: "丹麥女孩",
        },
        {
          value: 2,
          name: "临床医学检验技术练习题集",
        },
        {
          value: 2,
          name: "临床医学检验技术精选习题解析",
        },
        {
          value: 2,
          name: "临床医学检验技术模拟试卷",
        },
        {
          value: 2,
          name: "中風康復鍛鍊手冊",
        },
        {
          value: 2,
          name: "中西醫結合治癌實錄",
        },
        {
          value: 3,
          name: "中考作文冲刺满分",
        },
        {
          value: 6,
          name: "中级财务会计",
        },
        {
          value: 2,
          name: "中学生获奖作文大全",
        },
        {
          value: 2,
          name: "中学生心理辅导",
        },
        {
          value: 3,
          name: "中学生分类作文大全",
        },
        {
          value: 2,
          name: "中学生优秀作文大全",
        },
        {
          value: 2,
          name: "中外民间故事",
        },
        {
          value: 2,
          name: "中外儿童诗精选",
        },
        {
          value: 2,
          name: "中国税制",
        },
        {
          value: 3,
          name: "中国神话故事",
        },
        {
          value: 2,
          name: "中国现代文学史",
        },
        {
          value: 2,
          name: "中国河西走廊系列丛书（共4册）",
        },
        {
          value: 3,
          name: "中国民间故事",
        },
        {
          value: 2,
          name: "中国朝鲜族史料全集（朝鲜文）",
        },
        {
          value: 3,
          name: "中国旅游地理",
        },
        {
          value: 2,
          name: "中国故事",
        },
        {
          value: 4,
          name: "中国地形",
        },
        {
          value: 2,
          name: "中国历史未解之谜",
        },
        {
          value: 3,
          name: "中国历史故事",
        },
        {
          value: 2,
          name: "中国共产党统一战线工作条例",
        },
        {
          value: 2,
          name: "中国传统文化",
        },
        {
          value: 2,
          name: "中国人的精神",
        },
        {
          value: 2,
          name: "中国人最易误解的文史常识（盲文）",
        },
        {
          value: 7,
          name: "中国人应知的历史常识（盲文）",
        },
        {
          value: 7,
          name: "中国中学生百科全书（藏文）",
        },
        {
          value: 7,
          name: "中国中学生百科全书（蒙古文）",
        },
        {
          value: 3,
          name: "中华成语故事",
        },
        {
          value: 2,
          name: "中华成语大词典",
        },
        {
          value: 2,
          name: "中华大字典",
        },
        {
          value: 2,
          name: "中华人民共和国未成年人保护法释义",
        },
        {
          value: 2,
          name: "中华人民共和国公路桥涵标准图",
        },
        {
          value: 2,
          name: "中华人民共和国交通图（1:430万）",
        },
        {
          value: 2,
          name: "中华上下五千年（套装共4册）",
        },
        {
          value: 2,
          name: "中华上下五千年",
        },
        {
          value: 2,
          name: "中医护理学",
        },
        {
          value: 3,
          name: "中医学",
        },
        {
          value: 2,
          name: "中医基础理论",
        },
        {
          value: 2,
          name: "中医内科学",
        },
        {
          value: 13,
          name: "中共中央文件选集（1949.10-1966.5）",
        },
        {
          value: 2,
          name: "中共中央文件选集",
        },
        {
          value: 2,
          name: "两个小八路",
        },
        {
          value: 4,
          name: "东陆之光",
        },
        {
          value: 2,
          name: "东塾读书记",
        },
        {
          value: 2,
          name: "东周列国志",
        },
        {
          value: 20,
          name: "丛部",
        },
        {
          value: 4,
          name: "世说新语",
        },
        {
          value: 2,
          name: "世纪金榜高中全程学习方略：化学选修4-化学反应原理（2014最新版）",
        },
        {
          value: 2,
          name: "世界性风俗辞典",
        },
        {
          value: 4,
          name: "世界地图",
        },
        {
          value: 2,
          name: "世界军事未解之谜",
        },
        {
          value: 2,
          name: "世界之最",
        },
        {
          value: 3,
          name: "专业认知与职业规划",
        },
        {
          value: 11,
          name: "丑小鸭",
        },
        {
          value: 2,
          name: "下次开船港",
        },
        {
          value: 2,
          name: "上尉的女儿",
        },
        {
          value: 16,
          name: "三维设计",
        },
        {
          value: 14,
          name: "三字经",
        },
        {
          value: 10,
          name: "三国演义",
        },
        {
          value: 2,
          name: "三国史话",
        },
        {
          value: 4,
          name: "三只小猪",
        },
        {
          value: 3,
          name: "三十六计",
        },
        {
          value: 3,
          name: "万事万物由来（朝鲜文）",
        },
        {
          value: 4,
          name: "丁呱呱妙想魔法日常",
        },
        {
          value: 13,
          name: "一千零一夜",
        },
        {
          value: 3,
          name: "一九八四",
        },
        {
          value: 2,
          name: "Wool [Paperback]",
        },
        {
          value: 2,
          name: "Windows 8 For Dummies [Paperback]",
        },
        {
          value: 3,
          name: "Visual FoxPro程序设计教程",
        },
        {
          value: 2,
          name: "Visual FoxPro程序设计基础教程",
        },
        {
          value: 2,
          name: "Visual FoxPro程序设计基础",
        },
        {
          value: 2,
          name: "Visual FoxPro程序设计",
        },
        {
          value: 2,
          name: "Visual FoxPro数据库程序设计教程",
        },
        {
          value: 9,
          name: "Visual Basic程序设计教程",
        },
        {
          value: 2,
          name: "Visual Basic程序设计基础",
        },
        {
          value: 2,
          name: "Visual Basic程序设计",
        },
        {
          value: 2,
          name: "Visual Basic.NET程序设计",
        },
        {
          value: 2,
          name: "Under the Dome",
        },
        {
          value: 2,
          name: "Unbroken",
        },
        {
          value: 2,
          name: "Un autre monde [Paperback]",
        },
        {
          value: 2,
          name: "UG NX12.0中文版数控加工从入门到精通",
        },
        {
          value: 2,
          name: "Tuesdays at the Castle [Paperback]",
        },
        {
          value: 2,
          name: "Tricks [Paperback]",
        },
        {
          value: 2,
          name: "Through the Brazilian Wilderness [Paperback]",
        },
        {
          value: 2,
          name: "Three Men in a Boat",
        },
        {
          value: 2,
          name: "Think and Grow Rich [Paperback]",
        },
        {
          value: 2,
          name: "The Witness [Paperback]",
        },
        {
          value: 2,
          name: "The Wanderer [Hardcover]",
        },
        {
          value: 2,
          name: "The Time Machine",
        },
        {
          value: 2,
          name: "The Tartar Steppe [Paperback]",
        },
        {
          value: 2,
          name: "The Road to Serfdom",
        },
        {
          value: 2,
          name: "The Red Shoe [Paperback]",
        },
        {
          value: 2,
          name: "The Red Room [Paperback]",
        },
        {
          value: 2,
          name: "The Quest",
        },
        {
          value: 3,
          name: "The Problems of Philosophy [Paperback]",
        },
        {
          value: 2,
          name: "The Prince [Paperback]",
        },
        {
          value: 2,
          name: "The October List",
        },
        {
          value: 2,
          name: "The Life of a Good-for-nothing [Paperback]",
        },
        {
          value: 2,
          name: "The Jungle Book：Man Trap（Popcorn Readers）",
        },
        {
          value: 2,
          name: "The Jungle Book：Cobra's Egg（Popcorn Readers）",
        },
        {
          value: 2,
          name: "The Innocence of Father Brown [Paperback]",
        },
        {
          value: 2,
          name: "The Hunting of the Snark [Hardcover]",
        },
        {
          value: 2,
          name: "The Holman Illustrated Study Bible：霍尔曼圣经",
        },
        {
          value: 2,
          name: "The Hit",
        },
        {
          value: 2,
          name: "The Golem's Mighty Swing [Paperback]",
        },
        {
          value: 2,
          name: "The Giggler Treatment [Paperback]",
        },
        {
          value: 2,
          name: "The Cuckoo''s Calling",
        },
        {
          value: 2,
          name: "The Complete Roderick [Paperback]",
        },
        {
          value: 2,
          name: "The Communist Manifesto [Paperback]",
        },
        {
          value: 2,
          name: "The Christmas Candle [Hardcover]",
        },
        {
          value: 2,
          name: "The Black Swan",
        },
        {
          value: 3,
          name: "The Best of Me",
        },
        {
          value: 2,
          name: "Taylor Swift",
        },
        {
          value: 2,
          name: "T. Tembarom [Paperback]",
        },
        {
          value: 2,
          name: "Syntax",
        },
        {
          value: 2,
          name: "Study Guide for Macroeconomics [Paperback]",
        },
        {
          value: 2,
          name: "Steve Jobs（Scholastic Readers， Level 3）",
        },
        {
          value: 2,
          name: "Starter level Robin Hood：The Taxman",
        },
        {
          value: 2,
          name: "Snowbound [Paperback]",
        },
        {
          value: 2,
          name: "Shutter Island [Paperback]",
        },
        {
          value: 2,
          name: "Show出職場好英文",
        },
        {
          value: 2,
          name: "Senna（Scholastic Readers， Level 2）",
        },
        {
          value: 2,
          name: "Saga Frisson - Tome 3 - Fusion [Paperback]",
        },
        {
          value: 2,
          name: "Safe Haven",
        },
        {
          value: 2,
          name: "Robots [Hardcover]",
        },
        {
          value: 2,
          name: "Road Trip USA Atlantic Coast [Paperback]",
        },
        {
          value: 2,
          name: "Resurrection， Vol. 1 [Paperback]",
        },
        {
          value: 2,
          name: "Rashomon and Seventeen Other Stories",
        },
        {
          value: 3,
          name: "Python程序设计",
        },
        {
          value: 2,
          name: "Puss-in-Boots：The Outlaw（Popcorn Readers）",
        },
        {
          value: 2,
          name: "Psychology in Everyday Life [Paperback]",
        },
        {
          value: 2,
          name: "Proof of Heaven",
        },
        {
          value: 2,
          name: "Princess Academy [Paperback]",
        },
        {
          value: 2,
          name: "Pride and Prejudice [精装]",
        },
        {
          value: 2,
          name: "Penrod [Paperback]",
        },
        {
          value: 2,
          name: "Pattern Magic",
        },
        {
          value: 2,
          name: "Over the Hedge（Popcorn Readers）",
        },
        {
          value: 2,
          name: "Outlaw [Hardcover]",
        },
        {
          value: 2,
          name: "Out of Focus [Paperback]",
        },
        {
          value: 2,
          name: "One Day",
        },
        {
          value: 2,
          name: "Mission Clockwork [Hardcover]",
        },
        {
          value: 2,
          name: "Missing [Paperback]",
        },
        {
          value: 2,
          name: "Meditations [Paperback]",
        },
        {
          value: 2,
          name: "Macroeconomics [Hardcover]",
        },
        {
          value: 2,
          name: "Life of Pi",
        },
        {
          value: 2,
          name: "Letters From The Earth [Paperback]",
        },
        {
          value: 2,
          name: "Lean In",
        },
        {
          value: 2,
          name: "Kung Fu Panda Holiday（Popcorn Readers）",
        },
        {
          value: 2,
          name: "Kieran's Karate Adventure（Popcorn Readers）",
        },
        {
          value: 2,
          name: "Kidnapped [Paperback]",
        },
        {
          value: 2,
          name: "Keeper [Paperback]",
        },
        {
          value: 2,
          name: "Just Henry [Paperback]",
        },
        {
          value: 2,
          name: "Johnny Delgado：Private Detective [Paperback]",
        },
        {
          value: 2,
          name: "Janice Meredith [Paperback]",
        },
        {
          value: 2,
          name: "Jane Eyre [Paperback]",
        },
        {
          value: 3,
          name: "Jane Eyre",
        },
        {
          value: 3,
          name: "Jack Stalwart [Paperback]",
        },
        {
          value: 2,
          name: "IQ益智贴纸书",
        },
        {
          value: 2,
          name: "iPhone：The Missing Manual [Paperback]",
        },
        {
          value: 2,
          name: "Inferno",
        },
        {
          value: 2,
          name: "In The Flesh [Paperback]",
        },
        {
          value: 2,
          name: "In einem anderen Buch [Paperback]",
        },
        {
          value: 2,
          name: "Hard Times",
        },
        {
          value: 3,
          name: "Handbook of Pragmatics",
        },
        {
          value: 2,
          name: "Good Luck， Anna Hibiscus！ [Paperback]",
        },
        {
          value: 2,
          name: "Get Ready！商務英語溝通力",
        },
        {
          value: 2,
          name: "Full Tilt [Paperback]",
        },
        {
          value: 2,
          name: "Flash动画制作",
        },
        {
          value: 2,
          name: "Fabelheim [Paperback]",
        },
        {
          value: 2,
          name: "Excel Statistics：A Quick Guide [Paperback]",
        },
        {
          value: 2,
          name: "Emma",
        },
        {
          value: 2,
          name: "Electrical Wiring Commercial [Paperback]",
        },
        {
          value: 2,
          name: "Economics [Hardcover]",
        },
        {
          value: 2,
          name: "Dracula",
        },
        {
          value: 2,
          name: "DOS系统函数呼叫手册",
        },
        {
          value: 2,
          name: "Dossier fantomes [Mass Market Paperback]",
        },
        {
          value: 2,
          name: "DoodoLoong快乐幼儿英语",
        },
        {
          value: 2,
          name: "Doctor Who",
        },
        {
          value: 3,
          name: "Diary of a Wimpy Kid",
        },
        {
          value: 2,
          name: "Dead to You [Paperback]",
        },
        {
          value: 3,
          name: "C语言程序设计教程",
        },
        {
          value: 2,
          name: "C语言程序设计实验指导",
        },
        {
          value: 2,
          name: "C语言程序设计习题及实训指导",
        },
        {
          value: 2,
          name: "C语言程序设计上机指导与习题解答",
        },
        {
          value: 26,
          name: "C语言程序设计",
        },
        {
          value: 2,
          name: "Computed Tomography",
        },
        {
          value: 2,
          name: "Cold Comfort Farm [Paperback]",
        },
        {
          value: 2,
          name: "Civilization and Its Discontents [Paperback]",
        },
        {
          value: 2,
          name: "Civil War",
        },
        {
          value: 2,
          name: "Cassada [Paperback]",
        },
        {
          value: 2,
          name: "Burned [Paperback]",
        },
        {
          value: 2,
          name: "Bullied [Paperback]",
        },
        {
          value: 2,
          name: "Bro on the Go [Paperback]",
        },
        {
          value: 2,
          name: "Boomerang",
        },
        {
          value: 3,
          name: "Bonsai [Paperback]",
        },
        {
          value: 2,
          name: "Blue Bloods #7 Bloody Valentine",
        },
        {
          value: 2,
          name: "Bloodline [Paperback]",
        },
        {
          value: 2,
          name: "Big Cat",
        },
        {
          value: 2,
          name: "Batman",
        },
        {
          value: 2,
          name: "AutoCAD 2006实用教程",
        },
        {
          value: 2,
          name: "Aurora [Paperback]",
        },
        {
          value: 2,
          name: "App程式設計入門：iPhone、iPad",
        },
        {
          value: 2,
          name: "Anthem [Paperback]",
        },
        {
          value: 2,
          name: "Angels Flight",
        },
        {
          value: 2,
          name: "And the Mountains Echoed",
        },
        {
          value: 3,
          name: "Aesop's Fables [Hardcover]",
        },
        {
          value: 2,
          name: "A Street Cat Named Bob",
        },
        {
          value: 2,
          name: "A Practical Guide to Localization",
        },
        {
          value: 3,
          name: "80000词英汉词典",
        },
        {
          value: 2,
          name: "80000词英汉汉英词典",
        },
        {
          value: 3,
          name: "710分大学英语同步水平练与考",
        },
        {
          value: 10,
          name: "600分解题大全",
        },
        {
          value: 2,
          name: "60000词现代汉语词典",
        },
        {
          value: 2,
          name: "50以内加减法",
        },
        {
          value: 6,
          name: "365夜故事",
        },
        {
          value: 2,
          name: "3~7岁能力训练与测试",
        },
        {
          value: 3,
          name: "20以内加减法",
        },
        {
          value: 3,
          name: "20世纪中国朝鲜族文学史料全集（朝鲜文）",
        },
        {
          value: 2,
          name: "2014年南方新高考",
        },
        {
          value: 2,
          name: "2013秋数学课堂与感悟",
        },
        {
          value: 2,
          name: "2008年全国各类成人高考数学应试模拟（高中起点升本、专科 文史财经类）",
        },
        {
          value: 2,
          name: "1台相機，9種狀況，258個秘訣：讓你變成最強素人攝影師",
        },
        {
          value: 2,
          name: "1973掛历",
        },
        {
          value: 4,
          name: "10以内加减法",
        },
        {
          value: 4,
          name: "1+1轻巧夺冠小专家课时练练通",
        },
        {
          value: 3,
          name: "1+1轻巧夺冠小专家期末100分冲刺卷",
        },
        {
          value: 2,
          name: "1+1轻巧夺冠同步讲解（选修）",
        },
        {
          value: 4,
          name: "1+1轻巧夺冠优化训练",
        },
        {
          value: 5,
          name: "0~2岁宝宝认知大字书",
        },
      ];

      let option = {
        title: {
          text: "书籍标签词云",
          textStyle: {
            color: "#4c4c4c",
          },
        },
        series: [
          {
            type: "wordCloud",
            grideSize: 2,
            //字体的最大与最小字号
            sizeRange: [12, 35],
            //字体旋转的范围
            rotationRange: [45, 90, 135, -90],
            //词云形状 circle:圆形,pentagon:五边形
            //cardioid:苹果形或心形,star:星形,diamond:钻石,
            //triangle-forward:三角形,triangle:三角形,smooth:平滑
            shape: "pentagon",
            textStyle: {
              //字体随机颜色
              color: function () {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 165),
                    Math.round(Math.random() * 155),
                    Math.round(Math.random() * 145),
                  ].join(",") +
                  ")"
                );
              },
              emphasis: {
                //阴影距离
                shadowBlur: 1,
                //阴影颜色
                shadowColor: "#111",
              },
            },
            data: data1,
          },
        ],
      };
      myChart.setOption(option);
    },
    async ec4() {
      let myChart = echarts.init(document.getElementById("b4-ad"));
      // let count = await request.get('/base/echart/5');
      // let arr = [[],[]];
      // let arr2 = []
      //  for (let key of count.data) {
      //   arr[0].push(key.a)
      //   arr[1].push(key.b)
      //  }
      //  for (let i = 0; i < 1462; i++) {
      //   let item = [arr[0][i],arr[1][i]]
      //   arr2.push(item)
      //  }
      //  console.log(arr2);
      let option = {
        title: {
          text: "书籍对应价格储量表(1~200元)",
          x: "center",
          y: 0,
          textStyle: {
            color: "#3259B8",
            fontSize: 16,
            fontWeight: "normal",
          },
        },
        visualMap: {
          min: 1,
          max: 200,
          dimension: 1,
          left: "right",
          top: "top",
          text: ["最高价", "最低价"], // 文本，默认为数值文本
          calculable: true,
          itemWidth: 18,
          itemHeight: 160,
          textStyle: {
            color: "#3259B8",
            height: 56,
            fontSize: 11,
            lineHeight: 60,
          },
          inRange: {
            color: ["#3EACE5", "#F02FC2"],
          },
          padding: [50, 20],
          orient: "horizontal",
        },
        grid: {
          left: "5%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
          showDelay: 0,
          formatter: function (params) {
            if (params.value.length > 1) {
              return (
                "该价格书籍储量: " +
                params.value[0] +
                "本 " +
                "书籍价格: " +
                params.value[1] +
                " 元 "
              );
            } else {
              return (
                params.seriesName +
                " :<br/>" +
                params.name +
                " : " +
                params.value +
                " 元 "
              );
            }
          },
          axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
              type: "dashed",
              width: 1,
            },
          },
        },

        xAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value} 本",
            },
            nameTextStyle: {
              color: "#3259B8",
              fontSize: 14,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#3259B8",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            axisLabel: {
              formatter: "{value} 元",
            },
            nameTextStyle: {
              color: "#3259B8",
              fontSize: 14,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: "#3259B8",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "price-area",
            type: "scatter",
            data: [
              [2979, 200],
              [1151, 199],
              [9601, 198],
              [143, 197],
              [435, 196],
              [466, 195],
              [76, 194],
              [37, 193],
              [260, 192],
              [49, 191],
              [859, 190],
              [516, 189],
              [2854, 188],
              [151, 187],
              [442, 186],
              [341, 185],
              [153, 184],
              [78, 183],
              [132, 182],
              [105, 181],
              [5764, 180],
              [331, 179],
              [1378, 178],
              [94, 177],
              [257, 176],
              [404, 175],
              [187, 174],
              [167, 173],
              [160, 172],
              [100, 171],
              [669, 170],
              [749, 169],
              [8420, 168],
              [203, 167],
              [398, 166],
              [534, 165],
              [171, 164],
              [240, 163],
              [194, 162],
              [120, 161],
              [3522, 160],
              [586, 159],
              [5305, 158],
              [169, 157],
              [947, 156],
              [365, 155],
              [98, 154],
              [331, 153],
              [625, 152],
              [181, 151],
              [4666, 150],
              [1134, 149],
              [4088, 148],
              [185, 147],
              [466, 146],
              [842, 145],
              [489, 144],
              [120, 143],
              [620, 142],
              [128, 141],
              [1838, 140],
              [1737, 139],
              [6143, 138],
              [268, 137],
              [1053, 136],
              [1090, 135],
              [202, 134],
              [195, 133],
              [599, 132],
              [274, 131],
              [1923, 130],
              [1749, 129],
              [16335, 128],
              [348, 127],
              [870, 126],
              [1098, 125],
              [291, 124],
              [310, 123],
              [874, 122],
              [191, 121],
              [7828, 120],
              [1801, 119],
              [7183, 118],
              [159, 117],
              [1046, 116],
              [823, 115],
              [351, 114],
              [315, 113],
              [1020, 112],
              [382, 111],
              [2336, 110],
              [1822, 109],
              [6983, 108],
              [126, 107],
              [753, 106],
              [878, 105],
              [440, 104],
              [120, 103],
              [810, 102],
              [670, 101],
              [6047, 100],
              [9988, 99],
              [31925, 98],
              [290, 97],
              [3705, 96],
              [3964, 95],
              [468, 94],
              [328, 93],
              [1482, 92],
              [207, 91],
              [6308, 90],
              [11414, 89],
              [26140, 88],
              [566, 87],
              [4533, 86],
              [5790, 85],
              [769, 84],
              [624, 83],
              [2068, 82],
              [570, 81],
              [15228, 80],
              [13555, 79],
              [24876, 78],
              [709, 77],
              [3983, 76],
              [8093, 75],
              [597, 74],
              [713, 73],
              [4808, 72],
              [399, 71],
              [11402, 70],
              [20891, 69],
              [52842, 68],
              [956, 67],
              [6614, 66],
              [13715, 65],
              [1810, 64],
              [1900, 63],
              [5201, 62],
              [571, 61],
              [27717, 60],
              [25805, 59],
              [51112, 58],
              [1887, 57],
              [16513, 56],
              [17434, 55],
              [4058, 54],
              [3358, 53],
              [12889, 52],
              [1231, 51],
              [44478, 50],
              [38018, 49],
              [65961, 48],
              [3790, 47],
              [17979, 46],
              [54689, 45],
              [3568, 44],
              [9893, 43],
              [34055, 42],
              [2451, 41],
              [67512, 40],
              [49379, 39],
              [71110, 38],
              [12026, 37],
              [55379, 36],
              [68965, 35],
              [13047, 34],
              [24774, 33],
              [61392, 32],
              [5517, 31],
              [104766, 30],
              [42744, 29],
              [85217, 28],
              [22290, 27],
              [43683, 26],
              [81050, 25],
              [30707, 24],
              [26006, 23],
              [40341, 22],
              [12829, 21],
              [86201, 20],
              [25372, 19],
              [53562, 18],
              [27881, 17],
              [39392, 16],
              [55330, 15],
              [27431, 14],
              [29702, 13],
              [36978, 12],
              [13660, 11],
              [46198, 10],
              [18231, 9],
              [22375, 8],
              [17419, 7],
              [19055, 6],
              [19971, 5],
              [22028, 4],
              [27263, 3],
              [36086, 2],
              [52387, 1],
            ],
            symbolSize: 4,
          },
        ],
      };
      myChart.setOption(option);
    },
    async newBook() {
      let result = await request.get(`/du/book/`);
      if (result.status == 200) {
        this.list = []; //每次重启记得清空数组
        let html = result.data;
        let $ = cheerio.load(html, { decodeEntities: false });
        let length = $(".container .row .bookslist ul li").length;
        this.length = length;
        for (let i = 0; i < length; i++) {
          let img = $(
            `.container .row .bookslist li:nth-of-type(${i + 1}) .img152 a img`
          ).attr("data-original");
          let name = $(
            `.container .row .bookslist li:nth-of-type(${i + 1}) .img152 a img`
          ).attr("alt");
          let author = $(
            `.container .row .bookslist li:nth-of-type(${
              i + 1
            }) p:nth-of-type(1)`
          ).text();
          let bookUrl = $(
            `.container .row .bookslist li:nth-of-type(${i + 1}) .img152 a`
          ).attr("href");
          let imgFix;
          if (typeof img == "undefined") {
            imgFix = "../../imgs/error.jpg";
          } else {
            imgFix = img.replace("https://img.dushu.com", "/dt");
          }

          let list = { imgFix, name, author, bookUrl }; //单个数据
          this.list.push(list); //数据插入
        }
      }
    },
    async goBook(item) {
      let mainstore = useStore();
      mainstore.bookUrl = item.bookUrl;
    },
  },

  mounted() {
    this.ec1(); //玫瑰图以及数量
    this.ec2(); //柱状行列
    this.ec3(); //词云
    this.ec4(); //价格区间
    this.newBook(); //新书
  },
};
</script>
<style>
/* 词云们的父亲 */
.bbox-ad {
  display: inline-block;
  width: 85%;
}
/* 词云每个盒子的参数，没有宽高 */
.b-ad {
  border-radius: 4px;
  border: solid 1px #ddd;
  box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
  background: #606266(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  background: #d3d3d1 url("../../public/imgs/nbg/hui.png") repeat;
  display: inline-block;
  margin-top: 1%;
  margin-left: 1%;
  padding-top: 20px;
  padding-bottom: 20px;
}
.title-ad {
  text-align: center;
  padding: 1%;
  font-size: 25px;
  color: #4c4c4c;
  font-weight: bold;
}
#b1-ad {
  width: 48.5%;
  height: 400px;
}
#b2-ad {
  width: 48.5%;
  height: 400px;
  float: right;
}
#b3-ad {
  width: 48.5%;
  height: 400px;
}
#b4-ad {
  width: 48.5%;
  height: 400px;
  float: right;
}
#recent-ad {
  width: 100%;
  height: 400px;
  display: block;
  overflow-y: scroll;
}
/* 每个单元 */
.list-li-ad {
  overflow: hidden;
  padding-left: 14px;
  width: 152px;
  height: 270px;
  display: inline-block;
  text-align: center;
}

.r-img-ad {
  display: block;
  padding-top: 9px;
  padding-bottom: 13px;
  margin-bottom: 16px;
  height: 142px;
  width: 142px;
  transition-duration: 0.3s;
}

.r-img-ad:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 10px -10px rgba(85, 122, 245, 0.5);
}

.r-name-ad {
  color: #4c4c4c;
  font-size: 16px;
  font-weight: bold;
  transition-duration: 0.3s;
  max-height: 42px;
  display: inline-block;
  width: 152px;
  text-overflow: ellipsis;
}
.r-name-overflow-ad {
  width: 152px;
  max-height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.r-author-ad {
  text-align: center;
  font-size: 13px;
  color: #888;
  padding-top: 10px;
}
.r-name-ad:hover {
  color: #409eff;
}
.ul-ad {
  margin-left: auto;
  margin-right: auto;
}
</style>