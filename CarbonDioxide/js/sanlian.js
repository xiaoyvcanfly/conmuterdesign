// 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
var nodes = [];
var links = [];
var constMaxDepth = 2;
var constMaxChildren = 7;
var constMinChildren = 4;
var constMaxRadius = 10;
var constMinRadius = 2;



nodes = [//展示的节点  
    {
        "name": "新型城镇化",//节点名称  
        "value": 63,
        "depth": 0,
        "id": 0,
        "category": 3//与关系网类别索引对应，此处只有一个关系网所以这里写0  
    },
    {
        "name": "乡村振兴",//节点名称  
        "value": 63,
        "depth": 0,
        "id": 1,
        "category": 3//与关系网类别索引对应，此处只有一个关系网所以这里写0  
    },
    // 一级指标
    {
        "name": "人口城镇化",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 2,
    },
    {
        "name": "经济城镇化",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 3,
    },
    {
        "name": "社会城镇化",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 4,
    },
    {
        "name": "土地城镇化",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 5,
    },
    {
        "name": "绿色城镇化",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 6,
    },
    // --------- 二级指标
    //人口
    {
        "name": "城镇人口占比",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 7
    },

    {
        "name": "城市人口密度",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 8
    }, {
        "name": "城镇登记失业率",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 9
    },
    //经济
    {
        "name": "第三产业产值占比",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 10
    }, {
        "name": "城镇人均可支配收入",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 11
    }, {
        "name": "人均地区生产总值",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 12
    },
    //社会城镇化  
    {
        "name": "医疗卫生服务",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 13
    }, {
        "name": "每十万人口高等学校平均在校生数",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 14
    },
    {
        "name": "6岁以上受教育年限",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 15
    },
    {
        "name": "城镇基本医疗保险年末参保人数",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 16
    },
    {
        "name": "移动互联网用户",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 17
    },
    //土地城镇化
    {
        "name": "城镇建成区面积",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 18
    },
    {
        "name": "建成区经济密度",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 19
    },
    {
        "name": "人均城市道路面积",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 20
    },
    //绿色城镇化
    {
        "name": "人均公园绿地面积",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 21
    },
    {
        "name": "生活垃圾清运量",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 22
    },
    {
        "name": "生活垃圾无害化处理率",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 23
    },
    {
        "name": "建成区绿化覆盖率",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 24
    },
    //乡村振兴  
    {
        "name": "产业兴旺",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 25
    }, {
        "name": "乡风文明",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 26
    },
    {
        "name": "生活富裕",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 27
    }, {
        "name": "治理有效",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 28
    }, {
        "name": "生态宜居",
        "value": 40,
        "category": 2,
        "depth": 1,
        "id": 29
    },
    //二级指标
    {
        "name": "农林牧渔业产值占比",
        "value": 23,
        "category": 0,
        "depth": 1,
        "id": 29
    }, {
        "name": "农业机械化水平",
        "value": 23,
        "category": 0,
        "depth": 1,
        "id": 30
    }, {
        "name": "作物多元化",
        "value": 23,
        "category": 0,
        "depth": 1,
        "id": 31
    },
    //-------
    {
        "name": "养老服务水平",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 32
    }
    , {
        "name": "每公顷耕地化肥施用量",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 33
    }, {
        "name": "乡镇每万人卫生院床位数",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 34
    },
    //--------
    {
        "name": "每万人拥有乡镇文化站",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 35
    }, {
        "name": "农村投递路线",
        "value": 30,
        "category": 1,
        "depth": 2,
        "id": 36
    }, {
        "name": "农村宽带接入用户",
        "value": 23,
        "category": 0,
        "depth": 2,
        "id": 37
    },
    //------- 
    {
        "name": "农村居民人均消费支出",
        "value": 23,
        "category": 0,
        "depth": 2,
        "id": 38
    }, {
        "name": "农村居民平均每百户年末移动电话拥有量",
        "value": 30,
        "category": 1,
        "depth": 3,
        "id": 39
    }, {
        "name": "农村人均可支配收入",
        "value": 30,
        "category": 1,
        "depth": 3,
        "id": 40
    },
    //-------- 
    {
        "name": "农村居民最低生活保障人数",
        "value": 23,
        "category": 0,
        "depth": 3,
        "id": 41
    }, {
        "name": "发农村固定资产投资情况",
        "value": 23,
        "category": 0,
        "depth": 3,
        "id": 42
    }, {
        "name": "水土流失治理面积",
        "value": 23,
        "category": 0,
        "depth": 3,
        "id": 43
    }, {
        "name": "有效灌溉率",
        "value": 23,
        "category": 0,
        "depth": 3,
        "id": 44
    }
];
links = [//节点之间连接  
    //---------新型城镇化与一级指标连接
    {
        "source": 0,//起始节点，0表示第一个节点  
        "target": 2,
        "weight": 9
    },
    {
        "source": 0,
        "target": 2
    },
    {
        "source": 0,
        "target": 3
    },
    {
        "source": 0,//起始节点，0表示第一个节点  
        "target": 4,
    },
    {
        "source": 0,
        "target": 5
    },
    {
        "source": 0,
        "target": 6
    },
    //----------------------
    //一级指标与二级指标的连接


    {
        "source": 2,//起始节点，0表示第一个节点  
        "target": 7,
        "weight": 9
    },

    {
        "source": 2,
        "target": 8
    }, {
        "source": 2,
        "target": 9
    }, {
        "source": 3,
        "target": 10
    }
    , {
        "source": 3,
        "target": 11
    }, {
        "source": 3,
        "target": 12
    }, {
        "source": 4,
        "target": 13
    },
    {
        "source": 4,
        "target": 15
    }, {
        "source": 4,
        "target": 16
    }, {
        "source": 4,
        "target": 17
    }, {
        "source": 5,
        "target": 18
    }, {
        "source": 5,
        "target": 19
    }, {
        "source": 5,
        "target": 20
    }, {
        "source": 6,
        "target": 21
    }, {
        "source": 6,
        "target": 22
    }, {
        "source": 6,
        "target": 23
    }, {
        "source": 6,
        "target": 24
    },
    //乡村振兴一级指标连接

    {
        "source": 1,
        "target": 25
    }, {
        "source": 1,
        "target": 26
    }, {
        "source": 1,
        "target": 27
    }, {
        "source": 1,
        "target": 28
    }, {
        "source": 1,
        "target": 29
    }, {
        "source": 1,
        "target": 30
    },
    //一级指标和二级指标的连接

    {
        "source": 25,
        "target": 29
    }, {
        "source": 25,
        "target": 30
    }, {
        "source": 25,
        "target": 31
    }, {
        "source": 26,
        "target": 32
    }, {
        "source": 26,
        "target": 33
    }, {
        "source": 26,
        "target": 34
    }, {
        "source": 27,
        "target": 35
    }, {
        "source": 27,
        "target": 36
    }, {
        "source": 27,
        "target": 37
    }, {
        "source": 28,
        "target": 38
    }, {
        "source": 28,
        "target": 39
    }, {
        "source": 28,
        "target": 40
    }, {
        "source": 29,
        "target": 41
    }, {
        "source": 29,
        "target": 42
    }, {
        "source": 29,
        "target": 43
    }, {
        "source": 29,
        "target": 44
    }
]

for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id == "0") {
        nodes[i].itemStyle = {
            normal: {
                borderColor: '#000',
                color: 'blue',
                label: {
                    show: true,
                }
            }
        }
    }
    else if (nodes[i].id == "22") {
        nodes[i].itemStyle = {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        color: 'yellow'
                    }

                },
            }
        }
    }
    //22
    nodes[i]["symbolSize"] = nodes[i].value * 1.2;
}
console.log(nodes);
require(
    [
        'echarts',
        'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var guanxi = ec.init(document.getElementById('guanxi'));
        option3 = {
            title: {
                x: 'right',
                y: 'bottom'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}'
            },
            toolbox: {
                show: true,
                feature: {
                    restore: { show: true },
                    //  magicType: {show: true, type: ['force', 'chord']},
                    saveAsImage: { show: true }
                }
            },
            legend: {
                x: 'left',
                data: ['主级', '一级', '二级'],
                orient: 'left',
                x: 10,
                y: 10,
                textStyle: {
                    fontSize: '14',
                    color: '#fff'
                },
            },
            series: [
                {
                    type: 'force',
                    name: "Force tree",
                    ribbonType: false,
                    categories: [
                        {
                            name: '主级'
                        },
                        {
                            name: '一级'
                        },
                        {
                            name: '二级'
                        }
                    ],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            nodeStyle: {
                                brushType: 'both',
                                borderColor: 'rgba(255,215,0,0.6)',
                                borderWidth: 1
                            }
                        }
                    },
                    minRadius: constMinRadius,
                    maxRadius: constMaxRadius,
                    symbolSize: function (params) {
                        console.log(params)
                    },
                    coolDown: 0.995,
                    steps: 10,
                    nodes: nodes,
                    links: links,
                    steps: 1
                }
            ]
        };
        console.log(option3)
        guanxi.setOption(option3);
    });
