/*
* Kent State University Registrar's Office
* Registration Process
* Heuristic Evaluation Visualization Exercise
* Copyright Haleh Bahrami 2015
*/

FusionCharts.ready(function () {

	var heuristicAnalysis2 = new FusionCharts({
		type: 'column2d',
        renderAt: 'chart-container2',
        width: '800',
        height: '700',
        dataFormat: 'json',
        dataSource: {
		    "chart": {
		        "caption": "Quarterly Sales - By employee",
		        "subcaption": "Last year",
		        "xaxisname": "Employee",
		        "yaxisname": "Amount (in USD)",
		        "numberprefix": "$",
		        "showValues": "0",
		        "paletteColors": "#EED17F,#97CBE7,#074868,#B0D67A,#2C560A,#DD9D82",
		        "theme": "fint"
		    },
		    "categories": [
		        {
		            "category": [
		                {
		                    "label": "Mark"
		                },
		                {
		                    "label": "John"
		                },
		                {
		                    "label": "Symonds"
		                },
		                {
		                    "label": "Peter"
		                }
		            ]
		        }
		    ],
		    "dataset": [
		        {
		            "seriesname": "Q1",
		            "data": [
		                {
		                    "value": "27400"
		                },
		                {
		                    "value": "29800"
		                },
		                {
		                    "value": "25800"
		                },
		                {
		                    "value": "26800"
		                }
		            ]
		        },
		        {
		            "seriesname": "Q2",
		            "data": [
		                {
		                    "value": "29600"
		                },
		                {
		                    "value": "32600"
		                },
		                {
		                    "value": "31800"
		                },
		                {
		                    "value": "36700"
		                }
		            ]
		        },
		        {
		            "seriesname": "Q3",
		            "data": [
		                {
		                    "value": "29700"
		                },
		                {
		                    "value": "31900"
		                },
		                {
		                    "value": "34800"
		                },
		                {
		                    "value": "24800"
		                }
		            ]
		        },
		        {
		            "seriesname": "Q4",
		            "data": [
		                {
		                    "value": "35000"
		                },
		                {
		                    "value": "27500"
		                },
		                {
		                    "value": "32500"
		                },
		                {
		                    "value": "34000"
		                }
		            ]
		        }
		    ]
		}
	});

    var heuristicAnalysis = new FusionCharts({
        type: 'heatmap',
        renderAt: 'chart-container',
        width: '800',
        height: '700',
        dataFormat: 'json',
        dataSource:  {
            
            "chart": {
                "caption": "Raw Data: Heuristic Analysis Results: KSU Registration System",
                "subcaption": "By Haleh Bahrami",
                "xAxisName":"Heuristics",
                "yAxisName":"Team Member or Median",
                "showplotborder": "1",
                "xAxisLabelsOnTop": "1",
                "plottooltext":"",
                "theme" : "fint",
                 
                "baseFontColor" : "#333333",
                "baseFont" : "Helvetica Neue,Arial",
                "captionFontSize" : "14",
                "subcaptionFontSize" : "14",
                "subcaptionFontBold" : "0",
                "showBorder" : "0",
                "bgColor" : "#ffffff",
                "showShadow" : "0",
                "usePlotGradientColor" :"0",
                "canvasBgColor" : "#ffffff",
                "canvasBorderAlpha" : "0",
                "legendBgAlpha" : "0",
                "legendBorderAlpha" : "0",
                "legendShadow" : "0",
                "legendItemFontSize" : "10",
                "legendItemFontColor" : "#666666",
                "toolTipColor" : "#ffffff",
                "toolTipBorderThickness" : "0",
                "toolTipBgColor" : "#000000",
                "toolTipBgAlpha" : "80",
                "toolTipBorderRadius" : "2",
                "toolTipPadding" : "5"
                
            },
            "rows": [
               {
                    "row":[
                      {
                        "id":"E1",
                        "label":"Andrea"
                      },
                      {
                        "id":"E2",
                        "label":"Haleh"
                      },
                      {
                        "id":"E3",
                        "label":"Hugh"
                      },
                      {
                        "id":"E4",
                        "label":"Debbie"
                      },
                      {
                        "id":"E5",
                        "label":"Median"
                      }
                    ]
            }],
            "columns": [
               {
                    "column":[
                      {
                        "id":"H1",
                        "label":"H1: It is easy to know the current location within the overall map of the site"
                      },
                      {
                        "id":"H2",
                        "label":"H2: It is clear what information is available at the current location"
                      },
                      {
                        "id":"H3",
                        "label":"H3: The current information matches what you expect to find"
                      },
                      {
                        "id":"H4",
                        "label":"H4:  It is clear where you can go from the current location"
                      },
                      {
                        "id":"H5",
                        "label":"H5: It is always clear what is happening from each action you perform"
                      },
                      {
                        "id":"H6",
                        "label":"H6: It is always easy to return to the Home Page"
                      },
                      {
                        "id":"H7",
                        "label":"H7: It is easy to access all major portions of the site from the Home Page"
                      },
                      {
                        "id":"H8",
                        "label":"H8: No unnecessary technologies are used"
                      },
                      {
                        "id":"H9",
                        "label":"H9: Graphic links are also available as text links"
                      },
                      {
                        "id":"H10",
                        "label":"H10: Links are used and appear in standard web style"
                      },
                      {
                        "id":"H11",
                        "label":"H11: Menus are used and appear in standard web style"
                      },
                      {
                        "id":"H12",
                        "label":"H12: The site supports all major browsers"
                      },
                      {
                        "id":"H13",
                        "label":"H13: There is clear notification if special technologies or browser versions are required"
                      },
                      {
                        "id":"H14",
                        "label":"H14: Link labels match destination page titles or headers"
                      },
                      {
                        "id":"H15",
                        "label":"H15: Overall, the site behaves like one would expect a web site to behave"
                      },
                      {
                        "id":"H16",
                        "label":"H16: Available actions are always clearly presented"
                      },
                      {
                        "id":"H17",
                        "label":"H17: Labels and links are described clearly"
                      },
                      {
                        "id":"H18",
                        "label":"H18: The site structure is simple and clear without any unnecessary complications"
                      },
                      {
                        "id":"H19",
                        "label":"H19: There are no instances of extraneous information"
                      },
                      {
                        "id":"H20",
                        "label":"H20: There are no instances of misplaced information"
                      },
                      {
                        "id":"H21",
                        "label":"H21: Color choices allow for easy readability"
                      },
                      {
                        "id":"H22",
                        "label":"H22: The site is aesthetically pleasing"
                      },
                      {
                        "id":"H23",
                        "label":"23: A site map or other navigational assistance is always readily available"
                      },
                      {
                        "id":"H24",
                        "label":"H24: If needed, an FAQ is available"
                      },
                      {
                        "id":"H25",
                        "label":"H25: No errors occur unnecessarily"
                      },
                      {
                        "id":"H26",
                        "label":"H26: If necessary, a search function is readily available"
                      },
                      {
                        "id":"H27",
                        "label":"H27: If necessary, error messages are clear and in plain language"
                      },
                      {
                        "id":"H28",
                        "label":"H28: It is easy to cancel or exit from operations"
                      },
                      {
                        "id":"H29",
                        "label":"H29: It is easy to contact support through email or a web form"
                      },
                      {
                        "id":"H30",
                        "label":"H30: The content language is clear and simple"
                      },
                      {
                        "id":"H31",
                        "label":"H31: The vocabulary is appropriate for the intended audience"
                      }
                    ]
            }],

            "dataset": [
                {
                    "data": [
                        {
                            "rowid": "E1",
                            "columnid": "H1",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H2",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H3",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H4",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H5",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H6",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H7",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H8",
                            "value": "2",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H9",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H10",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H11",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H12",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H13",
                            "value": "2",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H14",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H15",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H16",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H17",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H18",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H19",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H20",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H21",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H22",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H23",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H24",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H25",
                            "value": "1",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H26",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H27",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H28",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H29",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H30",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E1",
                            "columnid": "H31",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H1",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H2",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H3",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H4",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H5",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H6",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H7",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H8",
                            "value": "2",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H9",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H10",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H11",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H12",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H13",
                            "value": "1",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H14",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H15",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H16",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H17",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H18",
                            "value": "1",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H19",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H20",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H21",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H22",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H23",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H24",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H25",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H26",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H27",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H28",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H29",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H30",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E2",
                            "columnid": "H31",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H1",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H2",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H3",
                            "value": "1",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H4",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H5",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H6",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H7",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H8",
                            "value": "2",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H9",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H10",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H11",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H12",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H13",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H14",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H15",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H16",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H17",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H18",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H19",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H20",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H21",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H22",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H23",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H24",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H25",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H26",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H27",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H28",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H29",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H30",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E3",
                            "columnid": "H31",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H1",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H2",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H3",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H4",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H5",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H6",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H7",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H8",
                            "value": "2",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H9",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H10",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H11",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H12",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H13",
                            "value": "1",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H14",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H15",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H16",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H17",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H18",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H19",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H20",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H21",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H22",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H23",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H24",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H25",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H26",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H27",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H28",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H29",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H30",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E4",
                            "columnid": "H31",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H1",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H2",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H3",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H4",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H5",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H6",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H7",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H8",
                            "value": "2",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H9",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H10",
                            "value": "0.5",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H11",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H12",
                            "value": "2",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H13",
                            "value": "1",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H14",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H15",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H16",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H17",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H18",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H19",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H20",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H21",
                            "value": "0.5",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H22",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H23",
                            "value": "1.5",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H24",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H25",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H26",
                            "value": "0.5",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H27",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H28",
                            "value": "0",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H29",
                            "value": "1.5",
                            "tllabel": "",
                            "trlabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H30",
                            "value": "0",
                            "tllabel": ""
                        },
                        {
                            "rowid": "E5",
                            "columnid": "H31",
                            "value": "1",
                            "tllabel": "",
                            "trlabel": ""
                        }

                    ]
                }
            ],
            "colorrange": {
                "gradient": "0",
                "minvalue": "0",
                "code": "E24B1A",
                "startlabel": "Poor",
                "endlabel": "Excellent",
                "color": [
                    {
                        "code": "E24B1A",
                        "minvalue": "0",
                        "maxvalue": ".9",
                        "label": "Poor"
                    },
                    {
                        "code": "F6BC33",
                        "minvalue": "1",
                        "maxvalue": "1.5",
                        "label": "Good"
                    },
                    {
                        "code": "6DA81E",
                        "minvalue": "1.6",
                        "maxvalue": "2",
                        "label": "Excellent"
                    }
                ]
            }
        }
    });
    heuristicAnalysis.render();
});