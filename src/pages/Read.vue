<template>
<div class="bg-read">
  <div class="middle-read">
    <div v-html="text" class="text-read"></div>
  </div>
  </div>
</template>

<script>
import request from "../api/request";
import cheerio from "cheerio";
import { useStore } from "@/store/index";
export default {
  components: {},
  data() {
    return {
    text:''
    };
  },
  methods: {
    async goRead() {
      let mainStore = useStore();
      let result = await request({
        url: `/no${mainStore.read}`,
        method: "get"
      });
      if (result.status == 200) {
        let html = result.data 
        let $ = cheerio.load(html, { decodeEntities: false });
        let text = $(`#mlfy_main_text`).html()
        this.text = text.replace
(/||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||/g,function(match){//replace第二个参数用函数,return值
          let map = {
            "":"胸",
            "":"美",
            "":"成",
            "":"交",
            "":"小",
            "":"之",
            "":"后",
            "":"还",
            "":"如",
            "":"地",
            "":"和",
            "":"大",
            "":"家",
            "":"到",
            "":"时",
            "":"这",
            "":"会",
            "":"去",
            "":"里",
            "":"们",
            "":"然",
            "":"多",
            "":"发",
            "":"么",
            "":"事",
            "":"也",
            "":"好",
            "":"以",
            "":"上",
            "":"作",
            "":"于",
            "":"天",
            "":"为",
            "":"心",
            "":"只",
            "":"她",
            "":"样",
            "":"没",
            "":"第",
            "":"对",
            "":"起",
            "":"下",
            "":"看",
            "":"道",
            "":"想",
            "":"要",
            "":"个",
            "":"开",
            "":"来",
            "":"唇",
            "":"过",
            "":"性",
            "":"当",
            "":"把",
            "":"种",
            "":"自",
            "":"得",
            "":"而",
            "":"出",
            "":"学",
            "":"能",
            "":"都",
            "":"用",
            "":"欲",
            "":"可",
          };
          //字典是一种特殊的键值对,学到了
          return map[match]
        })
      }
    },
  },
  created(){
    this.goRead()
  }
};
</script>
<style>
.bg-read{
  background: #d3d3d1 url('../../public/imgs/nbg/shenhui.png') repeat;
  min-height: 100vh;
}
.middle-read {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: #efe3bf url('../../public/imgs/nbg/hui.png') repeat;
  min-height: 100vh;
}
.text-read >div{
    text-indent: 2em;
    word-wrap: break-word;
    word-break: break-word;
    padding: 40px;
    font-size: 23px;
    line-height: 39px;
}
/* 标题 */
.text-read > h1 {
    text-align: center;
    padding-bottom: 25px;
    padding-top: 25px;
    border-bottom: 1px dotted #9e9e9e;
    background-size: 100%;
    font-size: 35px;
    line-height: 41px;
}
</style>