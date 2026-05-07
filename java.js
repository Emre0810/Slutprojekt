    function säkraInput(input) {
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}










    if (quizBtn) {
        quizBtn.addEventListener("click", checkQuiz);
    }



function checkQuiz() {
    let score = 0;
  

 const q1 = (document.getElementById("q1").value.trim()); // fråga 1
 const q2 = säkraInput(document.getElementById("q2").value.trim());// fråga 2
 const q3 = säkraInput(document.getElementById("q3").value.trim()); // fråga 3
 const q4 = säkraInput(document.getElementById("q4").value.trim()); // fråga 4
 const q5 = säkraInput(document.getElementById("q5").value.trim()); // fråga 5


    if (q1 === "5x") score++;
    if (q2 === "12") score++;
    if (q3 === "7") score++;
    if (q4 === "100") score++;
    if (q5 === "2x") score++;

  const result = document.getElementById("result");
    result.textContent = "Du fick " + score + " av 5 poäng!";



    if (score === 5) {
        result.textContent += " Grymt jobbat!";
    
}

  else if (score >= 3) {
        result.textContent += " Bra!";
  }
 else {
result.textContent += " träna mer!";

 }

}