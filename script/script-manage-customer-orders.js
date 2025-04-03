let sortingList = [];

function updateSortList(sortingOption) {

    if (sortingOption.checked) {
      sortingList.push(sortingOption.value);
    } else {
        for (let i = 0; i < sortingList.length; i++) {
            if (sortingList[i] === sortingOption.value) {
              sortingList.splice(i, 1);
              break;
            }
        }
    }
    
    let resultString = "";

    if (sortingList.length > 0) {
    for (let i = 0; i < sortingList.length; i++) {
        resultString += sortingList[i];
        if (i < sortingList.length - 1) {
            resultString += ", ";
        }
      }
    } else {
      resultString = "None";
    }

    document.getElementById("sort-list").innerHTML = resultString;

}

function resetSortList() {
    sortingList = [];
    document.getElementById("sort-list").innerHTML = "None";
}

function getOrderDetails(action) {
    if (action != 'delete') {
        window.location.href = `/staff/manage-orders-details.html?action=${action}`; // to be amended
    }
}
