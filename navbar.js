fetch("navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar-container").innerHTML = html;

    // Reinitialize event listeners after navbar loads
    document.getElementById("openmenu").addEventListener("click", function () {
      document.querySelector(".nav-menu").classList.add("active");
    });

    document.getElementById("closemenu").addEventListener("click", function () {
      document.querySelector(".nav-menu").classList.remove("active");
    });
  })
  .catch((error) => console.error("Error loading navbar:", error));
// </script>
