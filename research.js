// Data Object (You add new entries here after checking your Google Sheet)
const paperData = {
    paper1: {
        title: "Impact of Urban Green Spaces",
        leader: "Jane Doe",
        team: "John S., Mary P., Alex L.",
        desc: "This research explores how city parks affect the mental health of teenagers in metropolitan areas. Over 6 months, we collected data from...",
        link: "https://drive.google.com/your-link-here",
        img: "assets/img/flyer1.jpg"
    }
};

function openModal(paperId) {
    const modal = document.getElementById("paperModal");
    const title = document.getElementById("modalTitle");
    
    // Example logic - you can expand this with a data object
    if (paperId === 'paper1') {
        title.innerText = "Impact of Urban Green Spaces";
        document.getElementById("modalLead").innerText = "Lead: Jane Doe";
        document.getElementById("modalTeam").innerText = "Team: John S., Mary P.";
        document.getElementById("modalDescription").innerText = "This study examines how accessible green infrastructure improves respiratory health in urban youth populations...";
        document.getElementById("modalFlyer").style.backgroundImage = "url('assets/img/flyer1.jpg')";
        document.getElementById("modalLink").href = "link-to-your-pdf.pdf";
    }

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevents background scrolling
}

function closeModal() {
    document.getElementById("paperModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Close if user clicks outside the white box
window.onclick = function(event) {
    const modal = document.getElementById("paperModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Close if user clicks outside the box
window.onclick = function(event) {
    if (event.target == document.getElementById('paperModal')) {
        closeModal();
    }
}