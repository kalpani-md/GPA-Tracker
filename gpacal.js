"use strict";
function setupYear(selectYear, tableId, totalCredits, YearGPVId, YearGPAPointsId, yearGPAId, passingCreditsId) {
    document.querySelectorAll(selectYear).forEach(select => {
        select.onchange = function () {
            /*changes in year tables*/
            const row = this.closest("tr");
            const credits = Number(row.querySelector(".credits").textContent);
            const gpv = Number(this.value);
            row.querySelector(".gpv").textContent = gpv.toFixed(2);
            row.querySelector(".gpaPoints").textContent = (gpv * credits).toFixed(2);

            if(gpv<1 && credits!=0){
                row.querySelector(".gpv").style.color = "#f00";
            }
            else{
                row.querySelector(".gpv").style.color = "#000";
            }

            /*changes in summary table - year rows*/
            let yearGPV = 0;
            let yearGPAPoints = 0;
            document.querySelectorAll(`#${tableId} .gpv`).forEach(cell => {
                yearGPV += Number(cell.textContent);
            });
            document.querySelectorAll(`#${tableId} .gpaPoints`).forEach(cell => {
                yearGPAPoints += Number(cell.textContent);
            });
            const yearGPA = yearGPAPoints / totalCredits;

            document.getElementById(YearGPVId).textContent = yearGPV.toFixed(2);
            document.getElementById(YearGPAPointsId).textContent = yearGPAPoints.toFixed(2);
            document.getElementById(yearGPAId).textContent = yearGPA.toFixed(2);
            
            document.getElementById(yearGPAId).style.color = yearGPA < 2 ? "#f00" : "#000";
            
            let totalPassingCredits = 0;
            document.querySelectorAll(`#${tableId} tbody tr`).forEach(tableRow => {
                const rowCredits = Number(tableRow.querySelector(".credits").textContent);
                const rowGpv = Number(tableRow.querySelector(".gpv").textContent);
                if(rowGpv>=2.00){
                    totalPassingCredits+=rowCredits;                
                }
            });
            document.getElementById(passingCreditsId).textContent = totalPassingCredits;
            document.getElementById(passingCreditsId).style.color = totalPassingCredits < 20 ? "#f00" : "#000";

            /*final row calculation*/
            const Y1Credits = Number(document.getElementById("Y1Credits").textContent);
            const Y2Credits = Number(document.getElementById("Y2Credits").textContent);
            const Y3Credits = Number(document.getElementById("Y3Credits").textContent);

            const YearOneGPV = Number(document.getElementById("YearOneGPV").textContent);
            const YearTwoGPV = Number(document.getElementById("YearTwoGPV").textContent);
            const YearThreeGPV = Number(document.getElementById("YearThreeGPV").textContent);
            
            const YearOneGPAPoints = Number(document.getElementById("YearOneGPAPoints").textContent);
            const YearTwoGPAPoints = Number(document.getElementById("YearTwoGPAPoints").textContent);
            const YearThreeGPAPoints = Number(document.getElementById("YearThreeGPAPoints").textContent);

            const FinalGPV = YearOneGPV+YearTwoGPV+YearThreeGPV;
            const FinalGPAPoints = YearOneGPAPoints+YearTwoGPAPoints+YearThreeGPAPoints;
            const FinalCredits = Y1Credits+Y2Credits+Y3Credits;
            const FinalGPA = FinalGPAPoints/FinalCredits;
            
            document.getElementById("FinalGPV").textContent = FinalGPV.toFixed(2);
            document.getElementById("FinalGPAPoints").textContent = FinalGPAPoints.toFixed(2);
            document.getElementById("FinalGPA").textContent = FinalGPA.toFixed(2);

            if(FinalGPA>=3.7){
                document.getElementById("message").textContent = "First Class";
            }
            else if(FinalGPA>=3.3){
                document.getElementById("message").textContent = "Second Class Upper Division";
            }
            else if(FinalGPA>=3.0){
                document.getElementById("message").textContent = "Second Class Lower Division";
            }
            else{
                document.getElementById("message").textContent = "Try Harder!";
            }
             
        };

    });

}
setupYear(
    ".year1",
    "YearOneTable",
    30,
    "YearOneGPV",
    "YearOneGPAPoints",
    "YearOneGPA",
    "Y1PassingCredits"
);
setupYear(
    ".year2",
    "YearTwoTable",
    30,
    "YearTwoGPV",
    "YearTwoGPAPoints",
    "YearTwoGPA",
    "Y2PassingCredits"
);
setupYear(
    ".year3",
    "YearThreeTable",
    33,
    "YearThreeGPV",
    "YearThreeGPAPoints",
    "YearThreeGPA",
    "Y3PassingCredits"
);

