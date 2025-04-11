const base = {
    get() {
        return {
            url : "http://localhost:8080/jingdiandianyingtuijian/",
            name: "jingdiandianyingtuijian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jingdiandianyingtuijian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "经典电影推荐网站"
        } 
    }
}
export default base
