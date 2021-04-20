
    if (getParameterByName('gclid') !== '') {
        setCookie('utm_source', 'google', { expires: 311904000, path: "/" });
        setCookie('utm_medium', 'cpc', { expires: 311904000, path: "/" });
        setCookie('utm_campaign', '', { expires: 311904000, path: "/" });
    } else {
        var utm_source = getParameterByName('utm_source');
        if (utm_source !== '') {
            setCookie('utm_source', utm_source, { expires: 311904000, path: "/" });
        }
        var utm_medium = getParameterByName('utm_medium');
        if (utm_medium !== '') {
            setCookie('utm_medium', utm_medium, { expires: 311904000, path: "/" });
        }
        var utm_campaign = getParameterByName('utm_campaign');
        if (utm_campaign !== '') {
            setCookie('utm_campaign', utm_campaign, { expires: 311904000, path: "/" });
        }
    }

    var utm_source = getCookie('utm_source');
    var utm_medium = getCookie('utm_medium');
    var utm_campaign = getCookie('utm_campaign');

    if (getCookie('emarketing_widget_close') === '' && getCookie('email_widget_bubble_hiden') === '') {

    } else {
        document.getElementById("pp-email-widget-73hgm78").remove();
    }

    //--------------------------------------------------------------------------------------------------

    $(document).ready(function() {

        if (document.getElementById("pp-email-widget-73hgm78") ) {
            
            if (screen.width > 768) {
                $("div.chat-popover-btn.chat-popover-sprite-bg").on('click', function(e) {
                    if (!$("div.chat-popover-btn.chat-popover-sprite-bg").hasClass("chat-popover-btn_open") && $(".email-widget-bubble").is(':visible')) {
                        $("#pp-email-widget-73hgm78").hide();
                    }
                });

                $(document).on('click', function(e) {
                    if (!$("div.chat-popover-btn.chat-popover-sprite-bg").hasClass("chat-popover-btn_open") && $(".email-widget-bubble").is(':hidden')) {
                        setTimeout(function() {
                            $("#pp-email-widget-73hgm78").show();
                        }, 500);
                    }
                });
            } else {
                $("body > div.fixed-buttons").css("display","none");
            }


            var form = document.getElementsByClassName("email-widget-popup")[0],
                button = document.getElementsByClassName("email-widget-bubble")[0],
                delay_popup = 0.200;


            if (getCookie('email_widget_bubble_hiden') == '') {
                button.classList.add('pp-visible');
            }

            if (getCookie('emailwidget_popup_closed') == '' ) {
                if (screen.width > 768) {
                    setTimeout(form.classList.toggle("pp-show"), delay_popup);
                    button.classList.toggle('widget_open');
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ 'event': 'widgetview' });
                } else {
                    if (window.location.pathname == "/" || window.location.pathname =="/ua/") {
                        setTimeout(form.classList.toggle("pp-show"), delay_popup);
                        button.classList.toggle('widget_open');
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ 'event': 'widgetview' });
                    }

                }
            }

            //?utm_source=Facebook&utm_medium=social&utm_campaign=widget_posud
            // if (getParameterByName('utm_source').toLowerCase() == 'facebook' && getParameterByName('utm_medium').toLowerCase() == 'social' && getParameterByName('utm_campaign').toLowerCase() == 'widget_posud') {
            //     setTimeout(form.classList.toggle("pp-show"), delay_popup);
            //     button.classList.toggle('widget_open');
            //     window.dataLayer = window.dataLayer || [];
            //     window.dataLayer.push({ 'event': 'widgetview' });
            // }

            button.onclick = function(e) {
                e.preventDefault();
                setTimeout(form.classList.toggle("pp-show"), delay_popup);
                if (!$("div.email-widget-bubble.pp-visible").hasClass("widget_open")) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ 'event': 'widgetview' });                    
                    window.dataLayer.push({ 'event': 'widgetclick' }); 
                    // console.log('widgetview');
                } else {
                    if (getCookie('emarketing_widget_close') == '1') {
                        button.classList.remove("pp-visible");
                    }
                    if (getCookie('emailwidget_popup_closed') == '') {
                        setCookie('emailwidget_popup_closed', '1', { expires: 604800, path: "/" });
                    } else {
                        var wCloseCount = getCookie('emailwidget_popup_closed');
                        setCookie('emailwidget_popup_closed', Number(wCloseCount) + 1, { expires: 604800, path: "/" });
                    }
                    if (Number(getCookie('emailwidget_popup_closed')) > 1 ) {
                        setCookie('emarketing_widget_close', '1', { expires: 604800, path: "/" });
                    }
                    if (getCookie('emarketing_widget_close') == '1') {
                        button.classList.remove("pp-visible");
                    } 
                }
                button.classList.toggle('widget_open');
            };

            var close_popup_btn = document.getElementsByClassName("esw-popup-close")[0],
                // close_bubble_btn = document.getElementById("close_bubble"),
                delay_popup = 0.200;

            close_popup_btn.onclick = function(e) {
                e.preventDefault();
                setTimeout(form.classList.remove("pp-show"), delay_popup);
                button.classList.remove('widget_open');
                if (getCookie('emailwidget_popup_closed') == '') {
                    setCookie('emailwidget_popup_closed', '1', { expires: 604800, path: "/" });
                } else {
                    var wCloseCount = getCookie('emailwidget_popup_closed');
                    setCookie('emailwidget_popup_closed', Number(wCloseCount) + 1, { expires: 604800, path: "/" });
                }
                if (Number(getCookie('emailwidget_popup_closed')) > 1 ) {
                    setCookie('emarketing_widget_close', '1', { expires: 604800, path: "/" });
                }
                if (getCookie('emarketing_widget_close') == '1') {
                    button.classList.remove("pp-visible");
                }
            };

            // close_bubble_btn.onclick = function(e) {
            //     e.preventDefault();
            //     e.stopPropagation();
            //     e.cancelBubble = true; // for IE
            //     document.getElementsByClassName("email-widget-bubble")[0].classList.remove('pp-visible');
            //     setCookie('emailwidget_popup_closed', '1', { expires: 604800, path: "/" });
            //     setCookie('email_widget_bubble_hiden', '1', { expires: 604800, path: "/" });
            // };
            
            var w2_error_msg_name = "<span>Обов'язкове поле</span>";
            var w2_error_msg_email = "<span>Обов'язкове поле</span>";
            var w2_error_msg_email_2 = '<span>Будь ласка, використовуйте латиницю</span>'
            var w2_submit_btn_txt = 'Отримати 100 грн';
            var w2_subs_error_7ghe454_txt = 'Виникла помилка!';
            if (document.documentElement.lang == "ru") {
                var w2_error_msg_name = '<span>Обязательное поле</span>';
                var w2_error_msg_email = '<span>Обязательное поле</span>';
                var w2_error_msg_email_2 = '<span>Пожалуйста используйте латиницу</span>'
                var w2_submit_btn_txt = 'Получить 100 грн';
                var w2_subs_error_7ghe454_txt = 'Возникла ошибка!';
            }

            if (document.getElementById("widgetForm-26e3r23")) {
                var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
                var phoneFilter = /^\+?[\(\)\-0-9]+$/;
                // var wdFormName = document.forms["widgetForm-26e3r23"]["pp-name"];
                var wdFormEmail = document.forms["widgetForm-26e3r23"]["pp-email"];
                document.forms["widgetForm-26e3r23"]["pp-email"].setAttribute("autocomplete", "off");


                document.forms["widgetForm-26e3r23"]["submit"].onclick = function(e) {
                    // if (wdFormName.value == "") {
                    //     document.getElementsByClassName("error_msg_name")[0].innerHTML = w2_error_msg_name;
                    // } else {
                    //     document.getElementsByClassName("error_msg_name")[0].innerHTML = "";
                    // }

                    if (!filter.test(wdFormEmail.value)) {
                        document.getElementsByClassName("error_msg_email")[0].innerHTML = w2_error_msg_email;
                    } else {
                        document.getElementsByClassName("error_msg_email")[0].innerHTML = "";
                    }

                }

                document.forms["widgetForm-26e3r23"].onsubmit = function(e) {
                    e.preventDefault();
                    if (!filter.test(wdFormEmail.value)/* || wdFormName.value == ""*/) {
                        return false;
                    } else {
                        document.forms["widgetForm-26e3r23"]["submit"].disabled = true;
                        document.forms["widgetForm-26e3r23"]["submit"].classList.add('waiting');
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", 'https://pushgames.comfy.ua/email-widgets/widget2/form-process.php', true);
                        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xhr.onreadystatechange = function() { //Вызывает функцию при смене состояния.
                            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                                // Запрос завершен. Здесь можно обрабатывать результат.
                                var response = JSON.parse(this.responseText);
                                // console.log(response);
                                if (response["status"] == "success") {
                                    // console.log("success");
                                    document.getElementById("pp-email-widget-73hgm78").classList.add("success");
                                    document.getElementsByClassName("formcont-83yhb1")[0].classList.remove("pp-visible");
                                    document.getElementsByClassName("subs_success_7hvj")[0].classList.add("pp-visible");
                                    // setCookie("escid", response["contactid"], { expires: 86400, path: "/" });
                                    setCookie("emarketing_widget_close", "1", { expires: 311904000, path: "/" });
                                } else if (response['status'] == "error") {
                                    // console.log("error");
                                    document.forms["widgetForm-26e3r23"]["submit"].disabled = false;
                                    document.forms["widgetForm-26e3r23"]["submit"].innerHTML = w2_submit_btn_txt;
                                    document.getElementsByClassName('subs-error-26e3r23')[0].innerHTML = w2_subs_error_7ghe454_txt;
                                } else if (response['status'] == "alreadysubscribed") {
                                    // console.log("alreadysubscribed");
                                    document.getElementById("pp-email-widget-73hgm78").classList.add("alreadysubscribed");
                                    document.getElementsByClassName("formcont-83yhb1")[0].classList.remove("pp-visible");
                                    document.getElementsByClassName("subs_alreadysubscribed_856bc")[0].classList.add("pp-visible");
                                    setCookie('emarketing_widget_close', '1', { expires: 311904000, path: "/" });
                                }

                            }
                        }

                        var data = "";
                                           
                        // if (wdFormName.value !== "") { data += "&pp-name=" + wdFormName.value + ' '; }
                        
                        if (wdFormEmail.value !== "") { data += "&pp-email=" + wdFormEmail.value.toLowerCase(); }

                        if (document.querySelector("nav > ul > li.breadcrumbs__item:nth-child(2)")) {
                            if (document.querySelector("nav > ul > li.breadcrumbs__item:nth-child(2)").textContent.trim() !== "") {
                                data += "&main_category=" + document.querySelector("nav > ul > li.breadcrumbs__item:nth-child(2)").textContent.trim()
                            }
                        }

                        if (document.getElementById('pp-form-type')) {
                            data += "&pp-form-type=" + document.getElementById('pp-form-type').value;
                        }
                        if (document.getElementById('pp-addtogroup-id')) {
                            data += "&pp-addtogroup-id=" + document.getElementById('pp-addtogroup-id').value;
                        }
                        if (document.getElementById('pp-addtogroup-name')) {
                            data += "&pp-addtogroup-name=" + document.getElementById('pp-addtogroup-name').value;
                        }

                        data += "&page_url=" + window.location.href;
                        
                        if (utm_source !== '') {
                            data += "&utm_source=" + utm_source;
                        }
                        if (utm_medium !== '') {
                            data += "&utm_medium=" + utm_medium;
                        }
                        if (utm_campaign !== '') {
                            data += "&utm_campaign=" + utm_campaign;
                        }

                        data = data.slice(1);

                        xhr.send(data);
                    }
                };
                document.forms["widgetForm-26e3r23"]["pp-email"].onkeydown = function() {
                    if (!filter.test(this.value) || this == null || this == "") {
                        this.classList.add('pp-error');
                        this.classList.remove('pp-success');
                    } else {
                        this.classList.add('pp-success');
                        this.classList.remove('pp-error');
                    }
                };
                
            }

            wdFormEmail.addEventListener("input", function () {
                var filterEmailSymbols = /([a-zA-Z0-9\@\._-])/;
                var EmailValue = wdFormEmail.value;
                if (!filterEmailSymbols.test(wdFormEmail.value.slice(-1))) {
                    wdFormEmail.value = EmailValue.substr(0, EmailValue.length - 1);
                    document.getElementsByClassName('error_msg_email')[0].innerHTML = w2_error_msg_email_2;
                } else {
                    document.getElementsByClassName('error_msg_email')[0].innerHTML = '';
                }
            }, false);

        }
    
    }); 



function getIframeLink(url) {
    if (utm_source !== '' || utm_medium !== '' || utm_campaign !== '')
        url = url + '&';
    var get_parameters = [];
    if (utm_source !== '' && utm_source !== undefined)
        get_parameters.push('utm_source=' + utm_source);
    if (utm_medium !== '' && utm_medium !== undefined)
        get_parameters.push('utm_medium=' + utm_medium);
    if (utm_campaign !== '' && utm_campaign !== undefined)
        get_parameters.push('utm_campaign=' + utm_campaign);
    return url + get_parameters.join('&');

}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
}

function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}