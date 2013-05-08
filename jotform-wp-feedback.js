jQuery(document).ready(function($){
    $.getScript("http://www.jotform.com/js/form.picker.js", function(data, textStatus, jqxhr) {
        $('#pickForm').on("click",function() {
            event.preventDefault();
            var jotformFormPicker = new JotFormFormPicker();
            jotformFormPicker.openWizard(setFormID);
        });
    });

    $('.jotform-color-field').wpColorPicker();

    if(jQuery("#lightBoxType").val() != "") {
        jQuery("[data-value='"+jQuery("#lightBoxType").val()+"']").parent().addClass("selectedStyle");
    }

    $('.styleBrowser').on("click",function(){
        $(".selectedStyle").removeClass("selectedStyle");
        $(this).addClass("selectedStyle");
        jQuery("#lightBoxType").val($(this).find("div").attr("data-value"));
    });

    function setFormID(formID){
        $("#formID").val(formID);
    }
});

