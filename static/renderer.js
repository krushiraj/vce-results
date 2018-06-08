function init_sidebar() {
    var a = function() {
        $RIGHT_COL.css("min-height", $(window).height());
        var a = $BODY.outerHeight()
          , b = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height()
          , c = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height()
          , d = a < c ? c : a;
        d -= $NAV_MENU.height() + b,
        $RIGHT_COL.css("min-height", d)
    };
    $SIDEBAR_MENU.find("a").on("click", function(b) {
        var c = $(this).parent();
        c.is(".active") ? (c.removeClass("active active-sm"),
        $("ul:first", c).slideUp(function() {
            a()
        })) : (c.parent().is(".child_menu") ? $BODY.is(".nav-sm") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"),
        $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"),
        $SIDEBAR_MENU.find("li ul").slideUp()),
        c.addClass("active"),
        $("ul:first", c).slideDown(function() {
            a()
        }))
    }),
    $MENU_TOGGLE.on("click", function() {
        $BODY.hasClass("nav-md") ? ($SIDEBAR_MENU.find("li.active ul").hide(),
        $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(),
        $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")),
        $BODY.toggleClass("nav-md nav-sm"),
        a()
    }),
    $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"),
    $SIDEBAR_MENU.find("a").filter(function() {
        return this.href == CURRENT_URL
    }).parent("li").addClass("current-page").parents("ul").slideDown(function() {
        a()
    }).parent().addClass("active"),
    $(window).smartresize(function() {
        a()
    }),
    a(),
    $.fn.mCustomScrollbar && $(".menu_fixed").mCustomScrollbar({
        autoHideScrollbar: !0,
        theme: "minimal",
        mouseWheel: {
            preventDefault: !0
        }
    })
}

function init_flot_chart() {
    if ("undefined" != typeof $.plot) {
        console.log("init_flot_chart");
        for (var a = [[gd(2012, 1, 1), 17], [gd(2012, 1, 2), 74], [gd(2012, 1, 3), 6], [gd(2012, 1, 4), 39], [gd(2012, 1, 5), 20], [gd(2012, 1, 6), 85], [gd(2012, 1, 7), 7]], b = [[gd(2012, 1, 1), 82], [gd(2012, 1, 2), 23], [gd(2012, 1, 3), 66], [gd(2012, 1, 4), 9], [gd(2012, 1, 5), 119], [gd(2012, 1, 6), 6], [gd(2012, 1, 7), 9]], d = [], e = [[0, 1], [1, 9], [2, 6], [3, 10], [4, 5], [5, 17], [6, 6], [7, 10], [8, 7], [9, 11], [10, 35], [11, 9], [12, 12], [13, 5], [14, 3], [15, 4], [16, 9]], f = 0; f < 30; f++)
            d.push([new Date(Date.today().add(f).days()).getTime(), randNum() + f + f + 10]);
        var g = {
            series: {
                lines: {
                    show: !1,
                    fill: !0
                },
                splines: {
                    show: !0,
                    tension: .4,
                    lineWidth: 1,
                    fill: .4
                },
                points: {
                    radius: 0,
                    show: !0
                },
                shadowSize: 2
            },
            grid: {
                verticalLines: !0,
                hoverable: !0,
                clickable: !0,
                tickColor: "#d5d5d5",
                borderWidth: 1,
                color: "#fff"
            },
            colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
            xaxis: {
                tickColor: "rgba(51, 51, 51, 0.06)",
                mode: "time",
                tickSize: [1, "day"],
                axisLabel: "Date",
                axisLabelUseCanvas: !0,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: "Verdana, Arial",
                axisLabelPadding: 10
            },
            yaxis: {
                ticks: 8,
                tickColor: "rgba(51, 51, 51, 0.06)"
            },
            tooltip: !1
        }
          , h = {
            grid: {
                show: !0,
                aboveData: !0,
                color: "#3f3f3f",
                labelMargin: 10,
                axisMargin: 0,
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 5,
                clickable: !0,
                hoverable: !0,
                autoHighlight: !0,
                mouseActiveRadius: 100
            },
            series: {
                lines: {
                    show: !0,
                    fill: !0,
                    lineWidth: 2,
                    steps: !1
                },
                points: {
                    show: !0,
                    radius: 4.5,
                    symbol: "circle",
                    lineWidth: 3
                }
            },
            legend: {
                position: "ne",
                margin: [0, -25],
                noColumns: 0,
                labelBoxBorderColor: null,
                labelFormatter: function(a, b) {
                    return a + "&nbsp;&nbsp;"
                },
                width: 40,
                height: 1
            },
            colors: ["#96CA59", "#3F97EB", "#72c380", "#6f7a8a", "#f7cb38", "#5a8022", "#2c7282"],
            shadowSize: 0,
            tooltip: !0,
            tooltipOpts: {
                content: "%s: %y.0",
                xDateFormat: "%d/%m",
                shifts: {
                    x: -30,
                    y: -50
                },
                defaultTheme: !1
            },
            yaxis: {
                min: 0
            },
            xaxis: {
                mode: "time",
                minTickSize: [1, "day"],
                timeformat: "%d/%m/%y",
                min: d[0][0],
                max: d[20][0]
            }
        }
          , i = {
            series: {
                curvedLines: {
                    apply: !0,
                    active: !0,
                    monotonicFit: !0
                }
            },
            colors: ["#26B99A"],
            grid: {
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 1,
                    left: 1
                },
                borderColor: {
                    bottom: "#7F8790",
                    left: "#7F8790"
                }
            }
        };
        $("#chart_plot_01").length && (console.log("Plot1"),
        $.plot($("#chart_plot_01"), [a, b], g)),
        $("#chart_plot_02").length && (console.log("Plot2"),
        $.plot($("#chart_plot_02"), [{
            label: "Email Sent",
            data: d,
            lines: {
                fillColor: "rgba(150, 202, 89, 0.12)"
            },
            points: {
                fillColor: "#fff"
            }
        }], h)),
        $("#chart_plot_03").length && (console.log("Plot3"),
        $.plot($("#chart_plot_03"), [{
            label: "Registrations",
            data: e,
            lines: {
                fillColor: "rgba(150, 202, 89, 0.12)"
            },
            points: {
                fillColor: "#fff"
            }
        }], i))
    }
}

function init_JQVmap() {
    "undefined" != typeof jQuery.fn.vectorMap && (console.log("init_JQVmap"),
    $("#world-map-gdp").length && $("#world-map-gdp").vectorMap({
        map: "world_en",
        backgroundColor: null,
        color: "#ffffff",
        hoverOpacity: .7,
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0,
        values: sample_data,
        scaleColors: ["#E6F2F0", "#149B7E"],
        normalizeFunction: "polynomial"
    }),
    $("#usa_map").length && $("#usa_map").vectorMap({
        map: "usa_en",
        backgroundColor: null,
        color: "#ffffff",
        hoverOpacity: .7,
        selectedColor: "#666666",
        enableZoom: !0,
        showTooltip: !0,
        values: sample_data,
        scaleColors: ["#E6F2F0", "#149B7E"],
        normalizeFunction: "polynomial"
    }))
}

function init_sparklines() {
    "undefined" != typeof jQuery.fn.sparkline && (console.log("init_sparklines"),
    $(".sparkline_one").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
        type: "bar",
        height: "125",
        barWidth: 13,
        colorMap: {
            7: "#a1a1a1"
        },
        barSpacing: 2,
        barColor: "#26B99A"
    }),
    $(".sparkline_two").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
        type: "bar",
        height: "40",
        barWidth: 9,
        colorMap: {
            7: "#a1a1a1"
        },
        barSpacing: 2,
        barColor: "#26B99A"
    }),
    $(".sparkline_three").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 7, 5, 4, 3, 5, 6], {
        type: "line",
        width: "200",
        height: "40",
        lineColor: "#26B99A",
        fillColor: "rgba(223, 223, 223, 0.57)",
        lineWidth: 2,
        spotColor: "#26B99A",
        minSpotColor: "#26B99A"
    }),
    $(".sparkline11").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3], {
        type: "bar",
        height: "40",
        barWidth: 8,
        colorMap: {
            7: "#a1a1a1"
        },
        barSpacing: 2,
        barColor: "#26B99A"
    }),
    $(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
        type: "line",
        height: "40",
        width: "200",
        lineColor: "#26B99A",
        fillColor: "#ffffff",
        lineWidth: 3,
        spotColor: "#34495E",
        minSpotColor: "#34495E"
    }),
    $(".sparkline_bar").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
        type: "bar",
        colorMap: {
            7: "#a1a1a1"
        },
        barColor: "#26B99A"
    }),
    $(".sparkline_area").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: "line",
        lineColor: "#26B99A",
        fillColor: "#26B99A",
        spotColor: "#4578a0",
        minSpotColor: "#728fb2",
        maxSpotColor: "#6d93c4",
        highlightSpotColor: "#ef5179",
        highlightLineColor: "#8ba8bf",
        spotRadius: 2.5,
        width: 85
    }),
    $(".sparkline_line").sparkline([2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 5, 6, 4, 5, 6, 3, 5], {
        type: "line",
        lineColor: "#26B99A",
        fillColor: "#ffffff",
        width: 85,
        spotColor: "#34495E",
        minSpotColor: "#34495E"
    }),
    $(".sparkline_pie").sparkline([1, 1, 2, 1], {
        type: "pie",
        sliceColors: ["#26B99A", "#ccc", "#75BCDD", "#D66DE2"]
    }),
    $(".sparkline_discreet").sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 2, 4, 3, 7, 8, 9, 7, 6, 4, 3], {
        type: "discrete",
        barWidth: 3,
        lineColor: "#26B99A",
        width: "85"
    }))
}

function init_autosize() {
    "undefined" != typeof $.fn.autosize && autosize($(".resizable_textarea"))
}
function init_parsley() {
    if ("undefined" != typeof parsley) {
        console.log("init_parsley"),
        $("parsley:field:validate", function() {
            a()
        }),
        $("#demo-form .btn").on("click", function() {
            $("#demo-form").parsley().validate(),
            a()
        });
        var a = function() {
            !0 === $("#demo-form").parsley().isValid() ? ($(".bs-callout-info").removeClass("hidden"),
            $(".bs-callout-warning").addClass("hidden")) : ($(".bs-callout-info").addClass("hidden"),
            $(".bs-callout-warning").removeClass("hidden"))
        };
        $("parsley:field:validate", function() {
            a()
        }),
        $("#demo-form2 .btn").on("click", function() {
            $("#demo-form2").parsley().validate(),
            a()
        });
        var a = function() {
            !0 === $("#demo-form2").parsley().isValid() ? ($(".bs-callout-info").removeClass("hidden"),
            $(".bs-callout-warning").addClass("hidden")) : ($(".bs-callout-info").addClass("hidden"),
            $(".bs-callout-warning").removeClass("hidden"))
        };
        try {
            hljs.initHighlightingOnLoad()
        } catch (a) {}
    }
}
function onAddTag(a) {
    alert("Added a tag: " + a)
}
function onRemoveTag(a) {
    alert("Removed a tag: " + a)
}
function onChangeTag(a, b) {
    alert("Changed a tag: " + b)
}
function init_TagsInput() {
    "undefined" != typeof $.fn.tagsInput && $("#tags_1").tagsInput({
        width: "auto"
    })
}
function init_select2() {
    "undefined" != typeof select2 && (console.log("init_toolbox"),
    $(".select2_single").select2({
        placeholder: "Select a state",
        allowClear: !0
    }),
    $(".select2_group").select2({}),
    $(".select2_multiple").select2({
        maximumSelectionLength: 4,
        placeholder: "With Max Selection limit 4",
        allowClear: !0
    }))
}
function init_wysiwyg() {
    function b(a, b) {
        var c = "";
        "unsupported-file-type" === a ? c = "Unsupported format " + b : console.log("error uploading file", a, b),
        $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button><strong>File upload error</strong> ' + c + " </div>").prependTo("#alerts")
    }
    "undefined" != typeof $.fn.wysiwyg && (console.log("init_wysiwyg"),
    $(".editor-wrapper").each(function() {
        var a = $(this).attr("id");
        $(this).wysiwyg({
            toolbarSelector: '[data-target="#' + a + '"]',
            fileUploadError: b
        })
    }),
    window.prettyPrint,
    prettyPrint())
}
function init_cropper() {
    if ("undefined" != typeof $.fn.cropper) {
        console.log("init_cropper");
        var a = $("#image")
          , b = $("#download")
          , c = $("#dataX")
          , d = $("#dataY")
          , e = $("#dataHeight")
          , f = $("#dataWidth")
          , g = $("#dataRotate")
          , h = $("#dataScaleX")
          , i = $("#dataScaleY")
          , j = {
            aspectRatio: 16 / 9,
            preview: ".img-preview",
            crop: function(a) {
                c.val(Math.round(a.x)),
                d.val(Math.round(a.y)),
                e.val(Math.round(a.height)),
                f.val(Math.round(a.width)),
                g.val(a.rotate),
                h.val(a.scaleX),
                i.val(a.scaleY)
            }
        };
        $('[data-toggle="tooltip"]').tooltip(),
        a.on({
            "build.cropper": function(a) {
                console.log(a.type)
            },
            "built.cropper": function(a) {
                console.log(a.type)
            },
            "cropstart.cropper": function(a) {
                console.log(a.type, a.action)
            },
            "cropmove.cropper": function(a) {
                console.log(a.type, a.action)
            },
            "cropend.cropper": function(a) {
                console.log(a.type, a.action)
            },
            "crop.cropper": function(a) {
                console.log(a.type, a.x, a.y, a.width, a.height, a.rotate, a.scaleX, a.scaleY)
            },
            "zoom.cropper": function(a) {
                console.log(a.type, a.ratio)
            }
        }).cropper(j),
        $.isFunction(document.createElement("canvas").getContext) || $('button[data-method="getCroppedCanvas"]').prop("disabled", !0),
        "undefined" == typeof document.createElement("cropper").style.transition && ($('button[data-method="rotate"]').prop("disabled", !0),
        $('button[data-method="scale"]').prop("disabled", !0)),
        "undefined" == typeof b[0].download && b.addClass("disabled"),
        $(".docs-toggles").on("change", "input", function() {
            var e, f, b = $(this), c = b.attr("name"), d = b.prop("type");
            a.data("cropper") && ("checkbox" === d ? (j[c] = b.prop("checked"),
            e = a.cropper("getCropBoxData"),
            f = a.cropper("getCanvasData"),
            j.built = function() {
                a.cropper("setCropBoxData", e),
                a.cropper("setCanvasData", f)
            }
            ) : "radio" === d && (j[c] = b.val()),
            a.cropper("destroy").cropper(j))
        }),
        $(".docs-buttons").on("click", "[data-method]", function() {
            var e, f, c = $(this), d = c.data();
            if (!c.prop("disabled") && !c.hasClass("disabled") && a.data("cropper") && d.method) {
                if (d = $.extend({}, d),
                "undefined" != typeof d.target && (e = $(d.target),
                "undefined" == typeof d.option))
                    try {
                        d.option = JSON.parse(e.val())
                    } catch (a) {
                        console.log(a.message)
                    }
                switch (f = a.cropper(d.method, d.option, d.secondOption),
                d.method) {
                case "scaleX":
                case "scaleY":
                    $(this).data("option", -d.option);
                    break;
                case "getCroppedCanvas":
                    f && ($("#getCroppedCanvasModal").modal().find(".modal-body").html(f),
                    b.hasClass("disabled") || b.attr("href", f.toDataURL()))
                }
                if ($.isPlainObject(f) && e)
                    try {
                        e.val(JSON.stringify(f))
                    } catch (a) {
                        console.log(a.message)
                    }
            }
        }),
        $(document.body).on("keydown", function(b) {
            if (a.data("cropper") && !(this.scrollTop > 300))
                switch (b.which) {
                case 37:
                    b.preventDefault(),
                    a.cropper("move", -1, 0);
                    break;
                case 38:
                    b.preventDefault(),
                    a.cropper("move", 0, -1);
                    break;
                case 39:
                    b.preventDefault(),
                    a.cropper("move", 1, 0);
                    break;
                case 40:
                    b.preventDefault(),
                    a.cropper("move", 0, 1)
                }
        });
        var m, k = $("#inputImage"), l = window.URL || window.webkitURL;
        l ? k.change(function() {
            var c, b = this.files;
            a.data("cropper") && b && b.length && (c = b[0],
            /^image\/\w+$/.test(c.type) ? (m = l.createObjectURL(c),
            a.one("built.cropper", function() {
                l.revokeObjectURL(m)
            }).cropper("reset").cropper("replace", m),
            k.val("")) : window.alert("Please choose an image file."))
        }) : k.prop("disabled", !0).parent().addClass("disabled")
    }
}
function init_knob() {
    if ("undefined" != typeof $.fn.knob) {
        console.log("init_knob"),
        $(".knob").knob({
            change: function(a) {},
            release: function(a) {
                console.log("release : " + a)
            },
            cancel: function() {
                console.log("cancel : ", this)
            },
            draw: function() {
                if ("tron" == this.$.data("skin")) {
                    this.cursorExt = .3;
                    var b, a = this.arc(this.cv), c = 1;
                    return this.g.lineWidth = this.lineWidth,
                    this.o.displayPrevious && (b = this.arc(this.v),
                    this.g.beginPath(),
                    this.g.strokeStyle = this.pColor,
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, b.s, b.e, b.d),
                    this.g.stroke()),
                    this.g.beginPath(),
                    this.g.strokeStyle = c ? this.o.fgColor : this.fgColor,
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d),
                    this.g.stroke(),
                    this.g.lineWidth = 2,
                    this.g.beginPath(),
                    this.g.strokeStyle = this.o.fgColor,
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1),
                    this.g.stroke(),
                    !1
                }
            }
        });
        var a, b = 0, c = 0, d = 0, e = $("div.idir"), f = $("div.ival"), g = function() {
            d++,
            e.show().html("+").fadeOut(),
            f.html(d)
        }, h = function() {
            d--,
            e.show().html("-").fadeOut(),
            f.html(d)
        };
        $("input.infinite").knob({
            min: 0,
            max: 20,
            stopper: !1,
            change: function() {
                a > this.cv ? b ? (h(),
                b = 0) : (b = 1,
                c = 0) : a < this.cv && (c ? (g(),
                c = 0) : (c = 1,
                b = 0)),
                a = this.cv
            }
        })
    }
}
function init_InputMask() {
    "undefined" != typeof $.fn.inputmask && (console.log("init_InputMask"),
    $(":input").inputmask())
}
function init_ColorPicker() {
    "undefined" != typeof $.fn.colorpicker && (console.log("init_ColorPicker"),
    $(".demo1").colorpicker(),
    $(".demo2").colorpicker(),
    $("#demo_forceformat").colorpicker({
        format: "rgba",
        horizontal: !0
    }),
    $("#demo_forceformat3").colorpicker({
        format: "rgba"
    }),
    $(".demo-auto").colorpicker())
}
function init_IonRangeSlider() {
    "undefined" != typeof $.fn.ionRangeSlider && (console.log("init_IonRangeSlider"),
    $("#range_27").ionRangeSlider({
        type: "double",
        min: 1e6,
        max: 2e6,
        grid: !0,
        force_edges: !0
    }),
    $("#range").ionRangeSlider({
        hide_min_max: !0,
        keyboard: !0,
        min: 0,
        max: 5e3,
        from: 1e3,
        to: 4e3,
        type: "double",
        step: 1,
        prefix: "$",
        grid: !0
    }),
    $("#range_25").ionRangeSlider({
        type: "double",
        min: 1e6,
        max: 2e6,
        grid: !0
    }),
    $("#range_26").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1e4,
        step: 500,
        grid: !0,
        grid_snap: !0
    }),
    $("#range_31").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        from_fixed: !0
    }),
    $(".range_min_max").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 30,
        to: 70,
        max_interval: 50
    }),
    $(".range_time24").ionRangeSlider({
        min: +moment().subtract(12, "hours").format("X"),
        max: +moment().format("X"),
        from: +moment().subtract(6, "hours").format("X"),
        grid: !0,
        force_edges: !0,
        prettify: function(a) {
            var b = moment(a, "X");
            return b.format("Do MMMM, HH:mm")
        }
    }))
}
function init_daterangepicker() {
    if ("undefined" != typeof $.fn.daterangepicker) {
        console.log("init_daterangepicker");
        var a = function(a, b, c) {
            console.log(a.toISOString(), b.toISOString(), c),
            $("#reportrange span").html(a.format("MMMM D, YYYY") + " - " + b.format("MMMM D, YYYY"))
        }
          , b = {
            startDate: moment().subtract(29, "days"),
            endDate: moment(),
            minDate: "01/01/2012",
            maxDate: "12/31/2015",
            dateLimit: {
                days: 60
            },
            showDropdowns: !0,
            showWeekNumbers: !0,
            timePicker: !1,
            timePickerIncrement: 1,
            timePicker12Hour: !0,
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            },
            opens: "left",
            buttonClasses: ["btn btn-default"],
            applyClass: "btn-small btn-primary",
            cancelClass: "btn-small",
            format: "MM/DD/YYYY",
            separator: " to ",
            locale: {
                applyLabel: "Submit",
                cancelLabel: "Clear",
                fromLabel: "From",
                toLabel: "To",
                customRangeLabel: "Custom",
                daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                firstDay: 1
            }
        };
        $("#reportrange span").html(moment().subtract(29, "days").format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")),
        $("#reportrange").daterangepicker(b, a),
        $("#reportrange").on("show.daterangepicker", function() {
            console.log("show event fired")
        }),
        $("#reportrange").on("hide.daterangepicker", function() {
            console.log("hide event fired")
        }),
        $("#reportrange").on("apply.daterangepicker", function(a, b) {
            console.log("apply event fired, start/end dates are " + b.startDate.format("MMMM D, YYYY") + " to " + b.endDate.format("MMMM D, YYYY"))
        }),
        $("#reportrange").on("cancel.daterangepicker", function(a, b) {
            console.log("cancel event fired")
        }),
        $("#options1").click(function() {
            $("#reportrange").data("daterangepicker").setOptions(b, a)
        }),
        $("#options2").click(function() {
            $("#reportrange").data("daterangepicker").setOptions(optionSet2, a)
        }),
        $("#destroy").click(function() {
            $("#reportrange").data("daterangepicker").remove()
        })
    }
}
function init_daterangepicker_right() {
    if ("undefined" != typeof $.fn.daterangepicker) {
        console.log("init_daterangepicker_right");
        var a = function(a, b, c) {
            console.log(a.toISOString(), b.toISOString(), c),
            $("#reportrange_right span").html(a.format("MMMM D, YYYY") + " - " + b.format("MMMM D, YYYY"))
        }
          , b = {
            startDate: moment().subtract(29, "days"),
            endDate: moment(),
            minDate: "01/01/2012",
            maxDate: "12/31/2020",
            dateLimit: {
                days: 60
            },
            showDropdowns: !0,
            showWeekNumbers: !0,
            timePicker: !1,
            timePickerIncrement: 1,
            timePicker12Hour: !0,
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            },
            opens: "right",
            buttonClasses: ["btn btn-default"],
            applyClass: "btn-small btn-primary",
            cancelClass: "btn-small",
            format: "MM/DD/YYYY",
            separator: " to ",
            locale: {
                applyLabel: "Submit",
                cancelLabel: "Clear",
                fromLabel: "From",
                toLabel: "To",
                customRangeLabel: "Custom",
                daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                firstDay: 1
            }
        };
        $("#reportrange_right span").html(moment().subtract(29, "days").format("MMMM D, YYYY") + " - " + moment().format("MMMM D, YYYY")),
        $("#reportrange_right").daterangepicker(b, a),
        $("#reportrange_right").on("show.daterangepicker", function() {
            console.log("show event fired")
        }),
        $("#reportrange_right").on("hide.daterangepicker", function() {
            console.log("hide event fired")
        }),
        $("#reportrange_right").on("apply.daterangepicker", function(a, b) {
            console.log("apply event fired, start/end dates are " + b.startDate.format("MMMM D, YYYY") + " to " + b.endDate.format("MMMM D, YYYY"))
        }),
        $("#reportrange_right").on("cancel.daterangepicker", function(a, b) {
            console.log("cancel event fired")
        }),
        $("#options1").click(function() {
            $("#reportrange_right").data("daterangepicker").setOptions(b, a)
        }),
        $("#options2").click(function() {
            $("#reportrange_right").data("daterangepicker").setOptions(optionSet2, a)
        }),
        $("#destroy").click(function() {
            $("#reportrange_right").data("daterangepicker").remove()
        })
    }
}
function init_daterangepicker_single_call() {
    "undefined" != typeof $.fn.daterangepicker && (console.log("init_daterangepicker_single_call"),
    $("#single_cal1").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_1"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }),
    $("#single_cal2").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_2"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }),
    $("#single_cal3").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_3"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }),
    $("#single_cal4").daterangepicker({
        singleDatePicker: !0,
        singleClasses: "picker_4"
    }, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }))
}
function init_daterangepicker_reservation() {
    "undefined" != typeof $.fn.daterangepicker && (console.log("init_daterangepicker_reservation"),
    $("#reservation").daterangepicker(null, function(a, b, c) {
        console.log(a.toISOString(), b.toISOString(), c)
    }),
    $("#reservation-time").daterangepicker({
        timePicker: !0,
        timePickerIncrement: 30,
        locale: {
            format: "MM/DD/YYYY h:mm A"
        }
    }))
}
function init_SmartWizard() {
    "undefined" != typeof $.fn.smartWizard && (console.log("init_SmartWizard"),
    $("#wizard").smartWizard(),
    $("#wizard_verticle").smartWizard({
        transitionEffect: "slide"
    }),
    $(".buttonNext").addClass("btn btn-success"),
    $(".buttonPrevious").addClass("btn btn-primary"),
    $(".buttonFinish").addClass("btn btn-default"))
}
function init_validator() {
    "undefined" != typeof validator && (console.log("init_validator"),
    validator.message.date = "not a real date",
    $("form").on("blur", "input[required], input.optional, select.required", validator.checkField).on("change", "select.required", validator.checkField).on("keypress", "input[required][pattern]", validator.keypress),
    $(".multi.required").on("keyup blur", "input", function() {
        validator.checkField.apply($(this).siblings().last()[0])
    }),
    $("form").submit(function(a) {
        a.preventDefault();
        var b = !0;
        return validator.checkAll($(this)) || (b = !1),
        b && this.submit(),
        !1
    }))
}
function init_PNotify() {
    "undefined" != typeof PNotify && (console.log("init_PNotify"),
    new PNotify({
        title: "PNotify",
        type: "info",
        text: "Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking.",
        nonblock: {
            nonblock: !0
        },
        addclass: "dark",
        styling: "bootstrap3",
        hide: !1,
        before_close: function(a) {
            return a.update({
                title: a.options.title + " - Enjoy your Stay",
                before_close: null
            }),
            a.queueRemove(),
            !1
        }
    }))
}
function init_CustomNotification() {
    if (console.log("run_customtabs"),
    "undefined" != typeof CustomTabs) {
        console.log("init_CustomTabs");
        var a = 10;
        TabbedNotification = function(b) {
            var c = "<div id='ntf" + a + "' class='text alert-" + b.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + b.title + "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + b.text + "</p></div>";
            document.getElementById("custom_notifications") ? ($("#custom_notifications ul.notifications").append("<li><a id='ntlink" + a + "' class='alert-" + b.type + "' href='#ntf" + a + "'><i class='fa fa-bell animated shake'></i></a></li>"),
            $("#custom_notifications #notif-group").append(c),
            a++,
            CustomTabs(b)) : alert("doesnt exists")
        }
        ,
        CustomTabs = function(a) {
            $(".tabbed_notifications > div").hide(),
            $(".tabbed_notifications > div:first-of-type").show(),
            $("#custom_notifications").removeClass("dsp_none"),
            $(".notifications a").click(function(a) {
                a.preventDefault();
                var b = $(this)
                  , c = "#" + b.parents(".notifications").data("tabbed_notifications")
                  , d = b.closest("li").siblings().children("a")
                  , e = b.attr("href");
                d.removeClass("active"),
                b.addClass("active"),
                $(c).children("div").hide(),
                $(e).show()
            })
        }
        ,
        CustomTabs();
        var b = idname = "";
        $(document).on("click", ".notification_close", function(a) {
            idname = $(this).parent().parent().attr("id"),
            b = idname.substr(-2),
            $("#ntf" + b).remove(),
            $("#ntlink" + b).parent().remove(),
            $(".notifications a").first().addClass("active"),
            $("#notif-group div").first().css("display", "block")
        })
    }
}
function init_EasyPieChart() {
    if ("undefined" != typeof $.fn.easyPieChart) {
        console.log("init_EasyPieChart"),
        $(".chart").easyPieChart({
            easing: "easeOutElastic",
            delay: 3e3,
            barColor: "#26B99A",
            trackColor: "#fff",
            scaleColor: !1,
            lineWidth: 20,
            trackWidth: 16,
            lineCap: "butt",
            onStep: function(a, b, c) {
                $(this.el).find(".percent").text(Math.round(c))
            }
        });
        var a = window.chart = $(".chart").data("easyPieChart");
        $(".js_update").on("click", function() {
            a.update(200 * Math.random() - 100)
        });
        var b = $.fn.popover.Constructor.prototype.leave;
        $.fn.popover.Constructor.prototype.leave = function(a) {
            var d, e, c = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            b.call(this, a),
            a.currentTarget && (d = $(a.currentTarget).siblings(".popover"),
            e = c.timeout,
            d.one("mouseenter", function() {
                clearTimeout(e),
                d.one("mouseleave", function() {
                    $.fn.popover.Constructor.prototype.leave.call(c, c)
                })
            }))
        }
        ,
        $("body").popover({
            selector: "[data-popover]",
            trigger: "click hover",
            delay: {
                show: 50,
                hide: 400
            }
        })
    }
}

function init_charts() {
                if (console.log("run_charts  typeof [" + typeof Chart + "]"),
                "undefined" != typeof Chart) {
                    if (console.log("init_charts"),
                    Chart.defaults.global.legend = {
                        enabled: !1
                    }
                    if ($("#canvasDoughnut-sgpa").length) {
                        var f = document.getElementById("canvasDoughnut-sgpa")
                          , i = {
                            labels: ["SGPA", ""],
                            datasets: [{
                                data: [9, 1],
                                backgroundColor: ["cyan", "magenta"],
                                hoverBackgroundColor: ["#34495E", "#B370CF"]
                            }]
                        };
                        new Chart(f,{
                            type: "doughnut",
                            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
                            data: i
                        })
                    }
                    if ($("#canvasDoughnut-cgpa").length) {
                        var f = document.getElementById("canvasDoughnut-cgpa")
                          , i = {
                            labels: ["CGPA"],
                            datasets: [{
                                data: [7.8, 2.2],
                                backgroundColor: ["cyan", "magenta"],
                                hoverBackgroundColor: ["#34495E", "#B370CF"]
                            }]
                        };
                        new Chart(f,{
                            type: "doughnut",
                            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
                            data: i
                        })
                    }
                    if ($("#canvasRadar").length) {
                        var f = document.getElementById("canvasRadar")
                          , i = {
                            labels: sub_labels,
                            datasets: [{
                                label: "Points secured",
                                backgroundColor: "rgba(3, 88, 106, 0.2)",
                                borderColor: "rgba(3, 88, 106, 0.80)",
                                pointBorderColor: "rgba(3, 88, 106, 0.80)",
                                pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                data: [9, 8, 8, 7, 8, 9, 10]
                            },{
                              label: "Maximum points",
                              backgroundColor: "rgba(38, 185, 154, 0)",
                              borderColor: "rgba(38, 185, 154, 0)",
                              pointColor: "rgba(38, 185, 154, 0)",
                              pointStrokeColor: "#fff",
                              pointHighlightFill: "#fff",
                              pointHighlightStroke: "rgba(151,187,205,1)",
                              data: [100,10,10,10,10,10,0]
                            }]
                        };
                        new Chart(f,{
                            type: "radar",
                            data: i
                        })
                    }
                }
            }

!function(a, b) {
    var c = function(a, b, c) {
        var d;
        return function() {
            function h() {
                c || a.apply(f, g),
                d = null
            }
            var f = this
              , g = arguments;
            d ? clearTimeout(d) : c && a.apply(f, g),
            d = setTimeout(h, b || 100)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.bind("resize", c(a)) : this.trigger(b)
    }
}(jQuery, "smartresize");
var CURRENT_URL = window.location.href.split("#")[0].split("?")[0]
  , $BODY = $("body")
  , $MENU_TOGGLE = $("#menu_toggle")
  , $SIDEBAR_MENU = $("#sidebar-menu")
  , $SIDEBAR_FOOTER = $(".sidebar-footer")
  , $LEFT_COL = $(".left_col")
  , $RIGHT_COL = $(".right_col")
  , $NAV_MENU = $(".nav_menu")
  , $FOOTER = $("footer")
  , randNum = function() {
    return Math.floor(21 * Math.random()) + 20
};
$(document).ready(function() {
    $(".collapse-link").on("click", function() {
        var a = $(this).closest(".x_panel")
          , b = $(this).find("i")
          , c = a.find(".x_content");
        a.attr("style") ? c.slideToggle(200, function() {
            a.removeAttr("style")
        }) : (c.slideToggle(200),
        a.css("height", "auto")),
        b.toggleClass("fa-chevron-up fa-chevron-down")
    }),
    $(".close-link").click(function() {
        var a = $(this).closest(".x_panel");
        a.remove()
    })
}),
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: "body"
    })
}),
$(".progress .progress-bar")[0] && $(".progress .progress-bar").progressbar(),
$(document).ready(function() {
    if ($(".js-switch")[0]) {
        var a = Array.prototype.slice.call(document.querySelectorAll(".js-switch"));
        a.forEach(function(a) {
            new Switchery(a,{
                color: "#26B99A"
            })
        })
    }
}),
$(document).ready(function() {
    $("input.flat")[0] && $(document).ready(function() {
        $("input.flat").iCheck({
            checkboxClass: "icheckbox_flat-green",
            radioClass: "iradio_flat-green"
        })
    })
}),
$("table input").on("ifChecked", function() {
    checkState = "",
    $(this).parent().parent().parent().addClass("selected"),
    countChecked()
}),
$("table input").on("ifUnchecked", function() {
    checkState = "",
    $(this).parent().parent().parent().removeClass("selected"),
    countChecked()
});
var checkState = "";
$(".bulk_action input").on("ifChecked", function() {
    checkState = "",
    $(this).parent().parent().parent().addClass("selected"),
    countChecked()
}),
$(".bulk_action input").on("ifUnchecked", function() {
    checkState = "",
    $(this).parent().parent().parent().removeClass("selected"),
    countChecked()
}),
$(".bulk_action input#check-all").on("ifChecked", function() {
    checkState = "all",
    countChecked()
}),
$(".bulk_action input#check-all").on("ifUnchecked", function() {
    checkState = "none",
    countChecked()
}),
$(document).ready(function() {
    $(".expand").on("click", function() {
        $(this).next().slideToggle(200),
        $expand = $(this).find(">:first-child"),
        "+" == $expand.text() ? $expand.text("-") : $expand.text("+")
    })
}),
"undefined" != typeof NProgress && ($(document).ready(function() {
    NProgress.start()
}),
$(window).load(function() {
    NProgress.done()
}));
var originalLeave = $.fn.popover.Constructor.prototype.leave;
$.fn.popover.Constructor.prototype.leave = function(a) {
    var c, d, b = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    originalLeave.call(this, a),
    a.currentTarget && (c = $(a.currentTarget).siblings(".popover"),
    d = b.timeout,
    c.one("mouseenter", function() {
        clearTimeout(d),
        c.one("mouseleave", function() {
            $.fn.popover.Constructor.prototype.leave.call(b, b)
        })
    }))
}
,
$("body").popover({
    selector: "[data-popover]",
    trigger: "click hover",
    delay: {
        show: 50,
        hide: 400
    }
}),
$(document).ready(function() {
    init_sparklines(),
    init_flot_chart(),
    init_sidebar(),
    init_wysiwyg(),
    init_InputMask(),
    init_JQVmap(),
    init_cropper(),
    init_knob(),
    init_IonRangeSlider(),
    init_ColorPicker(),
    init_TagsInput(),
    init_parsley(),
    init_daterangepicker(),
    init_daterangepicker_right(),
    init_daterangepicker_single_call(),
    init_daterangepicker_reservation(),
    init_SmartWizard(),
    init_EasyPieChart(),
    init_charts(),
    init_echarts(),
    init_morris_charts(),
    init_skycons(),
    init_select2(),
    init_validator(),
    init_DataTables(),
    init_chart_doughnut(),
    init_gauge(),
    init_PNotify(),
    init_starrr(),
    init_calendar(),
    init_compose(),
    init_CustomNotification(),
    init_autosize(),
    init_autocomplete()
});
