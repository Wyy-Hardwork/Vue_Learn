<template>
<div>
    <div class="no-box">

    </div>
    <div class="page-box">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="pages"
      class="page-list"
      @current-change="Currentpage"
    >
    </el-pagination>
    </div>
</div>
</template>

<script>
import request from "../api/request";
import { useStore } from "@/store/index";
import cheerio from "cheerio";
export default {
components: {},
data() {
return {
    page:1,
    list:[],
};
},
methods: {
    async Novel(){
        let list = []
        let result = await request.get(`/no/top/allvisit/${this.page}.html`)
        let html = result.data;
        let $ = cheerio.load(html, { decodeEntities: false });
        let length = $('.rankpage_box .rank_d_list').length
        for (let i = 0; i < length; i++) {
           let img = $(`.rankpage_box .rank_d_list .rank_d_book_img a`).eq(i).attr('href').match(/\d{1,6}/g).join('')
           let imgFix = `./imgs/novel/${img}.jpg`    
           let t1 = $(`.rankpage_box .rank_d_list .rank_d_b_name a`).eq(i).text()
           let author = $(`.rankpage_box .rank_d_list .rank_d_b_cate a:nth-of-type(0)`).eq(i).text()
           let t2 = $(`.rankpage_box .rank_d_list .rank_d_b_info`).eq(i).text()
           let list = {imgFix,t1,author,t2}
           this.list.push(list)
        }
        console.log(this.list);
    }
},
mounted(){
    this.Novel()
}
}
</script>