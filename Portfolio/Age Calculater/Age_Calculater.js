document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();
  
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Your age is ${age} years.`;
  
  // Trigger animation
  resultDiv.classList.remove('hidden');
  resultDiv.classList.add('visible');
});
