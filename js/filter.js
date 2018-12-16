function filterData(j) {
    var input, filter, table, tr, td, i;
    input = document.getElementById("recordID");
    filter = input.value.toUpperCase();
    table = document.getElementById("all_records");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
