(function () {
  return {
    result:
      document.querySelector('.list-products') !== null ||
      (document.querySelector('.box__content') !== null &&
      document.querySelector('.box__content').innerText !==
        'Oops! Something has gone wrong.\nReturn To Home Page'),
    timestamp: new Date().getTime()
  };
})();
