var app = new Vue({
    el: '.app',
    data: {
        isGrap:false,
        isMore:false,
        showBox:false,
        MoreItems:{
            web:{isShow:false,moreTxt:'More'},
            ui:{isShow:false,moreTxt:'More'},
            side:{isShow:false,moreTxt:'More'}
        },
        box:{
            type:'',
            title:'',
            data:[]
        },
        webDataMore: [
            {
                img: "images/WEB/new/03.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2023",
                    "AIKA 四週年改版活動設計"
                ],
                link:'https://landing.mangot5.com/template/aika/event/230202_4thanniversary/index.html'
            },
            {
                img: "images/WEB/new/02.jpg",
                info: [
                    "Html、Css",
                    "2022",
                    "風色幻想 活動切版"
                ],
                link:'https://landing.mangot5.com/template/wf/event/221124_Istadio/index.html'
            },
            {
                img: "images/WEB/new/01.jpg",
                info: [
                    "Html、Css",
                    "2022",
                    "巨商 活動切版"
                ],
                link:'https://landing.mangot5.com/template/gs/event/221118_dragon/index.html'
            },
            {
                img: "https://pentas.8yen.tw/works/2021xmas/thumb.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2021",
                    "2021Xmas"
                ],
                link:'https://pentas.8yen.tw/works/2021xmas/index.html'
            },
            {
                img: "images/WEB/02.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2017",
                    "遊戲基地新推出Xplay免下載遊戲APP宣傳活動，下載遊戲以日本遊戲為主，以富士山形象代表日本。"
                ],
                link:'updatas/web/02/index.html'
            },
            /*
            {
                img: "images/WEB/01.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2017",
                    "G遊點儲值活動，針對遊戲基地會員G遊點儲值推廣抽獎活動，提升會員儲值率，以雞年及PS4為設計主軸。"
                ],
                link:'updatas/web/01/index.html'
            },
            {
                img: "images/WEB/03.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2017",
                    "遊戲基地17周年慶回饋會員活動，活動主題為開啟喜愛的寶箱隨機獲得獎勵，設計為海盜風格的寶箱遊戲。"
                ],
                link:'updatas/web/03/index.html'
            },
            {
                img: "images/WEB/04.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2018",
                    "2018農曆新年節慶活動，集點抽紅包換取紀念徽章，增加會員黏著度。"
                ],
                link:'updatas/web/04/index.html'
            },
            {
                img: "images/WEB/05.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2016",
                    "遊戲基地站內直接玩推廣活動，網頁遊戲可用基地帳號登入直接玩，以對戰的設計為主軸。"
                ],
                link:'updatas/web/05/index.html'
            },
            {
                img: "images/WEB/06.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2016",
                    "遊戲基地APP推廣活動，藉此增加下載率。"
                ],
                link:'updatas/web/06/index.html'
            },
            {
                img: "images/WEB/07.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2016",
                    "遊戲基地APP介紹頁，介紹APP內容，方便會員下載。"
                ],
                link:'updatas/web/07/index.html'
            },
            {
                img: "images/WEB/08.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2017",
                    "遊戲基地會員日，會員日可以領取禮物，誘導會員參加活動，增加會員黏著度。"
                ],
                link:'updatas/web/08/index.html'
            }*/
        ],
        h5DataMore: [
            {
                img: "images/h5/h5-1.jpg",
                link:'updatas/html5/01/index.html'
            },
            {
                img: "images/h5/h5-2.jpg",
                link:'updatas/html5/02/index.html'
            }
        ],
        uiDataMore: [
            {
                img: "images/UI/01.jpg",
                info: [
                    "視覺設計、Html、Css",
                    "2018",
                    "2018遊戲基地改版，公司改組希望有全新的遊戲基地形象，以行動裝置方便閱讀為設計方向，簡潔清新為主要風格。"
                ],
                link:'updatas/ui/01/home/Home.html'
            },
            {
                img: "images/UI/02.jpg",
                info: [
                    "視覺設計",
                    "2016",
                    "2016遊戲基地改版，希望能與以往不同的遊戲基地，首頁呈現以遊戲入口網站為方向，遊戲資訊量豐富。"
                ],
                link:'updatas/ui/02/index.html'
            },
            {
                img: "images/UI/03.jpg",
                info: [
                    "視覺設計",
                    "2016",
                    "Pokemon 專區，因應Pokémon遊戲熱潮，網站呈現以便玩家查詢相關資訊為規劃的方向。"
                ],
                link:'updatas/ui/03/index.html'
            },
            /*
            {
                img: "images/UI/04.jpg",
                info: [
                    "視覺設計",
                    "2016",
                    "遊戲基地App layout，將產品規劃的Wireframe做成mockup的版本，方便工程師做開發。"
                ],
                link:'updatas/ui/04/index.html'
            },
            {
                img: "images/UI/06.jpg",
                info: [
                    "視覺設計、Html、Css、UI",
                    "2020",
                    "優化Collego官網，重新規畫menu動線，色系重新配置，設計風格年輕化，讓高中生也會喜歡使用的網站。"
                ],
                link:'updatas/ui/06/index.html'
            }*/
        ],
        graphicData: [
            {thumb: "updatas/grap/new/05.jpg",img:"updatas/grap/new/05.jpg"},
            {thumb: "updatas/grap/10_thumb.jpg",img:"updatas/grap/10.png"},
            {thumb: "updatas/grap/13_thumb.jpg",img:"updatas/grap/13.jpg"},
            {thumb: "updatas/grap/new/01.jpg",img:"updatas/grap/new/01.jpg"},
            {thumb: "updatas/grap/new/04.jpg",img:"updatas/grap/new/04.jpg"},
            {thumb: "updatas/grap/new/03.jpg",img:"updatas/grap/new/03.jpg"},
            {thumb: "updatas/grap/new/02.jpg",img:"updatas/grap/new/02.jpg"},
            {thumb: "updatas/grap/new/06.jpg",img:"updatas/grap/new/06.jpg"},
            {thumb: "updatas/grap/new/07.jpg",img:"updatas/grap/new/07.jpg"},
            {thumb: "updatas/grap/new/11.jpg",img:"updatas/grap/new/11.jpg"},
            {thumb: "updatas/grap/new/12.jpg",img:"updatas/grap/new/12.jpg"},
            {thumb: "updatas/grap/new/14.jpg",img:"updatas/grap/new/14.jpg"},
            

        ],
        sideDataMore: [
            {
                img: "updatas/side/Side-Project.jpg",
                info: []
            }
        ]
    },
    methods: {
        getPreview(ary){
            let newAry = ary.slice(0,6);
            return newAry;
        },
        openGraphic(target){
            this.isGrap = true;
            this.isMore = false;
            this.showBox = !this.showBox;
            $('.grap .slick-dots li').eq(target).find('button').click();
        },
        openMore(target){
            this.isGrap = false;
            this.isMore = true;
            this.showBox = !this.showBox;
            if(target == 'web'){
                this.box.type = 'list';
                this.box.title = "Web Design";
                this.box.data = this.webDataMore;
            }
            if(target == 'ui'){
                this.box.type = 'list';
                this.box.title = "Ui Design";
                this.box.data = this.uiDataMore;
            }
            if(target == 'side'){
                this.box.type = 'img';
                this.box.title = "Side Project";
                this.box.data = this.sideDataMore;
            }
        },
        closeMore(){
            this.showBox = !this.showBox;
            this.isGrap = !this.isGrap;
        }
    },
})