document.write('<head>\
<link rel="stylesheet" href="../static/css/record_form.css"></link>\
<link rel="stylesheet" href="../static/css/main.css"></link>\
<script>src="../static/js/jquery.min.js"</script>\
</head>\
<body>\
<form id="record" form-action="" onclick=showFlag()>\
    <fieldset>\
    <legend>Record Specifications</legend>\
    <label class="check">Red-flag:\
    <input type="radio" class="check" name="type" id="red">\
    </label>\
    <label class="check">Other:\
    <input type="radio" class="check" name="type" id="rec">\
    </label><br>\
    <label for="title">Subject:</label>\
    <input type="text" name="title" class="short" placeholder="brief summary of event"><br>\
    <label for="anon">Report Anonymously</label>\
    <input type="checkbox" class="check" id="anon"><br>\
    <em class="description">If you opt to report anonymously, your identity will <span><b>NOT</b></span> be exposeds</em>\
    </fieldset><br>\
    <label for="gps" class="">Enter GPS location of Pickup Point</label><br>\
    <input placeholder="degrees North" name="gps" class="short" id="gps_E">\
    <input placeholder="degrees East" name="gps" class="short" id="gps_N">\
    <fieldset>\
    <legend>Icident Location</legend>\
    <label for="dest1" class="">Address1:</label>\
    <input type="text" placeholder="City" class="" name="src2" id="src2"><br>\
    <label for="src2"  class="">Address2:</label>\
    <input type="text" name="dest1" id="src" class="" placeholder="County"><br>\
    <label for="src2"  class="">Address3:</label>\
    <input type="text" placeholder="street" class="" name="src2" id="src2"><br>\
    </fieldset>\
    <fieldset>\
    <legend>Reporter Details</legend>\
    <em class="description">Details are for followup purposes. Your choice of anonymity holds</em><br>\
    <div class="align">\
    <p><label for="name" class="">Name:</label>\
    <input type="text" name="name" id="" class="" placeholder="name" required></p>\
    <p><label for="email"  class="">Email:</label>\
    <input type="email" placeholder="email" class="" name="email" id="email"></p>\
    <p><label for="number"  class="">Tel:</label>\
    <input type="tel" placeholder="phone number" class="" name="number" id="number" required></p>\
    </div>\
    </fieldset>\
    <fieldset id="flag">\
    <legend>Parties Involved</legend>\
    <em class="description">Parties can be persons, institutions or groups</em><br>\
    <div class="align">\
    <p><label for="name" class="">Name:</label>\
    <input type="text" id="involved" class="" placeholder="name of party" required></p>\
    <p><label for="pos"  class="">Position<em>(if person)</em>:</label>\
    <input type="text" placeholder="Position" class="" name="position" id="pos"></p>\
    <p><label for="address"  class="">Address:</label>\
    <input type="text" placeholder="Address" class="" name="address" id="add"></p>\
    </div><br>\
    <button id="parites" class="but" onclick="addParty()">Add Party</button>\
    </fieldset>\
    <p><em class="description">Click the button bellow to add further details</em></p>\
    <button id="get" class="but" onclick="openDetails()">Details</button>\
    <textarea class="" id="details" form="record" placeholder="Enter record details" ></textarea><br>\
    <p>\
    <em class="description">Upload any pictures, videos or supporting document copies</em>\
    </p>\
    <button class="but" onclick="getFile()">Upload</button>\
    <input type="file" id="upload" form="record" accept="audio/*, video/*, image/*" hidden>\
    <div id="actions">\
    <input type="button" id="submit" class="" value="submit" onclick=submitted()>\
    <input type="reset" id="reset" class="" value="reset">\
    </div>\
</form>\
<script src="../static/js/show_flag.js"></script>\
<script src="../static/js/record_details.js"></script>\
<script src="../static/js/submitted.js"></script>\
<script src="../static/js/getfile.js"></script>\
</body>')
