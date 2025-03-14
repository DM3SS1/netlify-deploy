(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('AVC_theme', {
        "color": [
            "#007cc8",
            "#00b578",
            "#e8763c",
            "#f478ff",
            "#7a65e5",
            "#76c900",
            "#e09a0d",
            "#ff7ab2",
            "#149aa6",
            "#12c730"
        ],
        "backgroundColor": "rgba(255,255,255,0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "rgba(0,0,0,0.85)"
            },
            "subtextStyle": {
                "color": "rgba(0,0,0,0.45)"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "0"
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "4",
            "symbol": "circle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "0"
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": "4",
            "symbol": "circle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#000000"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#ff3141",
                "color0": "#00b578",
                "borderColor": "#ff3141",
                "borderColor0": "#00b578",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#000000"
            },
            "lineStyle": {
                "width": "1",
                "color": "rgba(0,0,0,0.25)"
            },
            "symbolSize": "4",
            "symbol": "circle",
            "smooth": false,
            "color": [
                "#007cc8",
                "#00b578",
                "#e8763c",
                "#f478ff",
                "#7a65e5",
                "#76c900",
                "#e09a0d",
                "#ff7ab2",
                "#149aa6",
                "#12c730"
            ],
            "label": {
                "color": "rgba(255,255,255,1)"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#ddd",
                "borderColor": "#eee",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#c12e34"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#e6b600",
                    "borderColor": "#ddd",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#c12e34"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#ddd",
                "borderColor": "#eee",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#c12e34"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "#e6b600",
                    "borderColor": "#ddd",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#c12e34"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(0,0,0,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(0,0,0,0.6)"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(0,0,0,0.65)"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(0,0,0,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(0,0,0,0.65)"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(0,0,0,0.06)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(0,0,0,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(0,0,0,0.65)"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(0,0,0,0.06)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "rgba(0,0,0,0.15)"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "rgba(0,0,0,0.65)"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "rgba(0,0,0,0.06)"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "rgba(0,0,0,0.45)"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#007cc8"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "rgba(0,0,0,0.65)"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "rgba(0,0,0,0.15)",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "rgba(0,0,0,0.15)",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#007cc8",
                "width": 1
            },
            "itemStyle": {
                "color": "#007cc8",
                "borderWidth": "0"
            },
            "controlStyle": {
                "color": "#007cc8",
                "borderColor": "#007cc8",
                "borderWidth": "0.5"
            },
            "checkpointStyle": {
                "color": "#2295d4",
                "borderColor": "#2295d4"
            },
            "label": {
                "color": "#007cc8"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#2295d4"
                },
                "controlStyle": {
                    "color": "#007cc8",
                    "borderColor": "#007cc8",
                    "borderWidth": "0.5"
                },
                "label": {
                    "color": "#007cc8"
                }
            }
        },
        "visualMap": {
            "color": [
                "#007cc8",
                "#a0e3fa"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "color": "rgba(255,255,255,1)"
            },
            "emphasis": {
                "label": {
                    "color": "rgba(255,255,255,1)"
                }
            }
        }
    });
}));
