function sortData(j) {
    var table, rows, swap, i, current, next, needSwap;
    table = document.getElementById("all_records");
    swap = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (swap) {
      //start by saying: no switching is done:
      swap = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        needSwap = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        current = rows[i].getElementsByTagName("TD")[j];
        next = rows[i + 1].getElementsByTagName("TD")[j];
        //check if the two rows should switch place:
        if (current.innerHTML.toLowerCase() > next.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          needSwap = true;
          break;
        }
      }
      if (needSwap) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        swap = true;
      }
    }
  }
