$(document).ready(function () {

    //for apply chosen drop down
    $(".chosen-select").chosen();

    $("#cmbMasterBus").chosen().change(function () {
        console.log($(this).val());
    });

    $("#GPSVendorEdit").chosen().change(function () {
        console.log($(this).val());
        showHideAuth();
    });


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

});


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