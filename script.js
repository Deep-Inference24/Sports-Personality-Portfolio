// Database of Event Details
const eventData = {
    '2016': {
        title: "2016 World U20 Record",
        venue: "Bydgoszcz, Poland",
        story: "Neeraj became the first Indian athlete to set a world record. His throw of 86.48m stunned the world and announced his arrival on the global stage.",
        stats: "Wind: 0.2m/s | Rank: 1st"
    },
    '2021': {
        title: "2021 Tokyo Olympics Gold",
        venue: "Olympic Stadium, Tokyo",
        story: "With a second-round throw of 87.58m, Neeraj ended India's 100-year wait for a track and field medal. It was the first Gold for India since 2008.",
        stats: "Group: A | Attempt: 2nd"
    },
    '2023': {
        title: "2023 World Champion",
        venue: "Budapest, Hungary",
        story: "Neeraj completed the set of major titles by winning Gold at the World Championships. He is now the reigning Olympic and World Champion.",
        stats: "Distance: 88.17m | Status: History Made"
    }
};

function openModal(year) {
    const data = eventData[year];
    const modal = document.getElementById('detailsModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = `
        <h2 style="color:#C5A059">${data.title}</h2>
        <p style="color:#888; margin-bottom: 15px;">${data.venue}</p>
        <p style="line-height:1.6; margin-bottom:20px;">${data.story}</p>
        <div style="background:#222; padding:15px; border-radius:5px;">
            <strong>Technical Specs:</strong> ${data.stats}
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) closeModal();
}
