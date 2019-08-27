
const {renderView} = require('./build/');

const data = {
    "sitecore": {
        "context": {
            "pageEditing": false,
            "site": {
                "name": "JssDisconnectedLayoutService"
            },
            "pageState": "normal",
            "language": "en"
        },
        "route": {
            "databaseName": "available-in-connected-mode",
            "deviceId": "available-in-connected-mode",
            "itemId": "available-in-connected-mode",
            "itemLanguage": "en",
            "itemVersion": 1,
            "layoutId": "available-in-connected-mode",
            "templateId": "available-in-connected-mode",
            "templateName": "available-in-connected-mode",
            "name": "styleguide",
            "fields": {
                "pageTitle": {
                    "value": "Styleguide | Sitecore JSS"
                }
            },
            "placeholders": {
                "jss-main": [{
                    "uid": "{E02DDB9B-A062-5E50-924A-1940D7E053CE}",
                    "componentName": "ContentBlock",
                    "dataSource": "available-in-connected-mode",
                    "params": {},
                    "fields": {
                        "heading": {
                            "value": "JSS Styleguide"
                        },
                        "content": {
                            "value": "<p>This is a live set of examples of how to use JSS. For more information on using JSS, please see <a href=\"https://jss.sitecore.net\" target=\"_blank\" rel=\"noopener noreferrer\">the documentation</a>.</p>\n<p>The content and layout of this page is defined in <code>/data/routes/styleguide/en.yml</code></p>\n"
                        }
                    }
                }, {
                    "uid": "{34A6553C-81DE-5CD3-989E-853F6CB6DF8C}",
                    "componentName": "Styleguide-Layout",
                    "dataSource": "available-in-connected-mode",
                    "params": {},
                    "fields": {},
                    "placeholders": {
                        "jss-styleguide-layout": [{
                            "uid": "{B7C779DA-2B75-586C-B40D-081FCB864256}",
                            "componentName": "Styleguide-Section",
                            "dataSource": "available-in-connected-mode",
                            "params": {},
                            "fields": {
                                "heading": {
                                    "value": "Content Data"
                                }
                            },
                            "placeholders": {
                                "jss-styleguide-section": [{
                                    "uid": "{63B0C99E-DAC7-5670-9D66-C26A78000EAE}",
                                    "componentName": "Styleguide-FieldUsage-Text",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Single-Line Text"
                                        },
                                        "sample": {
                                            "value": "This is a sample text field. <mark>HTML is encoded.</mark> In Sitecore, editors will see a <input type=\"text\">."
                                        },
                                        "sample2": {
                                            "value": "This is another sample text field using rendering options. <mark>HTML supported with encode=false.</mark> Cannot edit because editable=false."
                                        }
                                    }
                                }, {
                                    "uid": "{F1EA3BB5-1175-5055-AB11-9C48BF69427A}",
                                    "componentName": "Styleguide-FieldUsage-Text",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Multi-Line Text"
                                        },
                                        "description": {
                                            "value": "<small>Multi-line text tells Sitecore to use a <code>textarea</code> for editing; consumption in JSS is the same as single-line text.</small>"
                                        },
                                        "sample": {
                                            "value": "This is a sample multi-line text field. <mark>HTML is encoded.</mark> In Sitecore, editors will see a textarea."
                                        },
                                        "sample2": {
                                            "value": "This is another sample multi-line text field using rendering options. <mark>HTML supported with encode=false.</mark>"
                                        }
                                    }
                                }, {
                                    "uid": "{69CEBC00-446B-5141-AD1E-450B8D6EE0AD}",
                                    "componentName": "Styleguide-FieldUsage-RichText",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Rich Text"
                                        },
                                        "sample": {
                                            "value": "<p>This is a sample rich text field. <mark>HTML is always supported.</mark> In Sitecore, editors will see a WYSIWYG editor for these fields.</p>"
                                        },
                                        "sample2": {
                                            "value": "<p>Another sample rich text field, using options. Keep markup entered in rich text fields as simple as possible - ideally bare tags only (no classes). Adding a wrapping class can help with styling within rich text blocks.</p>\n<marquee>But you can use any valid HTML in a rich text field!</marquee>\n"
                                        }
                                    }
                                }, {
                                    "uid": "{5630C0E6-0430-5F6A-AF9E-2D09D600A386}",
                                    "componentName": "Styleguide-FieldUsage-Image",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Image"
                                        },
                                        "sample1": {
                                            "value": {
                                                "src": "/data/media/img/sc_logo.png",
                                                "alt": "Sitecore Logo"
                                            }
                                        },
                                        "sample2": {
                                            "value": {
                                                "src": "/data/media/img/jss_logo.png",
                                                "alt": "Sitecore JSS Logo"
                                            }
                                        }
                                    }
                                }, {
                                    "uid": "{BAD43EF7-8940-504D-A09B-976C17A9A30C}",
                                    "componentName": "Styleguide-FieldUsage-File",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "File"
                                        },
                                        "description": {
                                            "value": "<small>Note: Sitecore does not support inline editing of File fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.</small>\n"
                                        },
                                        "file": {
                                            "value": {
                                                "src": "/data/media/files/jss.pdf",
                                                "title": "Example File",
                                                "description": "This data will be added to the Sitecore Media Library on import"
                                            }
                                        }
                                    }
                                }, {
                                    "uid": "{FF90D4BD-E50D-5BBF-9213-D25968C9AE75}",
                                    "componentName": "Styleguide-FieldUsage-Number",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Number"
                                        },
                                        "description": {
                                            "value": "<small>Number tells Sitecore to use a number entry for editing.</small>"
                                        },
                                        "sample": {
                                            "value": 1.21
                                        },
                                        "sample2": {
                                            "value": 71
                                        }
                                    }
                                }, {
                                    "uid": "{B5C1C74A-A81D-59B2-85D8-09BC109B1F70}",
                                    "componentName": "Styleguide-FieldUsage-Checkbox",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Checkbox"
                                        },
                                        "description": {
                                            "value": "<small>Note: Sitecore does not support inline editing of Checkbox fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.</small>\n"
                                        },
                                        "checkbox": {
                                            "value": true
                                        },
                                        "checkbox2": {
                                            "value": false
                                        }
                                    }
                                }, {
                                    "uid": "{F166A7D6-9EC8-5C53-B825-33405DB7F575}",
                                    "componentName": "Styleguide-FieldUsage-Date",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Date"
                                        },
                                        "description": {
                                            "value": "<p><small>Both <code>Date</code> and <code>DateTime</code> field types are available. Choosing <code>DateTime</code> will make Sitecore show editing UI for time; both types store complete date and time values internally. Date values in JSS are formatted using <a href=\"https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations\" target=\"_blank\">ISO 8601 formatted strings</a>, for example <code>2012-04-23T18:25:43.511Z</code>.</small></p>\n<div class=\"alert alert-warning\"><small>Note: this is a JavaScript date format (e.g. <code>new Date().toISOString()</code>), and is different from how Sitecore stores date field values internally. Sitecore-formatted dates will not work.</small></div>\n"
                                        },
                                        "date": {
                                            "value": "2012-05-04T00:00:00Z"
                                        },
                                        "dateTime": {
                                            "value": "2018-03-14T15:00:00Z"
                                        }
                                    }
                                }, {
                                    "uid": "{56A9562A-6813-579B-8ED2-FDDAB1BFD3D2}",
                                    "componentName": "Styleguide-FieldUsage-Link",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "General Link"
                                        },
                                        "description": {
                                            "value": "<p>A <em>General Link</em> is a field that represents an <code>&lt;a&gt;</code> tag.</p>"
                                        },
                                        "externalLink": {
                                            "value": {
                                                "href": "https://www.sitecore.com",
                                                "text": "Link to Sitecore"
                                            }
                                        },
                                        "internalLink": {
                                            "value": {
                                                "href": "/"
                                            }
                                        },
                                        "mediaLink": {
                                            "value": {
                                                "href": "/data/media/files/jss.pdf",
                                                "text": "Link to PDF"
                                            }
                                        },
                                        "emailLink": {
                                            "value": {
                                                "href": "mailto:foo@bar.com",
                                                "text": "Send an Email"
                                            }
                                        },
                                        "paramsLink": {
                                            "value": {
                                                "href": "https://dev.sitecore.net",
                                                "text": "Sitecore Dev Site",
                                                "target": "_blank",
                                                "class": "font-weight-bold",
                                                "title": "<a> title attribute"
                                            }
                                        }
                                    }
                                }, {
                                    "uid": "{A44AD1F8-0582-5248-9DF9-52429193A68B}",
                                    "componentName": "Styleguide-FieldUsage-ItemLink",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Item Link"
                                        },
                                        "description": {
                                            "value": "<p>\n  <small>\n    Item Links are a way to reference another content item to use data from it.\n    Referenced items may be shared.\n    To reference multiple content items, use a <em>Content List</em> field.<br />\n    <strong>Note:</strong> Sitecore does not support inline editing of Item Link fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.\n  </small>\n</p>\n"
                                        },
                                        "sharedItemLink": {
                                            "id": "available-in-connected-mode",
                                            "fields": {
                                                "textField": {
                                                    "value": "ItemLink Demo (Shared) Item 1 Text Field"
                                                }
                                            }
                                        },
                                        "localItemLink": {
                                            "id": "available-in-connected-mode",
                                            "fields": {
                                                "textField": {
                                                    "value": "Referenced item textField"
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    "uid": "{2F609D40-8AD9-540E-901E-23AA2600F3EB}",
                                    "componentName": "Styleguide-FieldUsage-ContentList",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Content List"
                                        },
                                        "description": {
                                            "value": "<p>\n  <small>\n    Content Lists are a way to reference zero or more other content items.\n    Referenced items may be shared.\n    To reference a single content item, use an <em>Item Link</em> field.<br />\n    <strong>Note:</strong> Sitecore does not support inline editing of Content List fields. The value must be edited in Experience Editor by using the edit rendering fields button (looks like a pencil) with the whole component selected.\n  </small>\n</p>\n"
                                        },
                                        "sharedContentList": [{
                                            "fields": {
                                                "textField": {
                                                    "value": "ContentList Demo (Shared) Item 1 Text Field"
                                                }
                                            },
                                            "id": "available-in-connected-mode"
                                        }, {
                                            "fields": {
                                                "textField": {
                                                    "value": "ContentList Demo (Shared) Item 2 Text Field"
                                                }
                                            },
                                            "id": "available-in-connected-mode"
                                        }],
                                        "localContentList": [{
                                            "fields": {
                                                "textField": {
                                                    "value": "Hello World Item 1"
                                                }
                                            },
                                            "id": "available-in-connected-mode"
                                        }, {
                                            "fields": {
                                                "textField": {
                                                    "value": "Hello World Item 2"
                                                }
                                            },
                                            "id": "available-in-connected-mode"
                                        }]
                                    }
                                }, {
                                    "uid": "{352ED63D-796A-5523-89F5-9A991DDA4A8F}",
                                    "componentName": "Styleguide-FieldUsage-Custom",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Custom Fields"
                                        },
                                        "description": {
                                            "value": "<p>\n  <small>\n    Any Sitecore field type can be consumed by JSS.\n    In this sample we consume the <em>Integer</em> field type.<br />\n    <strong>Note:</strong> For field types with complex data, custom <code>FieldSerializer</code>s may need to be implemented on the Sitecore side.\n  </small>\n</p>\n"
                                        },
                                        "customIntField": {
                                            "value": 31337
                                        }
                                    }
                                }]
                            }
                        }, {
                            "uid": "{7DE41A1A-24E4-5963-8206-3BB0B7D9DD69}",
                            "componentName": "Styleguide-Section",
                            "dataSource": "available-in-connected-mode",
                            "params": {},
                            "fields": {
                                "heading": {
                                    "value": "Layout Patterns"
                                }
                            },
                            "placeholders": {
                                "jss-header": [{
                                    "uid": "{1A6FCB1C-E97B-5325-8E4E-6E13997A4A1A}",
                                    "componentName": "Styleguide-Layout-Reuse",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {}
                                }],
                                "jss-styleguide-section": [{
                                    "uid": "{3A5D9C50-D8C1-5A12-8DA8-5D56C2A5A69A}",
                                    "componentName": "Styleguide-Layout-Reuse",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Reusing Content"
                                        },
                                        "description": {
                                            "value": "<p>JSS provides powerful options to reuse content, whether it's sharing a common piece of text across pages or sketching out a site with repeating <em>lorem ipsum</em> content.</p>"
                                        }
                                    },
                                    "placeholders": {
                                        "jss-reuse-example": [{
                                            "uid": "{AA328B8A-D6E1-5B37-8143-250D2E93D6B8}",
                                            "componentName": "ContentBlock",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "content": {
                                                    "value": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>"
                                                }
                                            }
                                        }, {
                                            "uid": "{C4330D34-623C-556C-BF4C-97C93D40FB1E}",
                                            "componentName": "ContentBlock",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "content": {
                                                    "value": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>"
                                                }
                                            }
                                        }, {
                                            "uid": "{A42D8B1C-193D-5627-9130-F7F7F87617F1}",
                                            "componentName": "ContentBlock",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "content": {
                                                    "value": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis mauris, pretium id neque vitae, vulputate pellentesque tortor. Mauris hendrerit dolor et ipsum lobortis bibendum non finibus neque. Morbi volutpat aliquam magna id posuere. Duis commodo cursus dui, nec interdum velit congue nec. Aliquam erat volutpat. Aliquam facilisis, sapien quis fringilla tincidunt, magna nulla feugiat neque, a consectetur arcu orci eu augue.</p>"
                                                }
                                            }
                                        }, {
                                            "uid": "{0F4CB47A-979E-5139-B50B-A8E40C73C236}",
                                            "componentName": "ContentBlock",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "content": {
                                                    "value": "<p>Mix and match reused and local content. Check out <code>/data/routes/styleguide/en.yml</code> to see how.</p>"
                                                }
                                            }
                                        }]
                                    }
                                }, {
                                    "uid": "{538E4831-F157-50BB-AC74-277FCAC9FDDB}",
                                    "componentName": "Styleguide-Layout-Tabs",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Tabs"
                                        },
                                        "description": {
                                            "value": "<p>Creating hierarchical components like tabs is made simpler in JSS because it's easy to introspect the layout structure.</p>"
                                        }
                                    },
                                    "placeholders": {
                                        "jss-tabs": [{
                                            "uid": "{7ECB2ED2-AC9B-58D1-8365-10CA74824AF7}",
                                            "componentName": "Styleguide-Layout-Tabs-Tab",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "title": {
                                                    "value": "Tab 1"
                                                },
                                                "content": {
                                                    "value": "<p>Tab 1 contents!</p>"
                                                }
                                            }
                                        }, {
                                            "uid": "{AFD64900-0A61-50EB-A674-A7A884E0D496}",
                                            "componentName": "Styleguide-Layout-Tabs-Tab",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "title": {
                                                    "value": "Tab 2"
                                                },
                                                "content": {
                                                    "value": "<p>Tab 2 contents!</p>"
                                                }
                                            }
                                        }, {
                                            "uid": "{44C12983-3A84-5462-84C0-6CA1430050C8}",
                                            "componentName": "Styleguide-Layout-Tabs-Tab",
                                            "dataSource": "available-in-connected-mode",
                                            "params": {},
                                            "fields": {
                                                "title": {
                                                    "value": "Tab 3"
                                                },
                                                "content": {
                                                    "value": "<p>Tab 3 contents!</p>"
                                                }
                                            }
                                        }]
                                    }
                                }]
                            }
                        }, {
                            "uid": "{2D806C25-DD46-51E3-93DE-63CF9035122C}",
                            "componentName": "Styleguide-Section",
                            "dataSource": "available-in-connected-mode",
                            "params": {},
                            "fields": {
                                "heading": {
                                    "value": "Sitecore Patterns"
                                }
                            },
                            "placeholders": {
                                "jss-styleguide-section": [{
                                    "uid": "{471FA16A-BB82-5C42-9C95-E7EAB1E3BD30}",
                                    "componentName": "Styleguide-SitecoreContext",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Sitecore Context"
                                        },
                                        "description": {
                                            "value": "<p><small>The Sitecore Context contains route-level data about the current context - for example, <code>pageState</code> enables conditionally executing code based on whether Sitecore is in Experience Editor or not.</small></p>"
                                        }
                                    }
                                }, {
                                    "uid": "{21F21053-8F8A-5436-BC79-E674E246A2FC}",
                                    "componentName": "Styleguide-RouteFields",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Route-level Fields"
                                        },
                                        "description": {
                                            "value": "<p><small>Route-level content fields are defined on the <em>route</em> instead of on a <em>component</em>. This allows multiple components to share the field data on the same route - and querying is much easier on route level fields, making <em>custom route types</em> ideal for filterable/queryable data such as articles.</small></p>"
                                        }
                                    }
                                }, {
                                    "uid": "{A0A66136-C21F-52E8-A2EA-F04DCFA6A027}",
                                    "componentName": "Styleguide-ComponentParams",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {
                                        "cssClass": "alert alert-success",
                                        "columns": "5",
                                        "useCallToAction": "true"
                                    },
                                    "fields": {
                                        "heading": {
                                            "value": "Component Params"
                                        },
                                        "description": {
                                            "value": "<p><small>Component params (also called Rendering Parameters) allow storing non-content parameters for a component. These params should be used for more technical options such as CSS class names or structural settings.</small></p>"
                                        }
                                    }
                                }, {
                                    "uid": "{7F765FCB-3B10-58FD-8AA7-B346EF38C9BB}",
                                    "componentName": "Styleguide-Tracking",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Tracking"
                                        },
                                        "description": {
                                            "value": "<p><small>JSS supports tracking Sitecore analytics events from within apps. Give it a try with this handy interactive demo.</small></p>"
                                        }
                                    }
                                }]
                            }
                        }, {
                            "uid": "{66AF8F03-0B52-5425-A6AF-6FB54F2D64D9}",
                            "componentName": "Styleguide-Section",
                            "dataSource": "available-in-connected-mode",
                            "params": {},
                            "fields": {
                                "heading": {
                                    "value": "Multilingual Patterns"
                                }
                            },
                            "placeholders": {
                                "jss-styleguide-section": [{
                                    "uid": "{CF1B5D2B-C949-56E7-9594-66AFACEACA9D}",
                                    "componentName": "Styleguide-Multilingual",
                                    "dataSource": "available-in-connected-mode",
                                    "params": {},
                                    "fields": {
                                        "heading": {
                                            "value": "Translation Patterns"
                                        },
                                        "sample": {
                                            "value": "This text can be translated in en.yml"
                                        }
                                    }
                                }]
                            }
                        }]
                    }
                }],
                "jss-styleguide-layout": [],
                "jss-styleguide-section": [],
                "jss-header": [],
                "jss-reuse-example": [],
                "jss-tabs": []
            }
        }
    }
};

const renderViewCallback = (cantRemember, {html}) => {
    console.log(html);
}

renderView(renderViewCallback, '/', data, {});