document.querySelectorAll('.questions').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.parentElement.nextElementSibling;
      const icon = question.nextElementSibling;
  
      if (answer.style.display === 'none') {
        answer.style.display = 'block';
        icon.src = './faq-accordion-main/assets/images/icon-minus.svg';
      } else {
        answer.style.display = 'none';
        icon.src = './faq-accordion-main/assets/images/icon-plus.svg'; 
      }
    });
  });
  