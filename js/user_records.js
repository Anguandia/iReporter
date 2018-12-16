document.write('\
<input type="text" name="record" id="recordID" onkeyup="filterData(3)" placeholder="enter record ID to search">\
<tab id="select"><a href="admin_record_view.html">Select</a></tab>\
<table id="all_records">\
<tr class="header">\
  <th id="th1">Subject</th>\
  <th id="th3" onclick="sortData(1).reverse()">Location</th>\
  <th id="th2" onclick="sortData(2)">Status</th>\
  <th id="th4" onclick="sortData(3).reverse()">record ID</th>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Broken Bridge</td>\
  <td onclick="loadrecord()">Amuria</td>\
  <td onclick="loadrecord()">Draft</td>\
  <td onclick="loadrecord()">18050630007</td>\
  </tr>\
<tr>\
  <td onclick="loadrecord()">Constant cattle rustling</td>\
  <td onclick="loadrecord()">Karimoja</td>\
  <td onclick="loadrecord()">Resolved</td>\
  <td onclick="loadrecord()">18070230301</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Border Wrangle</td>\
  <td onclick="loadrecord()">Amuru</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Flooding</td>\
  <td onclick="loadrecord()">Iganga</td>\
  <td onclick="loadrecord()">Draft</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Drought</td>\
  <td onclick="loadrecord()">Soroti</td>\
  <td onclick="loadrecord()">Resolved</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Famin</td>\
  <td onclick="loadrecord()">Nebbi</td>\
  <td onclick="loadrecord()">Resolved</td>\
  <td onclick="loadrecord()">10070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Cholera Outbreak</td>\
  <td onclick="loadrecord()">Rakai</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">12120630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Cholera Outbreak</td>\
  <td onclick="loadrecord()">Mbarara</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">0807063000</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Cholera Outbreak</td>\
  <td onclick="loadrecord()">Kabale</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">15070630301</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Cholera Outbreak</td>\
  <td onclick="loadrecord()">Kabarole</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">17070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Cholera Outbreak</td>\
  <td onclick="loadrecord()">Muni</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Constant cattle rustling</td>\
  <td onclick="loadrecord()">Karimoja</td>\
  <td onclick="loadrecord()">Resolved</td>\
  <td onclick="loadrecord()">18070230301</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Border Wrangle</td>\
  <td onclick="loadrecord()">Amuru</td>\
  <td onclick="loadrecord()">Rejected</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Flooding</td>\
  <td onclick="loadrecord()">Iganga</td>\
  <td onclick="loadrecord()">Draft</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadrecord()">Drought</td>\
  <td onclick="loadrecord()">Soroti</td>\
  <td onclick="loadrecord()">Resolved</td>\
  <td onclick="loadrecord()">18070630001</td>\
</tr>\
</table>\
')
