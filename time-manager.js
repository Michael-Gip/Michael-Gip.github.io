/* jshint esversion: 6 */ 


var indexes = {
	allCasesIndex: 1,
	businessIndex: 1,
	plannedIndex: 1,
	realIndex: 1,
	physTimeIndex: 1,
	physQuantityIndex: 1,
	newsScheduledIndex: 1,
  newsRealIndex: 1,
  newsAmountIndex: 1,
	analysisPartIndex: 1,
	dateIndex: 1,
	tomatoAmountIndex: 1,
	strainIndex: 1,
	rightAttitudeIndex: 1,
	falseAttitudeIndex: 1,
	physTotalTimeIndex: 1,
  physIndex: 1,
  netIndex: 1,
	panelIndex: 1
};
/* For all cases block */
// Create cases for common list
function addNewCase(event, cur_content) {
  if (event.type === "click") {
    event.preventDefault();
  }

  var container = document.querySelector(".list-container"),
  newCase = document.createElement("li"),
  newEditPart = document.createElement("p"),
  newDeleteBut = document.createElement("span"),
  newDeleteIcon = document.createTextNode("X");

  $(newCase).attr({
    "class": "all-cases-item",
    "draggable": "true",
  });
  newCase.addEventListener("dragstart", dragStart);
  $(newEditPart).attr({
      "contenteditable": "true",
      "data-approach": "allCases" + "_" + indexes.allCasesIndex
  });
  if (cur_content !== undefined) {
    // assign content
    newEditPart.innerHTML = cur_content;
  }
  
  indexes.allCasesIndex++;
  newEditPart.addEventListener("blur", saveInStorage);
  newDeleteBut.setAttribute("class", "deleteBut");
  newDeleteBut.addEventListener("click", itemsDeleting);

  newDeleteBut.appendChild(newDeleteIcon);
  newCase.appendChild(newEditPart);
  newCase.appendChild(newDeleteBut);
  container.appendChild(newCase);

  if (cur_content !== undefined) {
    return newCase;
  }
}
  

(function () {
  var addCaseButton = document.querySelector(".new-case");
  addCaseButton.addEventListener("click", addNewCase);
})();

/* For today cases block */

(function () {
  var addCurCaseButton = document.querySelector(".current-case");
  addCurCaseButton.addEventListener("click", addCurCase);
})();
function addCurCase(event, cur_content) {
  /* creation elements */
  if (event.type === "click") {
    event.preventDefault();
  }
  var container = document.querySelector(".businesses"),
  curCase = document.createElement("div"),
  curCaseBody = document.createElement("div"),
  curEditPart = document.createElement("p"),
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
  $(curEditPart).attr({
      "contenteditable": "true",
      "class": "business__content"
  });

  for (;localStorage.getItem("businessContent_" + indexes.businessIndex) !== null; indexes.businessIndex++) {
    continue;
} 
  curEditPart.setAttribute("data-approach", "businessContent" + "_" + indexes.businessIndex);
  indexes.businessIndex++;


  
  


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
  curDeleteBut.classList.add("deleteBut", "deleteBut-smaller");
  curDeleteBut.addEventListener("click", itemsDeleting);
  panel.className = "service-icons-panel";
  for (;localStorage.getItem("panel" + "_" + indexes.panelIndex) !== null; indexes.panelIndex++) {
    continue;
  }
  panel.setAttribute("data-approach", "panel" + "_" + indexes.panelIndex)
  indexes.panelIndex = 1;

  planned.setAttribute("contenteditable", "true");
  for (;localStorage.getItem("planned" + "_" + indexes.plannedIndex) !== null; indexes.plannedIndex++) {
    continue;
  }
  planned.setAttribute("data-approach", "planned" + "_" + indexes.plannedIndex);
  indexes.plannedIndex = 1;
  planned.classList.add("time-quantity", "planned");
  planned.addEventListener("blur", saveInStorage);

  real.setAttribute("contenteditable", "true");
  for (; localStorage.getItem("real" + "_" + indexes.realIndex) !== null; indexes.realIndex++) {
    continue;
  }
  real.setAttribute("data-approach", "real" + "_" + indexes.realIndex);
  indexes.realIndex = 1;
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
    curEditPart.appendChild(defualtText);
  } else {
    curEditPart.innerHTML = cur_content;
  }
  
  curCaseBody.appendChild(curEditPart);
  curCaseBody.appendChild(menuIcon);
  curCaseBody.appendChild(menuContainer);
  curCaseBody.appendChild(panel);
  curCase.appendChild(curCaseBody);
  curCase.appendChild(curDeleteBut);
  curCase.appendChild(planned);
  curCase.appendChild(real);
  container.appendChild(curCase);

  /* cleaning content defualt text */
  curEditPart.addEventListener("focus", deleteDefaultText);
  function deleteDefaultText(event) {
      curEditPart.innerHTML = "";
  }
  // return created element in drop function
  if (cur_content !== undefined) {
    return curCase;
  }
}

/*adding physical exercises function*/
(function () {
	/* set listening for event on button */
  var addExerciseBut = document.querySelector(".exerciseBut");
  addExerciseBut.addEventListener("click", addPhysExercise);

  function addPhysExercise(event) {
  	/*creating a new nodes*/
  	event.preventDefault();
  	var container = document.querySelector(".phys"),
  	newExercises = document.createElement("ul"),
  	deleteBut = document.createElement("li"),
  	deleteButIcon = document.createTextNode("X"),
  	firstApproach = document.createElement("li"),
  	arrowForFirst = document.createElement("img"),
    variantsForFirst = document.createElement("ul"),
    firstObliqueDoor = document.createElement("li"),
    firstSquatting = document.createElement("li"),
    firstObliqueSwings = document.createElement("li"),
    firstPushUp = document.createElement("li"),
    secondApproach = document.createElement("li"),
    arrowForSecond = document.createElement("img"),
    variantsForSecond = document.createElement("ul"),
    secondObliqueDoor = document.createElement("li"),
    secondSquatting = document.createElement("li"),
    secondObliqueSwings = document.createElement("li"),
    secondPushUp = document.createElement("li"),
    timeExecution = document.createElement("li"),
    quantityExecution = document.createElement("li");

    /* assign attribute */
    newExercises.classList.add("approach", "approach-phys");
    deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
    deleteBut.addEventListener("click", itemsDeleting);
    /* for select first approach */
    firstApproach.setAttribute("data-approach", "phys");
    firstApproach.classList.add("selectApproach", "none");
    $(arrowForFirst).attr({
    	"src": "images/arrow_drop_down.png",
    	"alt": "arrow drop down menu"
    });
    arrowForFirst.addEventListener("click", selectApproach);
    variantsForFirst.setAttribute("class", "variants");
    firstObliqueDoor.className = "obliqueByDoor";
    firstObliqueDoor.addEventListener("click", selectApproach);
    firstSquatting.className = "squatting";
    firstSquatting.addEventListener("click", selectApproach);
    firstObliqueSwings.className = "obliqueBySwings";
    firstObliqueSwings.addEventListener("click", selectApproach);
    firstPushUp.className = "push-up";
    firstPushUp.addEventListener("click", selectApproach);

    /* for select second approach */
    secondApproach.setAttribute("data-approach", "phys");
    secondApproach.classList.add("selectApproach", "none");
    $(arrowForSecond).attr({
      "src": "images/arrow_drop_down.png",
      "alt": "arrow arrow drop down menu"
    });
    arrowForSecond.addEventListener("click", selectApproach);
    variantsForSecond.setAttribute("class", "variants");
    secondObliqueDoor.className = "obliqueByDoor";
    secondObliqueDoor.addEventListener("click", selectApproach);
    secondSquatting.className = "squatting";
    secondSquatting.addEventListener("click", selectApproach);
    secondObliqueSwings.className = "obliqueBySwings";
    secondObliqueSwings.addEventListener("click", selectApproach);
    secondPushUp.className = "push-up";
    secondPushUp.addEventListener("click", selectApproach);

    /* time and quantity */
    $(timeExecution).attr({
    	"contenteditable": "true",
    	"data-approach": "executTime" + "_" + indexes.physTimeIndex
    });
    indexes.physTimeIndex++;
    timeExecution.classList.add("time-quantity", "time-quantity-extraStudy");
    timeExecution.addEventListener("blur", saveInStorage);
    $(quantityExecution).attr({
    	"contenteditable": "true",
    	"data-approach": "quantity" + "_" + indexes.physQuantityIndex
    });
    indexes.physQuantityIndex++;
    quantityExecution.classList.add("time-quantity", "time-quantity-extraStudy");
    quantityExecution.addEventListener("blur", saveInStorage);

    /* appending all nodes */
    /*appending fist variant*/
    variantsForFirst.appendChild(firstObliqueDoor);
    variantsForFirst.appendChild(firstSquatting);
    variantsForFirst.appendChild(firstObliqueSwings);
    variantsForFirst.appendChild(firstPushUp);

    /*appending second variant*/
    variantsForSecond.appendChild(secondObliqueDoor);
    variantsForSecond.appendChild(secondSquatting);
    variantsForSecond.appendChild(secondObliqueSwings);
    variantsForSecond.appendChild(secondPushUp);

    /* delete button */
    deleteBut.appendChild(deleteButIcon);

    firstApproach.appendChild(arrowForFirst);
    firstApproach.appendChild(variantsForFirst);
    secondApproach.appendChild(arrowForSecond);
    secondApproach.appendChild(variantsForSecond);

    newExercises.appendChild(deleteBut);
    newExercises.appendChild(firstApproach);
    newExercises.appendChild(secondApproach);
    newExercises.appendChild(timeExecution);
    newExercises.appendChild(quantityExecution);

    container.appendChild(newExercises);
  }
})();

/* social network function */
(function newsApproach() {
  var button = document.querySelector(".halfInterior-socialNet").getElementsByTagName("button");
  button[0].addEventListener("click", createApproach);

  function createApproach(event) {
  	event.preventDefault();
  	var container = document.querySelector(".halfInterior-socialNet .approach-container"),
  	browsingNews = document.createElement("ul"),
  	deleteBut = document.createElement("li"),
  	deleteButIcon = document.createTextNode("X"),
  	firstApproach = document.createElement("li"),
  	firstApproachArrow = document.createElement("img"),
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
  	firstApproach.setAttribute("data-approach", "net");
  	firstApproach.classList.add("selectApproach", "selectapproach-socialNet", "none");
  	$(firstApproachArrow).attr({
  		"src": "images/arrow_drop_down.png",
  		"alt": "arrow drop down menu"
  	});
  	firstApproachArrow.addEventListener("click", selectApproach);
  	variants.setAttribute("class", "variants");
  	firstVariant.className = "echo";
  	firstVariant.addEventListener("click", selectApproach);
  	secondVariant.className = "facebook";
  	secondVariant.addEventListener("click", selectApproach);
  	thirdVariant.className = "newsSite";
  	thirdVariant.addEventListener("click", selectApproach);
  	$(scheduled).attr({
  		"contenteditable": "true",
  		"data-approach": "newsScheduledTime" + "_" + indexes.newsScheduledIndex
  	});
  	indexes.newsScheduledIndex++;
  	scheduled.classList.add("time-quantity", "time-quantity-extraStudy");
  	scheduled.addEventListener("blur", saveInStorage);
  	$(real).attr({
  		"contenteditable": "true",
  		"data-approach": "newsRealTime" + "_" + indexes.newsRealIndex
  	});
  	indexes.newsRealIndex++;
  	real.classList.add("time-quantity", "time-quantity-extraStudy");
  	real.addEventListener("blur",saveInStorage);
  	$(amount).attr({
  		"contenteditable": "true",
  		"data-approach": "newsTimeAmount" + "_" + indexes.newsAmountIndex
  	});
  	indexes.newsAmountIndex++;
  	amount.classList.add("time-quantity", "time-quantity-extraStudy");
  	amount.addEventListener("blur", saveInStorage);

  	/* appending all nodes */
  	variants.appendChild(firstVariant);
  	variants.appendChild(secondVariant);
  	variants.appendChild(thirdVariant);

  	deleteBut.appendChild(deleteButIcon);

    firstApproach.appendChild(firstApproachArrow);
    firstApproach.appendChild(variants);

    browsingNews.appendChild(deleteBut);
    browsingNews.appendChild(firstApproach);
    browsingNews.appendChild(scheduled);
    browsingNews.appendChild(real);
    browsingNews.appendChild(amount);

    container.appendChild(browsingNews);
  }
})();

		
/* function for adding analysis */
(function analysis() {
  var button = document.getElementById("analysis").querySelector(".add-button");
  button.addEventListener("click", createAnalysis);

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
  	$(editAnalysisPart).attr({
  		"contenteditable": "true",
  		"data-approach": "analysisPart" + "_" + indexes.analysisPartIndex
  	})
  	indexes.analysisPartIndex++;
  	editAnalysisPart.addEventListener("blur", saveInStorage);
  	deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
  	deleteBut.addEventListener("click", itemsDeleting);

  	/* appending all nodes */
  	deleteBut.appendChild(deleteButIcon);
  	analysisItem.appendChild(editAnalysisPart);
  	analysisItem.appendChild(deleteBut);
  	container.appendChild(analysisItem);
  }
})();

(function () {
  var button = document.getElementById("log").querySelector(".add-button");
  button.addEventListener("click", results);

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
  	physTotalTime = document.createElement("td"),
  	netTotalTime = document.createElement("td"),
  	logDeleteBut = document.createElement("td");
    logDeleteIcon = document.createTextNode("X");

  	/* appending attributes */
  	$(date).attr({
  		"contenteditable": "true",
      "data-approach": "date" + "_" + indexes.dateIndex,
      "data-label": "Дата"
  	});
  	indexes.dateIndex++;
  	date.addEventListener("blur", saveInStorage);
  	$(tomatoAmount).attr({
  		"contenteditable": "true",
      "data-approach": "tomatoAmount" + "_" + indexes.tomatoAmountIndex,
      "data-label": "Колличество помидоров"
  	});
  	indexes.tomatoAmountIndex++;
  	tomatoAmount.addEventListener("blur", saveInStorage);
  	$(strainAmount).attr({
  		"contenteditable": "true",
      "data-approach": "strainAmount" + "_" + indexes.strainIndex,
      "data-label": "Количество напряжений"
  	});
  	indexes.strainIndex++;
  	strainAmount.addEventListener("blur", saveInStorage);
  	$(rightAttitude).attr({
  		"contenteditable": "true",
      "data-approach": "rightAttitude" + "_" + indexes.rightAttitudeIndex,
      "data-label": "Количество верных отношений"
  	});
  	indexes.rightAttitudeIndex++;
  	rightAttitude.addEventListener("blur", saveInStorage);
  	$(falseAttitude).attr({
  		"contenteditable": "true",
      "data-approach": "falseAttitude" + "_" + indexes.falseAttitudeIndex,
      "data-label": "Количество не верных отношений"
  	});
  	indexes.falseAttitudeIndex++;
  	falseAttitude.addEventListener("blur", saveInStorage);
  	$(physTotalTime).attr({
  		"contenteditable": "true",
      "data-approach": "physTotalTime" + "_" + indexes.physTotalTimeIndex,
      "data-label": "Общее время физ. упражнений"
  	});
  	indexes.physTotalTimeIndex++;
  	physTotalTime.addEventListener("blur", saveInStorage);
  	$(netTotalTime).attr({
  		"contenteditable": "true",
      "data-approach": "netTotalTime" + "_" + indexes.netTotalTimeIndex,
      "data-label": "Общее время в соц. сетях"
  	});
  	indexes.netTotalTimeIndex++;
  	netTotalTime.addEventListener("blur", saveInStorage);
  	logDeleteBut.className = "resultDeleteBut";
  	logDeleteBut.addEventListener("click", itemsDeleting);

  	/* appending all nodes */
  	logDeleteBut.appendChild(logDeleteIcon);
  	tableRow.appendChild(date);
  	tableRow.appendChild(tomatoAmount);
  	tableRow.appendChild(strainAmount);
  	tableRow.appendChild(rightAttitude);
  	tableRow.appendChild(falseAttitude);
  	tableRow.appendChild(physTotalTime);
  	tableRow.appendChild(netTotalTime);
  	tableRow.appendChild(logDeleteBut);

    resultsTable.appendChild(tableRow); 	
  }
})();


/* Recreating page after reload */
(function () {
  /*recreation allCases items*/
  for(; localStorage.getItem("allCases" + "_" + indexes.allCasesIndex) !== null; indexes.allCasesIndex++) {
  	/*declaration and initialization all cases variables*/
  	var container = document.querySelector(".list-container"),
  	content = localStorage.getItem("allCases" + "_" + indexes.allCasesIndex),
  	newCase = document.createElement("li"),
  	newEditPart = document.createElement("p"),
  	newDeleteBut = document.createElement("span"),
  	newDeleteIcon = document.createTextNode("X");
  	/*assign attributes*/
  	newCase.setAttribute("class", "all-cases-item");
    $(newEditPart).attr({
        "contenteditable": "true",
        "data-approach": "allCases" + "_" + indexes.allCasesIndex
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

  /*recreation curCases items*/
  for (; localStorage.getItem("businessContent" + "_" + indexes.businessIndex) !== null; indexes.businessIndex++) {
  	var container = document.querySelector(".businesses"),
    curCase = document.createElement("div"),
    curCaseBody = document.createElement("div"),
    curEditPart = document.createElement("p"),
    curContent = localStorage.getItem("businessContent" + "_" + indexes.businessIndex);
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
        "class": "business__content",
        "data-approach": "businessContent" + "_" + indexes.businessIndex
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
    /* recreate panel */
    if (localStorage.getItem("panel" + "_" + indexes.panelIndex) !== null) {
    	panel.innerHTML = localStorage.getItem("panel" + "_" + indexes.panelIndex);
    	indexes.panelIndex++;
    }

    $(planned).attr({
        "contenteditable": "true",
        "data-approach": "planned" + "_" + indexes.plannedIndex
    });
    planned.classList.add("time-quantity", "planned");
    planned.addEventListener("blur", saveInStorage);
    if (localStorage.getItem("planned" + "_" + indexes.plannedIndex) !== null) {
    	planned.innerHTML = localStorage.getItem("planned" + "_" + indexes.plannedIndex);
    indexes.plannedIndex++;
    }
    $(real).attr({
        "contenteditable": "true",
        "data-approach": "real" + "_" + indexes.realIndex
    });
    real.classList.add("time-quantity", "real");
    real.addEventListener("blur", saveInStorage);
    if (localStorage.getItem("real" + "_" + indexes.realIndex) !== null) {
    	real.innerHTML = localStorage.getItem("real" + "_" + indexes.realIndex);
    indexes.realIndex++;
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
    curCaseBody.appendChild(deleteBut);
    curCaseBody.appendChild(panel);
    curCase.appendChild(curCaseBody);
    curCase.appendChild(planned);
    curCase.appendChild(real);
    container.appendChild(curCase);
  }

  /*recreate physical exercises*/
  for (; (localStorage.getItem("quantity" + "_" + indexes.physQuantityIndex) !== null) && (localStorage.getItem("executTime" + "_" + indexes.physTimeIndex) !== null); indexes.physQuantityIndex++) {
  	/*creating a new nodes*/
    var container = document.querySelector(".phys"),
    newExercises = document.createElement("ul"),
    deleteBut = document.createElement("li"),
    deleteButIcon = document.createTextNode("X"),
    firstApproach = document.createElement("li"),
    arrowForFirst = document.createElement("img"),
    variantsForFirst = document.createElement("ul"),
    firstObliqueDoor = document.createElement("li"),
    firstSquatting = document.createElement("li"),
    firstObliqueSwings = document.createElement("li"),
    firstPushUp = document.createElement("li"),
    secondApproach = document.createElement("li"),
    arrowForSecond = document.createElement("img"),
    variantsForSecond = document.createElement("ul"),
    secondObliqueDoor = document.createElement("li"),
    secondSquatting = document.createElement("li"),
    secondObliqueSwings = document.createElement("li"),
    secondPushUp = document.createElement("li"),
    timeExecution = document.createElement("li");
    timeContent = localStorage.getItem("executTime" + "_" + indexes.physTimeIndex);
    quantityExecution = document.createElement("li");
    quantityContent = localStorage.getItem("quantity" + "_" + indexes.physQuantityIndex);

    /* assign attribute */
    newExercises.classList.add("approach", "approach-phys");
    deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
    deleteBut.addEventListener("click", itemsDeleting);
    /* for select first approach */
    const first_data_approach = localStorage.getItem("phys" + "_" + indexes.physIndex);
  	firstApproach.setAttribute("data-approach", "phys" + "_" + indexes.physIndex);
      firstApproach.classList.add("selectApproach", first_data_approach);
    indexes.physIndex++;
    $(arrowForFirst).attr({
        "src": "images/arrow_drop_down.png",
        "alt": "arrow drop down menu"
    });
    arrowForFirst.addEventListener("click", selectApproach);
    variantsForFirst.setAttribute("class", "variants");
    firstObliqueDoor.setAttribute("data-approach", "obliqueByDoor");
    firstObliqueDoor.addEventListener("click", selectApproach);
    firstSquatting.setAttribute("data-approach", "squatting");
    firstSquatting.addEventListener("click", selectApproach);
    firstObliqueSwings.setAttribute("data-approach", "obliqueBySwings");
    firstObliqueSwings.addEventListener("click", selectApproach);
    firstPushUp.setAttribute("data-approach", "push-up");
    firstPushUp.addEventListener("click", selectApproach);

    /* for select second approach */
    const second_data_approach = localStorage.getItem("phys" + "_" + indexes.physIndex);
    secondApproach.setAttribute('data-approach', "phys" + "_" + indexes.physIndex);
    secondApproach.classList.add('selectApproach', second_data_approach);
    indexes.physIndex++;
    $(arrowForSecond).attr({
      "src": "images/arrow_drop_down.png",
      "alt": "arrow arrow drop down menu"
    });
    arrowForSecond.addEventListener("click", selectApproach);
    variantsForSecond.setAttribute("class", "variants");
    secondObliqueDoor.setAttribute("data-approach", "obliqueByDoor");
    secondObliqueDoor.addEventListener("click", selectApproach);
    secondSquatting.setAttribute("data-approach", "squatting");
    secondSquatting.addEventListener("click", selectApproach);
    secondObliqueSwings.setAttribute("data-approach", "obliqueBySwings");
    secondObliqueSwings.addEventListener("click", selectApproach);

    /* time and quantity */
    secondPushUp.setAttribute("data-approach", "push-up");
    $(timeExecution).attr({
        "contenteditable": "true",
        "data-approach": "executTime" + "_" + indexes.physTimeIndex
    });
    indexes.physTimeIndex++;
    timeExecution.classList.add("time-quantity", "time-quantity-extraStudy");
    timeExecution.addEventListener("blur", saveInStorage);
    $(quantityExecution).attr({
        "contenteditable": "true",
        "data-approach": "quantity" + "_" + indexes.physQuantityIndex
    });
    indexes.physQuantityIndex++;
    quantityExecution.classList.add("time-quantity", "time-quantity-extraStudy");
    quantityExecution.addEventListener("blur", saveInStorage);

    /* appending all nodes */
    /*appending fist variant*/
    variantsForFirst.appendChild(firstObliqueDoor);
    variantsForFirst.appendChild(firstSquatting);
    variantsForFirst.appendChild(firstObliqueSwings);
    variantsForFirst.appendChild(firstPushUp);

    /*appending second variant*/
    variantsForSecond.appendChild(secondObliqueDoor);
    variantsForSecond.appendChild(secondSquatting);
    variantsForSecond.appendChild(secondObliqueSwings);
    variantsForSecond.appendChild(secondPushUp);

    /* delete button */
    deleteBut.appendChild(deleteButIcon);

    firstApproach.appendChild(arrowForFirst);
    firstApproach.appendChild(variantsForFirst);
    secondApproach.appendChild(arrowForSecond);
    secondApproach.appendChild(variantsForSecond);

    newExercises.appendChild(deleteBut);
    newExercises.appendChild(firstApproach);
    newExercises.appendChild(secondApproach);
    timeExecution.innerHTML = timeContent;
    newExercises.appendChild(timeExecution);
    quantityExecution.innerHTML = quantityContent;
    newExercises.appendChild(quantityExecution);
    container.appendChild(newExercises);
  }

  /* recreate data about network activity */ 
  for (; localStorage.getItem("newsRealTime" + "_" + indexes.newsRealIndex) !== null && localStorage.getItem("net" + "_" + indexes.netIndex) !== null; indexes.newsRealIndex++) {
  	/* create nodes */
  	var container = document.querySelector(".halfInterior-socialNet .approach-container"),
    browsingNews = document.createElement("ul"),
    deleteBut = document.createElement("li"),
    deleteButIcon = document.createTextNode("X"),
    firstApproach = document.createElement("li"),
    first_data_approach = localStorage.getItem("net" + "_" + indexes.netIndex),
    firstApproachArrow = document.createElement("img"),
    variants = document.createElement("ul"),
    firstVariant = document.createElement("li"),
    secondVariant = document.createElement("li"),
    thirdVariant = document.createElement("li"),
    scheduled = document.createElement("li"),
    scheduledContent = localStorage.getItem("newsScheduledTime" + "_" + indexes.newsScheduledIndex),
    real = document.createElement("li"),
    realContent = localStorage.getItem("newsRealTime" + "_" + indexes.newsRealIndex),
    amount = document.createElement("li"),
    amountContent = localStorage.getItem("newsTimeAmount" + "_" + indexes.newsAmountIndex);

    /* assign attributes */
    browsingNews.classList.add("approach", "approach-news");
    deleteBut.classList.add("deleteBut", "deleteBut-smaller", "deleteBut-without-bg");
    deleteBut.addEventListener("click", itemsDeleting);
    firstApproach.setAttribute("data-approach", "net" + "_" + indexes.netIndex);
    firstApproach.classList.add("selectApproach", "selectapproach-socialNet", first_data_approach);
    indexes.netIndex++;
    $(firstApproachArrow).attr({
        "src": "images/arrow_drop_down.png",
        "alt": "arrow drop down menu"
    });
    firstApproachArrow.addEventListener("click", selectApproach);
    variants.setAttribute("class", "variants");
    firstVariant.className = 'echo';
    secondVariant.className = 'facebook';
    thirdVariant.className = 'newsSite';
    $(scheduled).attr({
        "contenteditable": "true",
        "data-approach": "newsScheduledTime" + "_" + indexes.newsScheduledIndex
    });
    scheduled.classList.add("time-quantity", "time-quantity-extraStudy");
    scheduled.addEventListener("blur", saveInStorage);
    $(real).attr({
        "contenteditable": "true",
        "data-approach": "newsRealTime" + "_" + indexes.newsRealIndex
    });
    real.classList.add("time-quantity", "time-quantity-extraStudy");
    real.addEventListener("blur",saveInStorage);
    $(amount).attr({
        "contenteditable": "true",
        "data-approach": "newsTimeAmount" + "_" + indexes.newsAmountIndex
    });
    amount.classList.add("time-quantity", "time-quantity-extraStudy");
    amount.addEventListener("blur", saveInStorage);

    /* appending all nodes */
    variants.appendChild(firstVariant);
    variants.appendChild(secondVariant);
    variants.appendChild(thirdVariant);

    deleteBut.appendChild(deleteButIcon);

    firstApproach.appendChild(firstApproachArrow);
    firstApproach.appendChild(variants);

    browsingNews.appendChild(deleteBut);
    browsingNews.appendChild(firstApproach);
    scheduled.innerHTML = scheduledContent;
    browsingNews.appendChild(scheduled);
    real.innerHTML = realContent;
    browsingNews.appendChild(real);
    amount.innerHTML = amountContent;
    browsingNews.appendChild(amount);
    container.appendChild(browsingNews);
  }

  /*recreating analysis section*/
  for (; localStorage.getItem("analysisPart" + "_" + indexes.analysisPartIndex) !== null; indexes.analysisPartIndex++) {
    var container = document.getElementById("analysis").querySelector(".list-container"),
    analysisContent = localStorage.getItem("analysisPart" + "_" + indexes.analysisPartIndex);
    /* creating nodes */
    analysisItem = document.createElement("li"),
    editAnalysisPart = document.createElement("p"),
    deleteBut = document.createElement("span"),
    deleteButIcon = document.createTextNode("X");

    /* assign attribute */
    analysisItem.classList.add("time-quantity", "time-quantity-analysis");
    $(editAnalysisPart).attr({
        "contenteditable": "true",
        "data-approach": "analysisPart" + "_" + indexes.analysisPartIndex
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

  /*log rectreating*/
  for (; localStorage.getItem("date" + "_" + indexes.dateIndex) !== null && localStorage.getItem("tomatoAmount" + "_" + indexes.tomatoAmountIndex) !== null && localStorage.getItem("strainAmount" + "_" + indexes.strainIndex) !== null && localStorage.getItem("rightAttitude" + "_" + indexes.rightAttitudeIndex) !== null && localStorage.getItem("falseAttitude" + "_" +  indexes.falseAttitudeIndex) !== null && localStorage.getItem("physTotalTime" + "_" + indexes.physTotalTimeIndex) !== null && localStorage.getItem("netTotalTime" + "_" + indexes.netTotalTimeIndex) !== null; indexes.dateIndex++, indexes.tomatoAmountIndex++, indexes.strainIndex++, indexes.rightAttitudeIndex++, indexes.falseAttitudeIndex++, indexes.physTotalTimeIndex++) {
  	var resultsTable = document.querySelector(".results"),
  	/* creating nodes */
    tableRow = document.createElement("tr"),
    date = document.createElement("td"),
    dateContent = localStorage.getItem("date" + "_" + indexes.dateIndex),
    tomatoAmount = document.createElement("td"),
    tomatoAmountContent = localStorage.getItem("tomatoAmount" + "_" + indexes.tomatoAmountIndex),
    strainAmount = document.createElement("td"),
    strainAmountContent = localStorage.getItem("strainAmount" + "_" + indexes.strainIndex),
    rightAttitude = document.createElement("td"),
    rightAttitudeContent = localStorage.getItem("rightAttitude" + "_" + indexes.rightAttitudeIndex),
    falseAttitude = document.createElement("td"),
    falseAttitudeContent = localStorage.getItem("falseAttitude" + "_" +  indexes.falseAttitudeIndex),
    physTotalTime = document.createElement("td"),
    physTotalTimeContent = localStorage.getItem("physTotalTime" + "_" + indexes.physTotalTimeIndex),
    netTotalTime = document.createElement("td"),
    netTotalTimeContent = localStorage.getItem("netTotalTime" + "_" + indexes.netTotalTimeIndex),
    logDeleteBut = document.createElement("td");
    logDeleteBut.innerHTML = "X";

    /* appending attributes */
    $(date).attr({
        "contenteditable": "true",
        "data-approach": "date" + "_" + indexes.dateIndex,
        "data-label": "Дата"
    });
    date.addEventListener("blur", saveInStorage);
    $(tomatoAmount).attr({
        "contenteditable": "true",
        "data-approach": "tomatoAmount" + "_" + indexes.tomatoAmountIndex,
        "data-label": "Колличество помидоров"
    });
    tomatoAmount.addEventListener("blur", saveInStorage);
    $(strainAmount).attr({
        "contenteditable": "true",
        "data-approach": "strainAmount" + "_" + indexes.strainIndex,
        "data-label": "Количество напряжений"
    });
    strainAmount.addEventListener("blur", saveInStorage);
    $(rightAttitude).attr({
        "contenteditable": "true",
        "data-approach": "rightAttitude" + "_" + indexes.rightAttitudeIndex,
        "data-label": "Количество верных отношений"
    });
    rightAttitude.addEventListener("blur", saveInStorage);
    $(falseAttitude).attr({
        "contenteditable": "true",
      "data-approach": "falseAttitude" + "_" + indexes.falseAttitudeIndex,
      "data-label": "Количество не верных отношений"
    });
    falseAttitude.addEventListener("blur", saveInStorage);
    $(physTotalTime).attr({
        "contenteditable": "true",
        "data-approach": "physTotalTime" + "_" + indexes.physTotalTimeIndex,
        "data-label": "Общее время физ. упражнений"
    });
    physTotalTime.addEventListener("blur", saveInStorage);
    $(netTotalTime).attr({
        "contenteditable": "true",
        "data-approach": "netTotalTime" + "_" + indexes.netTotalTimeIndex,
        "data-label": "Общее время в соц. сетях"
    });
    netTotalTime.addEventListener("blur", saveInStorage);
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
    physTotalTime.innerHTML = physTotalTimeContent;
    tableRow.appendChild(physTotalTime);
    netTotalTime.innerHTML = netTotalTimeContent;
    tableRow.appendChild(netTotalTime);
    tableRow.appendChild(logDeleteBut);

    resultsTable.appendChild(tableRow);
  }
}) ();

                   /* public functions */

/* creating event handler for menu */
function createMenuState(event) {
	var menuContainer = event.target.nextSibling;
  if (menuContainer.classList.contains("is-menuContainer-active")) {
    menuContainer.classList.remove("is-menuContainer-active");
  } else {
    	menuContainer.classList.add("is-menuContainer-active");
  }
}

/* listening event for select approach and saving it in localStorage  */
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
        approach.classList.replace("none", curActivity),
        cur_key = approach.getAttribute('data-approach');
        if (cur_key === 'phys') {
					approach.setAttribute('data-approach', cur_key + "_" + indexes.physIndex);
					localStorage.setItem(cur_key + "_" + indexes.physIndex, curActivity);
					indexes.physIndex++;
        } else {
					approach.setAttribute('data-approach', cur_key + "_" + indexes.netIndex);
					localStorage.setItem(cur_key + "_" + indexes.netIndex, curActivity);
					indexes.netIndex++;
				}
      }
	}


/* saving in local storage */
function saveInStorage(event) {
	var key = event.target.getAttribute("data-approach"),
	content = event.target.innerHTML;
	localStorage.setItem(key, content);
}

/* to remove unnecessary cases */
function itemsDeleting(event, removedElement) {
  if (event.type === "click") {
    var removedElement = event.target.parentElement;
  }
	editElements = removedElement.querySelectorAll("[data-approach]");
	editElements.forEach(function(item) {
    localStorage.removeItem(item.getAttribute("data-approach"));
    // Due to removal problems with planned and real
    item.remove();
  });
	removedElement.remove();
}

/* function to mark how many pomidoro and how good the task was executed */
function busExecutParameters(event) {
  var icon_src = event.target.getAttribute("src"),
  icon_alt = event.target.getAttribute("alt"),
  panel_container = event.target.parentElement.parentElement,
  panel = panel_container.querySelector(".service-icons-panel"),
  panelStorageKey = panel.getAttribute("data-approach");
  img = document.createElement("img");
  $(img).attr({
   "src": icon_src,
   "alt": icon_alt
  });
  img.className = "execution_icon";
  panel.appendChild(img);

  localStorage.setItem(panelStorageKey, panel.innerHTML);
}

// code for dragging

(function () {
  const allcases_zone = document.querySelector(".list-container"),
  curcases_zone = document.querySelector(".businesses");
  allcases_zone.addEventListener("dragover", overDrop);
  allcases_zone.addEventListener("drop", overDrop);
  curcases_zone.addEventListener("dragover", overDrop);
  curcases_zone.addEventListener("drop", overDrop);
})();

function dragStart(event) {
  // put all contenteditable elements data-approach values in array
  const editelement = this.querySelector("[data-approach]"),
  editelement_key = editelement.getAttribute("data-approach"),
  content = editelement.innerHTML,
  editelement_data = {};
  editelement_data.key = editelement_key;
  editelement_data.content = content;

  // convert object to string and put it in DataTransfer
  event.dataTransfer.setData("text", JSON.stringify(editelement_data));
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

/* CMACSS and javascript */

/* TODO  Why sometimes in delete function does not get all data-approach values */
