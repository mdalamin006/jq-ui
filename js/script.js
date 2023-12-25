// JavaScript code 




// jQurey Code
$(document).ready(function () {
  // Daraggable
  $(function () {
    $("#draggable").draggable({
      revert: true
    });
  });
  // Dropable

  $("#dropDrag").draggable({ revert: "invalid" });
  $("#droppable").droppable({
    drop: function () {
      $(this)
        .addClass("ui-state-highlight")
        .find("p")
        .html("Content Is droppend!");
    }
  });
  // Resizeable

  $("#resizeCustom").resizable({
    animate: true,
    helper: "ui-resizable-helper",
    aspectRatio: 16 / 9,
    ghost: true
    // alsoResize: "#dropDrag"
  }
  );
  // $("#dropDrag").resizable();
  // Selectable

  $("#selectable").selectable({
    stop: function () {
      var result = $("#select-result").empty();
      $(".ui-selected", this).each(function () {
        var index = $("#selectable li").index(this);
        result.append(" #" + (index + 1));
      });
    }
  });

  // Sortable

  $("#sortable").sortable({
    placeholder: "ui-state-highlight"
  });

  // Test
  $(function () {
    $("#draggableTest").draggable();

    $("#droppableTest, #droppable-inner").droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function (event, ui) {
        $(this)
          .addClass("ui-state-highlight")
          .find("> p")
          .html("Dropped!");
        return false;
      }
    });

    $("#droppableTest2, #droppable2-inner").droppable({
      greedy: true,
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function (event, ui) {
        $(this)
          .addClass("ui-state-highlight")
          .find("> p")
          .html("Dropped!");
      }
    });
  });


  // Widgets
  // Accordion
  var icons = {
    header: " ui-icon-plusthick",
    activeHeader: "ui-icon-minusthick"
  };
  $("#accordion").accordion({
    iconPosition: "end",
    collapsible: true,
    icons: icons
  })

  // AutoComepete
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
  // Datepicker
  $("#date").datepicker(
    $.datepicker.regional['bn-BD'] = { "Name": "bn-BD", "closeText": "Close", "prevText": "Prev", "nextText": "Next", "currentText": "Today", "monthNames": ["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর", ""], "monthNamesShort": ["জানু.", "ফেব্রু.", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগ.", "সেপ্টে.", "অক্টো.", "নভে.", "ডিসে.", ""], "dayNames": ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"], "dayNamesShort": ["রবি.", "সোম.", "মঙ্গল.", "বুধ.", "বৃহস্পতি.", "শুক্র.", "শনি."], "dayNamesMin": ["র", "স", "ম", "ব", "ব", "শ", "শ"], "dateFormat": "dd-mm-yy", "firstDay": 1, "isRTL": false }, {
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
    altField: "#alternate",
    altFormat: "DD, d MM, yy",
    showWeek: true,
    firstDay: 1
  });
  $("#anim").on("change", function () {
    $("#date").datepicker("option", "showAnim", $(this).val());
  });

  // $.datepicker.regional['bn-BD'] = {"Name":"bn-BD","closeText":"Close","prevText":"Prev","nextText":"Next","currentText":"Today","monthNames":["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর",""],"monthNamesShort":["জানু.","ফেব্রু.","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগ.","সেপ্টে.","অক্টো.","নভে.","ডিসে.",""],"dayNames":["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"],"dayNamesShort":["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],"dayNamesMin":["র","স","ম","ব","ব","শ","শ"],"dateFormat":"dd-mm-yy","firstDay":1,"isRTL":false};
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });
  $("#opener").on("click", function () {
    $("#dialog").dialog("open");
  });
  // Progress
  $(function () {
    var progressbar = $("#progressbar"),
      progressLabel = $(".progress-label");

    progressbar.progressbar({
      value: false,
      change: function () {
        progressLabel.text(progressbar.progressbar("value") + "%");
      },
      complete: function () {
        progressLabel.text("Complete!");
      }
    });

    function progress() {
      var val = progressbar.progressbar("value") || 0;

      progressbar.progressbar("value", val + 2);

      if (val < 99) {
        setTimeout(progress, 80);
      }
    }

    setTimeout(progress, 2000);
  });
  // Range Slider
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
  // Tabs
  var tabs = $("#tabs").tabs();
  var previouslyFocused = false;

  tabs.find(".ui-tabs-nav").sortable({
    axis: "x",

    // Sortable removes focus, so we need to restore it if the tab was focused
    // prior to sorting
    start: function (event, ui) {
      previouslyFocused = document.activeElement === ui.item[0];
    },
    stop: function (event, ui) {
      tabs.tabs("refresh");
      if (previouslyFocused) {
        ui.item.trigger("focus");
      }
    }
  });
  // Tooltip

  $("#age").tooltip({
    track: true

  });


  //  Effects



});














































