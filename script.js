let lastCount = 0;

function vowelCounter() {
  let userWord = document.getElementById("input").value;
  let currentVowels = 0;
  let vowels = "aeiouAEIOU";
  for (let letters of userWord) {
    if (vowels.includes(letters)) currentVowels++;
  }
  
  const cVowels = document.getElementById("currentVowels");
  cVowels.innerText = "Vowels: " + currentVowels;

  if (currentVowels > lastCount) {
    cVowels.classList.remove("pop");
    void cVowels.offsetWidth; 
    cVowels.classList.add("pop");
  }

  lastCount = currentVowels;
}
