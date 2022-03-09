$(document).ready(function() {

    // $('#Data').DataTable({
    //     "scrollY ": 200,
    //     "scrollX ": true
    // });
    // $('[data-toggle="tooltip"]').tooltip();

    // $('[data-toggle="popover"]').popover();

    // $('#WizardEmployee').on('slide.bs.carousel', function() {
    //     debugger;
    //     direction: "right";
    //     interval: false;
    // })
    // $('.carousel').carousel({
    //     interval: false
    // })
    var start = new Date();
    // set end date to max one year period:
    var end = new Date(new Date().setYear(start.getFullYear() + 1));

    $('#fromDate').datepicker({

        startDate: start,
        endDate: end
            // update "toDate" defaults whenever "fromDate" changes
    }).on('changeDate', function() {
        debugger;
        // set the "toDate" start to not be later than "fromDate" ends:
        $('#toDate').datepicker('setStartDate', new Date($(this).val()));
    });

    $('#toDate').datepicker({
        startDate: start,
        endDate: end
            // update "fromDate" defaults whenever "toDate" changes
    }).on('changeDate', function() {
        // set the "fromDate" end to not be later than "toDate" starts:
        $('#fromDate').datepicker('setEndDate', new Date($(this).val()));
    });
    // var table = $('.DataTable').DataTable({
    //     responsive: true,
    //     scrollY: "300px",
    //     scrollX: true,
    //     scrollCollapse: true,
    //     paging: true,

    // });

    // $('#Data').DataTable({
    //     "scrollY ": 200,
    //     "scrollX ": true
    // });
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover();

    $(".DateControl").datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $('.DateControl').datepicker({
        uiLibrary: 'bootstrap4'
    });

    $("#datepickerFrom").datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $("#datepickerTo").datepicker({
        autoclose: true,
        todayHighlight: true
    });


    $('#datepickerFrom').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datepickerTo').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datepickerFrom').click(function() {
        //   debugger;
    })

    $('a.btn.default-btn').click(function() {

        $('a.carousel-control-next').click();

    });

    $('a.btn.default-btn').click(function() {

        $('a.carousel-control-next').click();

    });



    $('#certifType').change(function() {
        var selectedCountry = $(this).children("option:selected").val();
        var ArOfDivs = ['#FirstOPtion', '#SecondOPtion', '#ThrOPtion']
        var selectedDiv
        for (var i = 0; i < ArOfDivs.length; i++) {
            $(ArOfDivs[i]).css('display', 'none');

        }
        if (selectedCountry == 1) {
            $('#FirstOPtion').css('display', 'block');

        } else if (selectedCountry == 2) {
            $('#SecondOPtion').css('display', 'block');
        } else {
            $('#ThrOPtion').css('display', 'block');

        }

    })
})
$(function() {
    $('.custom-file-input').change(function() {
        var path = $(this).val();
        if (path !== " ") {
            $('.custom-file-label2').html('');
            //    alert(path)
            var pathArray = path.split('\\');
            //    alert(pathArray)
            var pathArrayLength = pathArray.length
                // alert(pathArrayLength)
            var fileName = pathArray[pathArrayLength - 1]
                //    alert(fileName)

            $('.custom-file').append(`<label class="custom-file-label2">` + fileName + `</label>`);
            //      $( "label.inner" ).insertAfter( ".custom-file-label" );
        }
    });
});

function inverseColors() {

    $('body').toggleClass('inverted')
}

function decreaseFont() {
    $('body').addClass('font-Bigger')
}