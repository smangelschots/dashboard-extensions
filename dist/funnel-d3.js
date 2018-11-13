(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/common"), require("devexpress-dashboard/model/index.metadata"), require("@devexpress/analytics-core/dx-analytics-core"), require("d3-funnel")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/common", "devexpress-dashboard/model/index.metadata", "@devexpress/analytics-core/dx-analytics-core", "d3-funnel" ], factory); else if (typeof exports === "object") exports["FunnelD3ItemExtension"] = factory(require("devexpress-dashboard/common"), require("devexpress-dashboard/model/index.metadata"), require("@devexpress/analytics-core/dx-analytics-core"), require("d3-funnel")); else root["DashboardExtensions"] = root["DashboardExtensions"] || {}, 
    root["DashboardExtensions"]["FunnelD3ItemExtension"] = factory(root["DevExpress"]["Dashboard"], root["DevExpress"]["Dashboard"]["Metadata"], root["DevExpress"], root["D3Funnel"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__18__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 15);
    }([ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__;
    }, , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var index_metadata_1 = __webpack_require__(1);
        exports.FUNNEL_D3_EXTENSION_NAME = "FunnelD3";
        exports.funnelMeta = {
            bindings: [ {
                propertyName: "Values",
                dataItemType: "Measure",
                array: true,
                enableColoring: true,
                displayName: "DashboardWebCustomItemStringId.Values",
                emptyPlaceholder: "DashboardWebCustomItemStringId.SetValue",
                selectedPlaceholder: "DashboardWebCustomItemStringId.ConfigureValue"
            }, {
                propertyName: "Arguments",
                dataItemType: "Dimension",
                array: true,
                enableInteractivity: true,
                enableColoring: true,
                displayName: "DashboardWebCustomItemStringId.Arguments",
                emptyPlaceholder: "DashboardWebCustomItemStringId.SetArgument",
                selectedPlaceholder: "DashboardWebCustomItemStringId.ConfigureArgument"
            } ],
            properties: [ {
                propertyName: "FillType",
                editor: index_metadata_1.editorTemplates.buttonGroup,
                displayName: "DashboardWebCustomItemStringId.FillType",
                sectionName: "DashboardWebCustomItemStringId.SectionName",
                values: {
                    Solid: "DashboardWebCustomItemStringId.FillTypeSolid",
                    Gradient: "DashboardWebCustomItemStringId.FillTypeGradient"
                },
                defaultVal: "Solid"
            }, {
                propertyName: "IsCurved",
                editor: index_metadata_1.editorTemplates.boolYesNo,
                displayName: "DashboardWebCustomItemStringId.IsCurved",
                sectionName: "DashboardWebCustomItemStringId.SectionName",
                defaultVal: false,
                from: index_metadata_1.parseBool
            }, {
                propertyName: "IsDynamicHeight",
                editor: index_metadata_1.editorTemplates.boolYesNo,
                displayName: "DashboardWebCustomItemStringId.IsDynamicHeight",
                sectionName: "DashboardWebCustomItemStringId.SectionName",
                defaultVal: true,
                from: index_metadata_1.parseBool
            }, {
                propertyName: "PinchCount",
                editor: index_metadata_1.editorTemplates.numeric,
                editorOptions: {
                    min: 0
                },
                displayName: "DashboardWebCustomItemStringId.PinchCount",
                sectionName: "DashboardWebCustomItemStringId.SectionName",
                defaultVal: 0
            } ],
            interactivity: {
                filter: true,
                drillDown: true
            },
            icon: exports.FUNNEL_D3_EXTENSION_NAME,
            title: "DashboardWebCustomItemStringId.DefaultNameFunnelD3",
            index: 3
        };
    }, , , , , , , , , , , function(module, exports, __webpack_require__) {
        "use strict";
        var icon_1 = __webpack_require__(16);
        var funnel_d3_viewer_1 = __webpack_require__(17);
        __webpack_require__(19);
        var meta_1 = __webpack_require__(4);
        var funnelD3ItemExtension = function() {
            function funnelD3ItemExtension(dashboardControl) {
                this.name = meta_1.FUNNEL_D3_EXTENSION_NAME;
                this.metaData = meta_1.funnelMeta;
                dashboardControl.registerIcon(icon_1.FUNNEL_D3_ICON);
            }
            funnelD3ItemExtension.prototype.createViewerItem = function(model, $element, content) {
                return new funnel_d3_viewer_1.funnelD3Item(model, $element, content);
            };
            return funnelD3ItemExtension;
        }();
        module.exports = funnelD3ItemExtension;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var meta_1 = __webpack_require__(4);
        exports.FUNNEL_D3_ICON = '<?xml version="1.0" encoding="utf-8"?>\x3c!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="' + meta_1.funnelMeta.icon + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><polygon class="dx_green" points="2,1 22,1 16,8 8,8 "/><polygon class="dx_blue" points="8,9 16,9 14,15 10,15 "/><polygon class="dx_red" points="10,16 14,16 13,23 11,23 "/></svg>';
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            return function(d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        exports.__esModule = true;
        var common_1 = __webpack_require__(0);
        var d3_funnel_1 = __webpack_require__(18);
        var funnelD3Item = function(_super) {
            __extends(funnelD3Item, _super);
            function funnelD3Item(model, $container, options) {
                var _this = _super.call(this, model, $container, options) || this;
                _this.funnelSettings = undefined;
                _this.funnelViewer = null;
                _this.selectionValues = [];
                _this.exportingImage = new Image();
                _this._subscribeProperties();
                return _this;
            }
            funnelD3Item.prototype.renderContent = function($element, changeExisting) {
                var data = this._getDataSource();
                if (!this._ensureFunnelLibrary($element)) return;
                if (!!data) {
                    if (!changeExisting || !this.funnelViewer) {
                        this.$funnelContainer && this.$funnelContainer.remove();
                        $element.empty();
                        this.$funnelContainer = $("<div/>", {
                            style: "margin:20px;height:calc(100% - 40px);"
                        });
                        $element.append(this.$funnelContainer);
                        this.funnelViewer = new d3_funnel_1["default"](this.$funnelContainer[0]);
                    }
                    this._update(data, this._getFunnelSizeOptions());
                } else {
                    $element.empty();
                    this.funnelViewer = null;
                }
            };
            funnelD3Item.prototype.setSize = function(width, height) {
                _super.prototype.setSize.call(this, width, height);
                this._update(null, this._getFunnelSizeOptions());
            };
            funnelD3Item.prototype.clearSelection = function() {
                _super.prototype.clearSelection.call(this);
                this._update(this._getDataSource());
            };
            funnelD3Item.prototype.allowExportSingleItem = function() {
                return !this._isIEBrowser();
            };
            funnelD3Item.prototype.getExportInfo = function() {
                if (this._isIEBrowser()) return;
                return {
                    image: this._getImageBase64()
                };
            };
            funnelD3Item.prototype._getFunnelSizeOptions = function() {
                return {
                    chart: {
                        width: this.$funnelContainer.innerWidth(),
                        height: this.$funnelContainer.innerHeight()
                    }
                };
            };
            funnelD3Item.prototype._getDataSource = function() {
                var bindingValues = this.getBindingValue("Values");
                if (bindingValues.length == 0) return undefined;
                var data = [];
                this.iterateData(function(dataRow) {
                    var values = dataRow.getValue("Values");
                    var valueStr = dataRow.getDisplayText("Values");
                    var color = dataRow.getColor("Values");
                    if (this._hasArguments()) {
                        var labelText = dataRow.getDisplayText("Arguments").join(" - ") + ": " + valueStr;
                        data.push([ {
                            data: dataRow,
                            text: labelText,
                            color: color[0]
                        } ].concat(values));
                    } else {
                        data = values.map(function(value, index) {
                            return [ {
                                text: bindingValues[index].displayName() + ": " + valueStr[index],
                                color: color[index]
                            }, value ];
                        });
                    }
                });
                return data.length > 0 ? data : undefined;
            };
            funnelD3Item.prototype._ensureFunnelLibrary = function($element) {
                if (!window["D3Funnel"]) {
                    $element.empty();
                    $element.append($("<div/>", {
                        css: {
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "95%",
                            color: "#CF0F2E",
                            "text-align": "center"
                        }
                    }).html("'D3Funnel' cannot be displayed. You should include 'd3.v3.min.js' and 'd3-funnel.js' libraries."));
                    return false;
                }
                return true;
            };
            funnelD3Item.prototype._ensureFunnelSettings = function() {
                var _this = this;
                var getSelectionColor = function(hexColor) {
                    return _this.funnelViewer.colorizer.shade(hexColor, -.5);
                };
                if (!this.funnelSettings) {
                    this.funnelSettings = {
                        data: undefined,
                        options: {
                            chart: {
                                bottomPinch: this.getPropertyValue("PinchCount"),
                                curve: {
                                    enabled: this.getPropertyValue("IsCurved")
                                }
                            },
                            block: {
                                dynamicHeight: this.getPropertyValue("IsDynamicHeight"),
                                fill: {
                                    scale: function(index) {
                                        var obj = this.funnelSettings.data[index][0];
                                        return obj.data && this.isSelected(obj.data) ? getSelectionColor(obj.color) : obj.color;
                                    },
                                    type: this.getPropertyValue("FillType").toLowerCase()
                                }
                            },
                            label: {
                                format: function(label, value) {
                                    return label.text;
                                }
                            },
                            events: {
                                click: {
                                    block: function(e) {
                                        return this._onClick(e);
                                    }
                                }
                            }
                        }
                    };
                }
                this.funnelSettings.options.block.highlight = this.canDrillDown() || this.canMasterFilter();
                return this.funnelSettings;
            };
            funnelD3Item.prototype._onClick = function(e) {
                if (!this._hasArguments() || !e.label) return;
                var row = e.label.raw.data;
                if (this.canDrillDown(row)) this.drillDown(row); else if (this.canMasterFilter(row)) {
                    this.setMasterFilter(row);
                    this._update();
                }
            };
            funnelD3Item.prototype._subscribeProperties = function() {
                this.subscribe("IsCurved", function(isCurved) {
                    return this._update(null, {
                        chart: {
                            curve: {
                                enabled: isCurved
                            }
                        }
                    });
                });
                this.subscribe("IsDynamicHeight", function(isDynamicHeight) {
                    return this._update(null, {
                        block: {
                            dynamicHeight: isDynamicHeight
                        }
                    });
                });
                this.subscribe("PinchCount", function(count) {
                    return this._update(null, {
                        chart: {
                            bottomPinch: count
                        }
                    });
                });
                this.subscribe("FillType", function(type) {
                    return this._update(null, {
                        block: {
                            fill: {
                                type: type.toLowerCase()
                            }
                        }
                    });
                });
            };
            funnelD3Item.prototype._update = function(data, options) {
                this._ensureFunnelSettings();
                if (!!data) {
                    this.funnelSettings.data = data;
                }
                if (!!options) {
                    $.extend(true, this.funnelSettings.options, options);
                }
                if (!!this.funnelViewer) {
                    this.funnelViewer.draw(this.funnelSettings.data, this.funnelSettings.options);
                    this._updateExportingImage();
                }
            };
            funnelD3Item.prototype._updateExportingImage = function() {
                var svg = this.$funnelContainer.children()[0], str = new XMLSerializer().serializeToString(svg), encodedData = "data:image/svg+xml;base64," + window.btoa(encodeURI(encodeURIComponent(str)));
                this.exportingImage.src = encodedData;
            };
            funnelD3Item.prototype._hasArguments = function() {
                return this.getBindingValue("Arguments").length > 0;
            };
            funnelD3Item.prototype._getImageBase64 = function() {
                var canvas = $("<canvas>")[0];
                canvas["width"] = this.$funnelContainer.innerWidth();
                canvas["height"] = this.$funnelContainer.innerHeight();
                canvas["getContext"]("2d").drawImage(this.exportingImage, 0, 0);
                return canvas["toDataURL"]().replace("data:image/png;base64,", "");
            };
            funnelD3Item.prototype._isIEBrowser = function() {
                return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0;
            };
            return funnelD3Item;
        }(common_1.CustomItemViewer);
        exports.funnelD3Item = funnelD3Item;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__18__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var dx_analytics_core_1 = __webpack_require__(2);
        dx_analytics_core_1["default"].Analytics.Localization.addCultureInfo({
            messages: {
                "DashboardWebCustomItemStringId.DefaultNameFunnelD3": "Funnel D3",
                "DashboardWebCustomItemStringId.Values": "Values",
                "DashboardWebCustomItemStringId.SetValue": "Set Value",
                "DashboardWebCustomItemStringId.ConfigureValue": "Configure Value",
                "DashboardWebCustomItemStringId.Arguments": "Arguments",
                "DashboardWebCustomItemStringId.SetArgument": "Set Argument",
                "DashboardWebCustomItemStringId.ConfigureArgument": "Configure Argument",
                "DashboardWebCustomItemStringId.IsCurved": "Curved",
                "DashboardWebCustomItemStringId.IsDynamicHeight": "Dynamic Height",
                "DashboardWebCustomItemStringId.PinchCount": "Pinch Count",
                "DashboardWebCustomItemStringId.FillType": "Fill Type",
                "DashboardWebCustomItemStringId.FillTypeSolid": "Solid",
                "DashboardWebCustomItemStringId.FillTypeGradient": "Gradient",
                "DashboardWebCustomItemStringId.SectionName": "Settings"
            }
        });
    } ]);
});