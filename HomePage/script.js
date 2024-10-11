// JavaScript Document
function toggleMenu() {
	var sidebar = document.getElementById("sidebar");
	if (sidebar.style.display === "block") {
		sidebar.style.display = "none";
	} else {
		sidebar.style.display = "block";
	}
}

function handleResize() {
            var sidebar = document.getElementById("sidebar");
            if (window.matchMedia("(min-width: 769px)").matches) {
                sidebar.style.display = "grid";
            } else {
                sidebar.style.display = "none";
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();