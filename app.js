const initialApp = () => {
  const RGBHeading = document.querySelector("#RGBHeading");

  const RGBColorObj = {};

  const showRGBColor = () => {
    const { red, green, blue } = RGBColorObj;
    const generateRGBColor = `rgb(${red}, ${green}, ${blue})`;
    RGBHeading.style.backgroundColor = generateRGBColor;
    RGBHeading.textContent = generateRGBColor;
  };

  const renderScreen = () => {
    const controllerParents = document.querySelectorAll(".controllers > div");

    controllerParents.forEach((controller, index) => {
      const inputRange = controller.querySelector(`input[type="range"]`);
      const inputRangeValue = controller.querySelector("p:last-child");

      const setRGBColor = (key, value) => {
        inputRangeValue.textContent = value;
        RGBColorObj[key] = value;
      };

      setRGBColor(inputRange.name, inputRange.value);
      showRGBColor();

      inputRange.addEventListener("input", (e) => {
        const target = e.target;
        setRGBColor(target.name, target.value);
        showRGBColor();
      });
    });
  };

  renderScreen();
};

window.onload = initialApp;
