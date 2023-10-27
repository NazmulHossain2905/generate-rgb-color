const initialApp = () => {
  const RGBHeading = document.querySelector("#RGBHeading");

  const RGBColorObj = {};

  const showRGBColor = () => {
    const { red, green, blue, alpha } = RGBColorObj;

    const generateRGBColor =
      "alpha" in RGBColorObj
        ? `rgb(${red}, ${green}, ${blue}, ${alpha})`
        : `rgb(${red}, ${green}, ${blue})`;

    RGBHeading.style.backgroundColor = generateRGBColor;
    RGBHeading.textContent = generateRGBColor + ";";
    determineTextColor(generateRGBColor);
  };

  const renderScreen = () => {
    const controllerParents = document.querySelectorAll(".controllers > div");

    controllerParents.forEach((controller, index) => {
      const inputRange = controller.querySelector(`input[type="range"]`);
      const inputRangeValue = controller.querySelector("p:last-child");

      inputRangeValue.textContent = inputRange.value;
      RGBColorObj[inputRange.name] = inputRange.value;
      showRGBColor();

      inputRange.addEventListener("input", (e) => {
        const target = e.target;

        inputRangeValue.textContent = target.value;
        RGBColorObj[target.name] = target.value;
        showRGBColor();
      });
    });
  };

  // ===========================
  /*
    To dynamically change the text color of an <h1> element based on the background color, you can use JavaScript. 
    You'll need to determine the background color of the <h1> element and set the text color accordingly. 
    Here's a simple example of how you can achieve this using JavaScript:
  */
  const computedStyles = getComputedStyle(RGBHeading);
  const backgroundColor = computedStyles.backgroundColor;

  function determineTextColor(backgroundColor) {
    const rgb = backgroundColor.match(/\d+/g);

    const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];

    if (RGBColorObj.alpha < 0.3 && RGBColorObj["alpha"]) {
      RGBHeading.style.color = "black";
    } else {
      if (luminance > 128) {
        RGBHeading.style.color = "black";
      } else {
        RGBHeading.style.color = "white";
      }
    }
  }

  determineTextColor(backgroundColor);
  // ===========================

  renderScreen();
};

window.onload = initialApp;
