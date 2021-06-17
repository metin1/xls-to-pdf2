import Toastify from "toastify-js";

export const toast = (
  message,
  type = "error",
  glass = false,
  dark = false,
  duration = 3000
) => {
  let color;
  let className;
  switch (type) {
    case "info":
      color = glass
        ? "var(--infoGlass-color)"
        : dark
        ? "var(--info-color)"
        : "var(--info-color)";
      break;
    case "success":
      color = glass
        ? "var(--successGlass-color)"
        : dark
        ? "var(--success-color)"
        : "var(--success-color)";
      break;
    case "error":
      color = glass
        ? "var(--errorGlass-color)"
        : dark
        ? "var(--error-color)"
        : "var(--error-color)";
      break;
    case "danger":
      color = "linear-gradient(to right, #ed213a, #93291e)";
      break;
    case "warning":
      color = glass
        ? "var(--warningGlass-color)"
        : dark
        ? "var(--warning-color)"
        : "var(--warning-color)";
      break;
    default:
      color = "#e7f4fd";
      break;
  }

  Toastify({
    text: message,
    duration,
    avatar: `/icons/${type}.svg`,
    newWindow: true,
    className: "toastify-glass",
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: color,
    stopOnFocus: true,
    onClick: function () {},
  }).showToast();
};
