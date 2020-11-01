hideComponents();

$(document).ready(function () {
  AOS.init({ easing: "ease-in-out-sine", once: true });
});

showSelected(stageNameForId(0));
setTimeout(function () {
  setup("." + stageNameForId(0) + "-svg");
}, 1000);

function stageNameForId(id) {
  if (id === 0) {
    return "little";
  } else if (id === 1) {
    return "pacwithpods";
  } else if (id === 2) {
    return "pacwithoutpods";
  } else if (id === 3) {
    return "prom";
  } else if (id === 4) {
    return "west";
  }
}

function hideComponents() {
  $(".componentes-to-hide").hide();
}

function showSelected(url) {
  $("." + url).show();
}

function handleScrollOnMobile() {
  if (screen.width <= 768) {
    document.documentElement.style.overflow = "hidden";
    returnedFunction();
  }
}
var returnedFunction = debounce(function () {
  document.documentElement.style.overflow = "auto";
}, 1000);

function setup(url) {
  $("#zoom-in").on("click", (ev) => {
    ev.preventDefault();
    panZoom.zoomIn();
  });
  $("#zoom-out").on("click", (ev) => {
    ev.preventDefault();
    panZoom.zoomOut();
  });
  $("#reset").on("click", (ev) => {
    ev.preventDefault();
    panZoom.resetZoom();
    panZoom.fit();
    panZoom.center();
  });

  var svgElement = document.querySelector(url);
  var panZoom = svgPanZoom(svgElement, {
    zoomEnabled: true,
    zoomScaleSensitivity: 0.2,
    controlIconsEnabled: false,
    dblClickZoomEnabled: false,
    mouseWheelZoomEnabled: false,
    fit: true,
    contain: false,
    center: true,
    panEnabled: true,
    preventMouseEventsDefault: false,
    beforePan: function () {
      handleScrollOnMobile();
    },
    onPan: function () {
      handleScrollOnMobile();
    },
  });
}
