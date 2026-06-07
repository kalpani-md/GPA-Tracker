const canvas = document.getElementById("gpa-meter");
const ctx = canvas.getContext("2d");

const cx = canvas.width/2;
const cy = canvas.height-40;
const radius = 100;

const startAngle = Math.PI;
const endAngle = 2*Math.PI;
const totalAngle = endAngle-startAngle;

function drawGpameter(endgpa){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gpa = Math.max(0, Math.min(4, parseFloat(endgpa) || 0));
    const currentAngle = startAngle + (gpa / 4) * totalAngle;

    //background arc
    ctx.lineWidth = 8;
    ctx.lineCap = "round";    
    ctx.strokeStyle = "#444";
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.stroke();

    //progress arc
    ctx.strokeStyle = "#3a3089";
    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, currentAngle);
    ctx.stroke();

    //ticks+labels
    const maxTicks = 4; 
    ctx.fillStyle = "#444";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i <= maxTicks; i++) {
        // Calculate placement angle for ticks
        const factor = i / maxTicks;
        const angle = startAngle + factor * totalAngle;
        
        // Get trigonometric offsets
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        // Draw Tick lines
        const tickStartRadius = radius - 10;
        const tickEndRadius = radius;

        ctx.strokeStyle = '#444';
        ctx.lineWidth = 3; 
        
        ctx.beginPath();
        ctx.moveTo(cx + cos * tickStartRadius, cy + sin * tickStartRadius);
        ctx.lineTo(cx + cos * tickEndRadius, cy + sin * tickEndRadius);
        ctx.stroke();        
    }
    //gpa value
    ctx.fillStyle = '#444';
    ctx.font = "bold 25px Arial";
    ctx.fillText(gpa.toFixed(2), cx, cy-35);

    //needle
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(currentAngle);

    ctx.strokeStyle = '#e74c3c'; // Neon orange/red
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(-15, 0); // Slight counter-weight overhang past center hub
    ctx.lineTo(radius - 35, 0); // Edge of needle points close to numbers
    ctx.stroke();
    
    ctx.restore();

    //center hub
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(cx, cy, 10, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.fillStyle = '#444';
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
    ctx.fill();
}
function updateMeterFromDOM(){
    const gpa = document.getElementById("FinalGPA").textContent;
    drawGpameter(gpa);
}

document.addEventListener("DOMContentLoaded", () => {
    updateMeterFromDOM();
    const finalgpa = document.getElementById("FinalGPA"); 
    if (finalgpa) {
        const observer = new MutationObserver(() =>{
            updateMeterFromDOM();
        });
        observer.observe(finalgpa, {
            characterData: true,
            childList: true,
            subtree: true
        });
    }
    else{
        console.error("MutationObserver failed: Could not find element #FinalGPA");
    }
});
