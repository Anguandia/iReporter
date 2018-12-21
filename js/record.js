document.write('<head>\
<link rel="stylesheet" href="css/record_form.css"></link>\
<link rel="stylesheet" href="css/main.css"></link>\
<script>src="js/jquery.min.js"</script>\
</head>\
<body>\
<form id="record" form-action="" onclick=showFlag()>\
    <fieldset>\
    <legend>Record Specifications</legend>\
    <label for="rec" class="type left">Intervention:</label>\
    <input type="radio" name="type" id="rec" class="type left short" >\
    <label for="red" class="type left">Red Flag:</label>\
    <input type="radio" name="type" id="red" class="type left short" >\
    <input type="text" name="title" class="short, right" >\
    <label for="title" class="anon right">Title:</label><br>\
    <label for="anon" class="anon">Report Anonymously</label>\
    <input type="checkbox" class="anon">\
    <em class="description anon">If you opt to report anonymously, your identity will <span><b>NOT</b></span> be conceled</em>\
    </fieldset><br>\
    <label for="gps" class="">Enter GPS location of Pickup Point</label>\
    <input placeholder="degrees North" name="gps" class="short" id="gps_E">\
    <input placeholder="degrees East" name="gps" class="short" id="gps_N">\
    <fieldset>\
    <legend>Icident Location</legend>\
    <label for="dest1" class="left">Address1:</label>\
    <input type="text" name="dest1" id="src" class="left" placeholder="Country">\
    <input type="text" placeholder="City" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address2:</label><br>\
    <label for="src2"  class="left">Address3:</label>\
    <input type="text" placeholder="County" class="left" name="src2" id="src2">\
    <input type="text" placeholder="Division" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address4:</label><br>\
    <label for="src2"  class="left">Address5:</label>\
    <input type="text" placeholder="Village" class="left" name="src2" id="src2">\
    <input type="text" placeholder="Street" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address6:</label><br>\
    <label for="src2"  class="left">Address7:</label>\
    <input type="text" placeholder="Block" class="left" name="src2" id="src2">\
    <input type="text" placeholder="Floor" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address8:</label>\
    </fieldset>\
    \
    <fieldset>\
    <legend>Your Details</legend>\
    <em class="description">Details are for followup purposes. Your choice of anonymity holds</em><br>\
    <label for="first_name" class="left">First Name:</label>\
    <input type="text" name="first_name" id="recipient" class="left" placeholder="first name" style="brecord: none">\
    <input type="text" placeholder="last name" class="right" name="last_name" id="recipient1">\
    <label for="last_name"  class="right">Last Name:</label><br>\
    <label for="email"  class="left">Email addr:</label>\
    <input type="email" placeholder="email" class="left" name="email" id="email">\
    <input type="number" placeholder="phone number" class="right" name="number" id="number" required>\
    <label for="number"  class="right">Tel contact:</label><br>\
    </fieldset><br>\
    <fieldset id="flag">\
    <legend>Parties Involved</legend>\
    <em class="description">Parties can be persons, institutions or groups</em><br>\
    <label for="name" class="left">Name:</label>\
    <input type="text" id="involved" class="left" placeholder="name of party" required>\
    <input type="text" placeholder="Position" class="right" name="position" id="pos">\
    <label for="pos"  class="right">Position<br><em>(if person)</em>:</label><br>\
    <label for="address"  class="left">Address:</label>\
    <input type="text" placeholder="Address" class="left" name="address" id="add"><br>\
    <button id="parites" onclick="addParty()">Add Party</button>\
    </fieldset>\
    <label for="description" class=""><p><em class="description">Click the button bellow and give further details if possible\
        </em></p>\
    </label>\
    <button oncloick="openDetail()">Details</button><br>\
    <textarea class="" id="desc" form="record" placeholder="Enter record details" ></textarea><br>\
    <label><em class="description">upload any pictures, videos or supporting document copies</em><br><br>\
    <input type="file" id="upload" value="upoad" form="record"></label>\
    <div id="actions">\
    <input type="reset" id="reset" class="right" value="reset">\
    <input type="button" id="submit" class="left" value="submit" onclick=submitted()>\
    </div>\
</form>\
<script src="js/show_flag.js"></script>\
<script src="js/record_details.js"></script>\
<script src="js/submitted.js"></script>\
</body>')
