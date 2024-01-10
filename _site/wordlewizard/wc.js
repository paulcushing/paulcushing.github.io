const paginator = new (function Paginate() {
  const pageSize = 10;
  const maxPages = 3;
  let results = [];
  let totalResults = 0;
  let totalNumOfPages = 0;
  let currentPage = 0;

  this.setUpPaginate = function (values) {
    results = values.sort();
    totalResults = results.length;
    totalNumOfPages = countTotalPages();
    currentPage = 1;

    changePage();
  };

  this.prevPage = function () {
    if (currentPage > 1) {
      currentPage--;
      changePage();
    }
  };

  this.nextPage = function () {
    if (currentPage < totalNumOfPages) {
      currentPage++;
      changePage();
    }
  };

  this.pageClick = function (page) {
    if (currentPage === page) return;

    currentPage = page;
    changePage();
  };

  const countTotalPages = function () {
    let count = 0;
    for (let i = 0; i < totalResults; i++) if (i % pageSize === 0) count++;

    return count;
  };

  const changePage = function () {
    setPageBtns();
    showPageResults();
  };

  const setPageBtns = function () {
    if (totalNumOfPages === 0 || totalResults <= pageSize) {
      document.getElementById("pageButtons").innerHTML = "";
      return;
    }

    const defaultClass = "block w-full px-4 py-2 text-gray-500";
    const activeClass = "block w-full px-4 py-2 text-black";
    const hiddenClass = "block w-full px-4 py-2 invisible";

    const pagesToAdd = [];
    let pageToShow;
    // if currentPage button can be placed in the middle
    if (
      currentPage > maxPages + 0 &&
      currentPage < totalNumOfPages - maxPages &&
      totalNumOfPages > maxPages * 2
    ) {
      for (
        pageToShow = currentPage - 1;
        pageToShow <= currentPage + 1;
        pageToShow++
      )
        pagesToAdd.push(pageToShow);
    } else if (currentPage <= maxPages) {
      const startingPage =
        maxPages < totalNumOfPages ? maxPages : totalNumOfPages;
      for (pageToShow = startingPage; pageToShow >= 1; pageToShow--)
        pagesToAdd.unshift(pageToShow);
    } else {
      // if max pages away from total number of pages (if at the end)
      for (
        pageToShow = totalNumOfPages - maxPages + 1;
        pageToShow <= totalNumOfPages;
        pageToShow++
      )
        pagesToAdd.push(pageToShow);
    }

    const buttons = [
      {
        onClick: "paginator.prevPage();",
        class: currentPage === 1 ? hiddenClass : activeClass,
        disable: `${currentPage === 1 ? "disabled" : ""}`,
        value: "Prev",
      },
    ];

    pagesToAdd.forEach((page) => {
      buttons.push({
        onClick: `paginator.pageClick(${page});`,
        class: page === currentPage ? activeClass : defaultClass,
        disable: "",
        value: `${page}`,
      });
    });

    buttons.push({
      onClick: "paginator.nextPage();",
      class: currentPage === totalNumOfPages ? hiddenClass : activeClass,
      disable: `${currentPage === totalNumOfPages ? "disabled" : ""}`,
      value: "Next",
    });

    const pageButtons = buttons
      .map(
        (button) =>
          `<div>
                <button onclick=${button.onClick} 
                    class="${button.class}"
                    ${button.disable}>
                    ${button.value}
                </button>
            </div>`
      )
      .join("");

    document.getElementById("pageButtons").innerHTML = pageButtons;
  };

  const showPageResults = function () {
    const startIndex = (currentPage - 1) * pageSize;
    const words = results.slice(startIndex, startIndex + pageSize);

    let resultList = "";
    words.forEach((word) => {
      resultList += `<li class="text-xl">${word}</li>`;
    });

    document.getElementById("cheatResultList").innerHTML =
      "<ul>" + resultList + "</ul>";
  };
})();

function cheat() {
  /* Include wordlist */
  const wordlist = words.words;

  const guessLetters = [
    document.getElementById("letter1").value !== ""
      ? document.getElementById("letter1").value.toLowerCase()
      : null,
    document.getElementById("letter2").value !== ""
      ? document.getElementById("letter2").value.toLowerCase()
      : null,
    document.getElementById("letter3").value !== ""
      ? document.getElementById("letter3").value.toLowerCase()
      : null,
    document.getElementById("letter4").value !== ""
      ? document.getElementById("letter4").value.toLowerCase()
      : null,
    document.getElementById("letter5").value !== ""
      ? document.getElementById("letter5").value.toLowerCase()
      : null,
  ];
  const toExclude = document
    .getElementById("toExclude")
    .value.toLowerCase()
    .split("");
  const toInclude = document
    .getElementById("toInclude")
    .value.toLowerCase()
    .split("");

  let numberGuesses = 0;
  guessLetters.forEach((letter) => {
    if (letter !== null) {
      numberGuesses++;
    }
  });

  let numberWordsFound = 0;
  let wordsFound = [];

  wordlist.forEach((word) => {
    // If the word has any of the excluded letters, skip it
    if (word.split("").some((r) => toExclude.includes(r))) {
      return;
    }

    // If the word is missing any of the included letters, skip it
    let missingRequiredLetters = false;
    toInclude.forEach((letter) => {
      if (!word.split("").includes(letter)) {
        missingRequiredLetters = true;
      }
    });
    if (missingRequiredLetters) {
      return;
    }

    let matches = 0;
    word.split("").forEach((wordLetter, id) => {
      if (wordLetter === guessLetters[id]) {
        matches++;
      }
    });

    if (matches === numberGuesses) {
      wordsFound.push(word);
      numberWordsFound++;
    }
  });

  document.getElementById("cheatResultText").innerHTML =
    "The wizard found " + numberWordsFound + " words!";

  paginator.setUpPaginate(wordsFound);
}

function reset() {
  document.getElementById("cheatResultText").innerHTML = "";
  document.getElementById("cheatResultList").innerHTML = "";
  document.getElementById("letter1").value = "";
  document.getElementById("letter2").value = "";
  document.getElementById("letter3").value = "";
  document.getElementById("letter4").value = "";
  document.getElementById("letter5").value = "";
  document.getElementById("toExclude").value = "";
  document.getElementById("toInclude").value = "";
  paginator.setUpPaginate([]);
}
