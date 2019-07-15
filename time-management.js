/* Adding common cases */

function addNewCase(event, cur_content) {
  if (event.type === "click") {
    event.preventDefault();
  }
  // creation html structure
  let common_index = 1;
  const container = document.querySelector(".list-container"),
    newCase = document.createElement("li"),
    editPart = document.createElement("p"),
    defaultText = document.createTextNode("Занести новое дело"),
    newDeleteBut = document.createElement("span"),
    newDeleteIcon = document.createTextNode("X");


  $(newCase).attr({
    "class": "all-cases-item",
    "draggable": "true",
  });
  newCase.addEventListener("dragstart", dragStart);
  editPart.setAttribute("contenteditable", "true");

  // Assign key with suitable index
  common_index = search_actual_key("allCases_", editPart, common_index);

  editPart.addEventListener("focus", currentText);
  editPart.addEventListener("blur", saveInStorage);
  newDeleteBut.setAttribute("class", "deleteBut");
  newDeleteBut.addEventListener("click", itemsDeleting);

  newDeleteBut.appendChild(newDeleteIcon);
  editPart.appendChild(defaultText);
  newCase.appendChild(editPart);
  newCase.appendChild(newDeleteBut);
  container.appendChild(newCase);
  /* for drag and drop */
  if (cur_content !== undefined) {
    editPart.innerHTML = cur_content;
    return newCase;
  }
}

/* Adding today cases 
function to mark how many pomodoros and how good were executed*/
function addCurCase(event, cur_content) {
  /* creation elements */
  if (event.type === "click") {
    event.preventDefault();
  }
  var container = document.querySelector(".businesses"),
    curCase = document.createElement("div"),
    curCaseBody = document.createElement("div"),
    editPart = document.createElement("p"),
    defualtText = document.createTextNode("Занести новое дело"),
    menuIcon = document.createElement("img"),
    menuContainer = document.createElement("span"),
    mainTomato = document.createElement("img"),
    additionTomato = document.createElement("img"),
    arrowUp = document.createElement("img"),
    arrowDown = document.createElement("img"),
    effort = document.createElement("img"),
    pain = document.createElement("img"),
    curDeleteBut = document.createElement("span"),
    curDeleteButIcon = document.createTextNode("X"),
    panel = document.createElement("span"),
    planned = document.createElement("p"),
    real = document.createElement("p");

  /* assign attributes and listening for event */
  $(curCase).attr({
    "class": "business",
    "draggable": "true"
  });
  curCase.addEventListener("dragstart", dragStart);
  $(editPart).attr({
    "contenteditable": "true",
    "class": "business_content"
  });

  // finding and assigning a suitable key
  const all_cur_cases = container.querySelectorAll("[data-approach]"),
    all_keys = [];
  let index = 1;
  if (all_cur_cases.length !== 0) {
    all_cur_cases.forEach(function (item, index) {
      all_keys[index] = item.getAttribute("data-approach");
    });
    while (all_keys.includes("businessContent_" + index)) {
      index++;
    }
    editPart.setAttribute("data-approach", "businessContent_" + index);
  }
  editPart.setAttribute("data-approach", "businessContent_" + index);


  editPart.addEventListener("blur", saveInStorage);
  editPart.addEventListener("focus", currentText);
  $(menuIcon).attr({
    "src": "images/icon-menu.png",
    "alt": "icon menu",
    "class": "menuIcon"
  });
  menuIcon.addEventListener("click", createMenuState);
  menuContainer.className = "menuContainer";
  $(mainTomato).attr({
    "src": "images/main-tomato.png",
    "alt": "main tomato",
    "class": "execution_icon"
  });
  mainTomato.addEventListener("click", busExecutParameters);
  $(additionTomato).attr({
    "src": "images/additional-tomato.png",
    "alt": "additional tomato",
    "class": "execution_icon"
  });
  additionTomato.addEventListener("click", busExecutParameters);
  $(arrowUp).attr({
    "src": "images/arrow_upward.png",
    "alt": "arrow upward",
    "class": "execution_icon"
  });
  arrowUp.addEventListener("click", busExecutParameters);
  $(arrowDown).attr({
    "src": "images/arrow_downward.png",
    "alt": "arrow downward",
    "class": "execution_icon"
  });
  arrowDown.addEventListener("click", busExecutParameters);
  $(effort).attr({
    "src": "images/effort.png",
    "alt": "effort",
    "class": "execution_icon"
  });
  effort.addEventListener("click", busExecutParameters);
  $(pain).attr({
    "src": "images/pain.png",
    "alt": "pain",
    "class": "execution_icon"
  });
  pain.addEventListener("click", busExecutParameters);
  curDeleteBut.classList.add("deleteBut", "deleteBut-smaller");
  curDeleteBut.addEventListener("click", itemsDeleting);
  panel.className = "service-icons-panel";
  // Assign key with suitable index to panel
  const cur_panels = container.querySelectorAll(".service-icons-panel");
  let panel_index = 1;
  if (cur_panels.length !== 0) {
    const cur_panels_keys = [];
    cur_panels.forEach(function (item, index) {
      cur_panels_keys[index] = item.getAttribute("data-approach");
    });
    while (cur_panels_keys.includes("panel_" + panel_index)) {
      panel_index++;
    }
    panel.setAttribute("data-approach", "panel_" + panel_index)
  }
  panel.setAttribute("data-approach", "panel_" + panel_index);

  planned.setAttribute("contenteditable", "true");
  // Assign key with suitable index to planned
  const cur_planned = container.querySelectorAll(".planned");
  let planned_index = 1;
  if (cur_planned.length !== 0) {
    const cur_planned_keys = [];
    cur_planned.forEach(function (item, index) {
      cur_planned_keys[index] = item.getAttribute("data-approach");
    });
    while (cur_planned_keys.includes("planned_" + planned_index)) {
      planned_index++;
    }
    planned.setAttribute("data-approach", "planned_" + planned_index);
  }
  planned.setAttribute("data-approach", "planned_" + planned_index);
  planned.classList.add("time-quantity", "planned");
  planned.addEventListener("blur", saveInStorage);

  real.setAttribute("contenteditable", "true");
  // Assign key with suitable index to real
  const cur_real = container.querySelectorAll(".real");
  let cur_real_index = 1;
  if (cur_real.length !== 0) {
    const cur_real_keys = [];
    cur_real.forEach(function (item, index) {
      cur_real_keys[index] = item.getAttribute("data-approach");
    });
    while (cur_real_keys.includes("real_" + cur_real_index)) {
      cur_real_index++;
    }
    real.setAttribute("data-approach", "real_" + cur_real_index);
  }
  real.setAttribute("data-approach", "real_" + cur_real_index);
  real.classList.add("time-quantity", "real");
  real.addEventListener("blur", saveInStorage);

  /* appending all nodes */
  menuContainer.appendChild(mainTomato);
  menuContainer.appendChild(additionTomato);
  menuContainer.appendChild(arrowUp);
  menuContainer.appendChild(arrowDown);
  menuContainer.appendChild(effort);
  menuContainer.appendChild(pain);

  curDeleteBut.appendChild(curDeleteButIcon);
  if (cur_content === undefined) {
    editPart.appendChild(defualtText);
  } else {
    editPart.innerHTML = cur_content;
  }

  curCaseBody.appendChild(editPart);
  curCaseBody.appendChild(menuIcon);
  curCaseBody.appendChild(menuContainer);
  curCaseBody.appendChild(panel);
  curCase.appendChild(curCaseBody);
  curCase.appendChild(curDeleteBut);
  curCase.appendChild(planned);
  curCase.appendChild(real);
  container.appendChild(curCase);

  if (cur_content !== undefined) {
    return curCase;
  }
}
// event handler for appearance and disappearance service icons menu
function createMenuState(event) {
  var menuContainer = event.target.nextSibling;
  if (menuContainer.classList.contains("is-menuContainer-active")) {
    menuContainer.classList.remove("is-menuContainer-active");
  } else {
    menuContainer.classList.add("is-menuContainer-active");
  }
}
// function to mark how many pomodoros and how good were executed
function busExecutParameters(event) {
  var icon_src = event.target.getAttribute("src"),
    icon_alt = event.target.getAttribute("alt"),
    panel_container = event.target.parentElement.parentElement,
    panel = panel_container.querySelector(".service-icons-panel"),
    panelStorageKey = panel.getAttribute("data-approach"),
    img = document.createElement("img");
  $(img).attr({
    "src": icon_src,
    "alt": icon_alt
  });
  img.className = "execution_icon";
  panel.appendChild(img);

  localStorage.setItem(panelStorageKey, panel.innerHTML);
}


/* physical exercises block */

function addPhysExercise(event) {
  /*creating a new nodes*/
  event.preventDefault();
  const container = document.querySelector(".phys");
  let common_index = 1;
  const newExercise = document.createElement("ul"),
    deleteBut = document.createElement("li"),
    deleteButIcon = document.createTextNode("X");
  for (let i = 1; i <= 2; i += 1) {
    var approach = document.createElement("li"),
      arrow = document.createElement("img"),
      variants = document.createElement("ul"),
      ObliqueDoor = document.createElement("li"),
      Squatting = document.createElement("li"),
      ObliqueSwings = document.createElement("li"),
      PushUp = document.createElement("li");
    common_index = search_actual_key("phys_", approach, common_index);



    approach.classList.add("selectApproach", "none");
    $(arrow).attr({
      "src": "images/arrow_drop_down.png",
      "alt": "arrow drop down menu"
    });
    arrow.addEventListener("click", selectApproach);
    variants.setAttribute("class", "variants");
    ObliqueDoor.className = "obliqueByDoor";
    ObliqueDoor.addEventListener("click", selectApproach);
    Squatting.className = "squatting";
    Squatting.addEventListener("click", selectApproach);
    ObliqueSwings.className = "obliqueBySwings";
    ObliqueSwings.addEventListener("click", selectApproach);
    PushUp.className = "push-up";
    PushUp.addEventListener("click", selectApproach);
    /* appending all nodes */

    variants.appendChild(ObliqueDoor);
    variants.appendChild(Squatting);
    variants.appendChild(ObliqueSwings);
    variants.appendChild(PushUp);

    approach.appendChild(arrow);
    approach.appendChild(variants);

    newExercise.appendChild(approach);

    if (i === 1) {
      container.appendChild(newExercise);
    }
  }

  /* assign attribute */
  newExercise.classList.add("approach", "approach-phys");
  deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
  deleteBut.addEventListener("click", itemsDeleting);
  deleteBut.appendChild(deleteButIcon);
  newExercise.appendChild(deleteBut);
  const timeExecution = document.createElement("li"),
    quantityExecution = document.createElement("li");
  timeExecution.classList.add("time-quantity", "time-quantity-extraStudy");
  timeExecution.addEventListener("blur", saveInStorage);
  timeExecution.setAttribute("contenteditable", "true");
  timeExecution.setAttribute("data-approach", "executTime_" + common_index);
  quantityExecution.setAttribute("contenteditable", "true");
  quantityExecution.setAttribute("data-approach", "quantity_" + common_index);
  quantityExecution.classList.add("time-quantity", "time-quantity-extraStudy");
  quantityExecution.addEventListener("blur", saveInStorage);

  newExercise.appendChild(timeExecution);
  newExercise.appendChild(quantityExecution);
}


/* social network function */

function createApproach(event) {
  event.preventDefault();
  const container = document.querySelector(".halfInterior-socialNet .approach-container");
  let common_index = 1;
  const browsingNews = document.createElement("ul"),
    deleteBut = document.createElement("li"),
    deleteButIcon = document.createTextNode("X"),
    approach = document.createElement("li"),
    approachArrow = document.createElement("img"),
    variants = document.createElement("ul"),
    firstVariant = document.createElement("li"),
    secondVariant = document.createElement("li"),
    thirdVariant = document.createElement("li"),
    scheduled = document.createElement("li"),
    real = document.createElement("li"),
    amount = document.createElement("li");

  /* assign attributes */
  browsingNews.classList.add("approach", "approach-news");
  deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
  deleteBut.addEventListener("click", itemsDeleting);
  common_index = search_actual_key("net_", approach, common_index);
  approach.classList.add("selectApproach", "selectapproach-socialNet", "none");
  $(approachArrow).attr({
    "src": "images/arrow_drop_down.png",
    "alt": "arrow drop down menu"
  });
  approachArrow.addEventListener("click", selectApproach);
  variants.setAttribute("class", "variants");
  firstVariant.className = "echo";
  firstVariant.addEventListener("click", selectApproach);
  secondVariant.className = "facebook";
  secondVariant.addEventListener("click", selectApproach);
  thirdVariant.className = "newsSite";
  thirdVariant.addEventListener("click", selectApproach);

  scheduled.setAttribute("contenteditable", "true");
  const scheduled_els = container.querySelectorAll("[data-approach^='newsScheduledTime']");
  let newsScheduledIndex = 1;
  if (scheduled_els.length !== 0) {
    const scheduled_keys = [];
    scheduled_els.forEach(function (item, index) {
      scheduled_keys[index] = item.getAttribute("data-approach");
    });
    while (scheduled_keys.includes("newsScheduledTime_" + newsScheduledIndex)) {
      newsScheduledIndex++;
    }
    scheduled.setAttribute("data-approach", "newsScheduledTime_" + newsScheduledIndex);
  }
  scheduled.setAttribute("data-approach", "newsScheduledTime_" + newsScheduledIndex);
  scheduled.classList.add("time-quantity", "time-quantity-extraStudy");
  scheduled.addEventListener("blur", saveInStorage);

  real.setAttribute("contenteditable", "true");
  const real_elms = container.querySelectorAll("[data-approach^='newsRealTime']");
  let newsRealIndex = 1;
  if (real_elms.length !== 0) {
    const real_keys = [];
    real_elms.forEach(function (item, index) {
      real_keys[index] = item.getAttribute("data-approach");
    });
    while (real_keys.includes("newsRealTime_" + newsRealIndex)) {
      newsRealIndex++;
    }
    real.setAttribute("data-approach", "newsRealTime_" + newsRealIndex);
  }
  real.setAttribute("data-approach", "newsRealTime_" + newsRealIndex);
  real.classList.add("time-quantity", "time-quantity-extraStudy");
  real.addEventListener("blur", saveInStorage);

  amount.setAttribute("contenteditable", "true");
  const amount_elms = container.querySelectorAll("[data-approach^='newsTimeAmount'");
  let newsAmountIndex = 1;
  if (amount_elms.length !== 0) {
    const amount_keys = [];
    amount_elms.forEach(function (item, index) {
      amount_keys[index] = item.getAttribute("data-approach");
    });
    while (amount_keys.includes("newsTimeAmount_" + newsAmountIndex)) {
      newsAmountIndex++;
    }
    amount.setAttribute("data-approach", "newsTimeAmount" + "_" + newsAmountIndex);
  }
  amount.setAttribute("data-approach", "newsTimeAmount" + "_" + newsAmountIndex);
  amount.classList.add("time-quantity", "time-quantity-extraStudy");
  amount.addEventListener("blur", saveInStorage);

  /* appending all nodes */
  variants.appendChild(firstVariant);
  variants.appendChild(secondVariant);
  variants.appendChild(thirdVariant);

  deleteBut.appendChild(deleteButIcon);

  approach.appendChild(approachArrow);
  approach.appendChild(variants);

  browsingNews.appendChild(deleteBut);
  browsingNews.appendChild(approach);
  browsingNews.appendChild(scheduled);
  browsingNews.appendChild(real);
  browsingNews.appendChild(amount);

  container.appendChild(browsingNews);
}


/*  For adding analysis */

function createAnalysis(event) {
  event.preventDefault();
  var container = document.getElementById("analysis").querySelector(".list-container"),
    /* creating nodes */
    analysisItem = document.createElement("li"),
    editAnalysisPart = document.createElement("p"),
    deleteBut = document.createElement("span"),
    deleteButIcon = document.createTextNode("X");

  /* assign attribute */
  analysisItem.classList.add("time-quantity", "time-quantity-analysis");
  editAnalysisPart.setAttribute("contenteditable", "true");
  const editAnalysis_elms = container.querySelectorAll("[data-approach^='analysisPart'");
  let analysisPartIndex = 1;
  if (editAnalysis_elms.length !== 0) {
    const analysis_keys = [];
    editAnalysis_elms.forEach(function (item, index) {
      analysis_keys[index] = item.getAttribute("data-approach");
    });
    while (analysis_keys.includes("analysisPart_" + analysisPartIndex)) {
      analysisPartIndex++;
    }
    editAnalysisPart.setAttribute("data-approach", "analysisPart_" + analysisPartIndex);
  }
  editAnalysisPart.setAttribute("data-approach", "analysisPart_" + analysisPartIndex);
  editAnalysisPart.addEventListener("blur", saveInStorage);
  deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
  deleteBut.addEventListener("click", itemsDeleting);

  /* appending all nodes */
  deleteBut.appendChild(deleteButIcon);
  analysisItem.appendChild(editAnalysisPart);
  analysisItem.appendChild(deleteBut);
  container.appendChild(analysisItem);
}


/* Resulting log */

function results(event) {
  event.preventDefault();
  var resultsTable = document.querySelector(".results"),
    /* creating nodes */
    tableRow = document.createElement("tr"),
    date = document.createElement("td"),
    tomatoAmount = document.createElement("td"),
    strainAmount = document.createElement("td"),
    rightAttitude = document.createElement("td"),
    falseAttitude = document.createElement("td"),
    totalPhysTime = document.createElement("td"),
    totalNetTime = document.createElement("td"),
    logDeleteBut = document.createElement("td"),
    logDeleteIcon = document.createTextNode("X");

  /* appending attributes */
  date.setAttribute("contenteditable", "true")
  const date_elms = resultsTable.querySelectorAll("[data-approach^='date'");
  let index = 1;
  if (date_elms.length !== 0) {
    const date_elms_keys = [];
    date_elms.forEach(function (item, index) {
      date_elms_keys[index] = item.getAttribute("data-approach");
    });
    while (date_elms_keys.includes("date_" + index)) {
      index++;
    }
    date.setAttribute("data-approach", "date_" + index);
  }
  date.setAttribute("data-approach", "date_" + index);
  date.addEventListener("blur", saveInStorage);


  tomatoAmount.setAttribute("contenteditable", "true");
  const tomatoAmount_elms = resultsTable.querySelectorAll("[data-approach^='tomatoAmount'");
  if (tomatoAmount_elms.length !== 0) {
    const tomatoAmount_keys = [];
    tomatoAmount_elms.forEach(function (item, index) {
      tomatoAmount_keys[index] = item.getAttribute("data-approach");
    });
    while (tomatoAmount_keys.includes("tomatoAmount_" + index)) {
      index++;
    }
    tomatoAmount.setAttribute("data-approach", "tomatoAmount_" + index);
  }
  tomatoAmount.setAttribute("data-approach", "tomatoAmount_" + index);
  tomatoAmount.addEventListener("blur", saveInStorage);


  strainAmount.setAttribute("contenteditable", "true");
  const strainAmount_elms = resultsTable.querySelectorAll("[data-approach^='strainAmount']");
  if (strainAmount_elms.length !== 0) {
    const strainAmount_keys = [];
    strainAmount_elms.forEach(function (item, index) {
      strainAmount_keys[index] = item.getAttribute("data-approach");
    });
    while (strainAmount_keys.includes("strainAmount_" + index)) {
      index++;
    }
    strainAmount.setAttribute("data-approach", "strainAmount_" + index);
  }
  strainAmount.setAttribute("data-approach", "strainAmount_" + index);
  strainAmount.addEventListener("blur", saveInStorage);

  rightAttitude.setAttribute("contenteditable", "true");
  const rightAttitude_elms = resultsTable.querySelectorAll("[data-approach^='rightAttitude']");
  if (rightAttitude_elms.length !== 0) {
    const rightAttitude_keys = [];
    rightAttitude_elms.forEach(function (item, index) {
      rightAttitude_keys[index] = item.getAttribute("data-approach");
    });
    while (rightAttitude_keys.includes("rightAttitude_" + index)) {
      index++;
    }
    rightAttitude.setAttribute("data-approach", "rightAttitude_" + index);
  }
  rightAttitude.setAttribute("data-approach", "rightAttitude_" + index);
  rightAttitude.addEventListener("blur", saveInStorage);


  falseAttitude.setAttribute("contenteditable", "true");
  const falseAttitude_elms = resultsTable.querySelectorAll("[data-approach^='falseAttitude']");
  if (falseAttitude_elms.length !== 0) {
    const falseAttitude_keys = [];
    falseAttitude_elms.forEach(function (item, index) {
      falseAttitude_keys[index] = item.getAttribute("data-approach");
    });
    while (falseAttitude_keys.includes("falseAttitude_" + index)) {
      index++;
    }
    falseAttitude.setAttribute("data-approach", "falseAttitude_" + index);
  }
  falseAttitude.setAttribute("data-approach", "falseAttitude_" + index);
  falseAttitude.addEventListener("blur", saveInStorage);

  totalPhysTime.setAttribute("contenteditable", "true");
  const totalPhysTime_elms = resultsTable.querySelectorAll("[data-approach^='totalPhysTime']");
  if (totalPhysTime_elms.length !== 0) {
    const totalPhysTime_keys = [];
    totalPhysTime_elms.forEach(function (item, index) {
      totalPhysTime_keys[index] = item.getAttribute("data-approach");
    });
    while (totalPhysTime_keys.includes("totalPhysTime_" + index)) {
      index++;
    }
    totalPhysTime.setAttribute("data-approach", "totalPhysTime_" + index);
  }
  totalPhysTime.setAttribute("data-approach", "totalPhysTime_" + index);
  totalPhysTime.addEventListener("blur", saveInStorage);


  totalNetTime.setAttribute("contenteditable", "true");
  const totalNetTime_elms = resultsTable.querySelectorAll("[data-approach^='totalNetTime']");
  if (totalNetTime_elms.length !== 0) {
    const totalNetTime_keys = [];
    totalNetTime_elms.forEach(function (item, index) {
      totalNetTime_keys[index] = item.getAttribute("data-approach");
    });
    while (totalNetTime_keys.includes("totalNetTime_" + index)) {
      index++;
    }
    totalNetTime.setAttribute("data-approach", "totalNetTime_" + index);
  }
  totalNetTime.setAttribute("data-approach", "totalNetTime_" + index);
  totalNetTime.addEventListener("blur", saveInStorage);
  logDeleteBut.className = "resultDeleteBut";
  logDeleteBut.addEventListener("click", itemsDeleting);

  /* appending all nodes */
  logDeleteBut.appendChild(logDeleteIcon);
  tableRow.appendChild(date);
  tableRow.appendChild(tomatoAmount);
  tableRow.appendChild(strainAmount);
  tableRow.appendChild(rightAttitude);
  tableRow.appendChild(falseAttitude);
  tableRow.appendChild(totalPhysTime);
  tableRow.appendChild(totalNetTime);
  tableRow.appendChild(logDeleteBut);

  resultsTable.appendChild(tableRow);
}




// loading function
(function () {
  var addCaseButton = document.querySelector(".new-case");
  addCaseButton.addEventListener("click", addNewCase);
  var addCurCaseButton = document.querySelector(".current-case");
  addCurCaseButton.addEventListener("click", addCurCase);
  // social button
  var button = document.querySelector(".halfInterior-socialNet").getElementsByTagName("button");
  button[0].addEventListener("click", createApproach);
  // analysis button
  var button = document.getElementById("analysis").querySelector(".add-button");
  button.addEventListener("click", createAnalysis);
  // log button
  var button = document.getElementById("log").querySelector(".add-button");
  button.addEventListener("click", results);

  // registration dragover and drop events
  const allcases_zone = document.querySelector(".list-container"),
    curcases_zone = document.querySelector(".businesses");
  allcases_zone.addEventListener("dragover", overDrop);
  allcases_zone.addEventListener("drop", overDrop);
  curcases_zone.addEventListener("dragover", overDrop);
  curcases_zone.addEventListener("drop", overDrop);

  /* set listening for event on button for adding physical exercises */
  var addExerciseBut = document.querySelector(".exerciseBut");
  addExerciseBut.addEventListener("click", addPhysExercise);

  // all cases
  let all_indexes = [],
    all_index = 0;
  for (let prop in localStorage) {
    if (/^allCases/.test(prop)) {
      all_indexes[all_index] = Number(/\d/.exec(prop));
      all_index += 1;
    }
  }
  all_indexes.sort();
  for (let i = 0; i < all_indexes.length; i += 1) {
    // declaration and initialization all cases variables
    const container = document.querySelector(".list-container"),
      content = localStorage.getItem("allCases_" + all_indexes[i]),
      newCase = document.createElement("li"),
      newEditPart = document.createElement("p"),
      newDeleteBut = document.createElement("span"),
      newDeleteIcon = document.createTextNode("X");
    /*assign attributes*/
    newCase.setAttribute("class", "all-cases-item");
    $(newEditPart).attr({
      "contenteditable": "true",
      "data-approach": "allCases_" + all_indexes[i]
    });
    newEditPart.addEventListener("blur", saveInStorage);
    newDeleteBut.setAttribute("class", "deleteBut");
    newDeleteBut.addEventListener("click", itemsDeleting);
    /*appending nodes*/
    newDeleteBut.appendChild(newDeleteIcon);
    newEditPart.innerHTML = content;
    newCase.appendChild(newEditPart);
    newCase.appendChild(newDeleteBut);
    container.appendChild(newCase);
  }

  // current cases
  const cases_keys = [],
    cur_indexes = [];
  let cur_index = 0;
  for (let prop in localStorage) {
    if (/^businessContent/.test(prop)) {
      cur_indexes[cur_index] = Number(/\d/.exec(prop));
      cur_index += 1;
    }
  }
  cur_indexes.sort();
  for (let i = 0; i < cur_indexes.length; i += 1) {
    var container = document.querySelector(".businesses"),
      curCase = document.createElement("div"),
      curCaseBody = document.createElement("div"),
      curEditPart = document.createElement("p"),
      curContent = localStorage.getItem("businessContent_" + cur_indexes[i]),
      menuIcon = document.createElement("img"),
      menuContainer = document.createElement("span"),
      mainTomato = document.createElement("img"),
      additionTomato = document.createElement("img"),
      arrowUp = document.createElement("img"),
      arrowDown = document.createElement("img"),
      effort = document.createElement("img"),
      pain = document.createElement("img"),
      deleteBut = document.createElement("span"),
      deleteButIcon = document.createTextNode("X"),
      panel = document.createElement("span"),
      planned = document.createElement("p"),
      real = document.createElement("p");

    /* assign attributes and listening for event */
    curCase.className = "business";
    $(curEditPart).attr({
      "contenteditable": "true",
      "class": "business_content",
      "data-approach": "businessContent_" + cur_indexes[i]
    });
    curEditPart.addEventListener("blur", saveInStorage);
    $(menuIcon).attr({
      "src": "images/icon-menu.png",
      "alt": "icon menu",
      "class": "menuIcon"
    });
    menuIcon.addEventListener("click", createMenuState);
    menuContainer.className = "menuContainer";
    $(mainTomato).attr({
      "src": "images/main-tomato.png",
      "alt": "main tomato",
      "class": "execution_icon"
    });
    mainTomato.addEventListener("click", busExecutParameters);
    $(additionTomato).attr({
      "src": "images/additional-tomato.png",
      "alt": "additional tomato",
      "class": "execution_icon"
    });
    additionTomato.addEventListener("click", busExecutParameters);
    $(arrowUp).attr({
      "src": "images/arrow_upward.png",
      "alt": "arrow upward",
      "class": "execution_icon"
    });
    arrowUp.addEventListener("click", busExecutParameters);
    $(arrowDown).attr({
      "src": "images/arrow_downward.png",
      "alt": "arrow downward",
      "class": "execution_icon"
    });
    arrowDown.addEventListener("click", busExecutParameters);
    $(effort).attr({
      "src": "images/effort.png",
      "alt": "effort",
      "class": "execution_icon"
    });
    effort.addEventListener("click", busExecutParameters);
    $(pain).attr({
      "src": "images/pain.png",
      "alt": "pain",
      "class": "execution_icon"
    });
    pain.addEventListener("click", busExecutParameters);
    deleteBut.classList.add("deleteBut", "deleteBut-smaller");
    deleteBut.addEventListener("click", itemsDeleting);
    panel.className = "service-icons-panel";
    panel.setAttribute("data-approach", "panel_" + cur_indexes[i]);
    /* recreate panel */
    if (localStorage.getItem("panel_" + cur_indexes[i]) !== null) {
      panel.innerHTML = localStorage.getItem("panel_" + cur_indexes[i]);
    }
    $(planned).attr({
      "contenteditable": "true",
      "data-approach": "planned_" + cur_indexes[i]
    });
    planned.classList.add("time-quantity", "planned");
    planned.addEventListener("blur", saveInStorage);
    if (localStorage.getItem("planned_" + cur_indexes[i]) !== null) {
      planned.innerHTML = localStorage.getItem("planned_" + cur_indexes[i]);
    }
    $(real).attr({
      "contenteditable": "true",
      "data-approach": "real_" + cur_indexes[i]
    });
    real.classList.add("time-quantity", "real");
    real.addEventListener("blur", saveInStorage);
    if (localStorage.getItem("real_" + cur_indexes[i]) !== null) {
      real.innerHTML = localStorage.getItem("real_" + cur_indexes[i]);
    }


    /* appending all nodes */
    menuContainer.appendChild(mainTomato);
    menuContainer.appendChild(additionTomato);
    menuContainer.appendChild(arrowUp);
    menuContainer.appendChild(arrowDown);
    menuContainer.appendChild(effort);
    menuContainer.appendChild(pain);

    deleteBut.appendChild(deleteButIcon);

    curEditPart.innerHTML = curContent;
    curCaseBody.appendChild(curEditPart);
    curCaseBody.appendChild(menuIcon);
    curCaseBody.appendChild(menuContainer);
    curCaseBody.appendChild(panel);
    curCase.appendChild(curCaseBody);
    curCase.appendChild(deleteBut);
    curCase.appendChild(planned);
    curCase.appendChild(real);
    container.appendChild(curCase);
  }

  // physical exercise
  const phys_indexes = [],
  phys_container = document.querySelector(".phys");
for (let prop in localStorage) {
  if (/^phys/.test(prop)) {
    phys_indexes.push(Number(/\d/.exec(prop)));
  }
}
if (phys_indexes.length !== 0) {
  phys_indexes.sort();
  for (let index = 0; index < phys_indexes.length; index += 1) {
    /*creating a new nodes*/
    const newExercises = document.createElement("ul"),
      deleteBut = document.createElement("li"),
      deleteButIcon = document.createTextNode("X");
    /* assign attribute */
    newExercises.classList.add("approach", "approach-phys");
    deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
    deleteBut.addEventListener("click", itemsDeleting);
    for (let i = 1; i <= 2; i += 1) {
      const approach = document.createElement("li"),
        arrow = document.createElement("img"),
        variants = document.createElement("ul"),
        ObliqueDoor = document.createElement("li"),
        Squatting = document.createElement("li"),
        ObliqueSwings = document.createElement("li"),
        PushUp = document.createElement("li");

      approach.setAttribute("data-approach", "phys_" + phys_indexes[index]);
      const data_approach = localStorage.getItem("phys_" + phys_indexes[index])
      approach.classList.add("selectApproach", data_approach);
      $(arrow).attr({
        "src": "images/arrow_drop_down.png",
        "alt": "arrow drop down menu"
      });
      arrow.addEventListener("click", selectApproach);
      variants.setAttribute("class", "variants");
      ObliqueDoor.className = "obliqueByDoor";
      ObliqueDoor.addEventListener("click", selectApproach);
      Squatting.className = "squatting";
      Squatting.addEventListener("click", selectApproach);
      ObliqueSwings.className = "obliqueBySwings";
      ObliqueSwings.addEventListener("click", selectApproach);
      PushUp.className = "push-up";
      PushUp.addEventListener("click", selectApproach);

      variants.appendChild(ObliqueDoor);
      variants.appendChild(Squatting);
      variants.appendChild(ObliqueSwings);
      variants.appendChild(PushUp);



      approach.appendChild(arrow);
      approach.appendChild(variants);

      newExercises.appendChild(approach);
      if (i === 1) {
        index += 1;
      }
    }
    /* time and quantity */
    const timeExecution = document.createElement("li"),
      timeContent = localStorage.getItem("executTime_" + phys_indexes[index]);
    const quantityExecution = document.createElement("li"),
      quantityContent = localStorage.getItem("quantity_" + phys_indexes[index]);
    $(timeExecution).attr({
      "contenteditable": "true",
      "data-approach": "executTime_" + phys_indexes[index]
    });

    timeExecution.classList.add("time-quantity", "time-quantity-extraStudy");
    timeExecution.addEventListener("blur", saveInStorage);
    $(quantityExecution).attr({
      "contenteditable": "true",
      "data-approach": "quantity_" + phys_indexes[index]
    });

    quantityExecution.classList.add("time-quantity", "time-quantity-extraStudy");
    quantityExecution.addEventListener("blur", saveInStorage);

    /* appending all nodes */
    timeExecution.innerHTML = timeContent;
    newExercises.appendChild(timeExecution);
    quantityExecution.innerHTML = quantityContent;
    newExercises.appendChild(quantityExecution);
    phys_container.appendChild(newExercises);
    deleteBut.appendChild(deleteButIcon);
    newExercises.appendChild(deleteBut);
  }
}
const net_indexes = [];
for (let prop in localStorage) {
  if (/^net/.test(prop)) {
    net_indexes.push(Number(/\d/.exec(prop)));
  }
}
if (net_indexes.length !== 0) {
  net_indexes.sort();
  for (let i = 0; i < net_indexes.length; i += 1) {
    /* create nodes */
  	const container = document.querySelector(".halfInterior-socialNet .approach-container"),
    browsingNews = document.createElement("ul"),
    deleteBut = document.createElement("li"),
    deleteButIcon = document.createTextNode("X"),
    approach = document.createElement("li"),
    data_approach = localStorage.getItem("net" + "_" + net_indexes[i]),
    approachArrow = document.createElement("img"),
    variants = document.createElement("ul"),
    firstVariant = document.createElement("li"),
    secondVariant = document.createElement("li"),
    thirdVariant = document.createElement("li"),
    scheduled = document.createElement("li"),
    scheduledContent = localStorage.getItem("newsScheduledTime" + "_" + net_indexes[i]),
    real = document.createElement("li"),
    realContent = localStorage.getItem("newsRealTime" + "_" + net_indexes[i]),
    amount = document.createElement("li"),
    amountContent = localStorage.getItem("newsTimeAmount" + "_" + net_indexes[i]);

    /* assign attributes */
    browsingNews.classList.add("approach", "approach-news");
    deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
    deleteBut.addEventListener("click", itemsDeleting);
    approach.setAttribute("data-approach", "net" + "_" + net_indexes[i]);
    approach.classList.add("selectApproach", "selectapproach-socialNet", data_approach);
    $(approachArrow).attr({
        "src": "images/arrow_drop_down.png",
        "alt": "arrow drop down menu"
    });
    approachArrow.addEventListener("click", selectApproach);
    variants.setAttribute("class", "variants");
    firstVariant.className = 'echo';
    secondVariant.className = 'facebook';
    thirdVariant.className = 'newsSite';
    $(scheduled).attr({
        "contenteditable": "true",
        "data-approach": "newsScheduledTime_" + net_indexes[i]
    });
    scheduled.classList.add("time-quantity", "time-quantity-extraStudy");
    scheduled.addEventListener("blur", saveInStorage);
    $(real).attr({
        "contenteditable": "true",
        "data-approach": "newsRealTime" + "_" + net_indexes[i]
    });
    real.classList.add("time-quantity", "time-quantity-extraStudy");
    real.addEventListener("blur",saveInStorage);
    $(amount).attr({
        "contenteditable": "true",
        "data-approach": "newsTimeAmount" + "_" + net_indexes[i]
    });
    amount.classList.add("time-quantity", "time-quantity-extraStudy");
    amount.addEventListener("blur", saveInStorage);

    /* appending all nodes */
    variants.appendChild(firstVariant);
    variants.appendChild(secondVariant);
    variants.appendChild(thirdVariant);

    deleteBut.appendChild(deleteButIcon);

    approach.appendChild(approachArrow);
    approach.appendChild(variants);

    browsingNews.appendChild(deleteBut);
    browsingNews.appendChild(approach);
    scheduled.innerHTML = scheduledContent;
    browsingNews.appendChild(scheduled);
    real.innerHTML = realContent;
    browsingNews.appendChild(real);
    amount.innerHTML = amountContent;
    browsingNews.appendChild(amount);
    container.appendChild(browsingNews);
  }
}
const analysis_indexes = [];
for (let prop in localStorage) {
  if (/^analysisPart/.test(prop)) {
    analysis_indexes.push(Number(/\d/.exec(prop)));
  }
}
if (analysis_indexes.length !== 0) {
  analysis_indexes.sort();
  for (let index = 0; index < analysis_indexes.length; index += 1) {
    const container = document.querySelector("#analysis .list-container");
    let analysisContent = localStorage.getItem("analysisPart_" + analysis_indexes[index]);
    /* creating nodes */
    const analysisItem = document.createElement("li"),
      editAnalysisPart = document.createElement("p"),
      deleteBut = document.createElement("span"),
      deleteButIcon = document.createTextNode("X");

    /* assign attribute */
    analysisItem.classList.add("time-quantity", "time-quantity-analysis");
    $(editAnalysisPart).attr({
      "contenteditable": "true",
      "data-approach": "analysisPart_" + analysis_indexes[index]
    });
    editAnalysisPart.addEventListener("blur", saveInStorage);
    deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
    deleteBut.addEventListener("click", itemsDeleting);

    /* appending all nodes */
    deleteBut.appendChild(deleteButIcon);
    editAnalysisPart.innerHTML = analysisContent;
    analysisItem.appendChild(editAnalysisPart);
    analysisItem.appendChild(deleteBut);
    container.appendChild(analysisItem);
  }
}
const log_indexes = [];
for (let prop in localStorage) {
  if (/^date/.test(prop)) {
    log_indexes.push(Number(/\d/.exec(prop)));
  }
}
if (log_indexes.length !== 0) {
  log_indexes.sort();
  var resultsTable = document.querySelector(".results");
  for (let i = 0; i < log_indexes.length; i += 1) {
    /* creating nodes */
    const tableRow = document.createElement("tr"),
    date = document.createElement("td"),
    dateContent = localStorage.getItem("date" + "_" + log_indexes[i]),
    tomatoAmount = document.createElement("td"),
    tomatoAmountContent = localStorage.getItem("tomatoAmount" + "_" + log_indexes[i]),
    strainAmount = document.createElement("td"),
    strainAmountContent = localStorage.getItem("strainAmount" + "_" + log_indexes[i]),
    rightAttitude = document.createElement("td"),
    rightAttitudeContent = localStorage.getItem("rightAttitude" + "_" + log_indexes[i]),
    falseAttitude = document.createElement("td"),
    falseAttitudeContent = localStorage.getItem("falseAttitude" + "_" +  log_indexes[i]),
    totalPhysTime = document.createElement("td"),
    totalPhysTimeContent = localStorage.getItem("totalPhysTime" + "_" + log_indexes[i]),
    totalNetTime = document.createElement("td"),
    totalNetTimeContent = localStorage.getItem("totalNetTime" + "_" + log_indexes[i]),
    logDeleteBut = document.createElement("td");
    logDeleteBut.innerHTML = "X";

    /* appending attributes */
    $(date).attr({
      "contenteditable": "true",
      "data-approach": "date_" + log_indexes[i]
  });
  date.addEventListener("blur", saveInStorage);
  $(tomatoAmount).attr({
      "contenteditable": "true",
      "data-approach": "tomatoAmount_" + log_indexes[i]
  });
  tomatoAmount.addEventListener("blur", saveInStorage);
  $(strainAmount).attr({
      "contenteditable": "true",
      "data-approach": "strainAmount_" + log_indexes[i]
  });
  strainAmount.addEventListener("blur", saveInStorage);
  $(rightAttitude).attr({
      "contenteditable": "true",
      "data-approach": "rightAttitude_" + log_indexes[i]
  });
  rightAttitude.addEventListener("blur", saveInStorage);
  $(falseAttitude).attr({
      "contenteditable": "true",
    "data-approach": "falseAttitude_" + log_indexes[i]
  });
  falseAttitude.addEventListener("blur", saveInStorage);
  $(totalPhysTime).attr({
      "contenteditable": "true",
      "data-approach": "totalPhysTime_" + log_indexes[i]
  });
  totalPhysTime.addEventListener("blur", saveInStorage);
  $(totalNetTime).attr({
      "contenteditable": "true",
      "data-approach": "totalNetTime_" + log_indexes[i]
  });
  totalNetTime.addEventListener("blur", saveInStorage);
  logDeleteBut.className = "resultDeleteBut";
  logDeleteBut.addEventListener("click", itemsDeleting);
  

  /* appending all nodes */
  date.innerHTML = dateContent;
  tableRow.appendChild(date);
  tomatoAmount.innerHTML = tomatoAmountContent;
  tableRow.appendChild(tomatoAmount);
  strainAmount.innerHTML = strainAmountContent;
  tableRow.appendChild(strainAmount);
  rightAttitude.innerHTML = rightAttitudeContent;
  tableRow.appendChild(rightAttitude);
  falseAttitude.innerHTML = falseAttitudeContent;
  tableRow.appendChild(falseAttitude);
  totalPhysTime.innerHTML = totalPhysTimeContent;
  tableRow.appendChild(totalPhysTime);
  totalNetTime.innerHTML = totalNetTimeContent;
  tableRow.appendChild(totalNetTime);
  tableRow.appendChild(logDeleteBut);

  resultsTable.appendChild(tableRow);
  }
}
})();

/* common functions */

// drag and drop
function dragStart(event) {
  // put all contenteditable elements data-approach values in array
  const edit_el = this.querySelector("[data-approach]"),
    key = edit_el.getAttribute("data-approach"),
    content = edit_el.innerHTML,
    trans_data = {};
  trans_data.key = key;
  trans_data.content = content;

  // convert object to string and put it in DataTransfer
  event.dataTransfer.setData("text", JSON.stringify(trans_data));
}

function overDrop(event) {
  event.preventDefault();
  if (event.type !== "drop") {
    return;
  }
  // check if dragging is finished in other than parent area
  const editelement_data = JSON.parse(event.dataTransfer.getData("text"));
  if (editelement_data.key.includes("businessContent")) {
    const container = document.querySelector(".businesses"),
      drag_el = container.querySelector("[data-approach=" + editelement_data.key + "]").parentElement.parentElement;
    if (this === container) {
      return;
    } else {
      const created_el = addNewCase(event, editelement_data.content),
        // assign the new key in localStorage
        key = created_el.querySelector("[contenteditable]").getAttribute("data-approach");
      localStorage.setItem(key, editelement_data.content);
      itemsDeleting(event, drag_el);
    }
  } else {
    const container = document.querySelector(".list-container"),
      drag_el = container.querySelector("[data-approach=" + editelement_data.key + "]").parentElement;
    if (this === container) {
      return;
    } else {
      const created_el = addCurCase(event, editelement_data.content),
        key = created_el.querySelector("[contenteditable").getAttribute("data-approach");
      localStorage.setItem(key, editelement_data.content);
      itemsDeleting(event, drag_el);
    }
  }
}


// Assign key with suitable index
const search_actual_key = (keyword, approach, common_index) => {
  const approaches = container.querySelectorAll("[data-approach^= " + keyword + "]");
  if (approaches.length !== 0) {
    const key_values = [];
    approaches.forEach(function (item, index) {
      key_values[index] = item.getAttribute("data-approach");
    });
    while (key_values.includes(keyword + common_index)) {
      common_index += 1;
    }
    approach.setAttribute("data-approach", keyword + common_index);
    return common_index;
  } else {
    approach.setAttribute("data-approach", keyword + common_index);
    return common_index;
  }
}

// saving in local storage
function saveInStorage(event) {
  var key = event.target.getAttribute("data-approach"),
    content = event.target.innerHTML;
  localStorage.setItem(key, content);
}

/* to remove unnecessary cases */
function itemsDeleting(event, removedElement) {
  if (event.type === "click") {
    var removedElement = this.parentElement;
  } else {
    removedElement = removedElement;
  }
  const editElements = removedElement.querySelectorAll("[data-approach]");
  editElements.forEach(function (item) {
    localStorage.removeItem(item.getAttribute("data-approach"));
    // Due to removal problems with planned and real
    item.remove();
  });
  removedElement.remove();
}

// cleaning content defualt text
function currentText(event) {
  const editPart = this;
  if (editPart.innerHTML === "Занести новое дело" || editPart.innerHTML === "Занести текущее дело") {
    editPart.innerHTML = "";
  }
}

// for drop down menu and selection of physical exercises
function selectApproach(event) {
  const approach = event.target.parentElement.parentElement;
  if (event.target.nodeName === "IMG") {
    var curList = event.target.nextSibling;
    if (curList.classList.contains("is-variants")) {
      curList.classList.remove("is-variants");
    } else {
      curList.classList.add("is-variants");
    }
  } else {
    const curActivity = event.target.className;
    approach.classList.replace("none", curActivity);
    const cur_key = approach.getAttribute('data-approach');
    localStorage.setItem(cur_key, curActivity);
  }
}

/* TODO: остановился на 909 строке (на сетевой активности) */