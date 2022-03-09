$(document).ready(function () {

    //for apply chosen drop down
    $(".chosen-select").chosen();

    //Master Bus Number drop down change event
    $("#cmbMasterBus").chosen().change(function () {
        console.log($(this).val());
    });

    //GPS Vendor drop down change event
    $("#GPSVendorEdit").chosen().change(function () {
        console.log($(this).val());
        showHideAuth();
    });

    //for Select From Existing/Enter New Data option change 
    $("input[name='Filter']").change(function () {
        if (this.value == '1' && $('#cmbMasterBus').val() > 0) {
            $('#busexistinggpsdata').css("display", "block");
            $('#busnewgpsdata').css("display", "none");
        }
        else if ($('#cmbMasterBus').val() > 0) {
            $('#busexistinggpsdata').css("display", "none");
            $('#busnewgpsdata').css("display", "block");
        }
        else {
            $('#busnewgpsdata').css("display", "none");
            $('#busexistinggpsdata').css("display", "none");
        }
    });

    //for apply datepicker
    var dateNow = new Date();
    $(".datepicker").datetimepicker(
        { format: "DD/MM/YYYY", useCurrent: true, debug: false, defaultDate: dateNow }
    );

    //date range/duration option on select/change event 
    $("input[name='enquiry']").change(function () {
        if ($(this).val() == "0") {
            $('.dtrange').show();
            $('#duration').hide();
            $(".btn-wrap").addClass("col-sm-12");
            $(".btn-wrap").removeClass("col-sm-3");
        } else {
            $('.dtrange').hide();
            $('#duration').show();
            $(".btn-wrap").removeClass("col-sm-12");
            $(".btn-wrap").addClass("col-sm-3");
        }
    });

    //for filter result by entered text
    $("#myInputTextField").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#BusGPSTable tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //on load button click
    $('#GPSDataLoad').click(function () {
        $('#BusGPSDetail').hide();
        $('#divProgressBS').show();
        setTimeout(myGreeting, 1000)
    });

});

function myGreeting() {
    $('#BusGPSDetail').show();
    $('#divProgressBS').hide();
}

//this function call when GPS Vendor drop down change
function showHideAuth() {
    $("#auth").closest("div").css('display', 'table');
    if ($('#GPSVendorEdit').val() == "7") {
        $("#auth").text('GPS User ID*');
    }
    else if ($('#GPSVendorEdit').val() == "8") {
        $("#auth").text('Bus Reg No*');
    }
    else if ($('#GPSVendorEdit').val() == "10") {
        $("#auth").text('GPSDevice Name*');
    }
    else if ($('#GPSVendorEdit').val() == "9") {
        $("#auth").text('Token no.*');
    }
    else if ($('#GPSVendorEdit').val() == "12") {
        $("#auth").text('GPS User ID*');
    }
    else if ($('#GPSVendorEdit').val() == "4") {
        $("#auth").text('GPS Auth Code*');
    }
    else if ($('#GPSVendorEdit').val() == "20") {
        $("#auth").text('Access Token*');
    }
    else if ($('#GPSVendorEdit').val() == "28") {
        $("#auth").text('Access Token*');
    }
    else {
        $('#GPSAuthCode').val('');
        $("#auth").closest("div").css('display', 'none');
    }
}
